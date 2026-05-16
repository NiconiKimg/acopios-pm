import { ReactNode } from 'react'
import { LayoutDashboard, Users, Package, Settings, ClipboardCheck, Truck } from 'lucide-react'
import logoUrl from '../assets/company_logo.svg'

interface LayoutProps {
  children: ReactNode
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Inicio', icon: LayoutDashboard },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'acopios', label: 'Acopios', icon: ClipboardCheck },
    { id: 'deliveries', label: 'Entregas', icon: Truck },
    { id: 'inventory', label: 'Productos', icon: Package },
    // { id: 'history', label: 'Historial', icon: History },
  ]


  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <div className="flex items-center justify-center mb-16 py-4">
            <img src={logoUrl} alt="Logo" className="h-20 w-auto object-contain" />
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? 'bg-red-50 text-[#c5171a] font-semibold'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-gray-100">
           <button 
             onClick={() => setActiveTab('settings')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
               activeTab === 'settings'
                 ? 'bg-red-50 text-[#c5171a] font-semibold'
                 : 'text-gray-500 hover:bg-gray-50'
             }`}
           >
             <Settings size={20} />
             Configuración
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
