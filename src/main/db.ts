import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'
import { app } from 'electron'
import { parseExcel } from './parser'

// ─── Prisma singleton ────────────────────────────────────────────────────────
// In dev we use a global singleton to survive hot-reloads.
// In production we instantiate once and reuse.
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined
}

const prisma: PrismaClient =
  global.__prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error']
  })

if (process.env.NODE_ENV !== 'production') {
  global.__prisma = prisma
}

// ─── Config helpers ──────────────────────────────────────────────────────────

/** Returns the user-data directory (persists across app updates). */
function getUserDataPath(): string {
  try {
    return app.getPath('userData')
  } catch {
    // Fallback for non-Electron contexts (tests, etc.)
    return process.cwd()
  }
}

function getConfigPath(): string {
  return path.join(getUserDataPath(), 'company_config.json')
}

const DEFAULT_CONFIG = {
  name: 'Pedemonte Materiales',
  address: '',
  phone: '',
  email: '',
  cuit: ''
}

// ─── DB layer ────────────────────────────────────────────────────────────────

export const db = {
  // ── Company Config ─────────────────────────────────────────────────────────

  getCompanyConfig: (): typeof DEFAULT_CONFIG => {
    const configPath = getConfigPath()

    // Migrate old config from cwd if it exists and user-data one doesn't
    const legacyPath = path.join(process.cwd(), 'company_config.json')
    if (!fs.existsSync(configPath) && fs.existsSync(legacyPath)) {
      try {
        fs.copyFileSync(legacyPath, configPath)
      } catch {
        // Non-fatal — we just use defaults or legacy
      }
    }

    if (fs.existsSync(configPath)) {
      try {
        const raw = fs.readFileSync(configPath, 'utf8')
        return { ...DEFAULT_CONFIG, ...JSON.parse(raw) }
      } catch {
        console.error('[config] Failed to parse company_config.json — using defaults')
      }
    }

    return { ...DEFAULT_CONFIG }
  },

  saveCompanyConfig: (data: typeof DEFAULT_CONFIG): boolean => {
    try {
      const configPath = getConfigPath()
      fs.writeFileSync(configPath, JSON.stringify(data, null, 2), 'utf8')
      return true
    } catch (err) {
      console.error('[config] Failed to save company_config.json:', err)
      return false
    }
  },

  // ── Stats (Dashboard) ──────────────────────────────────────────────────────

  getStats: async () => {
    const [clientCount, workCount, productCount, payments, stockpiles, recentMovements] =
      await Promise.all([
        prisma.client.count({ where: { active: true } }),
        prisma.work.count(),
        prisma.product.count({ where: { active: true } }),
        prisma.movement.findMany({
          where: { type: 'PAYMENT' },
          select: { amount: true }
        }),
        prisma.stockpile.findMany({
          select: { quantity: true, price: true }
        }),
        prisma.movement.findMany({
          take: 10,
          orderBy: { date: 'desc' },
          include: {
            work: { include: { client: { select: { name: true, lastName: true } } } },
            items: { include: { product: { select: { description: true } } } }
          }
        })
      ])

    const totalPaid = payments.reduce((acc, m) => acc + (m.amount ?? 0), 0)
    const totalStockpiled = stockpiles.reduce((acc, s) => acc + s.quantity * s.price, 0)
    const totalBalance = totalPaid - totalStockpiled

    return {
      totalClients: clientCount,
      totalWorks: workCount,
      totalProducts: productCount,
      totalBalance,
      recentMovements: recentMovements.map((m) => ({
        id: m.id,
        type: m.type as 'PAYMENT' | 'DELIVERY' | 'ADJUSTMENT',
        date: m.date.toISOString(),
        clientName: `${m.work.client.name} ${m.work.client.lastName ?? ''}`.trim(),
        workName: m.work.name,
        amount: m.amount,
        description:
          m.type === 'PAYMENT'
            ? `Pago: $${m.amount?.toLocaleString('es-AR')}`
            : m.items.map((i) => `${i.product.description} x${i.quantity}`).join(', ')
      }))
    }
  },

  // ── Clients ────────────────────────────────────────────────────────────────

  /** Slim list — only what the client list card needs. No deep includes. */
  getClients: () =>
    prisma.client.findMany({
      select: {
        id: true,
        name: true,
        lastName: true,
        dni: true,
        phone: true,
        active: true,
        _count: { select: { works: true } }
      },
      orderBy: { lastName: 'asc' }
    }),

  /** Full client with works, stockpiles, and movements (for detail view). */
  getClient: (id: number) =>
    prisma.client.findUnique({
      where: { id },
      include: {
        works: {
          include: {
            client: true,
            movements: {
              include: {
                items: { include: { product: true } },
                withdrawer: true
              },
              orderBy: { date: 'desc' }
            },
            stockpiles: {
              include: { product: true },
              orderBy: { date: 'desc' }
            }
          }
        }
      }
    }),

  createClient: (data: {
    name: string
    lastName?: string
    phone?: string
    dni?: string
    observations?: string
  }) => prisma.client.create({ data }),

  updateClient: (
    id: number,
    data: Partial<{
      name: string
      lastName: string
      phone: string
      dni: string
      observations: string
      active: boolean
    }>
  ) => prisma.client.update({ where: { id }, data }),

  deleteClient: async (id: number) => {
    const client = await prisma.client.findUnique({
      where: { id },
      select: { _count: { select: { works: true } } }
    })

    if (client?._count.works === 0) {
      return prisma.client.delete({ where: { id } })
    }
    return prisma.client.update({ where: { id }, data: { active: false } })
  },

  exportClientHistory: async (id: number) =>
    prisma.client.findUnique({
      where: { id },
      include: {
        works: {
          include: {
            stockpiles: { include: { product: true } },
            movements: {
              include: {
                items: { include: { product: true } },
                withdrawer: true
              },
              orderBy: { date: 'desc' }
            }
          }
        }
      }
    }),

  // ── Works ──────────────────────────────────────────────────────────────────

  createWork: (data: { name: string; address?: string; clientId: number; observations?: string }) =>
    prisma.work.create({ data }),

  updateWork: (
    id: number,
    data: Partial<{ name: string; address: string; observations: string; active: boolean }>
  ) => prisma.work.update({ where: { id }, data }),

  // ── Products ───────────────────────────────────────────────────────────────

  getProducts: () =>
    prisma.product.findMany({
      orderBy: { description: 'asc' }
    }),

  /** Batch import from Excel. Uses upsert + createMany for price history. */
  importProducts: async (filePath: string): Promise<number> => {
    const rawParsed = parseExcel(filePath)
    if (rawParsed.length === 0) return 0

    // Deduplicate by code — last occurrence wins (same behavior as the original upsert loop)
    const deduped = new Map(rawParsed.map((p) => [p.code, p]))
    const parsed = Array.from(deduped.values())

    // 1. Fetch existing products in ONE query
    const codes = parsed.map((p) => p.code)
    const existing = await prisma.product.findMany({
      where: { code: { in: codes } },
      select: { code: true, price: true }
    })
    const existingMap = new Map(existing.map((e) => [e.code, e.price]))

    // 2. Separate creates from updates
    const toCreate = parsed.filter((p) => !existingMap.has(p.code))
    const toUpdate = parsed.filter((p) => existingMap.has(p.code))

    // 3. Price history entries: only for new products or changed prices
    const priceHistoryEntries = parsed
      .filter((p) => {
        const prev = existingMap.get(p.code)
        return prev === undefined || prev !== p.price
      })
      .map((p) => ({ productId: p.code, price: p.price }))

    // 4a. Bulk-create new products (outside interactive tx to avoid timeout)
    if (toCreate.length > 0) {
      await prisma.product.createMany({
        data: toCreate.map((p) => ({
          code: p.code,
          description: p.description,
          category: p.category ?? null,
          price: p.price
        }))
      })
    }

    // 4b. Update existing products in chunks to avoid hitting SQLite limits
    const CHUNK = 50
    for (let i = 0; i < toUpdate.length; i += CHUNK) {
      const chunk = toUpdate.slice(i, i + CHUNK)
      await prisma.$transaction(
        chunk.map((p) =>
          prisma.product.update({
            where: { code: p.code },
            data: {
              description: p.description,
              category: p.category ?? null,
              price: p.price,
              lastUpdated: new Date()
            }
          })
        )
      )
    }

    // 4c. Bulk-create price history (after products are committed)
    if (priceHistoryEntries.length > 0) {
      await prisma.priceHistory.createMany({ data: priceHistoryEntries })
    }

    return parsed.length
  },


  updateProduct: async (
    code: string,
    data: Partial<{
      description: string
      category: string
      price: number
      active: boolean
    }>
  ) => {
    const product = await prisma.product.update({ where: { code }, data })
    if (data.price !== undefined) {
      await prisma.priceHistory.create({ data: { productId: code, price: data.price } })
    }
    return product
  },

  getPriceHistory: (productId: string) =>
    prisma.priceHistory.findMany({
      where: { productId },
      orderBy: { date: 'desc' }
    }),

  // ── Stockpiles (Acopios) ───────────────────────────────────────────────────

  createStockpile: (data: {
    workId: number
    productId: string
    quantity: number
    price: number
    observations?: string
  }) => prisma.stockpile.create({ data }),

  updateStockpile: (id: number, data: Partial<{ quantity: number; withdrawn: number; observations: string }>) =>
    prisma.stockpile.update({ where: { id }, data }),

  getStockpiles: (workId?: number) => {
    const where = workId ? { workId } : {}
    return prisma.stockpile.findMany({
      where,
      include: { product: true, work: { include: { client: true } } },
      orderBy: { date: 'desc' }
    })
  },

  // ── Movements ──────────────────────────────────────────────────────────────

  /** Creates a movement with all items atomically. */
  createMovement: async (data: {
    type: string
    workId: number
    amount?: number
    items?: Array<{
      stockpileId: number | null
      productId: string
      quantity: number
      price: number
    }>
    withdrawer?: { name: string; dni?: string }
    observations?: string
  }) => {
    const { type, amount, workId, items, withdrawer, observations } = data

    return prisma.$transaction(async (tx) => {
      // Create withdrawer only if a real name was provided
      let withdrawerId: number | null = null
      if (withdrawer?.name?.trim()) {
        const w = await tx.withdrawer.create({ data: { ...withdrawer } })
        withdrawerId = w.id
      }

      const movement = await tx.movement.create({
        data: { type, amount, workId, withdrawerId, observations }
      })

      if (items && items.length > 0) {
        // Bulk-create movement items
        await tx.movementItem.createMany({
          data: items.map((item) => ({
            movementId: movement.id,
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        })

        // Update stockpile withdrawn counts
        if (type === 'DELIVERY') {
          const stockpileUpdates = items
            .filter((item) => item.stockpileId !== null)
            .map((item) =>
              tx.stockpile.update({
                where: { id: item.stockpileId! },
                data: { withdrawn: { increment: item.quantity } }
              })
            )
          await Promise.all(stockpileUpdates)
        }
      }

      return movement
    })
  },

  getMovements: (workId: number) =>
    prisma.movement.findMany({
      where: { workId },
      include: { items: { include: { product: true } }, withdrawer: true },
      orderBy: { date: 'desc' }
    }),

  // ── Global History ─────────────────────────────────────────────────────────

  getGlobalHistory: async (page = 1, pageSize = 50, search?: string) => {

    // Fetch paginated stockpiles and movements concurrently
    const [stockpiles, movements] = await Promise.all([
      prisma.stockpile.findMany({
        include: {
          product: true,
          work: { include: { client: true } }
        },
        orderBy: { date: 'desc' }
      }),
      prisma.movement.findMany({
        include: {
          items: { include: { product: true } },
          withdrawer: true,
          work: { include: { client: true } }
        },
        orderBy: { date: 'desc' }
      })
    ])

    // Apply search filter in memory (SQLite doesn't support relational where well)
    const matchesSearch = (clientName: string, clientLastName: string | null, clientDni: string | null, workName: string) => {
      if (!search) return true
      const q = search.toLowerCase()
      return (
        clientName.toLowerCase().includes(q) ||
        (clientLastName?.toLowerCase().includes(q) ?? false) ||
        (clientDni?.includes(q) ?? false) ||
        workName.toLowerCase().includes(q)
      )
    }

    const filteredStockpiles = stockpiles.filter(s =>
      matchesSearch(s.work.client.name, s.work.client.lastName, s.work.client.dni, s.work.name)
    )
    const filteredMovements = movements.filter(m =>
      matchesSearch(m.work.client.name, m.work.client.lastName, m.work.client.dni, m.work.name)
    )

    const combined = [
      ...filteredStockpiles.map((s) => ({ ...s, globalType: 'STOCKPILE', date: s.date })),
      ...filteredMovements.map((m) => ({ ...m, globalType: m.type, date: m.date }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    const total = combined.length
    const items = combined.slice((page - 1) * pageSize, page * pageSize)

    return { items, total, page, pageSize }
  },

  getDeliveries: async (page = 1, pageSize = 20, filters?: { search?: string, startDate?: string, endDate?: string }) => {
    const skip = (page - 1) * pageSize

    // For better performance, we'll try to use prisma filters as much as possible
    const where: any = {
      type: 'DELIVERY'
    }

    if (filters?.startDate || filters?.endDate) {
      where.date = {}
      if (filters.startDate) where.date.gte = new Date(filters.startDate)
      if (filters.endDate) {
        const end = new Date(filters.endDate)
        end.setHours(23, 59, 59, 999)
        where.date.lte = end
      }
    }

    // SQLite doesn't support complex nested searches well with Prisma 'where',
    // but we can search in withdrawer or work name if search is simple.
    // For more complex search (client name), we might need to filter in memory 
    // or use a raw query, but let's stick to Prisma and fetch more if needed.
    
    const [items, total] = await Promise.all([
      prisma.movement.findMany({
        where,
        include: {
          work: { include: { client: true } },
          items: { include: { product: true } },
          withdrawer: true
        },
        orderBy: { date: 'desc' },
        skip,
        take: pageSize
      }),
      prisma.movement.count({ where })
    ])

    // Apply client name search in memory if provided
    let filteredItems = items
    if (filters?.search) {
      const q = filters.search.toLowerCase()
      filteredItems = items.filter(m => {
        const clientName = `${m.work.client.name} ${m.work.client.lastName ?? ''}`.toLowerCase()
        const withdrawerName = m.withdrawer?.name.toLowerCase() ?? ''
        const workName = m.work.name.toLowerCase()
        return clientName.includes(q) || withdrawerName.includes(q) || workName.includes(q)
      })
    }

    return {
      items: filteredItems,
      total,
      page,
      pageSize
    }
  }
}
