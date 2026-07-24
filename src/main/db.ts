import * as fs from 'fs'
import * as path from 'path'
import { app } from 'electron'
import { parseExcel } from './parser'
import { spawn } from 'child_process'

// Monkey-patch spawn to allow spawning the query engine outside ASAR in production
const originalSpawn = spawn
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
require('child_process').spawn = function (command: string, args?: string[], options?: any) {
  const isPrisma =
    command.includes('query-engine') ||
    (args && args.some((arg) => typeof arg === 'string' && arg.includes('query-engine')))
  if (isPrisma) {
    const originalNoAsar = process.noAsar
    process.noAsar = true

    // Fix: Windows cannot spawn a process if its working directory (cwd) is inside app.asar.
    // We override it to a real directory on disk (process.resourcesPath).
    const patchedOptions = options ? { ...options } : {}
    if (
      patchedOptions.cwd &&
      typeof patchedOptions.cwd === 'string' &&
      patchedOptions.cwd.includes('app.asar')
    ) {
      patchedOptions.cwd = process.resourcesPath
    }

    // Fix: Prisma passes the schema.prisma path via environment variables inside options.env.
    // If it points inside the ASAR archive, we point it to the external resources directory instead.
    if (patchedOptions.env) {
      patchedOptions.env = { ...patchedOptions.env }
      if (
        patchedOptions.env.PRISMA_DML_PATH &&
        typeof patchedOptions.env.PRISMA_DML_PATH === 'string' &&
        patchedOptions.env.PRISMA_DML_PATH.includes('app.asar')
      ) {
        patchedOptions.env.PRISMA_DML_PATH = path.join(
          process.resourcesPath,
          'prisma',
          'schema.prisma'
        )
      }
    }

    try {
      return originalSpawn(command, args, patchedOptions)
    } finally {
      process.noAsar = originalNoAsar
    }
  }
  return originalSpawn(command, args, options)
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const PrismaLocal = require('./generated/client')

// Resolving DB paths and Engines in Production
if (app.isPackaged) {
  const userDataPath = app.getPath('userData')
  if (!fs.existsSync(userDataPath)) {
    fs.mkdirSync(userDataPath, { recursive: true })
  }
  const dbPath = path.join(userDataPath, 'app.db')
  process.env.DATABASE_URL = `file:${dbPath}`

  // Point explicitly to the query engine bundled in resources/prisma
  const enginePath = path.join(process.resourcesPath, 'prisma', 'query-engine-windows.exe')
  process.env.PRISMA_QUERY_ENGINE_BINARY = enginePath

  // Point explicitly to the schema.prisma file outside the ASAR archive
  const schemaPath = path.join(process.resourcesPath, 'prisma', 'schema.prisma')
  process.env.PRISMA_DML_PATH = schemaPath
}

declare global {
  // eslint-disable-next-line no-var
  var __prisma: any
}

const prisma: any =
  global.__prisma ??
  new PrismaLocal.PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error']
  })



/**
 * Runs SQL migrations sequentially.
 * This completely avoids bundling Prisma CLI in the production build.
 */
