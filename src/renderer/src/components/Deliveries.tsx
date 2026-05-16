import { useState, useEffect } from 'react'
import { Search, Truck, Printer, MessageCircle, ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react'
import { generateRemito, shareRemitoWhatsApp, saveRemito } from '../utils/pdf'
import { useToast } from './Toast'
import { Folder } from 'lucide-react'
import type { Movement, CompanyConfig } from '../types'

const ITEMS_PER_PAGE = 15

export default function Deliveries() {
  const { success, error, warning } = useToast()
  const [deliveries, setDeliveries] = useState<Movement[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [company, setCompany] = useState<CompanyConfig | null>(null)
  
  const [filters, setFilters] = useState({
    search: '',
    startDate: '',
    endDate: ''
  })

  useEffect(() => {
    loadDeliveries()
    loadCompany()
  }, [page, filters.startDate, filters.endDate]) // Search is debounced or handled by a button

  const loadDeliveries = async () => {
    setLoading(true)
    try {
      const response = await window.api.getDeliveries(page, ITEMS_PER_PAGE, filters)
      setDeliveries(response.items)
      setTotal(response.total)
    } catch (err) {
      console.error('[Deliveries] load error:', err)
      error('Error al cargar las entregas.')
    } finally {
      setLoading(false)
    }
  }

  const loadCompany = async () => {
    try {
      const config = await window.api.getCompanyConfig()
      setCompany(config)
    } catch (err) {
      console.error('[Deliveries] loadCompany error:', err)
    }
  }

  const handlePrint = async (m: Movement) => {
    if (!company) return
    try {
      await generateRemito(m, m.work!, company)
      success('Remito generado.')
    } catch (err) {
      error('No se pudo generar el remito.')
    }
  }

  const handleWhatsApp = (m: Movement) => {
    const sent = shareRemitoWhatsApp(m, m.work!)
    if (!sent) warning('El cliente no tiene teléfono registrado.')
  }

  const handleOpenFolder = async (m: Movement) => {
    if (!company) return
    try {
      await saveRemito(m, m.work!, company)
      success('Carpeta abierta. Puedes arrastrar el PDF a WhatsApp.')
    } catch (err) {
      error('No se pudo abrir la carpeta.')
    }
  }

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Historial de Entregas</h2>
          <p className="text-gray-500">Consulta y gestiona todos los remitos emitidos.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-1">Buscar Cliente / Obra</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Nombre, obra..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-red-100 outline-none transition-all"
              value={filters.search}
              onChange={e => setFilters({...filters, search: e.target.value})}
              onKeyDown={e => e.key === 'Enter' && loadDeliveries()}
            />
          </div>
        </div>
        <div className="w-44">
          <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-1">Desde</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="date" 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-2xl text-sm"
              value={filters.startDate}
              onChange={e => setFilters({...filters, startDate: e.target.value})}
            />
          </div>
        </div>
        <div className="w-44">
          <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-1">Hasta</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="date" 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-2xl text-sm"
              value={filters.endDate}
              onChange={e => setFilters({...filters, endDate: e.target.value})}
            />
          </div>
        </div>
        <button 
          onClick={() => { setPage(1); loadDeliveries(); }}
          className="bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-black transition-all h-[52px]"
        >
          Filtrar
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <tr>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Cliente / Obra</th>
                <th className="px-6 py-4">Retiró</th>
                <th className="px-6 py-4">Materiales</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr><td colSpan={5} className="text-center py-20"><Truck className="animate-bounce mx-auto text-gray-200" size={40} /></td></tr>
              ) : deliveries.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-20 text-gray-400 italic">No se encontraron entregas.</td></tr>
              ) : (
                deliveries.map(m => (
                  <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-800 text-sm">{new Date(m.date).toLocaleDateString('es-AR')}</p>
                      <p className="text-[10px] text-gray-400">{new Date(m.date).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}hs</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-800 text-sm">{m.work?.client?.lastName}, {m.work?.client?.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase">{m.work?.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-600 font-medium">
                          {m.withdrawer?.name ?? 'Titular'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {m.items.map(i => `${i.product.description} (x${i.quantity})`).join(', ')}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handlePrint(m)}
                          className="p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-all"
                          title="Imprimir / Descargar"
                        >
                          <Printer size={18} />
                        </button>
                        <button 
                          onClick={() => handleWhatsApp(m)}
                          className="p-2 text-[#25D366] hover:bg-green-50 rounded-xl transition-all"
                          title="Enviar resumen por WhatsApp"
                        >
                          <MessageCircle size={18} />
                        </button>
                        <button 
                          onClick={() => handleOpenFolder(m)}
                          className="p-2 text-amber-600 hover:bg-amber-50 rounded-xl transition-all"
                          title="Abrir ubicación del PDF (para enviar archivo)"
                        >
                          <Folder size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="p-6 border-t border-gray-50 flex items-center justify-between bg-gray-50/50">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Mostrando {deliveries.length} de {total} entregas
            </p>
            <div className="flex gap-2">
              <button 
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
                className="p-2 bg-white border border-gray-200 rounded-xl disabled:opacity-30 hover:bg-gray-50 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center px-4 bg-white border border-gray-200 rounded-xl">
                <span className="text-sm font-bold text-gray-700">{page} / {totalPages}</span>
              </div>
              <button 
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
                className="p-2 bg-white border border-gray-200 rounded-xl disabled:opacity-30 hover:bg-gray-50 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
