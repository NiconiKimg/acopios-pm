import { useState, useEffect, useMemo } from 'react'
import {
  ArrowLeft,
  Plus,
  ClipboardList,
  ChevronRight,
  CreditCard,
  Phone,
  FileSpreadsheet,
  Trash2,
  Edit2
} from 'lucide-react'
import WorkDetail from './WorkDetail'
import { useToast } from './Toast'
import type { Client, Work } from '../types'

interface ClientDetailProps {
  clientId: number
  onBack: () => void
}

export default function ClientDetail({ clientId, onBack }: ClientDetailProps) {
  const { success, error, warning } = useToast()
  const [client, setClient] = useState<Client | null>(null)
  const [selectedWorkId, setSelectedWorkId] = useState<number | null>(null)
  const [showWorkModal, setShowWorkModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [newWork, setNewWork] = useState({ name: '', address: '' })
  const [editData, setEditData] = useState<Partial<Client>>({})
  const [exporting, setExporting] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadClient()
  }, [clientId])

  const loadClient = async () => {
    try {
      const data = await window.api.getClient(clientId)
      if (data) {
        setClient(data)
        setEditData(data)
      }
    } catch (err) {
      console.error('[ClientDetail] Failed to load client:', err)
      error('No se pudo cargar el cliente.')
    }
  }

  const handleUpdateClient = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await window.api.updateClient(clientId, {
        name: editData.name,
        lastName: editData.lastName ?? undefined,
        phone: editData.phone ?? undefined,
        dni: editData.dni ?? undefined
      })
      setShowEditModal(false)
      await loadClient()
      success('Datos del cliente actualizados.')
    } catch (err) {
      console.error('[ClientDetail] Update failed:', err)
      error('No se pudieron guardar los cambios.')
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteClient = async () => {
    if (!client) return
    const hasWorks = (client.works?.length ?? 0) > 0
    const confirmMsg = hasWorks
      ? '¿Desea deshabilitar este cliente? (Tiene obras asociadas, no puede eliminarse)'
      : '¿Está seguro de eliminar este cliente? Esta acción no se puede deshacer.'

    // Use a proper inline confirm state instead of blocking confirm()
    if (!window.confirm(confirmMsg)) return

    try {
      await window.api.deleteClient(clientId)
      success(hasWorks ? 'Cliente deshabilitado.' : 'Cliente eliminado.')
      onBack()
    } catch (err) {
      console.error('[ClientDetail] Delete failed:', err)
      error('No se pudo eliminar el cliente.')
    }
  }

  const handleCreateWork = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await window.api.createWork({ ...newWork, clientId })
      setShowWorkModal(false)
      setNewWork({ name: '', address: '' })
      await loadClient()
      success('Obra creada correctamente.')
    } catch (err) {
      console.error('[ClientDetail] Create work failed:', err)
      error('No se pudo crear la obra.')
    } finally {
      setSaving(false)
    }
  }

  const handleExport = async () => {
    setExporting(true)
    try {
      const ok = await window.api.exportClientHistory(clientId)
      if (ok) {
        success('Historial exportado correctamente.')
      } else {
        warning('Exportación cancelada.')
      }
    } catch (err) {
      console.error('[ClientDetail] Export failed:', err)
      error('Error al exportar el historial.')
    } finally {
      setExporting(false)
    }
  }

  const totalBalance = useMemo(() => {
    if (!client?.works) return 0
    return client.works.reduce((acc, work: Work) => {
      const paid =
        work.movements
          ?.filter((m) => m.type === 'PAYMENT')
          .reduce((s, m) => s + (m.amount ?? 0), 0) ?? 0
      const stockpiled =
        work.stockpiles?.reduce((s, sp) => s + sp.quantity * sp.price, 0) ?? 0
      return acc + (paid - stockpiled)
    }, 0)
  }, [client])

  if (!client) {
    return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-[#c5171a] rounded-full animate-spin mx-auto mb-3" />
        <p className="text-gray-400 text-sm">Cargando cliente...</p>
      </div>
    )
  }

  const selectedWork = selectedWorkId
    ? client.works?.find((w) => w.id === selectedWorkId)
    : null

  if (selectedWork) {
    return (
      <WorkDetail
        work={selectedWork}
        onBack={() => {
          setSelectedWorkId(null)
          loadClient()
        }}
      />
    )
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-500"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-3xl font-black text-gray-800">
              {client.name} {client.lastName}
            </h2>
            {!client.active && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-400 text-[10px] rounded font-bold uppercase">
                Inactivo
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleExport}
            disabled={exporting}
            className="flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-2xl font-bold hover:bg-green-100 transition-all text-sm border border-green-100 shadow-sm disabled:opacity-50"
          >
            <FileSpreadsheet size={18} /> {exporting ? 'Exportando...' : 'Exportar Excel'}
          </button>
          <button
            onClick={() => setShowEditModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-2xl font-bold hover:bg-blue-100 transition-all text-sm border border-blue-100 shadow-sm"
          >
            <Edit2 size={18} /> Editar Cliente
          </button>
          <button
            onClick={handleDeleteClient}
            className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-700 rounded-2xl font-bold hover:bg-red-100 transition-all text-sm border border-red-100 shadow-sm"
          >
            <Trash2 size={18} /> Eliminar / Baja
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: summary + info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
              Resumen de Cuenta
            </h3>
            <div>
              <p className="text-xs text-gray-400 mb-2">Saldo Total Consolidado</p>
              <p
                className={`text-3xl font-black truncate ${totalBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}
                title={`$${totalBalance.toLocaleString()}`}
              >
                ${totalBalance.toLocaleString('es-AR')}
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
              Información del Titular
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black">DNI</p>
                  <p className="font-bold text-lg">{client.dni || 'No registrado'}</p>
                </div>
              </div>
              {client.phone && (
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-black">WhatsApp</p>
                    <p className="font-bold text-lg">{client.phone}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: works */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-black text-gray-800 uppercase tracking-tight">
              Obras Asociadas
            </h3>
            <button
              onClick={() => setShowWorkModal(true)}
              className="flex items-center gap-2 text-[#c5171a] font-black text-sm hover:underline"
            >
              <Plus size={16} /> Nueva Obra
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {client.works?.map((work) => (
              <div
                key={work.id}
                onClick={() => setSelectedWorkId(work.id)}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-red-100 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gray-50 text-gray-400 group-hover:text-[#c5171a] group-hover:bg-red-50 rounded-[1.25rem] flex items-center justify-center transition-all shadow-sm">
                      <ClipboardList size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-gray-800">{work.name}</h4>
                      <p className="text-sm text-gray-400 font-medium">
                        {work.address || 'Sin dirección registrada'}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className="text-gray-300 group-hover:text-[#c5171a] group-hover:translate-x-1 transition-all"
                    size={24}
                  />
                </div>
              </div>
            ))}

            {!client.works?.length && (
              <div className="py-16 text-center bg-white rounded-[2rem] border border-dashed border-gray-200">
                <ClipboardList size={40} className="mx-auto text-gray-200 mb-3" />
                <p className="text-gray-400">No hay obras registradas para este cliente.</p>
                <button
                  onClick={() => setShowWorkModal(true)}
                  className="mt-4 text-[#c5171a] font-bold text-sm hover:underline"
                >
                  Agregar primera obra →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Client Modal */}
      {showEditModal && editData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[2rem] p-10 w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-300">
            <h3 className="text-2xl font-black mb-8">Editar Titular</h3>
            <form onSubmit={handleUpdateClient} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 bg-gray-50 rounded-2xl font-bold border-none"
                    value={editData.name ?? ''}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-gray-50 rounded-2xl font-bold border-none"
                    value={editData.lastName ?? ''}
                    onChange={(e) => setEditData({ ...editData, lastName: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase">
                  DNI
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-4 bg-gray-50 rounded-2xl font-black text-xl border-none"
                  value={editData.dni ?? ''}
                  onChange={(e) => setEditData({ ...editData, dni: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase">
                  WhatsApp
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-4 bg-gray-50 rounded-2xl font-bold border-none"
                  value={editData.phone ?? ''}
                  onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                />
              </div>
              <div className="flex gap-4 mt-10">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-4 text-gray-400 font-black"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-blue-100 disabled:opacity-50"
                >
                  {saving ? 'Guardando...' : 'Guardar Cambios'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Work Modal */}
      {showWorkModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[2rem] p-10 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-300">
            <h3 className="text-2xl font-black mb-8">Nueva Obra</h3>
            <form onSubmit={handleCreateWork} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase">
                  Nombre de la Obra
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  className="w-full px-5 py-4 bg-gray-50 rounded-2xl font-bold border-none"
                  placeholder="Ej: Casa Funes"
                  value={newWork.name}
                  onChange={(e) => setNewWork({ ...newWork, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase">
                  Dirección
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-4 bg-gray-50 rounded-2xl font-bold border-none"
                  placeholder="Calle y altura..."
                  value={newWork.address}
                  onChange={(e) => setNewWork({ ...newWork, address: e.target.value })}
                />
              </div>
              <div className="flex gap-4 mt-10">
                <button
                  type="button"
                  onClick={() => setShowWorkModal(false)}
                  className="flex-1 py-4 text-gray-400 font-black"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-[#c5171a] text-white py-4 rounded-2xl font-black shadow-lg shadow-red-100 disabled:opacity-50"
                >
                  {saving ? 'Guardando...' : 'Crear Obra'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