export async function runDatabaseMigrations() {
  const migrationsPath = app.isPackaged
    ? path.join(process.resourcesPath, 'prisma', 'migrations')
    : path.join(__dirname, '..', '..', '..', 'prisma', 'migrations')

  if (!fs.existsSync(migrationsPath)) {
    console.error('[db] Migrations folder not found at', migrationsPath)
    return
  }

  const folders = fs.readdirSync(migrationsPath)
    .filter(f => fs.lstatSync(path.join(migrationsPath, f)).isDirectory() && f.match(/^\d+_/))
    .sort()

  // Ensure migrations table exists
  try {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
        "id" TEXT PRIMARY KEY NOT NULL,
        "checksum" TEXT NOT NULL,
        "finished_at" DATETIME,
        "migration_name" TEXT NOT NULL,
        "logs" TEXT,
        "rolled_back_at" DATETIME,
        "started_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
        "applied_steps_count" INTEGER DEFAULT 0
      );
    `)
  } catch (err) {
    console.error('[db] Error creating migrations table:', err)
  }

  let applied: string[] = []
  try {
    const rows = (await prisma.$queryRawUnsafe('SELECT migration_name FROM "_prisma_migrations" WHERE finished_at IS NOT NULL')) as any[]
    applied = rows.map(r => r.migration_name)
  } catch (e) {
    console.warn('[db] No completed migrations found.')
  }

  for (const folder of folders) {
    if (!applied.includes(folder)) {
      console.log(`[db] Applying migration ${folder}...`)
      const sqlPath = path.join(migrationsPath, folder, 'migration.sql')
      if (fs.existsSync(sqlPath)) {
        const sql = fs.readFileSync(sqlPath, 'utf8')
        
        // Execute SQL commands split by semicolon (excluding commented lines)
        const queries = sql.split(';')
        
        await prisma.$transaction(async (tx) => {
          for (let query of queries) {
            // Clean query by removing comments and blank lines
            const cleanedQuery = query
              .split('\n')
              .map((line) => line.trim())
              .filter((line) => line && !line.startsWith('--'))
              .join(' ')
              .trim()

            if (cleanedQuery) {
              await tx.$executeRawUnsafe(cleanedQuery)
            }
          }
          const randomId = Math.random().toString(36).substring(2) + Date.now().toString(36)
          await tx.$executeRawUnsafe(`
            INSERT INTO "_prisma_migrations" (id, checksum, finished_at, migration_name, started_at)
            VALUES ('${randomId}', 'dummy-checksum', CURRENT_TIMESTAMP, '${folder}', CURRENT_TIMESTAMP)
          `)
        })
        console.log(`[db] Migration ${folder} applied.`)
      }
    }
  }
}


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
  disconnectDb: () => prisma.$disconnect(),

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

  getReportData: async () => {
    // 1. Fetch data
    const payments = await prisma.movement.findMany({
      where: { type: 'PAYMENT' },
      select: { amount: true, date: true }
    })
    
    const deliveries = await prisma.movement.findMany({
      where: { type: 'DELIVERY' },
      select: { date: true, items: { select: { quantity: true, price: true } } }
    })
    
    const stockpiles = await prisma.stockpile.findMany({
      select: { quantity: true, price: true, withdrawn: true, product: { select: { description: true } } }
    })
    
    const works = await prisma.work.findMany({
      include: {
        movements: { select: { type: true, amount: true } },
        stockpiles: { select: { quantity: true, price: true } }
      }
    })

    // 2. Balance General (Total a Favor vs Deuda Global)
    let globalCredit = 0
    let globalDebt = 0
    works.forEach(w => {
      const wPaid = w.movements.filter(m => m.type === 'PAYMENT').reduce((acc, m) => acc + (m.amount || 0), 0)
      const wStockpiled = w.stockpiles.reduce((acc, s) => acc + (s.quantity * s.price), 0)
      const wBalance = wPaid - wStockpiled
      if (wBalance >= 0) globalCredit += wBalance
      else globalDebt += Math.abs(wBalance)
    })

    // 3. Evolución Mensual (Últimos 12 meses)
    const monthlyData: Record<string, { month: string; pagos: number; entregas: number }> = {}
    const now = new Date()
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
      const monthName = d.toLocaleString('es-ES', { month: 'short', year: '2-digit' })
      monthlyData[key] = { month: monthName, pagos: 0, entregas: 0 }
    }

    payments.forEach(p => {
      const key = `${p.date.getFullYear()}-${String(p.date.getMonth() + 1).padStart(2, '0')}`
      if (monthlyData[key]) monthlyData[key].pagos += p.amount || 0
    })

    deliveries.forEach(d => {
      const key = `${d.date.getFullYear()}-${String(d.date.getMonth() + 1).padStart(2, '0')}`
      if (monthlyData[key]) {
        const deliveryValue = d.items.reduce((acc, i) => acc + (i.quantity * i.price), 0)
        monthlyData[key].entregas += deliveryValue
      }
    })

    const monthlyChart = Object.values(monthlyData)

    // 4. Top 5 Productos (Por cantidad histórica acopiada)
    const productStats: Record<string, { name: string; quantity: number }> = {}
    stockpiles.forEach(s => {
      const name = s.product.description
      if (!productStats[name]) productStats[name] = { name, quantity: 0 }
      productStats[name].quantity += s.quantity
    })
    const topProducts = Object.values(productStats).sort((a, b) => b.quantity - a.quantity).slice(0, 5)

    return {
      balance: { credit: globalCredit, debt: globalDebt },
      monthly: monthlyChart,
      topProducts
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

  createProduct: async (data: { code: string; description: string; category?: string; price: number }) => {
    const product = await prisma.product.create({ data })
    await prisma.priceHistory.create({ data: { productId: data.code, price: data.price } })
    return product
  },

  getProducts: () =>
    prisma.product.findMany({
      orderBy: { description: 'asc' }
    }),

  /** Returns a preview of what would happen if the Excel file was imported. */
  analyzeProductImport: async (filePath: string) => {
    const rawParsed = parseExcel(filePath)
    if (rawParsed.length === 0) return []

    const deduped = new Map(rawParsed.map((p) => [p.code, p]))
    const parsed = Array.from(deduped.values())

    const codes = parsed.map((p) => p.code)
    const existing = (await prisma.product.findMany({
      where: { code: { in: codes } },
      select: { code: true, price: true, description: true }
    })) as any[]
    const existingMap = new Map(existing.map((e) => [e.code, e]))

    return parsed.map(p => {
      const prev = existingMap.get(p.code)
      let type: 'NEW' | 'UPDATE' | 'NO_CHANGE' = 'NEW'
      if (prev) {
        type = prev.price !== p.price ? 'UPDATE' : 'NO_CHANGE'
      }

      return {
        code: p.code,
        description: p.description,
        oldPrice: prev?.price ?? 0,
        newPrice: p.price,
        type
      }
    })
  },

  /** Batch import from Excel. Returns counts of changes. */
  importProducts: async (filePath: string): Promise<{ added: number, updated: number, unchanged: number }> => {
    const rawParsed = parseExcel(filePath)
    if (rawParsed.length === 0) return { added: 0, updated: 0, unchanged: 0 }

    const deduped = new Map(rawParsed.map((p) => [p.code, p]))
    const parsed = Array.from(deduped.values())

    const codes = parsed.map((p) => p.code)
    const existing = (await prisma.product.findMany({
      where: { code: { in: codes } }
    })) as any[]
    const existingMap = new Map(existing.map((e) => [e.code, e.price]))

    const toCreate = parsed.filter((p) => !existingMap.has(p.code))
    const toUpdate = parsed.filter((p) => {
      const prev = existingMap.get(p.code)
      return prev !== undefined && (prev !== p.price || true) // We update description too
    })

    const priceHistoryEntries = parsed
      .filter((p) => {
        const prev = existingMap.get(p.code)
        return prev === undefined || prev !== p.price
      })
      .map((p) => ({ productId: p.code, price: p.price }))

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

    const CHUNK = 50
    let updatedCount = 0
    for (let i = 0; i < toUpdate.length; i += CHUNK) {
      const chunk = toUpdate.slice(i, i + CHUNK)
      const changedChunk = chunk.filter(p => existingMap.get(p.code) !== p.price)
      updatedCount += changedChunk.length

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

    if (priceHistoryEntries.length > 0) {
      await prisma.priceHistory.createMany({ data: priceHistoryEntries })
    }

    return {
      added: toCreate.length,
      updated: updatedCount,
      unchanged: parsed.length - toCreate.length - updatedCount
    }
  },


  /** Returns the price of a product at a specific date by looking at history. */
  getPriceAtDate: async (productId: string, date: Date) => {
    const history = await prisma.priceHistory.findFirst({
      where: {
        productId,
        date: { lte: date }
      },
      orderBy: { date: 'desc' }
    })
    if (history) return history.price

    // Fallback to current price if no history exists before that date
    const product = await prisma.product.findUnique({ where: { code: productId } })
    return product?.price ?? 0
  },

  /** 
   * Finds the "Frozen Date" for a work.
   * This is the date of the oldest payment that hasn't been "consumed" yet by stockpiles.
   */
  getWorkFrozenDate: async (workId: number) => {
    const [payments, stockpiles] = await Promise.all([
      prisma.movement.findMany({
        where: { workId, type: 'PAYMENT' },
        orderBy: { date: 'asc' },
        select: { amount: true, date: true }
      }),
      prisma.stockpile.findMany({
        where: { workId },
        select: { quantity: true, price: true }
      })
    ])

    const totalConsumed = stockpiles.reduce((acc, s) => acc + (s.quantity * s.price), 0)
    const totalPaid = payments.reduce((acc, p) => acc + (p.amount ?? 0), 0)

    if (totalPaid <= totalConsumed) return null // No balance available to freeze

    let runningTotal = 0
    for (const p of payments) {
      runningTotal += (p.amount ?? 0)
      if (runningTotal > totalConsumed) {
        return p.date.toISOString()
      }
    }

    return null
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

  updateStockpile: (id: number, data: Partial<{ quantity: number; withdrawn: number; price: number; observations: string }>) =>
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
