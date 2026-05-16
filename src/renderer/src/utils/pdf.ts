import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import logoUrl from '../assets/company_logo.svg'
import logoWhiteUrl from '../assets/company_logo_white.svg'

import type { Movement, CompanyConfig } from '../types'

interface WorkForRemito {
  id: number
  name: string
  address: string | null
  client?: {
    name: string
    lastName: string | null
    dni: string | null
    phone: string | null
  } | null
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const RED = [197, 23, 26] as [number, number, number]
const DARK = [30, 30, 30] as [number, number, number]
const GRAY = [120, 120, 120] as [number, number, number]
const LIGHT_GRAY = [240, 240, 240] as [number, number, number]
const WHITE = [255, 255, 255] as [number, number, number]

function formatDate(dateStr: string | Date): string {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

function currency(n: number): string {
  return `$${n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

async function loadImageAsBase64(url: string): Promise<{ data: string, width: number, height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth || 320
      canvas.height = img.naturalHeight || 80
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      resolve({ 
        data: canvas.toDataURL('image/png'),
        width: img.naturalWidth,
        height: img.naturalHeight
      })
    }
    img.onerror = reject
    img.src = url
  })
}

// ─── Main Logic ──────────────────────────────────────────────────────────────

export const getRemitoData = async (
  delivery: Movement,
  work: WorkForRemito,
  company: CompanyConfig
): Promise<{ buffer: ArrayBuffer; fileName: string }> => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pw = doc.internal.pageSize.getWidth()
  const ph = doc.internal.pageSize.getHeight()
  const margin = 12
  let y = margin

  // Header
  doc.setFillColor(...RED)
  doc.rect(0, 0, pw, 38, 'F')

  try {
    const { data, width, height } = await loadImageAsBase64(logoWhiteUrl)
    let displayWidth = 60
    let displayHeight = displayWidth * (height / width)
    
    // If it's too tall for the header, scale it down
    if (displayHeight > 28) {
      displayHeight = 28
      displayWidth = displayHeight * (width / height)
    }
    
    doc.addImage(data, 'PNG', margin, (38 - displayHeight) / 2, displayWidth, displayHeight)
  } catch {
    doc.setFontSize(16); doc.setFont('helvetica', 'bold'); doc.setTextColor(...WHITE)
    doc.text(company.name.toUpperCase(), margin, 14)
  }

  const boxW = 52
  const boxX = pw - margin - boxW
  doc.setFillColor(...WHITE); doc.roundedRect(boxX, 5, boxW, 28, 2, 2, 'F')
  doc.setFontSize(24); doc.setFont('helvetica', 'bold'); doc.setTextColor(...RED)
  doc.text('REMITO', boxX + boxW / 2, 19, { align: 'center' })
  doc.setFontSize(7); doc.setFont('helvetica', 'normal'); doc.setTextColor(...GRAY)
  doc.text('Documento no válido como factura', boxX + boxW / 2, 26, { align: 'center' })

  y = 45

  // Company Info
  doc.setFillColor(...LIGHT_GRAY); doc.rect(margin, y, pw - margin * 2, 30, 'F')
  doc.setDrawColor(...GRAY); doc.setLineWidth(0.3); doc.rect(margin, y, pw - margin * 2, 30, 'D')
  doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(...DARK)
  doc.text(company.name.toUpperCase(), margin + 4, y + 5)
  doc.setFont('helvetica', 'normal'); doc.setTextColor(...GRAY)
  const companyLines = [
    company.address && `Dirección: ${company.address}`,
    company.phone && `Tel: ${company.phone}`,
    company.cuit && `CUIT: ${company.cuit}`,
    company.email && `Email: ${company.email}`
  ].filter(Boolean) as string[]
  companyLines.forEach((line, i) => doc.text(line, margin + 4, y + 10 + i * 4))

  const rX = pw / 2 + 10
  doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(...DARK)
  doc.text('FECHA DE EMISIÓN', rX, y + 5)
  doc.setFont('helvetica', 'normal'); doc.setTextColor(...GRAY)
  doc.text(formatDate(delivery.date), rX, y + 10)

  y += 36

  // Client / Work
  const halfW = (pw - margin * 2 - 4) / 2
  doc.setDrawColor(...GRAY); doc.setLineWidth(0.3); doc.roundedRect(margin, y, halfW, 30, 1, 1, 'D')
  doc.setFillColor(...RED); doc.roundedRect(margin, y, halfW, 6, 1, 1, 'F')
  doc.rect(margin, y + 3, halfW, 3, 'F')
  doc.setFontSize(7); doc.setFont('helvetica', 'bold'); doc.setTextColor(...WHITE)
  doc.text('DATOS DEL CLIENTE', margin + 3, y + 4.5)

  const cx = margin + 3
  let cy = y + 11
  doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(...DARK)
  const clientFullName = work.client ? `${work.client.lastName ?? ''}, ${work.client.name}`.trim().replace(/^,\s*/, '') : '—'
  doc.text(clientFullName, cx, cy)
  cy += 5; doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...GRAY)
  doc.text(`DNI/CUIT: ${work.client?.dni ?? '—'}`, cx, cy)
  cy += 4.5; doc.text(`Tel: ${work.client?.phone ?? '—'}`, cx, cy)
  cy += 4.5; doc.text(`Obra: ${work.name}`, cx, cy)
  cy += 4.5; doc.text(`Dir. de Obra: ${work.address ?? '—'}`, cx, cy)

  const rx2 = margin + halfW + 4
  doc.setDrawColor(...GRAY); doc.roundedRect(rx2, y, halfW, 30, 1, 1, 'D')
  doc.setFillColor(...DARK); doc.roundedRect(rx2, y, halfW, 6, 1, 1, 'F')
  doc.rect(rx2, y + 3, halfW, 3, 'F')
  doc.setFontSize(7); doc.setFont('helvetica', 'bold'); doc.setTextColor(...WHITE)
  doc.text('ENTREGADO A', rx2 + 3, y + 4.5)

  let ry = y + 11
  doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(...DARK)
  const withdrawerName = delivery.withdrawer?.name ?? (work.client ? `${work.client.name} ${work.client.lastName ?? ''}`.trim() : 'Titular')
  doc.text(withdrawerName, rx2 + 3, ry)
  ry += 5; doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...GRAY)
  doc.text(`DNI: ${delivery.withdrawer?.dni ?? work.client?.dni ?? '—'}`, rx2 + 3, ry)
  ry += 4.5
  if (delivery.withdrawer?.phone) { doc.text(`Tel: ${delivery.withdrawer.phone}`, rx2 + 3, ry); ry += 4.5; }
  if (delivery.observations) { doc.text(`Obs: ${delivery.observations}`, rx2 + 3, ry); }

  y += 35

  // Table
  const tableRows = (delivery.items ?? []).map((item) => {
    const total = item.quantity * item.price
    return [item.productId, item.product?.description ?? '—', String(item.quantity), 'Uds.', currency(item.price), currency(total)]
  })
  const totalGeneral = (delivery.items ?? []).reduce((acc, item) => acc + item.quantity * item.price, 0)

  autoTable(doc, {
    startY: y,
    head: [['CÓDIGO', 'DESCRIPCIÓN', 'CANT.', 'UNID.', 'P. UNIT.', 'TOTAL']],
    body: tableRows,
    foot: [['', '', '', '', 'TOTAL REMITO', currency(totalGeneral)]],
    theme: 'grid',
    styles: { fontSize: 8, cellPadding: 2.5, textColor: DARK, lineColor: [210, 210, 210], lineWidth: 0.2 },
    headStyles: { fillColor: DARK, textColor: WHITE, fontStyle: 'bold', fontSize: 7.5, halign: 'center' },
    footStyles: { fillColor: LIGHT_GRAY, textColor: DARK, fontStyle: 'bold', fontSize: 9 },
    columnStyles: { 0: { halign: 'center', cellWidth: 24 }, 1: { halign: 'left' }, 2: { halign: 'center', cellWidth: 16 }, 3: { halign: 'center', cellWidth: 14 }, 4: { halign: 'right', cellWidth: 24 }, 5: { halign: 'right', cellWidth: 26 } },
    alternateRowStyles: { fillColor: [250, 250, 250] },
    margin: { left: margin, right: margin }
  })

  const afterTable = (doc as any).lastAutoTable?.finalY ?? y + 60
  const sigY = Math.max(afterTable + 14, ph - 55)

  if (delivery.observations) {
    doc.setFillColor(255, 249, 235); doc.setDrawColor(240, 180, 50); doc.setLineWidth(0.4); doc.roundedRect(margin, afterTable + 4, pw - margin * 2, 10, 1, 1, 'FD')
    doc.setFontSize(7.5); doc.setFont('helvetica', 'bold'); doc.setTextColor(120, 80, 0); doc.text('Observaciones: ', margin + 3, afterTable + 10)
    doc.setFont('helvetica', 'normal'); doc.text(delivery.observations, margin + 32, afterTable + 10)
  }

  const sigW = 52
  ;[margin + 10, pw / 2 - sigW / 2, pw - margin - sigW - 10].forEach((sx, i) => {
    doc.setDrawColor(...DARK); doc.setLineWidth(0.5); doc.line(sx, sigY + 18, sx + sigW, sigY + 18)
    doc.setFontSize(7); doc.setFont('helvetica', 'normal'); doc.setTextColor(...GRAY)
    const labels = ['Firma Emisor', 'Aclaración / Sello', 'Firma y Aclaración Receptor']
    doc.text(labels[i], sx + sigW / 2, sigY + 22, { align: 'center' })
  })

  doc.setFillColor(...RED); doc.rect(0, ph - 10, pw, 10, 'F')
  doc.setFontSize(6.5); doc.setFont('helvetica', 'normal'); doc.setTextColor(...WHITE)
  doc.text(`${company.name} — ${company.address ?? ''} — ${company.phone ?? ''}`, pw / 2, ph - 4, { align: 'center' })

  const clientName = (work.client?.lastName ?? work.client?.name ?? 'cliente').replace(/\s+/g, '_')
  const dateStr = new Date(delivery.date).toISOString().split('T')[0]
  const fileName = `Remito_${clientName}_${dateStr}_#${String(delivery.id).padStart(6, '0')}.pdf`
  doc.setProperties({ title: fileName.replace('.pdf', '') })

  return { buffer: doc.output('arraybuffer'), fileName }
}

export const generateRemito = async (m: Movement, w: WorkForRemito, c: CompanyConfig) => {
  const { buffer, fileName } = await getRemitoData(m, w, c)
  await (window as any).api.openPdf(buffer, fileName)
}

export const saveRemito = async (m: Movement, w: WorkForRemito, c: CompanyConfig) => {
  const { buffer, fileName } = await getRemitoData(m, w, c)
  await (window as any).api.showItemInFolder(buffer, fileName)
}

export const shareRemitoWhatsApp = (delivery: Movement, work: WorkForRemito) => {
  const phone = work.client?.phone?.replace(/\D/g, '')
  if (!phone) return false
  const dateStr = formatDate(delivery.date)
  const itemsStr = (delivery.items ?? []).map(i => `• ${i.product?.description} x${i.quantity}`).join('\n')
  const withdrawer = delivery.withdrawer?.name ?? (work.client ? `${work.client.name} ${work.client.lastName ?? ''}`.trim() : 'Titular')
  let message = `*Remito de Entrega - Pedemonte Materiales*\n\n`
  message += `Fecha: *${dateStr}*\n`
  message += `Obra: *${work.name}*\n`
  message += `Retiró: *${withdrawer}*\n\n`
  message += `*Materiales:*\n${itemsStr}\n\n`
  message += `Gracias por su confianza.`
  const url = `https://wa.me/${phone.startsWith('54') ? phone : '54' + phone}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
  return true
}
