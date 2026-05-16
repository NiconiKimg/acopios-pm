import { copyFileSync } from 'fs'
import { join } from 'path'
import { app } from 'electron'

/** Returns the absolute path to the SQLite database file. */
function getDbPath(): string {
  // In production, the DB lives next to the app resources.
  // We look for it relative to process.resourcesPath (asar unpack dir),
  // or fall back to the prisma/ folder for dev.
  const prodPath = join(process.resourcesPath ?? '', 'prisma', 'dev.db')
  const devPath = join(process.cwd(), 'prisma', 'dev.db')

  // app.isPackaged is true when running the built Electron app
  return app.isPackaged ? prodPath : devPath
}

export function createBackup(destinationPath: string): { success: boolean; path?: string; error?: string } {
  const dbPath = getDbPath()

  try {
    copyFileSync(dbPath, destinationPath)
    return { success: true, path: destinationPath }
  } catch (error) {
    console.error('[backup] Failed to copy DB:', error)
    return { success: false, error: String(error) }
  }
}
