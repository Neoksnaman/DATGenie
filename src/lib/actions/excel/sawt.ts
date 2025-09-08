
'use server';

import * as xlsx from 'xlsx';
import { format } from 'date-fns';
import { atcWE, atcWG } from '../../schedules';

interface ExcelResult {
    success: boolean;
    base64?: string;
    fileName?: string;
    error?: string;
}

export async function generateSawtExcel(datFileContent: string, datFileName: string): Promise<ExcelResult> {
    try {
        if (!datFileContent) {
            return { success: false, error: "DAT file content is empty." };
        }

        const lines = datFileContent.split('\n');
        const headerLine = lines.find(line => line.startsWith('HSAWT,'));

        if (!headerLine) {
            return { success: false, error: "Could not find a valid SAWT header line." };
        }

        const headerCols = headerLine.split(',').map(col => col.replace(/"/g, ''));
        
        const formType = headerCols[1].substring(1); // Remove 'H'
        const ownerTinRaw = headerCols[2];
        const ownerBranchCode = headerCols[3];
        const ownerTin = `${ownerTinRaw}-${ownerBranchCode}`;
        const registeredName = headerCols[4];
        const lastName = headerCols[5];
        const firstName = headerCols[6];
        const middleName = headerCols[7];
        
        const ownerName = (lastName || firstName || middleName) 
            ? `${lastName}, ${firstName} ${middleName}`.trim().replace(/, $/, '')
            : registeredName;

        const [monthStr, yearStr] = headerCols[8].split('/');
        const date = new Date(parseInt(yearStr), parseInt(monthStr, 10) - 1);
        const month = format(date, 'MMMM').toUpperCase();
        const monthShort = format(date, 'MMM').toUpperCase();
        const year = yearStr;

        const wsData: (string | number | null)[][] = [
            [`BIR FORM ${formType}`],
            ['SUMMARY ALPHALIST OF WITHHOLDING TAXES (SAWT)'],
            [`FOR THE MONTH OF ${month}, ${year}`],
            [],
            [],
            [`TIN: ${ownerTin}`],
            [`PAYEE'S NAME: ${ownerName}`],
            [],
            [],
            [],
            ['SEQ', 'TAXPAYER', 'CORPORATION', 'INDIVIDUAL', 'ATC', "NATURE OF PAYMENT", 'AMOUNT OF', 'TAX RATE', 'AMOUNT OF'],
            ['NO', 'IDENTIFICATION', '(Registered Name)', '(Last Name, First Name, Middle Name)', null, null, 'INCOME PAYMENT', null, 'TAX WITHHELD'],
            [null, "NUMBER", null, null, null, null, null, null, null],
            ['(1)','(2)','(3)','(4)','(5)', null, '(6)','(7)','(8)'],
            ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
        ];
        
        const combinedATC = [...atcWE, ...atcWG];
        const detailLines = lines.filter(line => line.startsWith('DSAWT,'));

        let totalIncomePayment = 0;
        let totalWithholdingTax = 0;

        detailLines.forEach(line => {
            const cols = line.split(',').map(col => col.replace(/"/g, ''));
            const seqNo = parseInt(cols[2], 10);
            const tin = cols[3];
            const branchCode = cols[4];
            const regName = cols[5];
            const lName = cols[6];
            const fName = cols[7];
            const mName = cols[8];
            const atc = cols[11];
            const rate = parseFloat(cols[12] || '0');
            const incomePayment = parseFloat(cols[13] || '0');
            const withholdingTax = parseFloat(cols[14] || '0');
            
            totalIncomePayment += incomePayment;
            totalWithholdingTax += withholdingTax;

            const formattedTin = tin ? `${tin.substring(0,3)}-${tin.substring(3,6)}-${tin.substring(6,9)}-${branchCode}` : '';
            const individualName = (lName || fName || mName) ? `${lName || ''}, ${fName || ''} ${mName || ''}`.trim() : '';
            const atcData = combinedATC.find(item => item.atc === atc);
            const natureOfPayment = atcData ? atcData.description : 'NOT FOUND';

            wsData.push([
                seqNo,
                formattedTin,
                regName,
                individualName,
                atc,
                natureOfPayment,
                incomePayment,
                rate,
                withholdingTax,
            ]);
        });

        const separatorRow = [
            null, null, null, null, null, null, "------------------", null, "------------------",
        ];
        wsData.push(separatorRow);
        
        const grandTotalRow = [
            "Grand Total:", null, null, null, null, null,
            null, null, totalWithholdingTax
        ];
        wsData.push(grandTotalRow);

        const doubleRuleRow = [
             null, null, null, null, null, null, null, null, "==================",
        ];
        wsData.push(doubleRuleRow);

        wsData.push(["END OF REPORT"]);
        
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.aoa_to_sheet(wsData);
        xlsx.utils.book_append_sheet(wb, ws, "sawt");
        
        const wbout = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
        
        const excelFileName = `${ownerTinRaw}-SAWT-${monthShort}-${year}.xlsx`;

        return { success: true, base64: wbout, fileName: excelFileName };

    } catch (e) {
        console.error("Error generating SAWT Excel:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, error: errorMessage };
    }
}
