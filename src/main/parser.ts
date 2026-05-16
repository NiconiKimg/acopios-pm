import * as XLSX from 'xlsx'

export interface ParsedProduct {
  code: string
  description: string
  category: string
  price: number
}

export function parseExcel(filePath: string): ParsedProduct[] {
  const workbook = XLSX.readFile(filePath)
  const sheetName = workbook.SheetNames[0]
  const worksheet = workbook.Sheets[sheetName]
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][]

  const products: ParsedProduct[] = []
  let currentCategory = 'GENERAL'

  for (const row of data) {
    if (!row || row.length === 0) continue

    const col0 = row[0] ? String(row[0]).trim() : ''
    const col1 = row[1] ? String(row[1]).trim() : ''
    
    // Check for category
    // A category usually has col0 empty and col1 with text, 
    // or col1 is very long and others are empty
    if (!col0 && col1 && row.length <= 3) {
      currentCategory = col1
      continue
    }

    // Check for product
    // Has a code in col0 and a price in col3 or col4
    const price = typeof row[4] === 'number' ? row[4] : (typeof row[3] === 'number' ? row[3] : 0)
    
    if (col0 && col1 && price > 0) {
      products.push({
        code: col0,
        description: col1,
        category: currentCategory,
        price: price
      })
    }
  }

  return products
}
