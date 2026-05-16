import { useState, useEffect, useMemo, useCallback } from 'react'
import { ArrowLeft, Wallet, Package, History, MessageCircle, ClipboardCheck, Trash2, Plus, X, Printer, Search, Minus, Folder } from 'lucide-react'
import { generateRemito, shareRemitoWhatsApp, saveRemito } from '../utils/pdf'
import { useToast } from './Toast'
import type { Stockpile, Movement, Product, CompanyConfig } from '../types'

interface WorkDetailProps {
  work: {
    id: number
    name: string
    address: string | null
    clientId: number
    client?: { id: number; name: string; lastName: string | null; dni: string | null; phone: string | null }
  }
  onBack: () => void
}

type ViewState = 'SUMMARY' | 'CREATE_STOCKPILE' | 'CREATE_DELIVERY' | 'CREATE_PAYMENT'

export default function WorkDetail({ work: initialWork, onBack }: WorkDetailProps) {
  const { success, error, warning } = useToast()
  const [work] = useState(initialWork)
  const [stockpiles, setStockpiles] = useState<Stockpile[]>([])
  const [movements, setMovements] = useState<Movement[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [company, setCompany] = useState<CompanyConfig | null>(null)
  const [saving, setSaving] = useState(false)
  
  const [view, setView] = useState<ViewState>('SUMMARY')

  // Create Stockpile State
  const [stockpileItems, setStockpileItems] = useState<any[]>([])
  const [productSearch, setProductSearch] = useState('')
  const [receivedPayment, setReceivedPayment] = useState('')
  
  // Create Payment State
  const [newPayment, setNewPayment] = useState({ amount: '', observations: '' })
  
  // Create Delivery State
  const [deliveryItems, setDeliveryItems] = useState<any[]>([])
  const [deliveryInfo, setDeliveryInfo] = useState({
    withdrawerName: '',
    withdrawerDni: '',
    observations: '',
    isOwner: false
  })

  useEffect(() => {
    refreshData()
    loadProducts()
    loadCompany()
  }, [])

  const refreshData = useCallback(async () => {
    try {
      const [sp, mv] = await Promise.all([
        window.api.getStockpiles(initialWork.id),
        window.api.getMovements(initialWork.id)
      ])
      setStockpiles(sp ?? [])
      setMovements(mv ?? [])
    } catch (err) {
      console.error('[WorkDetail] refreshData failed:', err)
    }
  }, [initialWork.id])

  const loadProducts = async () => {
    try {
      const data = await window.api.getProducts()
      setProducts(data.filter((p) => p.active))
    } catch (err) {
      console.error('[WorkDetail] loadProducts failed:', err)
    }
  }

  const loadCompany = async () => {
    try {
      const config = await window.api.getCompanyConfig()
      setCompany(config)
    } catch (err) {
      console.error('[WorkDetail] loadCompany failed:', err)
    }
  }

  // --- Stockpile Actions ---
  const addStockpileItem = (product: any) => {
    setStockpileItems([...stockpileItems, { 
      productId: product.code, 
      description: product.description,
      quantity: 1, 
      price: product.price 
    }])
    setProductSearch('')
  }

  const handleSaveStockpiles = async () => {
    if (stockpileItems.length === 0) return
    const newItemsValue = stockpileItems.reduce((acc, item) => acc + (parseFloat(item.quantity || '0') * parseFloat(item.price || '0')), 0)
    const currentPaid = movements.filter(m => m.type === 'PAYMENT').reduce((acc, m) => acc + (m.amount || 0), 0)
    const currentStockpiled = stockpiles.reduce((acc, s) => acc + (s.quantity * s.price), 0)
    const availableBalance = currentPaid - currentStockpiled
    const additionalPayment = parseFloat(receivedPayment || '0')
    const totalCoverage = availableBalance + additionalPayment
    if (newItemsValue > totalCoverage) {
      warning(`Acopio ($${newItemsValue.toLocaleString()}) supera el disponible ($${totalCoverage.toLocaleString()}). Se registra como deuda parcial.`)
    }
    setSaving(true)
    try {
      for (const item of stockpileItems) {
        await window.api.createStockpile({
          workId: work.id,
          productId: item.productId,
          quantity: parseFloat(item.quantity),
          price: parseFloat(item.price),
          observations: newItemsValue <= totalCoverage ? 'TOTALMENTE PAGO' : 'PAGO PARCIAL / DEUDA'
        })
      }
      if (additionalPayment > 0) {
        await window.api.createMovement({ type: 'PAYMENT', amount: additionalPayment, workId: work.id, observations: 'Pago vinculado a acopio multi-producto.' })
      }
      setStockpileItems([])
      setReceivedPayment('')
      setView('SUMMARY')
      await refreshData()
      success('Acopio registrado correctamente.')
    } catch (err) {
      console.error('[WorkDetail] saveStockpiles failed:', err)
      error('Error al guardar el acopio.')
    } finally {
      setSaving(false)
    }
  }

  // --- Delivery Actions ---
  const addItemToDelivery = (stockpile: any) => {
    if (deliveryItems.find(i => i.stockpileId === stockpile.id)) return
    setDeliveryItems([...deliveryItems, { 
      stockpileId: stockpile.id, 
      productId: stockpile.productId, 
      description: stockpile.product.description,
      quantity: 1,
      max: stockpile.quantity - stockpile.withdrawn
    }])
  }

  const addNewProductToDelivery = (product: any) => {
    setDeliveryItems([...deliveryItems, {
      stockpileId: null,
      productId: product.code,
      description: product.description,
      quantity: 1,
      max: 0,
      price: product.price
    }])
  }

  const handleSaveDelivery = async () => {
    const newItems = deliveryItems.filter(i => !i.stockpileId || parseFloat(i.quantity) > i.max)
    if (newItems.length > 0) {
      warning(`Materiales extras al precio actual: ${newItems.map(i => i.description).join(', ')}`)
    }
    setSaving(true)
    try {
      const finalItems: { stockpileId: number | null; productId: string; quantity: number; price: number }[] = []
      for (const item of deliveryItems) {
        let stockpileId = item.stockpileId
        if (!stockpileId) {
          const created = await window.api.createStockpile({ workId: work.id, productId: item.productId, quantity: 0, price: item.price, observations: 'ENTREGA DIRECTA (SIN ACOPIO PREVIO)' })
          stockpileId = created.id
        }
        finalItems.push({ stockpileId, productId: item.productId, quantity: parseFloat(item.quantity), price: item.stockpileId ? (stockpiles.find(s => s.id === item.stockpileId)?.price ?? item.price) : item.price })
      }
      await window.api.createMovement({
        type: 'DELIVERY', workId: work.id, items: finalItems,
        withdrawer: { name: deliveryInfo.isOwner ? `${work.client?.name ?? ''} ${work.client?.lastName ?? ''}`.trim() : deliveryInfo.withdrawerName, dni: deliveryInfo.isOwner ? (work.client?.dni ?? '') : deliveryInfo.withdrawerDni },
        observations: deliveryInfo.observations
      })
      setDeliveryItems([])
      setDeliveryInfo({ withdrawerName: '', withdrawerDni: '', observations: '', isOwner: false })
      setView('SUMMARY')
      await refreshData()
      success('Entrega registrada correctamente.')
    } catch (err) {
      console.error('[WorkDetail] saveDelivery failed:', err)
      error('Error al registrar la entrega.')
    } finally {
      setSaving(false)
    }
  }

  const handleSavePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await window.api.createMovement({ type: 'PAYMENT', amount: parseFloat(newPayment.amount), workId: work.id, observations: newPayment.observations })
      setNewPayment({ amount: '', observations: '' })
      setView('SUMMARY')
      await refreshData()
      success('Pago registrado correctamente.')
    } catch (err) {
      console.error('[WorkDetail] savePayment failed:', err)
      error('Error al registrar el pago.')
    } finally {
      setSaving(false)
    }
  }

  const sendWhatsApp = () => {
    const phone = work.client?.phone?.replace(/\D/g, '')
    if (!phone) {
      warning('El cliente no tiene un teléfono registrado.')
      return
    }
    const balanceValue = totalPaid - totalStockpiledValue

    let message = `*Estado de Cuenta - Pedemonte Materiales*\n`
    message += `Obra: *${work.name}*\n\n`
    message += `*Saldo Financiero:* $${balanceValue.toLocaleString('es-AR')} ${balanceValue < 0 ? '(Deuda)' : '(A favor)'}\n\n`
    message += `*Materiales Pendientes:*\n`
    
    const productSummary: any = {}
    stockpiles.forEach(s => {
      if (!productSummary[s.productId]) {
        productSummary[s.productId] = { desc: s.product.description, total: 0, withdrawn: 0 }
      }
      productSummary[s.productId].total += s.quantity
      productSummary[s.productId].withdrawn += s.withdrawn
    })

    Object.values(productSummary).forEach((p: any) => {
      const pending = p.total - p.withdrawn
      if (pending !== 0) {
        message += `• ${p.desc}: ${pending} uds.\n`
      }
    })

    const url = `https://wa.me/${phone.startsWith('54') ? phone : '54' + phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handlePrintRemito = async (m: Movement) => {
    if (!company) {
      warning('La configuración de empresa aún no está disponible.')
      return
    }
    try {
      await generateRemito(m, work, company)
      success('Remito generado correctamente.')
    } catch (err) {
      console.error('[WorkDetail] generateRemito failed:', err)
      error('No se pudo generar el remito. Verificá la consola.')
    }
  }

  const updateQty = (list: any[], idx: number, setter: (l: any[]) => void, delta: number) => {
    const updated = [...list]
    if (!updated[idx]) return
    const val = parseFloat(updated[idx].quantity || '0')
    updated[idx].quantity = Math.max(0, val + delta)
    setter(updated)
  }

  // Memoized calculations
  const totalPaid = useMemo(() => movements.filter(m => m.type === 'PAYMENT').reduce((acc, m) => acc + (m.amount ?? 0), 0), [movements])
  const totalStockpiledValue = useMemo(() => stockpiles.reduce((acc, s) => acc + s.quantity * s.price, 0), [stockpiles])
  const totalWithdrawnValue = useMemo(() => movements.filter(m => m.type === 'DELIVERY').reduce((acc, m) => acc + (m.items?.reduce((iAcc, item) => iAcc + item.quantity * item.price, 0) ?? 0), 0), [movements])
  const balance = totalPaid - totalStockpiledValue

  if (view === 'CREATE_STOCKPILE') {
    const filteredProducts = productSearch
      ? products.filter(p =>
          p.description.toLowerCase().includes(productSearch.toLowerCase()) ||
          p.code.toLowerCase().includes(productSearch.toLowerCase())
        ).slice(0, 5)
      : []
    
    const currentOpTotal = stockpileItems.reduce((acc, item) => acc + (parseFloat(item.quantity || '0') * parseFloat(item.price || '0')), 0)

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between border-b pb-6">
          <div className="flex items-center gap-4">
             <button onClick={() => setView('SUMMARY')} className="p-2 hover:bg-gray-100 rounded-full transition-all"><X size={24} /></button>
             <div>
               <h2 className="text-2xl font-bold text-gray-800">Nueva Operación de Acopio</h2>
               <p className="text-gray-500">Selecciona materiales y registra el pago recibido.</p>
             </div>
          </div>
          <button
            onClick={handleSaveStockpiles}
            disabled={stockpileItems.length === 0 || saving}
            className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 disabled:opacity-30"
          >
            {saving ? 'Guardando...' : 'Confirmar Operación'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Buscar Productos</h3>
                 <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type="text" placeholder="Buscar..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm" value={productSearch} onChange={e => setProductSearch(e.target.value)} />
                 </div>
                 <div className="space-y-2">
                    {productSearch && filteredProducts.map(p => (
                      <button key={p.code} onClick={() => addStockpileItem(p)} className="w-full text-left p-3 hover:bg-blue-50 rounded-xl transition-all border border-transparent hover:border-blue-100 group">
                        <p className="font-bold text-xs text-gray-800 group-hover:text-blue-700">{p.description}</p>
                        <p className="text-[10px] text-gray-400">$ {p.price.toLocaleString()}</p>
                      </button>
                    ))}
                 </div>
              </div>

              <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-xl space-y-4">
                 <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Cobro de la Operación</h3>
                 <div>
                    <label className="block text-[10px] text-gray-400 uppercase mb-2">Total a Pagar</label>
                    <p className="text-3xl font-black text-blue-400">${currentOpTotal.toLocaleString('es-AR')}</p>
                 </div>
                 <div>
                    <label className="block text-[10px] text-gray-400 uppercase mb-2">Dinero Recibido ($)</label>
                    <input 
                      type="number" step="any"
                      className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-2xl font-black text-green-400 focus:ring-2 focus:ring-green-400"
                      placeholder="0"
                      value={receivedPayment}
                      onChange={e => setReceivedPayment(e.target.value)}
                    />
                 </div>
              </div>
           </div>

           <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <tr>
                      <th className="px-6 py-4">Producto</th>
                      <th className="px-6 py-4 w-40 text-center">Cantidad</th>
                      <th className="px-6 py-4 w-48 text-right">Precio Actual</th>
                      <th className="px-6 py-4 w-40 text-right">Total</th>
                      <th className="px-6 py-4 w-16"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {stockpileItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4">
                          <p className="font-bold text-gray-800 text-sm">{item.description}</p>
                          <p className="text-[10px] text-gray-400 uppercase">{item.productId}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                             <button onClick={() => updateQty(stockpileItems, idx, setStockpileItems, -1)} className="p-1 hover:bg-gray-100 rounded text-gray-400"><Minus size={14} /></button>
                             <input type="number" step="any" className="w-16 text-center bg-gray-50 border-none rounded-lg px-2 py-1 font-bold text-sm" value={item.quantity} onChange={e => { const updated = [...stockpileItems]; updated[idx].quantity = e.target.value; setStockpileItems(updated); }} />
                             <button onClick={() => updateQty(stockpileItems, idx, setStockpileItems, 1)} className="p-1 hover:bg-gray-100 rounded text-gray-400"><Plus size={14} /></button>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <input type="number" step="any" className="w-full text-right bg-gray-50 border-none rounded-xl px-4 py-2 font-bold text-blue-600 text-sm" value={item.price} onChange={e => { const updated = [...stockpileItems]; updated[idx].price = e.target.value; setStockpileItems(updated); }} />
                        </td>
                        <td className="px-6 py-4 text-right font-black text-gray-800 text-sm">${(parseFloat(item.quantity || '0') * parseFloat(item.price || '0')).toLocaleString('es-AR')}</td>
                        <td className="px-6 py-4"><button onClick={() => setStockpileItems(stockpileItems.filter((_, i) => i !== idx))} className="text-red-300 hover:text-red-500"><Trash2 size={18} /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
           </div>
        </div>
      </div>
    )
  }

  if (view === 'CREATE_DELIVERY') {
    const filteredExtra = products.filter(p => p.description.toLowerCase().includes(productSearch.toLowerCase()) || p.code.toLowerCase().includes(productSearch.toLowerCase())).slice(0, 5)
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between border-b pb-6">
          <div className="flex items-center gap-4">
             <button onClick={() => setView('SUMMARY')} className="p-2 hover:bg-gray-100 rounded-full transition-all"><X size={24} /></button>
             <div>
               <h2 className="text-2xl font-bold text-gray-800">Registrar Entrega</h2>
               <p className="text-gray-500">Los materiales excedentes se cargarán al precio actual.</p>
             </div>
          </div>
          <button onClick={handleSaveDelivery} disabled={deliveryItems.length === 0 || saving} className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-black transition-all shadow-lg disabled:opacity-30">{saving ? 'Guardando...' : 'Confirmar Entrega'}</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Acopios Disponibles</h3>
                 <div className="space-y-2 max-h-[300px] overflow-auto pr-2">
                    {stockpiles.map(s => (
                      <button key={s.id} onClick={() => addItemToDelivery(s)} className="w-full text-left p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-orange-200 hover:bg-orange-50 transition-all">
                        <p className="font-bold text-sm text-gray-800">{s.product.description}</p>
                        <p className="text-xs text-orange-600 font-bold mt-1">Disp: {s.quantity - s.withdrawn}</p>
                      </button>
                    ))}
                 </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Agregar Producto Extra</h3>
                 <div className="relative mb-4"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} /><input type="text" placeholder="Buscar..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-xs" value={productSearch} onChange={e => setProductSearch(e.target.value)} /></div>
                 <div className="space-y-2">{productSearch && filteredExtra.map(p => (<button key={p.code} onClick={() => { addNewProductToDelivery(p); setProductSearch('') }} className="w-full text-left p-3 hover:bg-orange-50 rounded-xl transition-all border border-transparent hover:border-orange-100"><p className="font-bold text-xs text-gray-800">{p.description}</p></button>))}</div>
              </div>
           </div>
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                 <h3 className="text-lg font-bold text-gray-800 mb-6">Materiales a Retirar</h3>
                 <div className="space-y-4">
                    {deliveryItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                         <div className="flex-1">
                            <p className="font-bold text-gray-800 text-sm">{item.description}</p>
                            {!item.stockpileId && <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-black uppercase">Extra - Precio Actual</span>}
                         </div>
                         <div className="flex items-center gap-3">
                            <button onClick={() => updateQty(deliveryItems, idx, setDeliveryItems, -1)} className="p-1 hover:bg-gray-100 rounded text-gray-400"><Minus size={14} /></button>
                            <input type="number" step="any" className="w-16 text-center bg-white border border-gray-200 rounded-lg px-2 py-1 font-bold text-sm" value={item.quantity} onChange={e => { const updated = [...deliveryItems]; updated[idx].quantity = e.target.value; setDeliveryItems(updated); }} />
                            <button onClick={() => updateQty(deliveryItems, idx, setDeliveryItems, 1)} className="p-1 hover:bg-gray-100 rounded text-gray-400"><Plus size={14} /></button>
                         </div>
                         <button onClick={() => setDeliveryItems(deliveryItems.filter((_, i) => i !== idx))} className="p-2 text-gray-300 hover:text-red-500"><Trash2 size={20} /></button>
                      </div>
                    ))}
                 </div>
                 <div className="mt-8 pt-8 border-t space-y-6">
                    <h4 className="text-sm font-bold text-gray-800">Responsable</h4>
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100"><input type="checkbox" id="isOwner" className="w-5 h-5 rounded-lg text-blue-600 border-blue-200" checked={deliveryInfo.isOwner} onChange={e => setDeliveryInfo({...deliveryInfo, isOwner: e.target.checked})} /><label htmlFor="isOwner" className="font-bold text-blue-700 cursor-pointer">Retira Titular ({work.client?.name || 'Titular'})</label></div>
                    {!deliveryInfo.isOwner && (
                      <div className="grid grid-cols-2 gap-4">
                         <input type="text" placeholder="Nombre" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm" value={deliveryInfo.withdrawerName} onChange={e => setDeliveryInfo({...deliveryInfo, withdrawerName: e.target.value})} />
                         <input type="text" placeholder="DNI" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm" value={deliveryInfo.withdrawerDni} onChange={e => setDeliveryInfo({...deliveryInfo, withdrawerDni: e.target.value})} />
                      </div>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </div>
    )
  }

  if (view === 'CREATE_PAYMENT') {
    return (
      <div className="max-w-xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
        <div className="flex items-center gap-4"><button onClick={() => setView('SUMMARY')} className="p-2 hover:bg-gray-100 rounded-full transition-all"><ArrowLeft size={24} /></button><h2 className="text-2xl font-bold text-gray-800">Ingresar Dinero</h2></div>
        <form onSubmit={handleSavePayment} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
           <div><label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">Monto ($)</label><input type="number" step="any" required autoFocus className="w-full bg-gray-50 border-none rounded-2xl px-6 py-6 text-4xl font-black text-green-600" value={newPayment.amount} onChange={e => setNewPayment({...newPayment, amount: e.target.value})} /></div>
           <textarea className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 h-32 text-sm" placeholder="Observaciones..." value={newPayment.observations} onChange={e => setNewPayment({...newPayment, observations: e.target.value})}></textarea>
           <button type="submit" disabled={saving} className="w-full py-5 bg-green-600 text-white rounded-2xl font-black text-xl hover:bg-green-700 disabled:opacity-50">{saving ? 'Guardando...' : 'Guardar Pago'}</button>
        </form>
      </div>
    )
  }

  return (
    <div className="space-y-8 pb-20 animate-in fade-in duration-500">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4"><button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><ArrowLeft size={24} /></button><div><h2 className="text-2xl font-bold text-gray-800">{work.name}</h2><p className="text-sm text-gray-500">{work.address}</p></div></div>
        <div className="flex flex-wrap gap-2">
           <button onClick={() => setView('CREATE_STOCKPILE')} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-100"><ClipboardCheck size={20} /> Nueva Operación</button>
           <button onClick={() => setView('CREATE_DELIVERY')} className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black shadow-lg"><Package size={20} /> Registrar Entrega</button>
           <button onClick={() => setView('CREATE_PAYMENT')} className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 shadow-lg"><Wallet size={20} /> Ingresar Dinero</button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
         <button onClick={sendWhatsApp} className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-xl font-bold text-xs hover:bg-green-600 shadow-sm"><MessageCircle size={16} /> WhatsApp</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Saldo de Cuenta</p><p className={`text-xl font-black ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>${balance.toLocaleString('es-AR')}</p></div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Pagado</p><p className="text-xl font-black text-gray-800">${totalPaid.toLocaleString('es-AR')}</p></div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Acopiado</p><p className="text-xl font-black text-blue-600">${totalStockpiledValue.toLocaleString('es-AR')}</p></div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Entregado</p><p className="text-xl font-black text-orange-500">${totalWithdrawnValue.toLocaleString('es-AR')}</p></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3 text-blue-600"><ClipboardCheck size={20} /><h3 className="font-bold text-gray-800">Estado de Acopios</h3></div>
          <div className="divide-y divide-gray-50 max-h-[400px] overflow-auto">
             {stockpiles.map(s => {
               const pending = s.quantity - s.withdrawn
               return (
                 <div key={s.id} className={`p-5 flex items-center justify-between hover:bg-gray-50 transition-all ${pending < 0 ? 'bg-red-50' : ''}`}>
                   <div className="flex-1">
                     <p className="font-bold text-sm text-gray-800">{s.product.description}</p>
                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">P. Unit: ${s.price.toLocaleString()} | {s.observations}</p>
                   </div>
                   <div className="flex items-center gap-8 text-right">
                      <div><p className="text-[10px] font-bold text-gray-400 uppercase">Acopiado</p><p className="font-bold text-sm">{s.quantity}</p></div>
                      <div className="min-w-[100px]"><p className={`text-[10px] font-bold uppercase ${pending < 0 ? 'text-red-500' : 'text-blue-500'}`}>{pending < 0 ? 'Deuda' : 'Pendiente'}</p><p className={`font-black ${pending < 0 ? 'text-red-600' : 'text-blue-600'}`}>{pending}</p></div>
                   </div>
                 </div>
               )
             })}
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3 text-orange-600"><History size={20} /><h3 className="font-bold text-gray-800">Historial Reciente</h3></div>
          <div className="divide-y divide-gray-50 max-h-[400px] overflow-auto">
             {movements.map(m => (
               <div key={m.id} className="p-5 hover:bg-gray-50 transition-all">
                 <div className="flex items-start justify-between">
                   <div className="flex gap-4">
                      <div className={`p-2 rounded-xl ${m.type === 'PAYMENT' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                        {m.type === 'PAYMENT' ? <Wallet size={16} /> : <Package size={16} />}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">{m.type === 'PAYMENT' ? 'Pago' : 'Entrega'}</p>
                        <p className="text-[10px] text-gray-400">{new Date(m.date).toLocaleString('es-AR')}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                       {m.type === 'PAYMENT' ? (
                         <p className="font-black text-green-600 text-sm">+$ {(m.amount ?? 0).toLocaleString()}</p>
                       ) : (
                         <>
                           <button 
                             onClick={() => handlePrintRemito(m)}
                             className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all"
                             title="Ver/Imprimir Remito"
                           >
                             <Printer size={14} />
                           </button>
                           <button 
                             onClick={() => {
                               const sent = shareRemitoWhatsApp(m, work as any)
                               if (!sent) warning('El cliente no tiene teléfono registrado.')
                             }}
                             className="p-2 bg-green-50 text-[#25D366] rounded-lg hover:bg-green-100 transition-all"
                             title="Enviar resumen por WhatsApp"
                           >
                             <MessageCircle size={14} />
                           </button>
                           <button 
                             onClick={async () => {
                               if (company) {
                                 try {
                                   await saveRemito(m, work as any, company)
                                   success('Carpeta abierta con el PDF.')
                                 } catch {
                                   error('No se pudo abrir la carpeta.')
                                 }
                               }
                             }}
                             className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition-all"
                             title="Abrir ubicación del PDF (para enviar archivo)"
                           >
                             <Folder size={14} />
                           </button>
                         </>
                       )}
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  )
}
