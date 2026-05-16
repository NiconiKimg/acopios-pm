import { useState, useEffect } from 'react'
import { Search, History, Wallet, Package, ClipboardCheck, ChevronRight, MapPin, User, X, ChevronLeft } from 'lucide-react'
import type { GlobalHistoryItem } from '../types'

const PAGE_SIZE = 50

export default function GlobalHistory() {
  const [items, setItems] = useState<GlobalHistoryItem[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMovement, setSelectedMovement] = useState<GlobalHistoryItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadHistory(page, searchTerm) }, [page])

  const loadHistory = async (p: number, search?: string) => {
    setLoading(true)
    try {
      const data = await window.api.getGlobalHistory(p, PAGE_SIZE, search || undefined)
      setItems(data.items)
      setTotal(data.total)
    } catch (err) {
      console.error('[History] Failed to load:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    setPage(1)
    loadHistory(1, term)
  }

  const totalPages = Math.ceil(total / PAGE_SIZE)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PAYMENT': return { icon: Wallet, color: 'bg-green-50 text-green-600', label: 'Pago' }
      case 'DELIVERY': return { icon: Package, color: 'bg-orange-50 text-orange-600', label: 'Entrega' }
      case 'STOCKPILE': return { icon: ClipboardCheck, color: 'bg-blue-50 text-blue-600', label: 'Acopio' }
      default: return { icon: History, color: 'bg-gray-50 text-gray-600', label: 'Movimiento' }
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Control de Movimientos</h2>
        <p className="text-gray-500">Historial global de pagos, entregas y acopios realizados.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between gap-4">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por cliente, DNI u obra..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 transition-all"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {total > 0 && <p className="text-sm text-gray-400 shrink-0">{total} registros</p>}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">Fecha / Hora</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4">Cliente / Obra</th>
                <th className="px-6 py-4 text-right">Monto / Valor</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <tr key={i}>
                    <td colSpan={5} className="px-6 py-4">
                      <div className="h-4 bg-gray-100 rounded animate-pulse" />
                    </td>
                  </tr>
                ))
              ) : items.map((item, idx) => {
                const type = getTypeIcon(item.globalType)
                return (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">
                      {new Date(item.date).toLocaleString('es-AR')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg ${type.color}`}><type.icon size={16} /></div>
                        <span className="font-bold text-xs uppercase tracking-tighter text-gray-700">{type.label}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-800">{item.work.client.name} {item.work.client.lastName}</p>
                      <p className="text-[10px] text-gray-400 flex items-center gap-1 font-bold uppercase">
                        <MapPin size={10} /> {item.work.name}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-right font-black text-gray-800">
                      {item.globalType === 'PAYMENT' ? (
                        <span className="text-green-600">+${(item.amount ?? 0).toLocaleString()}</span>
                      ) : item.globalType === 'STOCKPILE' ? (
                        <span className="text-blue-600">${((item.quantity ?? 0) * (item.price ?? 0)).toLocaleString()}</span>
                      ) : (
                        <span className="text-gray-400">---</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => setSelectedMovement(item)} className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 justify-end ml-auto">
                        Ver detalles <ChevronRight size={14} />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {!loading && items.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <History size={48} className="mx-auto text-gray-200" />
              <p className="text-gray-400">No hay movimientos registrados.</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="p-6 border-t border-gray-50 flex items-center justify-between">
            <p className="text-sm text-gray-500">Página {page} de {totalPages}</p>
            <div className="flex gap-2">
              <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="p-2 bg-gray-50 rounded-lg disabled:opacity-30 hover:bg-gray-100">
                <ChevronLeft size={18} />
              </button>
              <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="p-2 bg-gray-50 rounded-lg disabled:opacity-30 hover:bg-gray-100">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {selectedMovement && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Detalle del Movimiento</h3>
              <button onClick={() => setSelectedMovement(null)} className="p-2 hover:bg-gray-100 rounded-full"><X size={20} /></button>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className={`p-3 rounded-xl ${getTypeIcon(selectedMovement.globalType).color}`}>
                  {(() => { const T = getTypeIcon(selectedMovement.globalType).icon; return <T size={24} /> })()}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Tipo</p>
                  <p className="font-black text-gray-800">{getTypeIcon(selectedMovement.globalType).label}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Fecha</p>
                  <p className="font-bold text-gray-800">{new Date(selectedMovement.date).toLocaleString('es-AR')}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Cliente / Obra</p>
                  <p className="font-bold text-lg">{selectedMovement.work.client.name} {selectedMovement.work.client.lastName}</p>
                  <p className="text-sm text-gray-500">{selectedMovement.work.name}</p>
                </div>

                {selectedMovement.globalType === 'STOCKPILE' && selectedMovement.product && (
                  <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                    <p className="text-[10px] font-bold text-blue-400 uppercase mb-2">Producto Acopiado</p>
                    <p className="font-bold text-blue-800">{selectedMovement.product.description}</p>
                    <div className="flex justify-between mt-2 text-sm text-blue-600 font-bold">
                      <span>Cantidad: {selectedMovement.quantity}</span>
                      <span>Unit: ${(selectedMovement.price ?? 0).toLocaleString()}</span>
                    </div>
                  </div>
                )}

                {selectedMovement.globalType === 'DELIVERY' && selectedMovement.items && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Productos Entregados</p>
                    {selectedMovement.items.map((it) => (
                      <div key={it.id} className="flex justify-between items-center p-3 bg-orange-50 rounded-xl border border-orange-100">
                        <p className="font-bold text-xs text-orange-800">{it.product.description}</p>
                        <p className="font-black text-orange-600">x{it.quantity}</p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedMovement.observations && (
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Observaciones</p>
                    <p className="text-sm text-gray-600 italic">"{selectedMovement.observations}"</p>
                  </div>
                )}

                {selectedMovement.withdrawer && (
                  <div className="p-4 bg-gray-800 text-white rounded-2xl shadow-lg">
                    <p className="text-[10px] font-bold text-gray-500 uppercase mb-1 flex items-center gap-1"><User size={10} /> Retirado por</p>
                    <p className="font-bold">{selectedMovement.withdrawer.name}</p>
                    <p className="text-xs text-gray-400">DNI: {selectedMovement.withdrawer.dni}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
