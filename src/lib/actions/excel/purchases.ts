
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

export async function generatePurchasesExcel(fileIds: string[], fileNames: string[]): Promise<ExcelResult> {
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
            ['PURCHASES TRANSACTION'],
            ['RECONCILIATION OF LISTING FOR ENFORCEMENT'],
            [],
            [],
            [`TIN: ${ownerTin}`],
            [`OWNER'S NAME: ${ownerName}`],
            [`OWNER'S TRADE NAME: ${tradeName}`],
            [],
            ['TAXABLE', 'TAXPAYER', 'REGISTERED NAME', 'NAME OF SUPPLIER', "SUPPLIER'S ADDRESS", 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF'],
            ['MONTH', 'IDENTIFICATION', null, '(Last Name, First Name, Middle Name)', null, 'GROSS PURCHASE', 'EXEMPT PURCHASE', 'ZERO-RATED PURCHASE', 'TAXABLE PURCHASE', 'PURCHASE OF SERVICES', 'PURCHASE OF CAPITAL GOODS', 'PURCHASE OF OTHER GOODS', 'INPUT TAX', 'GROSS TAXABLE PURCHASE'],
            [null, 'NUMBER', null, null, null, null, null, null, null, null, null, null, null, null],
            ['(1)','(2)','(3)','(4)','(5)','(6)','(7)','(8)','(9)','(10)','(11)','(12)', '(13)', '(14)'],
        ];

        let totalGrossPurchase = 0;
        let totalExemptPurchase = 0;
        let totalZeroRatedPurchase = 0;
        let totalTaxablePurchase = 0;
        let totalPurchaseOfServices = 0;
        let totalPurchaseOfCapitalGoods = 0;
        let totalPurchaseOfOtherGoods = 0;
        let totalInputTax = 0;
        let totalGrossTaxablePurchase = 0;


        for (const file of filesWithContent) {
            if (!file.content) continue;

            const detailLines = file.content.split('\n').filter(line => line.startsWith('D,'));
            for (const line of detailLines) {
                const cols = line.split(',').map(col => col.replace(/"/g, ''));
                
                const lastDayDateStr = cols[16];
                const [monthStr, dayStr, yearStr] = lastDayDateStr.split('/');
                const date = new Date(parseInt(yearStr), parseInt(monthStr), 0);
                
                const tin = cols[2];
                const formattedTin = tin ? `${tin.substring(0,3)}-${tin.substring(3,6)}-${tin.substring(6,9)}` : '--- --- ---';
                
                const exemptPurchase = parseFloat(cols[9] || '0');
                const zeroRatedPurchase = parseFloat(cols[10] || '0');
                const purchaseOfServices = parseFloat(cols[11] || '0');
                const purchaseOfCapitalGoods = parseFloat(cols[12] || '0');
                const purchaseOfOtherGoods = parseFloat(cols[13] || '0');
                const inputTax = parseFloat(cols[14] || '0');

                const grossPurchase = exemptPurchase + zeroRatedPurchase + purchaseOfServices + purchaseOfCapitalGoods + purchaseOfOtherGoods;
                const taxablePurchase = purchaseOfServices + purchaseOfCapitalGoods + purchaseOfOtherGoods;
                const grossTaxablePurchase = purchaseOfServices + purchaseOfCapitalGoods + purchaseOfOtherGoods + inputTax;

                totalGrossPurchase += grossPurchase;
                totalExemptPurchase += exemptPurchase;
                totalZeroRatedPurchase += zeroRatedPurchase;
                totalTaxablePurchase += taxablePurchase;
                totalPurchaseOfServices += purchaseOfServices;
                totalPurchaseOfCapitalGoods += purchaseOfCapitalGoods;
                totalPurchaseOfOtherGoods += purchaseOfOtherGoods;
                totalInputTax += inputTax;
                totalGrossTaxablePurchase += grossTaxablePurchase;

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
                    grossPurchase,
                    exemptPurchase,
                    zeroRatedPurchase,
                    taxablePurchase,
                    purchaseOfServices,
                    purchaseOfCapitalGoods,
                    purchaseOfOtherGoods,
                    inputTax,
                    grossTaxablePurchase
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
            totalGrossPurchase,
            totalExemptPurchase,
            totalZeroRatedPurchase,
            totalTaxablePurchase,
            totalPurchaseOfServices,
            totalPurchaseOfCapitalGoods,
            totalPurchaseOfOtherGoods,
            totalInputTax,
            totalGrossTaxablePurchase
        ];
        wsData.push(grandTotalRow);
        wsData.push([]);
        wsData.push(["END OF REPORT"]);

        const ws = xlsx.utils.aoa_to_sheet(wsData);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, 'Purchases Transaction');
        
        const wbout = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
        
        const year = latestFile.name.substring(12, 16);
        const fileName = `${ownerTin}-Purchases-${year}.xlsx`;


        return { success: true, base64: wbout, fileName };
    } catch (e) {
        console.error("Error generating purchases Excel:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, error: errorMessage };
    }
}
