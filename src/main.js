
const Excel = require("exceljs");
// const workbook = new ExcelJS.Workbook();
// const sheet = workbook.addWorksheet('My Sheet');
async function main() {
    const filename = 'assets/student.xlsx';
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filename);
    // console.log('book:', workbook);
    const sheet = workbook.getWorksheet(1);
    // console.log('sheet:', sheet);
    const lastRow = sheet.lastRow;
    console.log('last row:', lastRow.number);
    // for(let i=0;i<=lastRow.number;i++){

    // }
    sheet.eachRow(function (row, rowNumber) {
        console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
    });
}
// workbook.
main();