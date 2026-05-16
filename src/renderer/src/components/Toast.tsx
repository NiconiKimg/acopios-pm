import { useState, useCallback, useEffect, useRef } from 'react'
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: string
  type: ToastType
  message: string
  duration?: number
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

let externalAddToast: ((toast: Omit<Toast, 'id'>) => void) | null = null

export function useToast() {
  const toast = useCallback(
    (message: string, type: ToastType = 'info', duration = 4000) => {
      externalAddToast?.({ type, message, duration })
    },
    []
  )

  return {
    toast,
    success: (msg: string) => toast(msg, 'success'),
    error: (msg: string) => toast(msg, 'error'),
    warning: (msg: string) => toast(msg, 'warning'),
    info: (msg: string) => toast(msg, 'info')
  }
}

// ─── ToastItem ─────────────────────────────────────────────────────────────────

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const duration = toast.duration ?? 4000
    timer.current = setTimeout(() => onRemove(toast.id), duration)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [toast.id, toast.duration, onRemove])

  const icons = {
    success: <CheckCircle size={18} />,
    error: <XCircle size={18} />,
    warning: <AlertTriangle size={18} />,
    info: <Info size={18} />
  }

  const styles = {
    success: 'bg-white border-l-4 border-green-500 text-green-700',
    error: 'bg-white border-l-4 border-red-500 text-red-700',
    warning: 'bg-white border-l-4 border-amber-500 text-amber-700',
    info: 'bg-white border-l-4 border-blue-500 text-blue-700'
  }

  const iconStyles = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-amber-500',
    info: 'text-blue-500'
  }

  return (
    <div
      className={`flex items-start gap-3 px-4 py-3 rounded-xl shadow-lg ${styles[toast.type]} min-w-[280px] max-w-sm animate-in slide-in-from-right-4 fade-in duration-300`}
      role="alert"
    >
      <span className={`mt-0.5 shrink-0 ${iconStyles[toast.type]}`}>{icons[toast.type]}</span>
      <p className="text-sm font-semibold flex-1 leading-snug">{toast.message}</p>
      <button
        onClick={() => onRemove(toast.id)}
        className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors mt-0.5"
      >
        <X size={16} />
      </button>
    </div>
  )
}

// ─── ToastContainer (mount once in App) ─────────────────────────────────────────

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((t: Omit<Toast, 'id'>) => {
    const id = `${Date.now()}-${Math.random()}`
    setToasts((prev) => [...prev.slice(-4), { ...t, id }]) // max 5 visible
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  // Expose globally so useToast can reach it
  useEffect(() => {
    externalAddToast = addToast
    return () => {
      externalAddToast = null
    }
  }, [addToast])

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 items-end pointer-events-none">
      {toasts.map((t) => (
        <div key={t.id} className="pointer-events-auto">
          <ToastItem toast={t} onRemove={removeToast} />
        </div>
      ))}
    </div>
  )
}
