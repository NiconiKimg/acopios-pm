import { useState, useEffect } from 'react'
import { TrendingUp, Users, Package, ClipboardCheck, Wallet, Truck, RefreshCw } from 'lucide-react'
import type { DashboardStats } from '../types'

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    setLoading(true)
    try {
      const data = await window.api.getStats()
      setStats(data)
    } catch (err) {
      console.error('[Dashboard] Failed to load stats:', err)
    } finally {
      setLoading(false)
    }
  }

  const kpis = [
    {
      label: 'Clientes Activos',
      value: stats?.totalClients ?? 0,
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      label: 'Obras Registradas',
      value: stats?.totalWorks ?? 0,
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      label: 'Productos Activos',
      value: stats?.totalProducts ?? 0,
      icon: Package,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      label: 'Saldo Acopiado',
      value: `$${(stats?.totalBalance ?? 0).toLocaleString('es-AR')}`,
      icon: ClipboardCheck,
      color: 'text-[#c5171a]',
      bg: 'bg-red-50'
    }
  ]

  const movementTypeConfig = {
    PAYMENT: { icon: Wallet, label: 'Pago', color: 'bg-green-50 text-green-600' },
    DELIVERY: { icon: Truck, label: 'Entrega', color: 'bg-orange-50 text-orange-600' },
    ADJUSTMENT: { icon: RefreshCw, label: 'Ajuste', color: 'bg-gray-50 text-gray-600' }
  } as const

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Panel General</h2>
          <p className="text-gray-500">Estado actual de la gestión de acopios.</p>
        </div>
        <button
          onClick={loadStats}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          Actualizar
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 group hover:shadow-md transition-all"
          >
            <div
              className={`w-12 h-12 ${kpi.bg} ${kpi.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              {loading ? (
                <RefreshCw size={20} className="animate-spin opacity-40" />
              ) : (
                <kpi.icon size={24} />
              )}
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              {kpi.label}
            </p>
            <h4
              className="text-xl md:text-2xl font-black text-gray-800 truncate"
              title={String(kpi.value)}
            >
              {loading ? (
                <span className="inline-block w-16 h-6 bg-gray-100 rounded animate-pulse" />
              ) : (
                kpi.value
              )}
            </h4>
          </div>
        ))}
      </div>

      {/* Bottom cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold mb-6">Actividad Reciente</h3>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 bg-gray-50 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : stats?.recentMovements.length === 0 ? (
            <p className="text-gray-400 text-sm italic text-center py-12">
              No hay movimientos recientes.
            </p>
          ) : (
            <div className="space-y-3 max-h-[320px] overflow-auto pr-2">
              {stats?.recentMovements.map((m) => {
                const cfg =
                  movementTypeConfig[m.type as keyof typeof movementTypeConfig] ??
                  movementTypeConfig.ADJUSTMENT
                const Icon = cfg.icon
                return (
                  <div
                    key={m.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <div className={`p-2 rounded-xl shrink-0 ${cfg.color}`}>
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-gray-800 truncate">{m.clientName}</p>
                      <p className="text-[10px] text-gray-400 truncate">{m.workName}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-bold text-gray-500">{cfg.label}</p>
                      <p className="text-[10px] text-gray-400">
                        {new Date(m.date).toLocaleDateString('es-AR')}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Global stockpile state */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold mb-6">Estado Financiero Global</h3>
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 bg-gray-50 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {[
                {
                  label: 'Saldo consolidado',
                  value: `$${(stats?.totalBalance ?? 0).toLocaleString('es-AR')}`,
                  positive: (stats?.totalBalance ?? 0) >= 0,
                  sub: 'Pagado menos acopiado'
                }
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">{item.label}</p>
                    <p className="text-[10px] text-gray-400">{item.sub}</p>
                  </div>
                  <p
                    className={`text-xl font-black ${item.positive ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-4 bg-blue-50 rounded-2xl text-center">
                  <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">Clientes</p>
                  <p className="text-2xl font-black text-blue-700">{stats?.totalClients ?? 0}</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-2xl text-center">
                  <p className="text-[10px] font-bold text-orange-400 uppercase mb-1">Obras</p>
                  <p className="text-2xl font-black text-orange-700">{stats?.totalWorks ?? 0}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
