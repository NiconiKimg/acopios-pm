import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import * as fs from 'fs'

function copyPrismaPlugin() {
  return {
    name: 'copy-prisma-client',
    writeBundle() {
      const src = resolve(__dirname, 'src/main/generated')
      const dest = resolve(__dirname, 'out/main/generated')
      if (fs.existsSync(src)) {
        const copyRecursiveSync = (source: string, target: string) => {
          const stats = fs.statSync(source)
          if (stats.isDirectory()) {
            if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true })
            fs.readdirSync(source).forEach(child => {
              if (child.endsWith('.exe')) return
              copyRecursiveSync(resolve(source, child), resolve(target, child))
            })
          } else {
            fs.copyFileSync(source, target)
          }
        }
        copyRecursiveSync(src, dest)
      }
    }
  }
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), copyPrismaPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
