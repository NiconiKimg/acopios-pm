import { useState } from 'react'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Clients from './components/Clients'
import Products from './components/Products'
import Acopios from './components/Acopios'
import Settings from './components/Settings'
import { ToastContainer } from './components/Toast'

type Tab = 'dashboard' | 'clients' | 'inventory' | 'acopios' | 'settings'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'clients':
        return <Clients />
      case 'inventory':
        return <Products />
      case 'acopios':
        return <Acopios />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <>
      <Layout activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab as Tab)}>
        {renderContent()}
      </Layout>
      <ToastContainer />
    </>
  )
}

export default App
