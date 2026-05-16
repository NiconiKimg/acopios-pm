// ============================================================
// Domain Types — Pedemonte Materiales
// ============================================================

export interface Client {
  id: number
  name: string
  lastName: string | null
  dni: string | null
  phone: string | null
  observations: string | null
  active: boolean
  createdAt: string
  updatedAt: string
  works?: Work[]
  _count?: { works: number }
}

/** Slim version used in list views — no nested relations */
export interface ClientSummary {
  id: number
  name: string
  lastName: string | null
  dni: string | null
  phone: string | null
  active: boolean
  _count: { works: number }
}

export interface Work {
  id: number
  name: string
  address: string | null
  observations: string | null
  active: boolean
  clientId: number
  client?: Client
  movements?: Movement[]
  stockpiles?: Stockpile[]
  createdAt: string
  updatedAt: string
}

export interface Product {
  code: string
  description: string
  category: string | null
  price: number
  active: boolean
  lastUpdated: string
}

export interface PriceHistory {
  id: number
  productId: string
  price: number
  date: string
  product?: Pick<Product, 'code' | 'description'>
}

export interface Stockpile {
  id: number
  workId: number
  productId: string
  product: Product
  work?: Work
  quantity: number
  price: number
  withdrawn: number
  date: string
  observations: string | null
}

export interface MovementItem {
  id: number
  movementId: number
  productId: string
  product: Product
  quantity: number
  price: number
}

export interface Withdrawer {
  id: number
  name: string
  dni: string | null
  phone: string | null
  observations: string | null
}

export type MovementType = 'PAYMENT' | 'DELIVERY' | 'ADJUSTMENT'

export interface Movement {
  id: number
  type: MovementType
  amount: number | null
  date: string
  workId: number
  work?: Work
  items: MovementItem[]
  withdrawer: Withdrawer | null
  withdrawerId: number | null
  observations: string | null
}

export interface CompanyConfig {
  name: string
  address: string
  phone: string
  email?: string
  cuit?: string
}

export interface DashboardStats {
  totalClients: number
  totalWorks: number
  totalProducts: number
  totalBalance: number
  recentMovements: RecentMovement[]
}

export interface RecentMovement {
  id: number
  type: MovementType | 'STOCKPILE'
  date: string
  clientName: string
  workName: string
  amount: number | null
  description: string
}

/** Historial global — union of stockpile + movement */
export interface GlobalHistoryItem {
  id: number
  globalType: MovementType | 'STOCKPILE'
  date: string
  work: {
    id: number
    name: string
    client: Pick<Client, 'id' | 'name' | 'lastName' | 'dni'>
  }
  // Movement-specific
  type?: MovementType
  amount?: number | null
  items?: MovementItem[]
  withdrawer?: Withdrawer | null
  observations?: string | null
  // Stockpile-specific
  quantity?: number
  price?: number
  product?: Product
}

export interface GlobalHistoryResponse {
  items: GlobalHistoryItem[]
  total: number
  page: number
  pageSize: number
}

export interface DeliveriesResponse {
  items: Movement[]
  total: number
  page: number
  pageSize: number
}

// Form input types (what the renderer sends to the main process)
export interface CreateClientInput {
  name: string
  lastName?: string
  phone?: string
  dni?: string
  observations?: string
}

export interface CreateWorkInput {
  name: string
  address?: string
  clientId: number
  observations?: string
}

export interface CreateStockpileInput {
  workId: number
  productId: string
  quantity: number
  price: number
  observations?: string
}

export interface CreateMovementInput {
  type: MovementType
  workId: number
  amount?: number
  items?: CreateMovementItemInput[]
  withdrawer?: { name: string; dni?: string }
  observations?: string
}

export interface CreateMovementItemInput {
  stockpileId: number | null
  productId: string
  quantity: number
  price: number
}

export interface UpdateProductInput {
  description?: string
  category?: string
  price?: number
  active?: boolean
}

export interface BackupResult {
  success: boolean
  path?: string
  error?: string
}
