import { copyFileSync } from 'fs'
import { join } from 'path'
import { app } from 'electron'

/** Returns the absolute path to the SQLite database file. */
export function getDbPath(): string {
  if (app.isPackaged) {
    return join(app.getPath('userData'), 'app.db')
  }
  return join(process.cwd(), 'prisma', 'dev.db')
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

export async function restoreBackup(sourcePath: string): Promise<{ success: boolean; error?: string }> {
  const dbPath = getDbPath()
  try {
    copyFileSync(sourcePath, dbPath)
    app.exit(0)
    return { success: true }
  } catch (error) {
    console.error('[backup] Failed to restore DB:', error)
    return { success: false, error: String(error) }
  }
}
