
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

export async function generateSalesExcel(fileIds: string[], fileNames: string[]): Promise<ExcelResult> {
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
        const tradeName = headerCols[7];

        const wsData: (string | number | null)[][] = [
            ['SALES TRANSACTION'],
            ['RECONCILIATION OF LISTING FOR ENFORCEMENT'],
            [],
            [],
            [`TIN: ${ownerTin}`],
            [`OWNER'S NAME: ${ownerName}`],
            [`OWNER'S TRADE NAME: ${tradeName}`],
            [],
            ['TAXABLE', 'TAXPAYER', 'REGISTERED NAME', 'NAME OF CUSTOMER', "CUSTOMER'S ADDRESS", 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF'],
            ['MONTH', 'IDENTIFICATION', null, '(Last Name, First Name, Middle Name)', null, 'GROSS SALES', 'EXEMPT SALES', 'ZERO-RATED SALES', 'TAXABLE SALES', 'OUTPUT TAX', 'GROSS TAXABLE SALES'],
            [null, 'NUMBER', null, null, null, null, null, null, null, null, null],
            ['(1)','(2)','(3)','(4)','(5)','(6)','(7)','(8)','(9)','(10)','(11)'],
        ];

        let totalGrossSales = 0;
        let totalExemptSales = 0;
        let totalZeroRatedSales = 0;
        let totalTaxableSales = 0;
        let totalOutputTax = 0;
        let totalGrossTaxableSales = 0;

        for (const file of filesWithContent) {
            if (!file.content) continue;

            const detailLines = file.content.split('\n').filter(line => line.startsWith('D,'));
            for (const line of detailLines) {
                const cols = line.split(',').map(col => col.replace(/"/g, ''));
                
                const lastDayDateStr = cols[14];
                const [monthStr, dayStr, yearStr] = lastDayDateStr.split('/');
                const date = new Date(parseInt(yearStr), parseInt(monthStr), 0);
                
                const tin = cols[2];
                const formattedTin = tin ? `${tin.substring(0,3)}-${tin.substring(3,6)}-${tin.substring(6,9)}` : '--- --- ---';
                
                const exemptSales = parseFloat(cols[9] || '0');
                const zeroRatedSales = parseFloat(cols[10] || '0');
                const taxableSales = parseFloat(cols[11] || '0');
                const outputTax = parseFloat(cols[12] || '0');
                const grossSales = exemptSales + zeroRatedSales + taxableSales;
                const grossTaxableSales = taxableSales + outputTax;

                totalGrossSales += grossSales;
                totalExemptSales += exemptSales;
                totalZeroRatedSales += zeroRatedSales;
                totalTaxableSales += taxableSales;
                totalOutputTax += outputTax;
                totalGrossTaxableSales += grossTaxableSales;
                
                const lastName = cols[4] || '';
                const firstName = cols[5] || '';
                const middleName = cols[6] || '';
                const individualName = [lastName, firstName, middleName].some(name => name) ? `${lastName}, ${firstName} ${middleName}`.trim() : '';

                const bodyRow = [
                    format(date, 'MM/dd/yyyy'),
                    formattedTin,
                    cols[3],
                    individualName,
                    `${cols[7]} ${cols[8]}`,
                    grossSales,
                    exemptSales,
                    zeroRatedSales,
                    taxableSales,
                    outputTax,
                    grossTaxableSales
                ];
                wsData.push(bodyRow);
            }
        }
        
        wsData.push([]);
        wsData.push([]);

        const grandTotalRow = [
            "Grand Total:",
            null,
            null,
            null,
            null,
            totalGrossSales,
            totalExemptSales,
            totalZeroRatedSales,
            totalTaxableSales,
            totalOutputTax,
            totalGrossTaxableSales
        ];
        wsData.push(grandTotalRow);
        wsData.push([]);
        wsData.push(["END OF REPORT"]);


        const ws = xlsx.utils.aoa_to_sheet(wsData);

        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, 'Sales Transaction');

        const wbout = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });

        const year = latestFile.name.substring(12, 16);
        const fileName = `${ownerTin}-Sales-${year}.xlsx`;

        return { success: true, base64: wbout, fileName };

    } catch (e) {
        console.error("Error generating sales Excel:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, error: errorMessage };
    }
}
