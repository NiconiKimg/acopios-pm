import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import type {
  CreateClientInput,
  CreateWorkInput,
  CreateStockpileInput,
  CreateMovementInput,
  UpdateProductInput,
  CompanyConfig
} from '../renderer/src/types'

const api = {
  // ── Clients ───────────────────────────────────────────────────────────────
  getClients: () => ipcRenderer.invoke('get-clients'),
  getClient: (id: number) => ipcRenderer.invoke('get-client', id),
  createClient: (data: CreateClientInput) => ipcRenderer.invoke('create-client', data),
  updateClient: (id: number, data: Partial<CreateClientInput & { active: boolean }>) =>
    ipcRenderer.invoke('update-client', id, data),
  deleteClient: (id: number) => ipcRenderer.invoke('delete-client', id),
  exportClientHistory: (clientId: number) => ipcRenderer.invoke('export-client-history', clientId),

  // ── Works ─────────────────────────────────────────────────────────────────
  createWork: (data: CreateWorkInput) => ipcRenderer.invoke('create-work', data),
  updateWork: (id: number, data: Partial<CreateWorkInput & { active: boolean }>) =>
    ipcRenderer.invoke('update-work', id, data),

  // ── Products ──────────────────────────────────────────────────────────────
  getProducts: () => ipcRenderer.invoke('get-products'),
  importProducts: () => ipcRenderer.invoke('import-products'),
  updateProduct: (code: string, data: UpdateProductInput) =>
    ipcRenderer.invoke('update-product', code, data),
  getPriceHistory: (productId: string) => ipcRenderer.invoke('get-price-history', productId),

  // ── Stockpiles ────────────────────────────────────────────────────────────
  getStockpiles: (workId?: number) => ipcRenderer.invoke('get-stockpiles', workId),
  createStockpile: (data: CreateStockpileInput) => ipcRenderer.invoke('create-stockpile', data),
  updateStockpile: (id: number, data: Partial<CreateStockpileInput>) =>
    ipcRenderer.invoke('update-stockpile', id, data),

  // ── Movements ─────────────────────────────────────────────────────────────
  getMovements: (workId: number) => ipcRenderer.invoke('get-movements', workId),
  createMovement: (data: CreateMovementInput) => ipcRenderer.invoke('create-movement', data),

  // ── Dashboard ─────────────────────────────────────────────────────────────
  getStats: () => ipcRenderer.invoke('get-stats'),

  // ── Config ────────────────────────────────────────────────────────────────
  getCompanyConfig: () => ipcRenderer.invoke('get-company-config'),
  saveCompanyConfig: (data: CompanyConfig) => ipcRenderer.invoke('save-company-config', data),

  // ── History ───────────────────────────────────────────────────────────────
  getGlobalHistory: (page?: number, pageSize?: number, search?: string) =>
    ipcRenderer.invoke('get-global-history', page, pageSize, search),

  getDeliveries: (page?: number, pageSize?: number, filters?: any) =>
    ipcRenderer.invoke('get-deliveries', page, pageSize, filters),

  // ── Backup ────────────────────────────────────────────────────────────────
  createBackup: () => ipcRenderer.invoke('create-backup'),

  // ── PDF ───────────────────────────────────────────────────────────────────
  openPdf: (buffer: ArrayBuffer, fileName: string) => ipcRenderer.invoke('open-pdf', buffer, fileName),
  showItemInFolder: (buffer: ArrayBuffer, fileName: string) => ipcRenderer.invoke('show-item-in-folder', buffer, fileName)
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error('[preload] contextBridge failed:', error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
