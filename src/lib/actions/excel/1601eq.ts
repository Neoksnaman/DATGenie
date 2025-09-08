
'use server';

import * as xlsx from 'xlsx';
import { getDatFileContent } from '../drive';
import { format } from 'date-fns';
import { atcWE, atcExempt } from '../../schedules';

interface ExcelResult {
    success: boolean;
    base64?: string;
    fileName?: string;
    error?: string;
}


export async function generate1601EQExcel(fileIds: string[], fileNames: string[]): Promise<ExcelResult> {
    try {
        const fileContents = await Promise.all(fileIds.map(id => getDatFileContent(id)));

        const filesWithContent = fileNames.map((name, index) => ({
            name,
            content: fileContents[index].content,
            month: parseInt(name.substring(13, 15), 10),
        })).filter(f => f.content);
        
        filesWithContent.sort((a, b) => a.month - b.month);

        if (filesWithContent.length === 0) {
            return { success: false, error: "No content found in the selected files." };
        }

        let hasSched1Data = false;
        let hasSched2Data = false;
        for (const file of filesWithContent) {
            if (file.content.includes('D1,')) hasSched1Data = true;
            if (file.content.includes('D2,')) hasSched2Data = true;
        }

        if (!hasSched1Data && !hasSched2Data) {
            return { success: false, error: "No data found for Schedule 1 or Schedule 2 in the selected files." };
        }
        
        const latestFile = filesWithContent[filesWithContent.length - 1];
        const headerLine = latestFile.content!.split('\n').find(line => line.startsWith('HQAP,'));
        
        if (!headerLine) {
            return { success: false, error: "Could not find a header line in the latest file." };
        }

        const headerCols = headerLine.split(',').map(col => col.replace(/"/g, ''));
        
        const ownerTin = `${headerCols[2]}-${headerCols[3]}`;
        const ownerName = headerCols[4];
        
        const getQuarterInfo = (reportingPeriod: string) => {
            const [monthStr, yearStr] = reportingPeriod.split('/');
            const month = parseInt(monthStr, 10);
            const year = parseInt(yearStr, 10);
            const quarter = Math.ceil(month / 3);
            return { year, quarter, month };
        };
        const reportingPeriod = headerCols[5];
        const { year, quarter } = getQuarterInfo(reportingPeriod);
        const quarterEndMonth = new Date(year, quarter * 3, 0); 
        const quarterEndDate = format(quarterEndMonth, 'MMMM, yyyy').toUpperCase();

        const wb = xlsx.utils.book_new();

        if (hasSched1Data) {
            const ws1Data: (string | number | null)[][] = [
                ['Attachment to BIR Form 1601-EQ'],
                ['QUARTERLY ALPHABETICAL LIST OF PAYEES WHOSE INCOME PAYMENTS ARE SUBJECTED TO EXPANDED WITHHOLDING TAX'],
                [`FOR THE QUARTER ENDING ${quarterEndDate}`],
                [],
                [],
                [`TIN: ${ownerTin}`],
                [`WITHHOLDING AGENT'S NAME: ${ownerName}`],
                [],
                [],
                [null, null, null, null, null, null, '1ST MONTH OF THE QUARTER', null, null, '2ND MONTH OF THE QUARTER', null, null, '3RD MONTH OF THE QUARTER', null, null, 'TOTAL FOR THE QUARTER'],
                ['SEQ', 'TAXPAYER', 'CORPORATION', 'INDIVIDUAL', 'ATC', null, 'AMOUNT OF', 'TAX RATE', 'AMOUNT OF', 'AMOUNT OF', 'TAX RATE', 'AMOUNT OF', 'AMOUNT OF', 'TAX RATE', 'AMOUNT OF', 'TOTAL', 'TOTAL'],
                ['NO', 'IDENTIFICATION', '(Registered Name)', '(Last Name, First Name, Middle Name)', null, "NATURE OF PAYMENT", 'INCOME PAYMENT', null, 'TAX WITHHELD', 'INCOME PAYMENT', null, 'TAX WITHHELD', 'INCOME PAYMENT', null, 'TAX WITHHELD', 'INCOME PAYMENT', 'TAX WITHHELD'],
                [null, "NUMBER", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                ['(1)','(2)','(3)','(4)','(5)', null, '(6)','(7)','(8)','(9)','(10)','(11)','(12)','(13)','(14)','(15)','(16)'],
                ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
            ];
            
            const allPayeeRows: any[][] = [];

            for (const file of filesWithContent) {
                if (!file.content) continue;

                const detailLines = file.content.split('\n').filter(line => line.startsWith('D1,'));
                for (const line of detailLines) {
                    const cols = line.split(',').map(col => col.replace(/"/g, ''));
                    
                    const row = new Array(17).fill(0);
                    const tin = cols[3];
                    const atc = cols[10];

                    row[0] = parseInt(cols[2], 10);
                    const formattedTin = tin ? `${tin.substring(0,3)}-${tin.substring(3,6)}-${tin.substring(6,9)}-${cols[4]}` : '';
                    row[1] = formattedTin;
                    row[2] = cols[5];
                    const lastName = cols[6] || '';
                    const firstName = cols[7] || '';
                    const middleName = cols[8] || '';
                    const individualName = [lastName, firstName, middleName].some(name => name) ? `${lastName}, ${firstName} ${middleName}`.trim() : '';
                    row[3] = individualName;
                    row[4] = atc;
                    const atcData = atcWE.find(item => item.atc === atc);
                    row[5] = atcData ? atcData.description : 'NOT FOUND';

                    const monthPosition = (file.month - 1) % 3; // 0 for 1st month, 1 for 2nd, 2 for 3rd
                    const monthOffset = 6 + (monthPosition * 3);

                    row[monthOffset] = parseFloat(cols[12] || '0');
                    row[monthOffset + 1] = parseFloat(cols[11] || '0');
                    row[monthOffset + 2] = parseFloat(cols[13] || '0');
                    
                    allPayeeRows.push(row);
                }
            }

            let totalMonth1Income = 0, totalMonth1Rate = 0, totalMonth1Tax = 0;
            let totalMonth2Income = 0, totalMonth2Rate = 0, totalMonth2Tax = 0;
            let totalMonth3Income = 0, totalMonth3Rate = 0, totalMonth3Tax = 0;
            let grandTotalIncome = 0, grandTotalTax = 0;

            allPayeeRows.forEach(row => {
                const m1Income = row[6] || 0; const m1Rate = row[7] || 0; const m1Tax = row[8] || 0;
                const m2Income = row[9] || 0; const m2Rate = row[10] || 0; const m2Tax = row[11] || 0;
                const m3Income = row[12] || 0; const m3Rate = row[13] || 0; const m3Tax = row[14] || 0;
                
                const qtrIncome = m1Income + m2Income + m3Income;
                const qtrTax = m1Tax + m2Tax + m3Tax;
                row[15] = qtrIncome;
                row[16] = qtrTax;

                totalMonth1Income += m1Income; totalMonth1Rate += m1Rate; totalMonth1Tax += m1Tax;
                totalMonth2Income += m2Income; totalMonth2Rate += m2Rate; totalMonth2Tax += m2Tax;
                totalMonth3Income += m3Income; totalMonth3Rate += m3Rate; totalMonth3Tax += m3Tax;
                grandTotalIncome += qtrIncome;
                grandTotalTax += qtrTax;

                ws1Data.push(row);
            });
            
            const separatorRow = [null, null, null, null, null, null, "------------------", "------------------", "------------------", "------------------", "------------------", "------------------", "------------------", "------------------", "------------------", "------------------", "------------------"];
            ws1Data.push(separatorRow);

            const grandTotalRow = [
                "Grand Total :", null, null, null, null, null, 
                totalMonth1Income, totalMonth1Rate, totalMonth1Tax,
                totalMonth2Income, totalMonth2Rate, totalMonth2Tax,
                totalMonth3Income, totalMonth3Rate, totalMonth3Tax,
                grandTotalIncome, grandTotalTax
            ];
            ws1Data.push(grandTotalRow);

            const doubleRuleRow = [
                null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                "==================", "=================="
            ];
            ws1Data.push(doubleRuleRow);
            
            ws1Data.push(["END OF REPORT"]);

            const ws1 = xlsx.utils.aoa_to_sheet(ws1Data);
            xlsx.utils.book_append_sheet(wb, ws1, 'sched1');
        }
        
        if (hasSched2Data) {
            const ws2Data: (string | number | null)[][] = [
                ['Attachment to BIR Form 1601-EQ'],
                ['QUARTERLY ALPHABETICAL LIST OF PAYEES WHOSE INCOME PAYMENTS ARE EXEMPT FROM EXPANDED WITHHOLDING TAX'],
                [`FOR THE QUARTER ENDING ${quarterEndDate}`],
                [],
                [],
                [`TIN: ${ownerTin}`],
                [`WITHHOLDING AGENT'S NAME: ${ownerName}`],
                [],
                [],
                [null, null, null, null, null, null, '1ST MONTH OF THE QUARTER', '2ND MONTH OF THE QUARTER', '3RD MONTH OF THE QUARTER', 'TOTAL FOR THE QUARTER'],
                ['SEQ', 'TAXPAYER', 'CORPORATION', 'INDIVIDUAL', 'ATC', null, 'AMOUNT OF', 'AMOUNT OF', 'AMOUNT OF', 'TOTAL'],
                ['NO', 'IDENTIFICATION', '(Registered Name)', '(Last Name, First Name, Middle Name)', null, "NATURE OF PAYMENT", 'INCOME PAYMENT', 'INCOME PAYMENT', 'INCOME PAYMENT', 'INCOME PAYMENT'],
                [null, "NUMBER", null, null, null, null, null, null, null, null],
                ['(1)','(2)','(3)','(4)','(5)', null, '(6)','(7)','(8)','(9)'],
                ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
            ];
            
            const allPayeeRows: any[][] = [];
            
            for (const file of filesWithContent) {
                if (!file.content) continue;

                const detailLines = file.content.split('\n').filter(line => line.startsWith('D2,'));
                for (const line of detailLines) {
                    const cols = line.split(',').map(col => col.replace(/"/g, ''));
                    
                    const row = new Array(10).fill(0);
                    const tin = cols[3];
                    const atc = cols[10];

                    row[0] = parseInt(cols[2], 10);
                    const formattedTin = tin ? `${tin.substring(0,3)}-${tin.substring(3,6)}-${tin.substring(6,9)}-${cols[4]}` : '';
                    row[1] = formattedTin;
                    row[2] = cols[5];
                    const lastName = cols[6] || '';
                    const firstName = cols[7] || '';
                    const middleName = cols[8] || '';
                    const individualName = [lastName, firstName, middleName].some(name => name) ? `${lastName}, ${firstName} ${middleName}`.trim() : '';
                    row[3] = individualName;
                    row[4] = atc;
                    const atcData = atcExempt.find(item => item.atc === atc);
                    row[5] = atcData ? atcData.description : 'NOT FOUND';
                    
                    const monthPosition = (file.month - 1) % 3;
                    const monthOffset = 6 + monthPosition;
                    
                    row[monthOffset] = parseFloat(cols[11] || '0');
                    
                    allPayeeRows.push(row);
                }
            }

            let totalMonth1 = 0, totalMonth2 = 0, totalMonth3 = 0, grandTotal = 0;

            allPayeeRows.forEach(row => {
                const m1 = row[6] || 0;
                const m2 = row[7] || 0;
                const m3 = row[8] || 0;
                const total = m1 + m2 + m3;
                row[9] = total;

                totalMonth1 += m1;
                totalMonth2 += m2;
                totalMonth3 += m3;
                grandTotal += total;

                ws2Data.push(row);
            });
            
            const separatorRow = [null, null, null, null, null, null, "------------------", "------------------", "------------------", "------------------"];
            ws2Data.push(separatorRow);
            ws2Data.push([
                "Grand Total :", null, null, null, null, null,
                totalMonth1, totalMonth2, totalMonth3, grandTotal
            ]);
            ws2Data.push([null, null, null, null, null, null, null, null, null, "=================="]);
            ws2Data.push(["END OF REPORT"]);

            const ws2 = xlsx.utils.aoa_to_sheet(ws2Data);
            xlsx.utils.book_append_sheet(wb, ws2, 'sched2');
        }
        
        const wbout = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
        
        const fileName = `${headerCols[2]}-1601EQ-Q${quarter}-${year}.xlsx`;

        return { success: true, base64: wbout, fileName };

    } catch (e) {
        console.error("Error generating 1601-EQ Excel:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, error: errorMessage };
    }
}
