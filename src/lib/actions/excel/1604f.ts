
'use server';

import * as xlsx from 'xlsx';
import { getDatFileContent } from '../drive';
import { format } from 'date-fns';
import type { TaxProfile } from '../../schemas';
import { atcWF } from '../../schedules';

interface ExcelResult {
    success: boolean;
    base64?: string;
    fileName?: string;
    error?: string;
}

export async function generate1604FExcel(datFileContents: string[], fileNames: string[], profiles: TaxProfile[]): Promise<ExcelResult> {
    try {
        const filesWithContent = fileNames.map((name, index) => ({
            name,
            content: datFileContents[index],
        })).filter(f => f.content);
        
        if (filesWithContent.length === 0) {
            return { success: false, error: "No content found in the selected files." };
        }

        const latestFile = filesWithContent[0];
        const headerLine = latestFile.content!.split('\n').find(line => line.startsWith('H1604F,'));
        
        if (!headerLine) {
            return { success: false, error: "Could not find a valid 1604F header line in the DAT file." };
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

        const hasSched4Data = filesWithContent.some(f => f.content && f.content.includes('D4,'));

        if (hasSched4Data) {
            const ws4Data: (string | number | null)[][] = [
                ['BIR FORM 1604F - SCHEDULE 4'],
                ['ALPHABETICAL LIST OF PAYEES WHOSE INCOME PAYMENTS ARE SUBJECTED TO FINAL WITHHOLDING TAX'],
                [`FOR THE YEAR ENDED ${formattedDate}`],
                [null],
                [null],
                [`TIN: ${tin}-${branchCode}`],
                [`WITHHOLDING AGENT'S NAME: ${ownerName}`],
                [null],
                [null],
                [null],
                ['SEQ', 'TAXPAYER', 'REGISTERED NAME', 'NAME OF EMPLOYEES', 'STATUS', 'ATC', 'NATURE OF INCOME PAYMENT', 'AMOUNT OF', 'RATE OF TAX', 'AMOUNT OF'],
                ['NO', 'IDENTIFICATION', null, '(Last Name, First Name, Middle Name)', '(As to Residence/Nationality)', null, '(Refer to BIR Form No. 1601 FQ)', 'INCOME PAYMENT', null, 'TAX WITHHELD'],
                [null, 'NUMBER'],
                ['(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)', '(9)', '(10)'],
                ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
            ];
            
            let totalWithholdingTaxSched4 = 0;

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
                    
                    const atc = cols[13];
                    const atcData = atcWF.find(item => item.atc === atc);
                    const natureOfPayment = atcData ? atcData.description : 'NOT FOUND';
                    
                    const incomePayment = parseFloat(cols[14] || '0');
                    const rate = parseFloat(cols[15] || '0');
                    const withholdingTax = parseFloat(cols[16] || '0');
                    totalWithholdingTaxSched4 += withholdingTax;

                    const bodyRow = [
                        parseInt(cols[5], 10),
                        formattedTin,
                        cols[8],
                        individualName,
                        cols[12],
                        atc,
                        natureOfPayment,
                        incomePayment,
                        rate,
                        withholdingTax,
                    ];
                    ws4Data.push(bodyRow);
                }
            }
            
            const separatorRow = [null, null, null, null, null, null, null, null, null, "------------------"];
            ws4Data.push(separatorRow);

            const grandTotalRow = [
                "Grand Total :", null, null, null, null, null, null, null, null, totalWithholdingTaxSched4
            ];
            ws4Data.push(grandTotalRow);
            
            const doubleRuleRow = [
                null, null, null, null, null, null, null, null, null, "=================="
            ];
            ws4Data.push(doubleRuleRow);
            
            ws4Data.push(["END OF REPORT"]);

            const ws4 = xlsx.utils.aoa_to_sheet(ws4Data);
            xlsx.utils.book_append_sheet(wb, ws4, 'sched4');
        }

        const hasSched5Data = filesWithContent.some(f => f.content && f.content.includes('D5,'));
        if (hasSched5Data) {
             const ws5Data: (string | number | null)[][] = [
                ['BIR FORM 1604F - SCHEDULE 5'],
                ['ALPHABETICAL LIST OF EMPLOYEES OTHER THAN RANK AND FILE WHO RECEIVED FRINGE BENEFITS SUBJECT TO FINAL WITHHOLDING TAX'],
                [`FOR THE YEAR ENDED ${formattedDate}`],
                [null],
                [null],
                [`TIN: ${tin}-${branchCode}`],
                [`WITHHOLDING AGENT'S NAME: ${ownerName}`],
                [null],
                [null],
                [null],
                ['SEQ', 'TAXPAYER', 'NAME OF EMPLOYEES', 'ATC', 'NATURE OF FRINGE BENEFIT', 'AMOUNT OF', 'GROSSED - UP', 'AMOUNT OF'],
                ['NO', 'IDENTIFICATION', '(Last Name, First Name, Middle Name)', null, null, 'FRINGE BENEFIT', 'MONETARY', 'TAX WITHHELD'],
                [null, 'NUMBER', null, null, null, null, 'VALUE'],
                ['(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)'],
                ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
            ];

            let totalFringeBenefit = 0;
            let totalGrossedUpValue = 0;
            let totalWithholdingTaxSched5 = 0;
            
            for (const file of filesWithContent) {
                if (!file.content) continue;

                const detailLines = file.content.split('\n').filter(line => line.startsWith('D5,'));
                
                for (const line of detailLines) {
                    const cols = line.split(',').map(col => col.replace(/"/g, ''));

                    const payeeTin = cols[6];
                    const payeeBranch = cols[7];
                    const formattedTin = payeeTin ? `${payeeTin.substring(0,3)}-${payeeTin.substring(3,6)}-${payeeTin.substring(6,9)}-${payeeBranch}` : '';

                    const lastName = cols[8] || '';
                    const firstName = cols[9] || '';
                    const middleName = cols[10] || '';
                    const individualName = [lastName, firstName, middleName].some(name => name) ? `${lastName}, ${firstName} ${middleName}`.trim() : '';

                    const atc = cols[11];
                    const atcData = atcWF.find(item => item.atc === atc);
                    const natureOfPayment = atcData ? atcData.description : 'NOT FOUND';

                    const fringeBenefit = parseFloat(cols[12] || '0');
                    const grossedUpValue = parseFloat(cols[13] || '0');
                    const withholdingTax = parseFloat(cols[14] || '0');

                    totalFringeBenefit += fringeBenefit;
                    totalGrossedUpValue += grossedUpValue;
                    totalWithholdingTaxSched5 += withholdingTax;
                    
                    const bodyRow = [
                        parseInt(cols[5], 10), // Seq#
                        formattedTin,
                        individualName,
                        atc,
                        natureOfPayment,
                        fringeBenefit,
                        grossedUpValue,
                        withholdingTax
                    ];
                    ws5Data.push(bodyRow);
                }
            }

            const separatorRow = [
                null, null, null, null, null, "------------------", "------------------", "------------------"
            ];
            ws5Data.push(separatorRow);
            
            const grandTotalRow = [
                "Grand Total :", null, null, null, null, totalFringeBenefit, totalGrossedUpValue, totalWithholdingTaxSched5
            ];
            ws5Data.push(grandTotalRow);

            const doubleRuleRow = [
                null, null, null, null, null, "==================", "==================", "=================="
            ];
            ws5Data.push(doubleRuleRow);
            
            ws5Data.push(["END OF REPORT"]);

            const ws5 = xlsx.utils.aoa_to_sheet(ws5Data);
            xlsx.utils.book_append_sheet(wb, ws5, 'sched5');
        }

        const hasSched6Data = filesWithContent.some(f => f.content && f.content.includes('D6,'));

        if (hasSched6Data) {
            const ws6Data: (string | number | null)[][] = [
                ['BIR FORM 1604F - SCHEDULE 6'],
                ['ALPHABETICAL LIST OF PAYEES WHOSE INCOME PAYMENTS ARE EXEMPT FROM FINAL WITHHOLDING TAX'],
                [`FOR THE YEAR ENDED ${formattedDate}`],
                [null],
                [null],
                [`TIN: ${tin}-${branchCode}`],
                [`WITHHOLDING AGENT'S NAME: ${ownerName}`],
                [null],
                [null],
                [null],
                ['SEQ', 'TAXPAYER', 'REGISTERED NAME', 'NAME OF EMPLOYEES', 'STATUS CODE', 'ATC CODE', 'AMOUNT OF'],
                ['NO', 'IDENTIFICATION', null, '(Last Name, First Name, Middle Name)', null, null, 'INCOME PAYMENT'],
                [null, 'NUMBER'],
                ['(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)'],
                ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
            ];
            
            let totalIncomePaymentSched6 = 0;
            
            for (const file of filesWithContent) {
                if (!file.content) continue;

                const detailLines = file.content.split('\n').filter(line => line.startsWith('D6,'));

                for (const line of detailLines) {
                     const cols = line.split(',').map(col => col.replace(/"/g, ''));
                     const payeeTin = cols[6];
                     const payeeBranch = cols[7];
                     const formattedTin = payeeTin ? `${payeeTin.substring(0,3)}-${payeeTin.substring(3,6)}-${payeeTin.substring(6,9)}-${payeeBranch}` : '';

                     const lastName = cols[9] || '';
                     const firstName = cols[10] || '';
                     const middleName = cols[11] || '';
                     const individualName = [lastName, firstName, middleName].some(name => name) ? `${lastName}, ${firstName} ${middleName}`.trim() : '';
                     
                     const incomePayment = parseFloat(cols[14] || '0');
                     totalIncomePaymentSched6 += incomePayment;

                     const bodyRow = [
                        parseInt(cols[5], 10), // seq#
                        formattedTin,
                        cols[8], // regName
                        individualName,
                        cols[12], // classification_code
                        cols[13], // ATC
                        incomePayment, // income payment
                    ];
                    ws6Data.push(bodyRow);
                }
            }

            const separatorRow = [null, null, null, null, null, null, "------------------"];
            ws6Data.push(separatorRow);

            const grandTotalRow = ["Grand Total :", null, null, null, null, null, totalIncomePaymentSched6];
            ws6Data.push(grandTotalRow);
            
            const doubleRuleRow = [null, null, null, null, null, null, "=================="];
            ws6Data.push(doubleRuleRow);

            ws6Data.push(["END OF REPORT"]);
            
            const ws6 = xlsx.utils.aoa_to_sheet(ws6Data);
            xlsx.utils.book_append_sheet(wb, ws6, 'sched6');
        }


        const wbout = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
        const fileName = `${tin}-1604F-${yearStr}.xlsx`;

        return { success: true, base64: wbout, fileName };

    } catch (e) {
        console.error("Error generating 1604-F Excel:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, error: errorMessage };
    }
}
