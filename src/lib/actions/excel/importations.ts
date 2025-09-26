
'use server';

import * as xlsx from 'xlsx';
import { getDatFileContent } from '../drive';
import { format } from 'date-fns';

interface ExcelResult {
    success: boolean;
    base64?: string;
    fileName?: string;
    error?: string;
}

export async function generateImportationsExcel(fileIds: string[], fileNames: string[]): Promise<ExcelResult> {
    try {
        const fileContents = await Promise.all(fileIds.map(id => getDatFileContent(id)));

        const filesWithContent = fileNames.map((name, index) => ({
            name,
            content: fileContents[index].content,
        }));

        const getMonthFromFileName = (name: string) => {
            const monthStr = name.substring(10, 12);
            return parseInt(monthStr, 10);
        };
        
        filesWithContent.sort((a, b) => getMonthFromFileName(a.name) - getMonthFromFileName(b.name));
        
        const latestFile = filesWithContent[filesWithContent.length - 1];

        if (!latestFile || !latestFile.content) {
            return { success: false, error: "No content found in the selected files." };
        }

        const headerLine = latestFile.content.split('\n').find(line => line.startsWith('H,'));
        
        if (!headerLine) {
            return { success: false, error: "Could not find a header line in the latest file." };
        }

        const headerCols = headerLine.split(',').map(col => col.replace(/"/g, ''));
        const ownerTin = headerCols[2];
        const ownerName = headerCols[3] ? headerCols[3] : `${headerCols[4]}, ${headerCols[5]} ${headerCols[6]}`;
        const ownerAddress = `${headerCols[8]} ${headerCols[9]}`.trim();


        const wsData: (string | number | null)[][] = [
            ['IMPORTS TRANSACTION'],
            ['RECONCILIATION OF LISTING FOR ENFORCEMENT'],
            [],
            [],
            [],
            [`TIN: ${ownerTin}`],
            [`OWNER'S NAME: ${ownerName}`],
            [`OWNER'S ADDRESS: ${ownerAddress}`],
            [],
            [],
            ['TAXABLE', 'IMPORT', 'ASSESSMENT/', 'REGISTERED NAME', 'IMPORTATION DATE', 'COUNTRY OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'TAXABLE IMPORTS', 'EXEMPT IMPORTS', 'AMOUNT OF', 'OR NUMBER', 'DATE OF'],
            ['MONTH', 'ENTRY', 'RELEASE DATE', null, null, 'ORIGIN', 'TOTAL LANDED COST', 'DUTIABLE VALUE', 'CHARGES BEFORE', null, null, 'VAT', null, 'VAT PAYMENT'],
            [null, 'NUMBER', null, null, null, null, null, null, 'RELEASE FROM CUSTOM'],
            ['(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)', '(9)', '(10)', '(11)', '(12)', '(13)', '(14)'],
        ];

        let totalLandedCost = 0;
        let totalDutiableValue = 0;
        let totalOtherCharges = 0;
        let totalTaxable = 0;
        let totalExempt = 0;
        let totalInputVAT = 0;

        for (const file of filesWithContent) {
            if (!file.content) continue;

            const detailLines = file.content.split('\n').filter(line => line.startsWith('D,'));

            for (const line of detailLines) {
                const cols = line.split(',').map(col => col.replace(/"/g, ''));
                
                // DAT columns based on spec
                const taxableMonth = cols[15];
                const importEntryNum = cols[2];
                const assessmentDate = cols[3];
                const companyName = cols[4];
                const importDate = cols[5];
                const countryOrigin = cols[6];
                const dutiableValue = parseFloat(cols[7] || '0');
                const otherCharges = parseFloat(cols[8] || '0');
                const exempt = parseFloat(cols[9] || '0');
                const taxable = parseFloat(cols[10] || '0');
                const inputVAT = parseFloat(cols[11] || '0');
                const receiptNum = cols[12];
                const paymentDate = cols[13];

                // Calculated Excel column
                const landedCost = dutiableValue + otherCharges;

                totalLandedCost += landedCost;
                totalDutiableValue += dutiableValue;
                totalOtherCharges += otherCharges;
                totalTaxable += taxable;
                totalExempt += exempt;
                totalInputVAT += inputVAT;

                const bodyRow = [
                    taxableMonth,
                    importEntryNum,
                    assessmentDate,
                    companyName,
                    importDate,
                    countryOrigin,
                    landedCost,
                    dutiableValue,
                    otherCharges,
                    taxable,
                    exempt,
                    inputVAT,
                    receiptNum,
                    paymentDate
                ];
                wsData.push(bodyRow);
            }
        }

        wsData.push([]);
        wsData.push([]);

        const grandTotalRow = [
            'Grand Total:',
            null,
            null,
            null,
            null,
            null,
            totalLandedCost,
            totalDutiableValue,
            totalOtherCharges,
            totalTaxable,
            totalExempt,
            totalInputVAT,
        ];
        wsData.push(grandTotalRow);
        wsData.push([]);
        wsData.push(['END OF REPORT']);

        const ws = xlsx.utils.aoa_to_sheet(wsData);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, 'Import Transactions');
        
        const wbout = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
        
        const year = latestFile.name.substring(12, 16);
        const fileName = `${ownerTin}-Importations-${year}.xlsx`;

        return { success: true, base64: wbout, fileName };
    } catch (e) {
        console.error("Error generating importations Excel:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, error: errorMessage };
    }
}
