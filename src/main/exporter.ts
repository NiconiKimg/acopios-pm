import * as XLSX from 'xlsx'

interface ClientForExport {
  name: string
  lastName: string | null
  dni: string | null
  works: Array<{
    name: string
    stockpiles: Array<{
      product: { description: string }
      quantity: number
      withdrawn: number
      price: number
    }>
    movements: Array<{
      date: Date | string
      type: string
      amount: number | null
      observations: string | null
      items?: Array<{
        product: { description: string }
        quantity: number
      }>
    }>
  }>
}

export function exportClientHistory(client: ClientForExport, filePath: string): boolean {
  try {
    const data: (string | number | null)[][] = []

    // Header Info
    data.push(['CLIENTE', `${client.name} ${client.lastName ?? ''}`])
    data.push(['DNI/CUIL', client.dni ?? '-'])
    data.push([])

    // Summary section
    data.push(['RESUMEN DE ACOPIO'])
    data.push(['Obra', 'Producto', 'Comprado', 'Entregado', 'Pendiente', 'Precio Fijo'])

    for (const w of client.works) {
      for (const s of w.stockpiles) {
        data.push([
          w.name,
          s.product.description,
          s.quantity,
          s.withdrawn,
          s.quantity - s.withdrawn,
          s.price
        ])
      }
    }

    data.push([])
    data.push(['HISTORIAL DE MOVIMIENTOS'])
    data.push(['Fecha', 'Obra', 'Tipo', 'Monto ($)', 'Detalles', 'Observaciones'])

    for (const w of client.works) {
      for (const m of w.movements) {
        const items =
          m.items?.map((i) => `${i.product.description} (${i.quantity})`).join(', ') ?? ''
        data.push([
          new Date(m.date).toLocaleString('es-AR'),
          w.name,
          m.type === 'PAYMENT' ? 'PAGO' : 'ENTREGA',
          m.amount ?? '-',
          items || '-',
          m.observations ?? '-'
        ])
      }
    }

    const ws = XLSX.utils.aoa_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Historial')
    XLSX.writeFile(wb, filePath)

    return true
  } catch (err) {
    console.error('[exporter] Failed to export client history:', err)
    return false
  }
}
