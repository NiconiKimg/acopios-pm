import { ElectronAPI } from '@electron-toolkit/preload'

import type {
  ClientSummary,
  Client,
  Work,
  Product,
  PriceHistory,
  Stockpile,
  Movement,
  CompanyConfig,
  DashboardStats,
  GlobalHistoryResponse,
  BackupResult,
  CreateClientInput,
  CreateWorkInput,
  CreateStockpileInput,
  CreateMovementInput,
  UpdateProductInput
} from './types'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      // Clients
      getClients: () => Promise<ClientSummary[]>
      getClient: (id: number) => Promise<Client | null>
      createClient: (data: CreateClientInput) => Promise<Client>
      updateClient: (id: number, data: Partial<CreateClientInput & { active: boolean }>) => Promise<Client>
      deleteClient: (id: number) => Promise<Client>
      exportClientHistory: (clientId: number) => Promise<boolean>

      // Works
      createWork: (data: CreateWorkInput) => Promise<Work>
      updateWork: (id: number, data: Partial<CreateWorkInput & { active: boolean }>) => Promise<Work>

      // Products
      getProducts: () => Promise<Product[]>
      importProducts: () => Promise<number>
      updateProduct: (code: string, data: UpdateProductInput) => Promise<Product>
      getPriceHistory: (productId: string) => Promise<PriceHistory[]>

      // Stockpiles
      getStockpiles: (workId?: number) => Promise<Stockpile[]>
      createStockpile: (data: CreateStockpileInput) => Promise<Stockpile>
      updateStockpile: (id: number, data: Partial<CreateStockpileInput>) => Promise<Stockpile>

      // Movements
      getMovements: (workId: number) => Promise<Movement[]>
      createMovement: (data: CreateMovementInput) => Promise<Movement>

      // Dashboard
      getStats: () => Promise<DashboardStats>

      // Config
      getCompanyConfig: () => Promise<CompanyConfig>
      saveCompanyConfig: (data: CompanyConfig) => Promise<boolean>

      // History
      getGlobalHistory: (page?: number, pageSize?: number, search?: string) => Promise<GlobalHistoryResponse>

      // Backup
      createBackup: () => Promise<BackupResult>
    }
  }
}
