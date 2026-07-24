import { app, shell, BrowserWindow, ipcMain, dialog } from 'electron'
import { join } from 'path'
import * as fs from 'fs'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { db, runDatabaseMigrations } from './db'
import { createBackup, restoreBackup } from './backups'
import { exportClientHistory } from './exporter'


function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 960,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    icon: join(__dirname, '../../resources/icon.ico'),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(async () => {
  electronApp.setAppUserModelId('com.pedemonte.materiales')

  // ── Run DB migrations FIRST — creates the DB on first launch ─────────────
  try {
    await runDatabaseMigrations()
  } catch (err: any) {
    console.error('Failed to run database migrations:', err)
    dialog.showErrorBox(
      'Error de Base de Datos',
      'No se pudo iniciar la base de datos. El programa se cerrará.\n\nDetalles:\n' +
        (err.stack || err.message || String(err))
    )
    app.quit()
    return
  }

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // ── IPC: Clients ─────────────────────────────────────────────────────────
  ipcMain.handle('get-clients', () => db.getClients())

  ipcMain.handle('get-client', (_e, id: number) => db.getClient(id))

  ipcMain.handle('create-client', (_e, data) => db.createClient(data))

  ipcMain.handle('update-client', (_e, id: number, data) => db.updateClient(id, data))

  ipcMain.handle('delete-client', (_e, id: number) => db.deleteClient(id))

  ipcMain.handle('export-client-history', async (_e, clientId: number) => {
    const client = await db.exportClientHistory(clientId)
    if (!client) return false

    const result = await dialog.showSaveDialog({
      defaultPath: `historial-${client.lastName ?? client.name}.xlsx`,
      filters: [{ name: 'Excel Files', extensions: ['xlsx'] }]
    })

    if (result.canceled || !result.filePath) return false
    return exportClientHistory(client, result.filePath)
  })

  // ── IPC: Works ────────────────────────────────────────────────────────────
  ipcMain.handle('create-work', (_e, data) => db.createWork(data))

  ipcMain.handle('update-work', (_e, id: number, data) => db.updateWork(id, data))

  // ── IPC: Products ─────────────────────────────────────────────────────────
  ipcMain.handle('get-products', () => db.getProducts())

  ipcMain.handle('create-product', (_e, data) => db.createProduct(data))

  ipcMain.handle('analyze-product-import', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'Excel Files', extensions: ['xlsx', 'xls'] }]
    })

    if (result.canceled || result.filePaths.length === 0) return null
    const filePath = result.filePaths[0]
    const analysis = await db.analyzeProductImport(filePath)
    return { filePath, analysis }
  })

  ipcMain.handle('import-products', (_e, filePath: string) => db.importProducts(filePath))

  ipcMain.handle('update-product', (_e, code: string, data) => db.updateProduct(code, data))

  ipcMain.handle('show-confirm', async (_e, message: string) => {
    const { response } = await dialog.showMessageBox({
      type: 'question',
      buttons: ['Cancelar', 'Aceptar'],
      defaultId: 1,
      title: 'Confirmación',
      message: message,
    })
    return response === 1
  })

  ipcMain.handle('get-price-history', (_e, productId: string) => db.getPriceHistory(productId))

  // ── IPC: Stockpiles ───────────────────────────────────────────────────────
  ipcMain.handle('get-stockpiles', (_e, workId?: number) => db.getStockpiles(workId))

  ipcMain.handle('create-stockpile', (_e, data) => db.createStockpile(data))

  ipcMain.handle('update-stockpile', (_e, id: number, data) => db.updateStockpile(id, data))

  // ── IPC: Movements ────────────────────────────────────────────────────────
  ipcMain.handle('get-movements', (_e, workId: number) => db.getMovements(workId))

  ipcMain.handle('create-movement', (_e, data) => db.createMovement(data))

  // ── Dashboard & Stats ─────────────────────────────────────────────────────
  ipcMain.handle('get-stats', () => db.getStats())
  ipcMain.handle('get-report-data', () => db.getReportData())
  ipcMain.handle('get-price-at-date', (_e, productId: string, date: string) => db.getPriceAtDate(productId, new Date(date)))
  ipcMain.handle('get-work-frozen-date', (_e, workId: number) => db.getWorkFrozenDate(workId))

  // ── IPC: Config ───────────────────────────────────────────────────────────
  ipcMain.handle('get-company-config', () => db.getCompanyConfig())

  ipcMain.handle('save-company-config', (_e, data) => db.saveCompanyConfig(data))

  // ── IPC: History ──────────────────────────────────────────────────────────
  ipcMain.handle('get-global-history', (_e, page?: number, pageSize?: number, search?: string) =>
    db.getGlobalHistory(page, pageSize, search)
  )

  ipcMain.handle('get-deliveries', (_e, page?: number, pageSize?: number, filters?: any) =>
    db.getDeliveries(page, pageSize, filters)
  )

  // ── IPC: Backup ───────────────────────────────────────────────────────────
  ipcMain.handle('create-backup', async () => {
    const result = await dialog.showSaveDialog({
      defaultPath: `backup-pedemonte-${new Date().toISOString().split('T')[0]}.db`,
      filters: [{ name: 'SQLite Database', extensions: ['db'] }]
    })

    if (result.canceled || !result.filePath) return { success: false }
    return createBackup(result.filePath)
  })

  ipcMain.handle('restore-backup', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'SQLite Database', extensions: ['db'] }]
    })

    if (result.canceled || result.filePaths.length === 0) return { success: false }
    
    const confirm = await dialog.showMessageBox({
      type: 'warning',
      buttons: ['Restaurar y Cerrar', 'Cancelar'],
      title: 'Restaurar Copia de Seguridad',
      message: '¿Estás seguro de que deseas restaurar esta copia de seguridad?\n\nSe perderán todos los datos actuales. La aplicación se CERRARÁ completamente para aplicar los cambios de forma segura.\n\nDeberás volver a abrirla manualmente.',
      defaultId: 1,
      cancelId: 1
    })

    if (confirm.response !== 0) return { success: false }

    await db.disconnectDb()
    return restoreBackup(result.filePaths[0])
  })

  ipcMain.handle('open-pdf', async (_e, buffer: ArrayBuffer, fileName: string) => {
    // Add timestamp to avoid EBUSY if file is already open
    const timestamp = Date.now()
    const nameWithTimestamp = fileName.replace('.pdf', `_${timestamp}.pdf`)
    const tempPath = join(app.getPath('temp'), nameWithTimestamp)
    fs.writeFileSync(tempPath, Buffer.from(buffer))
    await shell.openPath(tempPath)
    return true
  })

  ipcMain.handle('show-item-in-folder', async (_e, buffer: ArrayBuffer, fileName: string) => {
    const timestamp = Date.now()
    const nameWithTimestamp = fileName.replace('.pdf', `_${timestamp}.pdf`)
    const tempPath = join(app.getPath('temp'), nameWithTimestamp)
    fs.writeFileSync(tempPath, Buffer.from(buffer))
    shell.showItemInFolder(tempPath)
    return true
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
