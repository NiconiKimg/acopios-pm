import { useState, useEffect, useRef } from 'react'
import { Printer, Loader2 } from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts'
import type { ReportData } from '../types'
import { generateReportsPDF } from '../utils/pdf'
import html2canvas from 'html2canvas'

export default function Reports() {
  const [data, setData] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)

  const balanceRef = useRef<HTMLDivElement>(null)
  const monthlyRef = useRef<HTMLDivElement>(null)
  const cashflowRef = useRef<HTMLDivElement>(null)
  const topProductsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const report = await window.api.getReportData()
      setData(report)
    } catch (e) {
      console.error('Error loading reports', e)
    } finally {
      setLoading(false)
    }
  }

  const handlePrint = async () => {
    if (!data) return
    setGenerating(true)
    try {
      const getCanvasData = async (ref: React.RefObject<HTMLDivElement>) => {
        if (!ref.current) return ''
        const canvas = await html2canvas(ref.current, { scale: 2, backgroundColor: '#ffffff' })
        return canvas.toDataURL('image/png')
      }

      const [balance, monthly, cashflow, topProducts] = await Promise.all([
        getCanvasData(balanceRef),
        getCanvasData(monthlyRef),
        getCanvasData(cashflowRef),
        getCanvasData(topProductsRef)
      ])

      await generateReportsPDF(data, { balance, monthly, cashflow, topProducts })
    } catch (e) {
      console.error('Error generating PDF', e)
      alert('Hubo un error al generar el PDF. Verifica que la consola no muestre errores.')
    } finally {
      setGenerating(false)
    }
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="animate-spin text-blue-500" size={48} />
      </div>
    )
  }

  if (!data) return null

  const balanceData = [
    { name: 'Saldo a Favor (Clientes)', value: data.balance.credit },
    { name: 'Deuda (Clientes)', value: data.balance.debt }
  ]
  const COLORS = ['#10B981', '#EF4444']

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center justify-between border-b pb-6 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Reportes y Estadísticas</h2>
          <p className="text-gray-500">Métricas clave del negocio</p>
        </div>
        <button 
          onClick={handlePrint}
          disabled={generating}
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg disabled:opacity-50"
        >
          {generating ? <Loader2 size={20} className="animate-spin" /> : <Printer size={20} />}
          {generating ? 'Generando...' : 'Exportar a PDF'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Balance General */}
        <div ref={balanceRef} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm print:break-inside-avoid">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Balance General</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={balanceData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}>
                  {balanceData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value: any) => `$${Number(value).toLocaleString('es-AR')}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Evolución Mensual */}
        <div ref={monthlyRef} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm print:break-inside-avoid">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Pagos vs Entregas Mensuales</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.monthly}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(val) => `$${(val/1000)}k`} />
                <RechartsTooltip formatter={(value: any) => `$${Number(value).toLocaleString('es-AR')}`} />
                <Legend />
                <Bar dataKey="pagos" name="Ingresos (Pagos)" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="entregas" name="Entregas (Material)" fill="#F59E0B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Flujo de Caja (Line Chart) */}
        <div ref={cashflowRef} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm print:break-inside-avoid">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Flujo de Caja Anual (Pagos)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.monthly}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(val) => `$${(val/1000)}k`} />
                <RechartsTooltip formatter={(value: any) => `$${Number(value).toLocaleString('es-AR')}`} />
                <Line type="monotone" dataKey="pagos" name="Ingresos" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Productos */}
        <div ref={topProductsRef} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm print:break-inside-avoid">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Top 5 Materiales Más Acopiados</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.topProducts} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                <RechartsTooltip />
                <Bar dataKey="quantity" name="Cantidad Acopiada" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  )
}
