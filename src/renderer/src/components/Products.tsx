import { useState, useEffect, useMemo } from 'react'
import { Search, RefreshCw, FileSpreadsheet, Edit2, Trash2, ChevronLeft, ChevronRight, History, X } from 'lucide-react'
import { useToast } from './Toast'
import type { Product } from '../types'

const ITEMS_PER_PAGE = 12

export default function Products() {
  const { success, error, warning } = useToast()
  const [products, setProducts] = useState<Product[]>([])
  const [importPreview, setImportPreview] = useState<{ filePath: string, analysis: any[] } | null>(null)
  const [syncing, setSyncing] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [historyProduct, setHistoryProduct] = useState<Product | null>(null)
  const [priceHistory, setPriceHistory] = useState<Array<{ id: number; price: number; date: string }>>([])

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      const data = await window.api.getProducts()
      setProducts(data || [])
    } catch (error) {
      console.error('Error loading products:', error)
    }
  }

  const handleStartSync = async () => {
    try {
      const result = await window.api.analyzeProductImport()
      if (result) {
        setImportPreview(result)
      }
    } catch (e) {
      console.error('[Products] Analyze error:', e)
      error('Error al analizar el archivo Excel.')
    }
  }

  const handleConfirmSync = async () => {
    if (!importPreview) return
    setSyncing(true)
    try {
      const result = await window.api.importProducts(importPreview.filePath)
      success(`Sincronización completa: ${result.added} nuevos, ${result.updated} actualizados.`)
      setImportPreview(null)
      await loadProducts()
    } catch (e) {
      console.error('[Products] Sync error:', e)
      error('Error al sincronizar los productos.')
    } finally {
      setSyncing(false)
    }
  }

  const handleToggleActive = async (product: Product) => {
    try {
      await window.api.updateProduct(product.code, { active: !product.active })
      await loadProducts()
    } catch (e) {
      console.error(e)
      error('Error al actualizar el producto.')
    }
  }

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingProduct) return
    try {
      await window.api.updateProduct(editingProduct.code, {
        description: editingProduct.description,
        category: editingProduct.category ?? undefined,
        price: typeof editingProduct.price === 'string' ? parseFloat(editingProduct.price) : editingProduct.price
      })
      setEditingProduct(null)
      await loadProducts()
      success('Producto actualizado.')
    } catch (e) {
      console.error(e)
      error('Error al actualizar el producto.')
    }
  }

  const viewHistory = async (product: Product) => {
    try {
      const history = await window.api.getPriceHistory(product.code)
      setPriceHistory(history as Array<{ id: number; price: number; date: string }>)
      setHistoryProduct(product)
    } catch (e) {
      console.error(e)
      error('Error al cargar el historial de precios.')
    }
  }

  const filteredProducts = useMemo(
    () => products.filter(p =>
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [products, searchTerm]
  )

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Catálogo de Productos</h2>
          <p className="text-gray-500">Gestión completa de artículos y precios históricos.</p>
        </div>
        <button 
          onClick={handleStartSync}
          disabled={syncing}
          className="bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-3 hover:bg-black transition-all disabled:opacity-50 shadow-lg"
        >
          {syncing ? <RefreshCw className="animate-spin" size={20} /> : <RefreshCw size={20} />}
          Sincronizar Lista
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar por código o descripción..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 transition-all"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Código</th>
                <th className="px-6 py-4">Descripción</th>
                <th className="px-6 py-4 text-right">Precio Neto</th>
                <th className="px-6 py-4 text-right">c/IVA (21%)</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedProducts.map((product) => (
                <tr key={product.code} className={`hover:bg-gray-50 transition-colors ${!product.active ? 'opacity-50' : ''}`}>
                  <td className="px-6 py-4">
                    <span className={`w-2 h-2 rounded-full inline-block ${product.active ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-gray-400">{product.code}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-800 line-clamp-1">{product.description}</p>
                    <p className="text-[10px] text-gray-400 uppercase">{product.category}</p>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-gray-600">
                    ${product.price.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-[#c5171a]">
                    ${(product.price * 1.21).toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                       <button 
                         onClick={() => viewHistory(product)}
                         className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
                         title="Ver historial de precios"
                       >
                         <History size={16} />
                       </button>
                       <button 
                         onClick={() => setEditingProduct({...product})}
                         className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                       >
                         <Edit2 size={16} />
                       </button>
                       <button 
                         onClick={() => handleToggleActive(product)}
                         className={`p-2 rounded-lg transition-all ${product.active ? 'text-red-400 hover:bg-red-50' : 'text-green-500 hover:bg-green-50'}`}
                       >
                         <Trash2 size={16} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="p-6 border-t border-gray-50 flex items-center justify-between">
             <p className="text-sm text-gray-500">Página {currentPage} de {totalPages}</p>
             <div className="flex gap-2">
                <button 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  className="p-2 bg-gray-50 rounded-lg disabled:opacity-30"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  className="p-2 bg-gray-50 rounded-lg disabled:opacity-30"
                >
                  <ChevronRight size={20} />
                </button>
             </div>
          </div>
        )}
      </div>

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-xl font-bold mb-6">Editar Producto</h3>
            <form onSubmit={handleUpdateProduct} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-2 uppercase">Descripción</label>
                <input 
                  type="text" required
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl"
                  value={editingProduct.description}
                  onChange={e => setEditingProduct({...editingProduct, description: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-2 uppercase">Categoría</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl"
                  value={editingProduct.category ?? ''}
                  onChange={e => setEditingProduct({...editingProduct, category: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-2 uppercase">Precio Neto ($)</label>
                  <input 
                    type="number" step="0.01" required
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl font-bold"
                    value={String(editingProduct.price)}
                    onChange={e => setEditingProduct({...editingProduct, price: parseFloat(e.target.value) || 0})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-2 uppercase">Precio c/IVA ($)</label>
                  <input 
                    type="number" step="0.01" required
                    className="w-full px-4 py-3 bg-red-50 text-[#c5171a] rounded-xl font-bold"
                    value={(editingProduct.price * 1.21).toFixed(2)}
                    onChange={e => setEditingProduct({...editingProduct, price: parseFloat((parseFloat(e.target.value) / 1.21).toFixed(2))})}
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-8 pt-4 border-t">
                <button type="button" onClick={() => setEditingProduct(null)} className="flex-1 py-3 text-gray-500 font-bold">Cancelar</button>
                <button type="submit" className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold">Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* History Modal */}
      {historyProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            <div className="flex items-center justify-between mb-6">
               <div>
                 <h3 className="text-xl font-bold">Historial de Precios</h3>
                 <p className="text-sm text-gray-500">{historyProduct.description}</p>
               </div>
               <button onClick={() => setHistoryProduct(null)} className="p-2 hover:bg-gray-100 rounded-full"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-auto pr-2 space-y-2">
               {priceHistory.map((h, i) => (
                 <div key={h.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div>
                       <p className="text-sm font-bold text-gray-800">${h.price.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                       <p className="text-[10px] text-gray-400 uppercase">{i === 0 ? 'Precio Actual' : 'Precio Anterior'}</p>
                    </div>
                    <p className="text-xs text-gray-500">{new Date(h.date).toLocaleString('es-AR')}</p>
                 </div>
               ))}
               {priceHistory.length === 0 && <p className="text-center py-10 text-gray-400 italic">No hay historial para este producto.</p>}
            </div>
          </div>
        </div>
      )}

      {/* Sync Preview Modal */}
      {importPreview && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between mb-8">
               <div>
                 <h3 className="text-2xl font-black text-gray-900">Vista Previa de Sincronización</h3>
                 <p className="text-gray-500 font-medium">Revisa los cambios detectados en el archivo Excel.</p>
               </div>
               <button onClick={() => setImportPreview(null)} className="p-2 hover:bg-gray-100 rounded-full transition-all"><X size={28} className="text-gray-400" /></button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
               <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Nuevos</p>
                  <p className="text-2xl font-black text-blue-600">{importPreview.analysis.filter(a => a.type === 'NEW').length}</p>
               </div>
               <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                  <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Actualizados</p>
                  <p className="text-2xl font-black text-orange-600">{importPreview.analysis.filter(a => a.type === 'UPDATE').length}</p>
               </div>
               <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Sin Cambios</p>
                  <p className="text-2xl font-black text-gray-400">{importPreview.analysis.filter(a => a.type === 'NO_CHANGE').length}</p>
               </div>
            </div>

            <div className="flex-1 overflow-auto pr-2 space-y-3 mb-8">
               <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 mb-2">Principales Actualizaciones</h4>
               {importPreview.analysis.filter(a => a.type !== 'NO_CHANGE').slice(0, 100).map((a, i) => (
                 <div key={i} className={`p-4 rounded-2xl border ${a.type === 'NEW' ? 'bg-blue-50/30 border-blue-100' : 'bg-gray-50 border-gray-100'} flex items-center justify-between gap-4`}>
                    <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-800 text-sm truncate">{a.description}</p>
                       <p className="text-[10px] text-gray-400 font-mono">{a.code}</p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                       {a.type === 'UPDATE' ? (
                         <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 line-through">${a.oldPrice.toLocaleString()}</span>
                            <span className="text-sm font-black text-orange-600">${a.newPrice.toLocaleString()}</span>
                         </div>
                       ) : (
                         <span className="text-sm font-black text-blue-600">${a.newPrice.toLocaleString()}</span>
                       )}
                       <span className={`text-[10px] font-black uppercase ml-2 ${a.type === 'NEW' ? 'text-blue-500' : 'text-orange-500'}`}>
                         {a.type === 'NEW' ? 'Nuevo' : 'Precio'}
                       </span>
                    </div>
                 </div>
               ))}
               {importPreview.analysis.filter(a => a.type !== 'NO_CHANGE').length > 100 && (
                 <p className="text-center text-xs text-gray-400 italic py-2">Y {importPreview.analysis.filter(a => a.type !== 'NO_CHANGE').length - 100} cambios más...</p>
               )}
               {importPreview.analysis.filter(a => a.type !== 'NO_CHANGE').length === 0 && (
                 <div className="text-center py-10">
                    <p className="text-gray-400 italic">No se detectaron cambios respecto a la lista actual.</p>
                 </div>
               )}
            </div>

            <div className="flex gap-4 pt-6 border-t border-gray-100">
               <button 
                 onClick={() => setImportPreview(null)} 
                 className="flex-1 py-4 text-gray-500 font-bold hover:bg-gray-50 rounded-2xl transition-all"
               >
                 Cancelar
               </button>
               <button 
                 onClick={handleConfirmSync}
                 disabled={syncing || importPreview.analysis.filter(a => a.type !== 'NO_CHANGE').length === 0}
                 className="flex-[2] bg-gray-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl disabled:opacity-30"
               >
                 {syncing ? 'Sincronizando...' : 'Confirmar y Aplicar Cambios'}
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
