import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
// To replace the logo: save your file as 'company_logo.svg' in src/renderer/src/assets/
// and update the import below. The logo is embedded as base64.
import logoUrl from '../assets/company_logo.svg'

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

// Load an SVG/image URL as base64 for jsPDF
async function loadImageAsBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth || 320
      canvas.height = img.naturalHeight || 80
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = reject
    img.src = url
  })
}

// ─── Main generator ───────────────────────────────────────────────────────────

export const generateRemito = async (
  delivery: Movement,
  work: WorkForRemito,
  company: CompanyConfig
): Promise<void> => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pw = doc.internal.pageSize.getWidth()   // 210
  const ph = doc.internal.pageSize.getHeight()  // 297

  const margin = 12
  let y = margin

  // ── HEADER BAND ───────────────────────────────────────────────────────────
  // Full-width red band
  doc.setFillColor(...RED)
  doc.rect(0, 0, pw, 38, 'F')

  // Company logo (top-left)
  try {
    const logoB64 = await loadImageAsBase64(logoUrl)
    doc.addImage(logoB64, 'PNG', margin, 4, 60, 15)
  } catch {
    // Fallback: text logo
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...WHITE)
    doc.text(company.name.toUpperCase(), margin, 14)
  }

  // "REMITO" large label (top-right area)
  const boxW = 52
  const boxX = pw - margin - boxW
  doc.setFillColor(...WHITE)
  doc.roundedRect(boxX, 5, boxW, 28, 2, 2, 'F')

  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...RED)
  doc.text('REMITO', boxX + boxW / 2, 19, { align: 'center' })

  doc.setFontSize(7)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...GRAY)
  doc.text('Documento no válido como factura', boxX + boxW / 2, 26, { align: 'center' })

  y = 45

  // ── COMPANY & DATE INFO BAR ───────────────────────────────────────────────
  doc.setFillColor(...LIGHT_GRAY)
  doc.rect(margin, y, pw - margin * 2, 22, 'F')
  doc.setDrawColor(...GRAY)
  doc.setLineWidth(0.3)
  doc.rect(margin, y, pw - margin * 2, 22, 'D')

  // Left: company details
  doc.setFontSize(8)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...DARK)
  doc.text(company.name.toUpperCase(), margin + 4, y + 5)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...GRAY)
  const companyLines = [
    company.address && `Dirección: ${company.address}`,
    company.phone && `Tel: ${company.phone}`,
    company.cuit && `CUIT: ${company.cuit}`,
    company.email && `Email: ${company.email}`
  ].filter(Boolean) as string[]

  companyLines.forEach((line, i) => {
    doc.text(line, margin + 4, y + 10 + i * 4)
  })

  // Right: date info
  const rX = pw / 2 + 10
  doc.setFontSize(8)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...DARK)
  doc.text('FECHA DE EMISIÓN', rX, y + 5)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...GRAY)
  doc.text(formatDate(delivery.date), rX, y + 10)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...DARK)
  doc.text('N° REMITO', rX + 55, y + 5)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...GRAY)
  doc.text(`#${String(delivery.id).padStart(6, '0')}`, rX + 55, y + 10)

  y += 28

  // ── CLIENT / WORK DATA SECTION ────────────────────────────────────────────
  const halfW = (pw - margin * 2 - 4) / 2

  // Left box: Cliente
  doc.setDrawColor(...GRAY)
  doc.setLineWidth(0.3)
  doc.roundedRect(margin, y, halfW, 30, 1, 1, 'D')

  doc.setFillColor(...RED)
  doc.roundedRect(margin, y, halfW, 6, 1, 1, 'F')
  doc.rect(margin, y + 3, halfW, 3, 'F') // square bottom corners of header

  doc.setFontSize(7)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...WHITE)
  doc.text('DATOS DEL CLIENTE', margin + 3, y + 4.5)

  const cx = margin + 3
  let cy = y + 11
  doc.setFontSize(8.5)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...DARK)
  const clientFullName = work.client
    ? `${work.client.lastName ?? ''}, ${work.client.name}`.trim().replace(/^,\s*/, '')
    : '—'
  doc.text(clientFullName, cx, cy)
  cy += 5
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...GRAY)
  doc.text(`DNI/CUIT: ${work.client?.dni ?? '—'}`, cx, cy)
  cy += 4.5
  doc.text(`Tel: ${work.client?.phone ?? '—'}`, cx, cy)
  cy += 4.5
  doc.text(`Obra: ${work.name}`, cx, cy)
  cy += 4.5
  doc.text(`Dir. de Obra: ${work.address ?? '—'}`, cx, cy)

  // Right box: Entregado a
  const rx2 = margin + halfW + 4
  doc.setDrawColor(...GRAY)
  doc.roundedRect(rx2, y, halfW, 30, 1, 1, 'D')

  doc.setFillColor(...DARK)
  doc.roundedRect(rx2, y, halfW, 6, 1, 1, 'F')
  doc.rect(rx2, y + 3, halfW, 3, 'F')

  doc.setFontSize(7)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...WHITE)
  doc.text('ENTREGADO A', rx2 + 3, y + 4.5)

  let ry = y + 11
  doc.setFontSize(8.5)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...DARK)
  doc.text(delivery.withdrawer?.name ?? 'Titular de la obra', rx2 + 3, ry)
  ry += 5
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...GRAY)
  doc.text(`DNI: ${delivery.withdrawer?.dni ?? '—'}`, rx2 + 3, ry)
  ry += 4.5
  if (delivery.withdrawer?.phone) {
    doc.text(`Tel: ${delivery.withdrawer.phone}`, rx2 + 3, ry)
    ry += 4.5
  }
  if (delivery.observations) {
    doc.text(`Obs: ${delivery.observations}`, rx2 + 3, ry)
  }

  y += 35

  // ── ITEMS TABLE ───────────────────────────────────────────────────────────
  const tableRows = (delivery.items ?? []).map((item) => {
    const total = item.quantity * item.price
    return [
      item.productId,
      item.product?.description ?? '—',
      String(item.quantity),
      'Uds.',
      currency(item.price),
      currency(total)
    ]
  })

  const totalGeneral = (delivery.items ?? []).reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  autoTable(doc, {
    startY: y,
    head: [['CÓDIGO', 'DESCRIPCIÓN', 'CANT.', 'UNID.', 'P. UNIT.', 'TOTAL']],
    body: tableRows,
    foot: [['', '', '', '', 'TOTAL REMITO', currency(totalGeneral)]],
    theme: 'grid',
    styles: {
      fontSize: 8,
      cellPadding: 2.5,
      textColor: DARK,
      lineColor: [210, 210, 210],
      lineWidth: 0.2
    },
    headStyles: {
      fillColor: DARK,
      textColor: WHITE,
      fontStyle: 'bold',
      fontSize: 7.5,
      halign: 'center'
    },
    footStyles: {
      fillColor: LIGHT_GRAY,
      textColor: DARK,
      fontStyle: 'bold',
      fontSize: 9
    },
    columnStyles: {
      0: { halign: 'center', cellWidth: 24 },
      1: { halign: 'left' },
      2: { halign: 'center', cellWidth: 16 },
      3: { halign: 'center', cellWidth: 14 },
      4: { halign: 'right', cellWidth: 24 },
      5: { halign: 'right', cellWidth: 26 }
    },
    alternateRowStyles: { fillColor: [250, 250, 250] },
    margin: { left: margin, right: margin }
  })

  // ── SIGNATURE SECTION ─────────────────────────────────────────────────────
  const afterTable = (doc as any).lastAutoTable?.finalY ?? y + 60
  const sigY = Math.max(afterTable + 14, ph - 55)

  // Observations box
  if (delivery.observations) {
    doc.setFillColor(255, 249, 235)
    doc.setDrawColor(240, 180, 50)
    doc.setLineWidth(0.4)
    doc.roundedRect(margin, afterTable + 4, pw - margin * 2, 10, 1, 1, 'FD')
    doc.setFontSize(7.5)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(120, 80, 0)
    doc.text('Observaciones: ', margin + 3, afterTable + 10)
    doc.setFont('helvetica', 'normal')
    doc.text(delivery.observations, margin + 32, afterTable + 10)
  }

  // Signature lines
  const sigW = 52
  const sig1X = margin + 10
  const sig2X = pw / 2 - sigW / 2
  const sig3X = pw - margin - sigW - 10

  ;[sig1X, sig2X, sig3X].forEach((sx, i) => {
    doc.setDrawColor(...DARK)
    doc.setLineWidth(0.5)
    doc.line(sx, sigY + 18, sx + sigW, sigY + 18)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...GRAY)
    const labels = ['Firma Emisor', 'Aclaración / Sello', 'Firma y Aclaración Receptor']
    doc.text(labels[i], sx + sigW / 2, sigY + 22, { align: 'center' })
  })

  // ── FOOTER ────────────────────────────────────────────────────────────────
  doc.setFillColor(...RED)
  doc.rect(0, ph - 10, pw, 10, 'F')
  doc.setFontSize(6.5)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...WHITE)
  doc.text(
    `${company.name} — ${company.address ?? ''} — ${company.phone ?? ''}`,
    pw / 2,
    ph - 4,
    { align: 'center' }
  )

  // ── OUTPUT ────────────────────────────────────────────────────────────────
  const clientName = (work.client?.lastName ?? work.client?.name ?? 'cliente').replace(/\s+/g, '_')
  const dateStr = new Date(delivery.date).toISOString().split('T')[0]
  const fileName = `Remito_${clientName}_${dateStr}_#${String(delivery.id).padStart(6, '0')}.pdf`

  // Option A: Save the file (standard)
  doc.save(fileName)

  // Option B: Open print dialog (convenient)
  doc.autoPrint()
  const blobUrl = doc.output('bloburl')
  window.open(blobUrl, '_blank')
}
