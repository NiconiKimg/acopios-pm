import { useState, useEffect, useMemo } from 'react'
import { Plus, Search, User, Users, MapPin, Phone, ChevronRight } from 'lucide-react'
import ClientDetail from './ClientDetail'
import { useToast } from './Toast'
import type { ClientSummary, CreateClientInput } from '../types'

const ITEMS_PER_PAGE = 8

export default function Clients() {
  const { success, error } = useToast()
  const [clients, setClients] = useState<ClientSummary[]>([])
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [saving, setSaving] = useState(false)

  const [newClient, setNewClient] = useState<CreateClientInput>({
    name: '',
    lastName: '',
    phone: '549',
    dni: ''
  })

  useEffect(() => {
    loadClients()
  }, [])

  const loadClients = async () => {
    try {
      const data = await window.api.getClients()
      setClients(data ?? [])
    } catch (err) {
      console.error('[Clients] Failed to load:', err)
      error('No se pudieron cargar los clientes.')
    }
  }

  const handleCreateClient = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await window.api.createClient(newClient)
      setShowModal(false)
      setNewClient({ name: '', lastName: '', phone: '549', dni: '' })
      await loadClients()
      success('Cliente creado correctamente.')
    } catch (err) {
      console.error('[Clients] Create failed:', err)
      error('No se pudo crear el cliente. Verificá que el DNI no esté duplicado.')
    } finally {
      setSaving(false)
    }
  }

  const filteredClients = useMemo(
    () =>
      clients.filter(
        (c) =>
          `${c.name} ${c.lastName ?? ''}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (c.dni && c.dni.includes(searchTerm))
      ),
    [clients, searchTerm]
  )

  const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE)
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  if (selectedClientId) {
    return (
      <ClientDetail
        clientId={selectedClientId}
        onBack={() => {
          setSelectedClientId(null)
          loadClients() // refresh counts after returning
        }}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Cartera de Clientes</h2>
          <p className="text-gray-500">Gestión de titulares, DNI y sus obras asociadas.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#c5171a] text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-3 hover:bg-red-700 transition-all shadow-lg shadow-red-100"
        >
          <Plus size={20} />
          Nuevo Cliente
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por nombre o DNI..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-100 transition-all"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
            />
          </div>
        </div>

        <div className="p-6 space-y-4">
          {paginatedClients.map((client) => (
            <div
              key={client.id}
              className="group flex flex-col md:flex-row items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-red-100 hover:shadow-md transition-all relative gap-6"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#c5171a] group-hover:bg-red-50 transition-all">
                  <User size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">
                    {client.name} {client.lastName}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                    {client.phone && (
                      <p className="flex items-center gap-1.5 text-sm text-gray-400">
                        <Phone size={14} /> {client.phone}
                      </p>
                    )}
                    <p className="flex items-center gap-1.5 text-sm text-gray-400">
                      <MapPin size={14} /> {client._count.works} Obras
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 md:flex-none md:min-w-[200px] bg-gray-50 px-6 py-2 rounded-xl flex flex-col justify-center border border-transparent group-hover:border-red-100 transition-all">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5 text-center">
                  DNI Titular
                </p>
                <p className="font-black text-gray-700 text-center text-lg">
                  {client.dni || 'No registrado'}
                </p>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                <button
                  onClick={() => setSelectedClientId(client.id)}
                  className="w-full md:w-auto bg-gray-50 text-gray-600 hover:bg-[#c5171a] hover:text-white px-8 py-3 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  Ver Detalles <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}

          {clients.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <Users size={48} className="mx-auto text-gray-200" />
              <p className="text-gray-400">No hay clientes registrados.</p>
            </div>
          )}

          {filteredClients.length === 0 && clients.length > 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-400">Sin resultados para "{searchTerm}".</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="p-6 border-t border-gray-50 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Mostrando {paginatedClients.length} de {filteredClients.length}
            </p>
            <div className="flex gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-bold disabled:opacity-30 hover:bg-gray-100 transition-all"
              >
                Anterior
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-bold disabled:opacity-30 hover:bg-gray-100 transition-all"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>

      {/* New Client Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[2rem] p-10 w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-300">
            <h3 className="text-2xl font-black mb-8 text-gray-800">Nuevo Cliente</h3>
            <form onSubmit={handleCreateClient} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    autoFocus
                    className="w-full px-5 py-4 bg-gray-50 rounded-2xl focus:ring-4 focus:ring-red-100 transition-all border-none font-bold"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-gray-50 rounded-2xl focus:ring-4 focus:ring-red-100 transition-all border-none font-bold"
                    value={newClient.lastName ?? ''}
                    onChange={(e) => setNewClient({ ...newClient, lastName: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest">
                  DNI Titular
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-4 bg-gray-50 rounded-2xl focus:ring-4 focus:ring-red-100 transition-all border-none font-black text-xl"
                  value={newClient.dni ?? ''}
                  onChange={(e) => setNewClient({ ...newClient, dni: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 mb-3 uppercase tracking-widest">
                  Teléfono (WhatsApp)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: 5493415555555"
                  className="w-full px-5 py-4 bg-gray-50 rounded-2xl focus:ring-4 focus:ring-red-100 transition-all border-none font-bold"
                  value={newClient.phone ?? ''}
                  onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                />
                <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-tighter">
                  Debe comenzar con 549 seguido de la característica y número sin espacios.
                </p>
              </div>
              <div className="flex gap-4 mt-10">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-4 rounded-2xl font-black text-gray-400 hover:bg-gray-50 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-[#c5171a] text-white px-6 py-4 rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-100 disabled:opacity-50"
                >
                  {saving ? 'Guardando...' : 'Crear Cliente'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
