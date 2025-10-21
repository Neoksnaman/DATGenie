
'use server';

import * as xlsx from 'xlsx';
import { getDatFileContent } from '../drive';
import { format } from 'date-fns';
import type { TaxProfile } from '../../schemas';

interface ExcelResult {
    success: boolean;
    base64?: string;
    fileName?: string;
    error?: string;
}

export async function generate1604EExcel(datFileContents: string[], fileNames: string[], profiles: TaxProfile[]): Promise<ExcelResult> {
    try {
        const filesWithContent = fileNames.map((name, index) => ({
            name,
            content: datFileContents[index],
        })).filter(f => f.content);
        
        if (filesWithContent.length === 0) {
            return { success: false, error: "No content found in the selected files." };
        }

        const latestFile = filesWithContent[0];
        const headerLine = latestFile.content!.split('\n').find(line => line.startsWith('H1604E,'));
        
        if (!headerLine) {
            return { success: false, error: "Could not find a valid 1604E header line in the DAT file." };
        }

        const headerCols = headerLine.split(',');
        const tin = headerCols[1];
        const branchCode = headerCols[2];
        const reportingPeriodStr = headerCols[3];
        
        const [monthStr, dayStr, yearStr] = reportingPeriodStr.split('/');
        const date = new Date(parseInt(yearStr), parseInt(monthStr, 10) - 1, parseInt(dayStr, 10));
        const formattedDate = format(date, 'MMMM dd, yyyy').toUpperCase();

        const profile = profiles.find(p => p.tpTIN === tin);
        let ownerName = '';
        if (profile) {
            ownerName = profile.entityType === 'Individual'
                ? `${profile.lastName}, ${profile.firstName} ${profile.middleName}`.trim()
                : profile.companyName;
        }

        const wb = xlsx.utils.book_new();

        // Check if there is Schedule 3 data
        const hasSched3Data = filesWithContent.some(f => f.content && f.content.includes('D3,'));

        if (hasSched3Data) {
            const ws3Data: (string | number | null)[][] = [
                ['BIR FORM 1604E - SCHEDULE 3'],
                ['ALPHALIST OF PAYEES SUBJECT TO EXPANDED WITHHOLDING TAX'],
                [`AS OF ${formattedDate}`],
                [null],
                [null],
                [`TIN: ${tin}-${branchCode}`],
                [`WITHHOLDING AGENT'S NAME: ${ownerName}`],
                [null],
                [null],
                [null],
                ['SEQ', 'TAXPAYER', 'REGISTERED NAME', 'NAME OF PAYEES', 'ATC', 'AMOUNT OF', 'RATE OF TAX', 'AMOUNT OF'],
                ['NO', 'IDENTIFICATION', null, '(Last Name, First Name, Middle Name)', null, 'INCOME PAYMENT', null, 'TAX WITHHELD'],
                [null, 'NUMBER'],
                ['(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)'],
                ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
            ];
            
            let totalWithholdingTax = 0;

            for (const file of filesWithContent) {
                if (!file.content) continue;

                const detailLines = file.content.split('\n').filter(line => line.startsWith('D3,'));
                
                for (const line of detailLines) {
                    const cols = line.split(',').map(col => col.replace(/"/g, ''));
                    const payeeTin = cols[6];
                    const payeeBranch = cols[7];
                    const formattedTin = payeeTin ? `${payeeTin.substring(0,3)}-${payeeTin.substring(3,6)}-${payeeTin.substring(6,9)}-${payeeBranch}` : '';

                    const lastName = cols[9] || '';
                    const firstName = cols[10] || '';
                    const middleName = cols[11] || '';
                    const individualName = [lastName, firstName, middleName].some(name => name) ? `${lastName}, ${firstName} ${middleName}`.trim() : '';
                    
                    const taxWithheld = parseFloat(cols[15] || '0');
                    totalWithholdingTax += taxWithheld;

                    const bodyRow = [
                        parseInt(cols[5], 10), // seq#
                        formattedTin, // tin-branchcode
                        cols[8], // regName
                        individualName, // lastName, firstName middleName
                        cols[12], // ATC
                        parseFloat(cols[13] || '0'), // income payment
                        parseFloat(cols[14] || '0'), // rate
                        taxWithheld, // withholding tax
                    ];
                    ws3Data.push(bodyRow);
                }
            }
            
            const separatorRow = [null, null, null, null, null, null, null, "------------------"];
            ws3Data.push(separatorRow);

            const grandTotalRow = [
                "Grand Total :", null, null, null, null, null, null, totalWithholdingTax
            ];
            ws3Data.push(grandTotalRow);
            
            const doubleRuleRow = [
                null, null, null, null, null, null, null, "=================="
            ];
            ws3Data.push(doubleRuleRow);
            
            ws3Data.push(["END OF REPORT"]);


            const ws3 = xlsx.utils.aoa_to_sheet(ws3Data);
            xlsx.utils.book_append_sheet(wb, ws3, 'sched3');
        }

        const hasSched4Data = filesWithContent.some(f => f.content && f.content.includes('D4,'));

        if (hasSched4Data) {
            const ws4Data: (string | number | null)[][] = [
                ['BIR FORM 1604E - SCHEDULE 4'],
                ['ALPHALIST OF OTHER PAYEES WHOSE INCOME PAYMENTS ARE EXEMPT FROM WITHHOLDING TAX BUT SUBJECT TO INCOME TAX'],
                [`AS OF ${formattedDate}`],
                [null],
                [null],
                [`TIN: ${tin}-${branchCode}`],
                [`WITHHOLDING AGENT'S NAME: ${ownerName}`],
                [null],
                [null],
                [null],
                ['SEQ', 'TAXPAYER', 'REGISTERED NAME', 'NAME OF PAYEES', 'ATC', 'AMOUNT OF INCOME'],
                ['NO', 'IDENTIFICATION', null, '(Last Name, First Name, Middle Name)', null, 'PAYMENT'],
                [null, 'NUMBER'],
                ['(1)', '(2)', '(3)', '(4)', '(5)', '(6)'],
                ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
            ];
            
            let totalIncomePayment = 0;

            for (const file of filesWithContent) {
                if (!file.content) continue;

                const detailLines = file.content.split('\n').filter(line => line.startsWith('D4,'));

                for (const line of detailLines) {
                    const cols = line.split(',').map(col => col.replace(/"/g, ''));
                    const payeeTin = cols[6];
                    const payeeBranch = cols[7];
                    const formattedTin = payeeTin ? `${payeeTin.substring(0,3)}-${payeeTin.substring(3,6)}-${payeeTin.substring(6,9)}-${payeeBranch}` : '';

                    const lastName = cols[9] || '';
                    const firstName = cols[10] || '';
                    const middleName = cols[11] || '';
                    const individualName = [lastName, firstName, middleName].some(name => name) ? `${lastName}, ${firstName} ${middleName}`.trim() : '';

                    const incomePayment = parseFloat(cols[13] || '0');
                    totalIncomePayment += incomePayment;

                    const bodyRow = [
                        parseInt(cols[5], 10), // seq#
                        formattedTin, // tin-branchcode
                        cols[8], // regName
                        individualName, // lastName, firstName middleName
                        cols[12], // atc
                        incomePayment,
                    ];
                    ws4Data.push(bodyRow);
                }
            }

            const separatorRow = [null, null, null, null, null, "------------------"];
            ws4Data.push(separatorRow);
            
            const grandTotalRow = ["Grand Total :", null, null, null, null, totalIncomePayment];
            ws4Data.push(grandTotalRow);

            const doubleRuleRow = [null, null, null, null, null, "=================="];
            ws4Data.push(doubleRuleRow);

            ws4Data.push(["END OF REPORT"]);
            
            const ws4 = xlsx.utils.aoa_to_sheet(ws4Data);
            xlsx.utils.book_append_sheet(wb, ws4, 'sched4');
        }

        const wbout = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
        const fileName = `${tin}-1604E-${yearStr}.xlsx`;

        return { success: true, base64: wbout, fileName };

    } catch (e) {
        console.error("Error generating 1604-E Excel:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, error: errorMessage };
    }
}
