import XLSX from 'xlsx'

const workbook: XLSX.WorkBook = XLSX.readFile("pokemon_go.xlsx")

// let worksheets: XLSX.WorkSheet = {}
// for (const sheetName of workbook.SheetNames) {
//     worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
// }

// const worksheet = workbook.Sheets[Sheet1]

export const json_data = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"])