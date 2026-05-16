import { useState, useEffect } from 'react'
import { Database, ShieldCheck, HardDrive, RefreshCw, Building2, Save } from 'lucide-react'
import { useToast } from './Toast'
import type { CompanyConfig } from '../types'

export default function Settings() {
  const { success, error } = useToast()
  const [backupLoading, setBackupLoading] = useState(false)
  const [lastBackup, setLastBackup] = useState<string | null>(null)
  const [config, setConfig] = useState<CompanyConfig>({ name: '', address: '', phone: '', email: '', cuit: '' })
  const [configSaving, setConfigSaving] = useState(false)
  const [configLoaded, setConfigLoaded] = useState(false)

  useEffect(() => {
    window.api.getCompanyConfig().then((c) => {
      setConfig(c)
      setConfigLoaded(true)
    }).catch(() => error('No se pudo cargar la configuración.'))
  }, [])

  const handleBackup = async () => {
    setBackupLoading(true)
    try {
      const result = await window.api.createBackup()
      if (result.success) {
        success(`Copia creada: ${result.path}`)
        setLastBackup(new Date().toLocaleString('es-AR'))
      } else {
        error(`Error al crear copia: ${result.error}`)
      }
    } catch (e) {
      console.error(e)
      error('Error de sistema al procesar el backup.')
    } finally {
      setBackupLoading(false)
    }
  }

  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault()
    setConfigSaving(true)
    try {
      const ok = await window.api.saveCompanyConfig(config)
      if (ok) success('Configuración guardada correctamente.')
      else error('No se pudo guardar la configuración.')
    } catch (e) {
      console.error(e)
      error('Error al guardar la configuración.')
    } finally {
      setConfigSaving(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Configuración del Sistema</h2>
        <p className="text-gray-500">Datos de empresa, copias de seguridad y mantenimiento.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Company Config */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 text-[#c5171a] rounded-2xl flex items-center justify-center">
              <Building2 size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Datos de la Empresa</h3>
              <p className="text-xs text-gray-400">Se usan en los remitos PDF generados</p>
            </div>
          </div>

          {configLoaded ? (
            <form onSubmit={handleSaveConfig} className="space-y-4">
              {[
                { key: 'name', label: 'Nombre / Razón Social', required: true },
                { key: 'address', label: 'Dirección', required: false },
                { key: 'phone', label: 'Teléfono', required: false },
                { key: 'email', label: 'Email', required: false },
                { key: 'cuit', label: 'CUIT', required: false }
              ].map(({ key, label, required }) => (
                <div key={key}>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{label}</label>
                  <input
                    type="text"
                    required={required}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-red-100 transition-all text-sm font-medium"
                    value={config[key as keyof CompanyConfig] ?? ''}
                    onChange={(e) => setConfig({ ...config, [key]: e.target.value })}
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={configSaving}
                className="w-full py-3 bg-[#c5171a] text-white rounded-xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-100 disabled:opacity-50 mt-2"
              >
                {configSaving ? <RefreshCw size={18} className="animate-spin" /> : <Save size={18} />}
                {configSaving ? 'Guardando...' : 'Guardar Configuración'}
              </button>
            </form>
          ) : (
            <div className="space-y-3">{[1, 2, 3].map(i => <div key={i} className="h-10 bg-gray-100 rounded-xl animate-pulse" />)}</div>
          )}
        </div>

        <div className="space-y-8">
          {/* Backup */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <Database size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Base de Datos</h3>
                <p className="text-xs text-gray-400">Estado: Activo y Sincronizado</p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-3">
                <ShieldCheck size={18} className="text-green-500" /> Protección de Datos
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Se recomienda realizar copias de seguridad semanales en una unidad externa para evitar pérdida de datos.
              </p>
              <button
                onClick={handleBackup}
                disabled={backupLoading}
                className="w-full py-4 bg-gray-800 text-white rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-3 shadow-lg shadow-gray-200 disabled:opacity-50"
              >
                {backupLoading ? <RefreshCw className="animate-spin" size={20} /> : <HardDrive size={20} />}
                {backupLoading ? 'Creando...' : 'Crear Copia de Seguridad'}
              </button>
              {lastBackup && (
                <p className="text-[10px] text-center text-gray-400 mt-4 uppercase font-bold tracking-widest">
                  Último backup: {lastBackup}
                </p>
              )}
            </div>
          </div>

          {/* System Info */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Información del Sistema</h3>
            <div className="space-y-4">
              {[
                { label: 'Versión de App', value: '1.3.0 (Stable)' },
                { label: 'Motor de Base de Datos', value: 'SQLite 3.x + Prisma ORM' },
                { label: 'Entorno', value: 'Local (Sin Internet)', valueClass: 'text-green-600' }
              ].map(({ label, value, valueClass }) => (
                <div key={label} className="flex justify-between py-3 border-b border-gray-50 last:border-0 text-sm">
                  <span className="text-gray-400">{label}</span>
                  <span className={`font-bold text-gray-800 ${valueClass ?? ''}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
