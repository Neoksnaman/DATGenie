
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

export async function generate1604CExcel(fileIds: string[], fileNames: string[], profiles: TaxProfile[]): Promise<ExcelResult> {
    try {
        const fileContents = await Promise.all(fileIds.map(id => getDatFileContent(id)));

        const filesWithContent = fileNames.map((name, index) => ({
            name,
            content: fileContents[index].content,
        })).filter(f => f.content);
        
        if (filesWithContent.length === 0) {
            return { success: false, error: "No content found in the selected files." };
        }

        const latestFile = filesWithContent[0];
        const headerLine = latestFile.content!.split('\n').find(line => line.startsWith('H1604C,'));
        
        if (!headerLine) {
            return { success: false, error: "Could not find a valid 1604C header line in the DAT file." };
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

        // Check if there is Schedule 1 data
        const hasSched1Data = filesWithContent.some(f => f.content && f.content.includes('D1,'));

        if (hasSched1Data) {
             const ws1Data: (string | number | null)[][] = [
                ['BIR FORM 1604C - SCHEDULE 1'],
                ['ALPHABETICAL LIST OF EMPLOYEES (Declared and Certified using BIR Form No. 2316)'],
                [`FOR THE YEAR ENDED ${formattedDate}`],
                [null],
                [`TIN : ${tin}-${branchCode}`],
                [null],
                [`WITHHOLDING AGENT'S NAME: ${ownerName}`],
                [null],
                [null, null, "P   R   E   S   E   N   T     E   M   P   L   O   Y   E   R", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "P   R   E   V   I   O   U   S     E   M   P   L   O   Y   E   R", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, "N  O  N    -   T  A  X  A  B  L  E", null, null, null, null, "T  A  X  A  B  L  E", null, null, null, null, null, null, null, null, null, "N  O  N    -   T  A  X  A  B  L  E", null, null, null, null, "T  A  X  A  B  L  E", null, null, "TOTAL TAXABLE", "TOTAL TAXABLE", null, "TAX WITHHELD", null, null, "Y E A R - E N D   A D J U S T M E N T (16a or 16b)", null, null, null],
                ["SEQ", "NAME OF EMPLOYEES", "NATIONALITY/", "CURRENT EMPLOYMENT", "PERIOD OF", null, "REASON OF", "GROSS", "13th MONTH PAY", "DE MINIMIS", "SSS, GSIS, PHIC &", "SALARIES (P250K & below) &", "TOTAL", "BASIC SALARY", "13th MONTH PAY", "SALARIES & OTHER", "TOTAL TAXABLE", "TAXPAYER", "EMPLOYMENT", "PERIOD OF", null, "REASON OF", "GROSS", "13th MONTH PAY", "DE MINIMIS", "SSS, GSIS, PHIC &", "SALARIES (P250K & below) &", "TOTAL NON-TAXABLE/", "BASIC SALARY", "13th MONTH PAY", "SALARIES & OTHER", "COMPENSATION", "COMPENSATION INCOME", "TAX DUE", "(Jan. - Nov.)", null, "5% Tax Credit", "AMT WITHHELD AND PAID FOR IN DECEMBER OR LAST SALARY", "OVER", "AMOUNT OF TAX", "SUBSTITUTED FILING"],
                ["NO", "(Last Name, First Name, Middle Name)", "RESIDENT", "STATUS (*)", "EMPLOYMENT", null, "SEPARATION (**)", "COMPENSATION", "& OTHER BENEFITS", "BENEFITS", "PAG-IBIG CONTRIBUTIONS", "OTHER FORMS OF", "NON-TAXABLE/EXEMPT", "(Net of SSS,GSIS,PHIC,", "& OTHER BENEFITS", "FORMS OF", "COMPENSATION INCOME", "IDENTIFICATION", "STATUS (*)", "EMPLOYMENT", null, "SEPARATION, if applicable (**)", "COMPENSATION", "& OTHER BENEFITS", "BENEFITS", "PAG-IBIG CONTRIBUTIONS", "OTHER FORMS OF", "EXEMPT COMPENSATION(Previous Employer)", "(Net of SSS,GSIS,PHIC,", "& OTHER BENEFITS", "FORMS OF", "(previous employer)", "(Present and", "(Jan. - Dec.)", "PREVIOUS EMPLOYER", "PRESENT EMPLOYER", "(PERA Act of 2008)", "& PAID FOR IN", "WITHHELD TAX", "WITHHELD AS", "YES/NO"],
                [null, null, "(for foreigners only)", null, "From", "To", null, "INCOME", null, null, "AND UNION DUES", "COMPENSATION", "COMPENSATION INCOME", "HDMF Contri & Union Dues)", "(In excess of Threshold)", "COMPENSATION", "(present employer)", "NUMBER", null, "From", "To", null, "PREVIOUS EMPLOYER", null, null, "AND UNION DUES", "COMPENSATION", null, "HDMF Contri & Union Dues)", null, "COMPENSATION", null, "Previous Employer)", null, null, null, null, "DECEMBER or Last Salary", "REFUNDED TO", "ADJUSTED", "***"],
                [null, null, null, null, null, null, null, "(present employer)", null, null, "(employees share only)", null, "(present employer)", null, null, null, null, null, null, null, null, null, null, null, null, "(employees share only)", null, null, null, null, null, null, null, null, null, null, null, null, "EMPLOYEE", "18=(15a+15b+16+17a)", null],
                ["(1)", "(2a)(2b)(2c)", "(3)", "(4)", "(5a)", "(5b)", "(6)", "7a=(7f+7j)", "(7b)", "(7c)", "(7d)", "(7e)", "7f=(7b+7c+7d+7e)", "(7g)", "(7h)", "(7i)", "7j=(7g+7h+7i)", "(8)", "(9)", "(10a)", "(10b)", "(11)", "12a=(12f+12j)", "(12b)", "(12c)", "(12d)", "(12e)", "12f=(12b+12c+12d+12e)", "(12g)", "(12h)", "(12i)", "12j=(12g+12h+12i)", "13=(7j+12j)", "(14)", "(15a)", "(15b)", "(16)", "17a=14-(15a+15b)-16", "17b=(15a+15b)-14", "OR (15a+15b+16-17b)", "(19)"],
                ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
            ];
            
            for (const file of filesWithContent) {
                if (!file.content) continue;

                const detailLines = file.content.split('\n').filter(line => line.startsWith('D1,'));
                for (const line of detailLines) {
                    const cols = line.split(',').map(col => col.replace(/"/g, ''));
                    
                    const lastName = cols[8] || '';
                    const firstName = cols[9] || '';
                    const middleName = cols[10] || '';
                    const fullName = `${lastName}, ${firstName} ${middleName}`.trim();
                    
                    const employeeTin = cols[6];
                    const employeeBranch = cols[7];
                    const formattedTin = employeeTin ? `${employeeTin.substring(0,3)}-${employeeTin.substring(3,6)}-${employeeTin.substring(6,9)}-${employeeBranch}` : '';

                    const bodyRow: (string | number | null)[] = [
                        parseInt(cols[5], 10), // seq#
                        fullName, // name
                        cols[44], // nationality
                        cols[45], // employment status
                        cols[23], // employment_from (current)
                        cols[24], // employment_to (current)
                        cols[46], // reason of separation
                        parseFloat(cols[25] || '0'), // pres grossCompensation
                        parseFloat(cols[27] || '0'), // pres nontax_13thMonth
                        parseFloat(cols[28] || '0'), // pres deminimis
                        parseFloat(cols[29] || '0'), // pres govtContri
                        parseFloat(cols[30] || '0'), // pres otherNontax
                        parseFloat(cols[31] || '0'), // pres totalNontax
                        parseFloat(cols[32] || '0'), // pres taxableBasic
                        parseFloat(cols[33] || '0'), // pres taxable13thMonth
                        parseFloat(cols[34] || '0'), // pres otherTaxable
                        parseFloat(cols[35] || '0'), // pres totalTaxable
                        formattedTin, // employee TIN
                        cols[45], // employment status (previous) - same as current
                        cols[23], // employment_from (previous)
                        cols[24], // employment_to (previous)
                        cols[46], // reason of separation (previous)
                        parseFloat(cols[12] || '0'), // prev grossCompensation
                        parseFloat(cols[14] || '0'), // prev nontax13thMonth
                        parseFloat(cols[15] || '0'), // prev deminimis
                        parseFloat(cols[16] || '0'), // prev govtContri
                        parseFloat(cols[17] || '0'), // prev otherNontax
                        parseFloat(cols[18] || '0'), // prev totalNontax
                        parseFloat(cols[19] || '0'), // prev taxableBasic
                        parseFloat(cols[20] || '0'), // prev taxable13thMonth
                        parseFloat(cols[21] || '0'), // prev otherTaxable
                        parseFloat(cols[22] || '0'), // prev totalTaxable
                        parseFloat(cols[37] || '0'), // prev & pres totalTaxableIncome
                        parseFloat(cols[38] || '0'), // tax due (Jan-Dec)
                        parseFloat(cols[40] || '0'), // prev taxWithheld (Jan-Nov)
                        parseFloat(cols[39] || '0'), // pres taxWithheld (Jan-Nov)
                        parseFloat(cols[48] || '0'), // 5% PERA
                        parseFloat(cols[41] || '0'), // taxWithheld December
                        parseFloat(cols[42] || '0'), // tax refund
                        parseFloat(cols[43] || '0'), // taxwithheld adjusted
                        cols[47], // substituted filing?
                    ];
                    ws1Data.push(bodyRow);
                }
            }
            
            const fullContent = filesWithContent.map(f => f.content).join('\n');
            const footerLine1 = fullContent.split('\n').find(line => line.startsWith('C1,'));

            if (footerLine1) {
                const footerCols = footerLine1.split(',');

                const separatorRow = [null, null, null, null, null, null, null, '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', null, null, null, null, null, '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------'];
                ws1Data.push(separatorRow);
                
                const grandTotalRow = [
                    "Grand Total :", null, null, null, null, null, null,
                    parseFloat(footerCols[16] || '0'), // Total pres grossCompensation
                    parseFloat(footerCols[18] || '0'), // Total pres nontax_13thMonth
                    parseFloat(footerCols[19] || '0'), // Total pres deminimis
                    parseFloat(footerCols[20] || '0'), // Total pres govtContri
                    parseFloat(footerCols[21] || '0'), // Total pres otherNontax
                    parseFloat(footerCols[22] || '0'), // Total pres totalNontax
                    parseFloat(footerCols[23] || '0'), // Total pres taxableBasic
                    parseFloat(footerCols[24] || '0'), // Total pres taxable13thMonth
                    parseFloat(footerCols[25] || '0'), // Total pres otherTaxable
                    parseFloat(footerCols[26] || '0'), // Total pres totalTaxable
                    null, null, null, null, null,
                    parseFloat(footerCols[5] || '0'),  // Total prev grossCompensation
                    parseFloat(footerCols[7] || '0'),  // Total prev nontax13thMonth
                    parseFloat(footerCols[8] || '0'),  // Total prev deminimis
                    parseFloat(footerCols[9] || '0'),  // Total prev govtContri
                    parseFloat(footerCols[10] || '0'), // Total prev otherNontax
                    parseFloat(footerCols[11] || '0'), // Total prev totalNontax
                    parseFloat(footerCols[12] || '0'), // Total prev taxableBasic
                    parseFloat(footerCols[13] || '0'), // Total prev taxable13thMonth
                    parseFloat(footerCols[14] || '0'), // Total prev otherTaxable
                    parseFloat(footerCols[15] || '0'), // Total prev totalTaxable
                    parseFloat(footerCols[28] || '0'), // Total prev & pres totalTaxableIncome
                    parseFloat(footerCols[29] || '0'), // Total tax due (Jan-Dec)
                    parseFloat(footerCols[31] || '0'), // Total prev taxWithheld (Jan-Nov)
                    parseFloat(footerCols[30] || '0'), // Total pres taxWithheld (Jan-Nov)
                    parseFloat(footerCols[35] || '0'), // Total 5% PERA
                    parseFloat(footerCols[32] || '0'), // Total taxWithheld December
                    parseFloat(footerCols[33] || '0'), // Total tax refund
                    parseFloat(footerCols[34] || '0'), // Total taxwithheld adjusted
                ];
                ws1Data.push(grandTotalRow);
                
                const doubleRuleRow = [null, null, null, null, null, null, null, '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', null, null, null, null, null, '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '=================='];
                ws1Data.push(doubleRuleRow);
            }
           
            ws1Data.push(["END OF REPORT"]);
            const ws1 = xlsx.utils.aoa_to_sheet(ws1Data, {skipHeader: true});
            xlsx.utils.book_append_sheet(wb, ws1, 'sched1');
        }
        
        const hasSched2Data = filesWithContent.some(f => f.content && f.content.includes('D2,'));

        if (hasSched2Data) {
            const ws2Data: (string | number | null)[][] = [
                ['BIR FORM 1604C - SCHEDULE 2'],
                ['ALPHABETICAL LIST OF MINIMUM WAGE EARNERS (Declared and Certified using BIR Form No. 2316)'],
                [`FOR THE YEAR ENDED ${formattedDate}`],
                [null],
                [`TIN : ${tin}-${branchCode}`],
                [null],
                [`WITHHOLDING AGENT'S NAME: ${ownerName}`],
                [null],
                [null, null, "P   R   E   S   E   N   T     E   M   P   L   O   Y   E   R", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "P   R   E   V   I   O   U   S     E   M   P   L   O   Y   E   R", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, "N  O  N    -   T  A  X  A  B  L  E", null, null, null, null, null, null, null, null, null, null, null, null, null, "T  A  X  A  B  L  E", null, null, null, null, null, null, null, null, "N  O  N    -   T  A  X  A  B  L  E", null, null, null, null, null, null, null, null, null, "T  A  X  A  B  L  E", null, "TOTAL TAXABLE", "TOTAL TAXABLE", null, "TAX WITHHELD", null, null, "Y E A R - E N D   A D J U S T M E N T (16a or 16b)", null, null, null],
                ["SEQ", "NAME OF EMPLOYEES", "CURRENT EMPLOYMENT", null, "PERIOD OF", null, "REASON OF", "GROSS", "BASIC SMW", "BASIC SMW", "BASIC SMW", "FACTOR USED", "BASIC/", "HOLIDAY", "OVERTIME", "NIGHT", "HAZARD", "13th MONTH PAY", "DE MINIMIS", "SSS, GSIS, PHIC &", "SALARIES & OTHER", "TOTAL", "13th MONTH PAY", "SALARIES & OTHER", "TOTAL TAXABLE", "TAXPAYER", "EMPLOYMENT", "PERIOD OF", null, "REASON OF", "GROSS", "BASIC/", "HOLIDAY", "OVERTIME", "NIGHT", "HAZARD", "13th MONTH PAY", "DE MINIMIS", "SSS, GSIS, PHIC &", "SALARIES & OTHER", "TOTAL NON-TAXABLE/", "13th MONTH PAY", "SALARIES & OTHER", "COMPENSATION", "COMPENSATION INCOME", "TAX DUE", "(Jan. - Nov.)", null, "5% Tax Credit", "AMT WITHHELD", "OVER", "AMOUNT OF TAX", "SUBSTITUTED FILING"],
                ["NO", "(Last Name, First Name, Middle Name)", "STATUS (*)", "WHERE", "EMPLOYMENT", null, "SEPARATION (**)", "COMPENSATION", "PER DAY", "PER MONTH", "PER YEAR", "(NO OF DAYS/YEAR)", "SMW", "PAY", "PAY", "SHIFT", "PAY", "& OTHER BENEFITS", "BENEFITS", "PAG-IBIG CONTRIBUTIONS", "FORMS OF", "NON-TAXABLE/EXEMPT", "& OTHER BENEFITS", "FORMS OF", "(PRESENT EMPLOYER)", "IDENTIFICATION", "STATUS (*)", "EMPLOYMENT", null, "SEPARATION, if applicable (**)", "COMPENSATION", "SMW", "PAY", "PAY", "SHIFT", "PAY", "& OTHER BENEFITS", "BENEFITS", "PAG-IBIG CONTRIBUTIONS", "FORMS OF", "EXEMPT COMPENSATION(Previous Employer)", "& OTHER BENEFITS", "FORMS OF", "(previous employer)", "(Present and", "(Jan. - Dec.)", "PREVIOUS EMPLOYER", "PRESENT EMPLOYER", "(PERA Act of 2008)", "& PAID FOR IN", "WITHHELD TAX", "WITHHELD AS", "YES/NO"],
                [null, null, null, "ASSIGNED", "From", "To", null, "(present employer)", null, '(actual net of SSS,GSIS,PHIC)', null, null, null, null, null, "DIFFERENTIAL", null, null, null, "AND UNION DUES", "COMPENSATION", "COMPENSATION INCOME", null, "COMPENSATION", null, "NUMBER", null, "From", "To", null, "PREVIOUS EMPLOYER", "(actual net of SSS,GSIS,PHIC)", null, null, "DIFFERENTIAL", null, null, null, "AND UNION DUES", "COMPENSATION", null, null, "COMPENSATION", null, "Previous Employer)", null, null, null, null, "DECEMBER or Last Salary", "REFUNDED TO", "ADJUSTED", "***"],
                [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '(employees share only)', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '(employees share only)', null, null, null, null, null, null, null, null, null, null, null, "EMPLOYEE", "18=(15a+15b+16+17a)", null],
                ["(1)", "(2a)(2b)(2c)", "(3)", "(4)", "(5a)", "(5b)", "(6)", "7a=(7o+7r)", "(7b)", "(7c)", "(7d)", "(7e)", "(7f)", "(7g)", "(7h)", "(7i)", "(7j)", "(7k)", "(7l)", "(7m)", "(7n)", "(7o)", "(7p)", "(7q)", "7r=(7p+7q)", "(8)", "(9)", "(10a)", "(10b)", "(11)", "12a=(12k+12n)", "(12b)", "(12c)", "(12d)", "(12e)", "(12f)", "(12g)", "(12h)", "(12i)", "(12j)", "12k=(sum of 12b to 12j)", "(12l)", "(12m)", "12n=(12l+12m)", "(13)", "(14)", "(15a)", "(15b)", "(16)", "17a=14-(15a+15b)-16", "17b=(15a+15b)-14", "OR (15a+15b+16-17b)", "(19)"],
                ["------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------", "------------------------------"],
            ];

            for (const file of filesWithContent) {
                if (!file.content) continue;

                const detailLines = file.content.split('\n').filter(line => line.startsWith('D2,'));
                for (const line of detailLines) {
                    const cols = line.split(',').map(col => col.replace(/"/g, ''));

                    const lastName = cols[8] || '';
                    const firstName = cols[9] || '';
                    const middleName = cols[10] || '';
                    const fullName = `${lastName}, ${firstName} ${middleName}`.trim();

                    const employeeTin = cols[6];
                    const employeeBranch = cols[7];
                    const formattedTin = employeeTin ? `${employeeTin.substring(0, 3)}-${employeeTin.substring(3, 6)}-${employeeTin.substring(6, 9)}-${employeeBranch}` : '';

                    const bodyRow: (string | number | null)[] = [
                        parseInt(cols[5], 10), // 1. seq#
                        fullName, // 2. name
                        cols[54], // 3. employment status
                        cols[11], // 4. region
                        cols[26], // 5. employment_from (current)
                        cols[27], // 6. employment_to (current)
                        cols[55], // 7. reason of separation
                        parseFloat(cols[28] || '0'), // 8. pres grossCompensation
                        parseFloat(cols[29] || '0'), // 9. MWE basic/day
                        parseFloat(cols[30] || '0'), // 10. MWE basic/month
                        parseFloat(cols[31] || '0'), // 11. MWE basic/year
                        parseFloat(cols[32] || '0'), // 12. factor rate
                        parseFloat(cols[58] || '0'), // 13. pres nontaxBasic
                        parseFloat(cols[33] || '0'), // 14. pres nontaxHolidayPay
                        parseFloat(cols[34] || '0'), // 15. pres nontaxOverTime
                        parseFloat(cols[35] || '0'), // 16. pres nontaxNightDiff
                        parseFloat(cols[36] || '0'), // 17. pres nontaxHazardPay
                        parseFloat(cols[37] || '0'), // 18. pres nontax13thMonth
                        parseFloat(cols[38] || '0'), // 19. pres deminimis
                        parseFloat(cols[39] || '0'), // 20. pres govtContri
                        parseFloat(cols[40] || '0'), // 21. pres otherNontax
                        parseFloat(cols[41] || '0'), // 22. pres totalNontax
                        parseFloat(cols[42] || '0'), // 23. pres taxable13thMonth
                        parseFloat(cols[43] || '0'), // 24. pres otherTaxable
                        parseFloat(cols[44] || '0'), // 25. pres totalTaxable
                        formattedTin, // 26. employee TIN-branch
                        cols[54], // 27. employment status (previous)
                        cols[26], // 28. employment_from (previous)
                        cols[27], // 29. employment_to (previous)
                        cols[55], // 30. reason of separation (previous)
                        parseFloat(cols[12] || '0'), // 31. prev grossCompensation
                        parseFloat(cols[13] || '0'), // 32. prev nontaxBasic
                        parseFloat(cols[14] || '0'), // 33. prev nontaxHolidayPay
                        parseFloat(cols[15] || '0'), // 34. prev nontaxOverTime
                        parseFloat(cols[16] || '0'), // 35. prev nontaxNightDiff
                        parseFloat(cols[17] || '0'), // 36. prev nontaxHazardPay
                        parseFloat(cols[18] || '0'), // 37. prev nontax13thMonth
                        parseFloat(cols[19] || '0'), // 38. prev deminimis
                        parseFloat(cols[20] || '0'), // 39. prev govtContri
                        parseFloat(cols[21] || '0'), // 40. prev otherNontax
                        parseFloat(cols[22] || '0'), // 41. prev totalNontax
                        parseFloat(cols[23] || '0'), // 42. prev taxable13thMonth
                        parseFloat(cols[24] || '0'), // 43. prev otherTaxable
                        parseFloat(cols[25] || '0'), // 44. prev totalTaxable
                        parseFloat(cols[46] || '0'), // 45. prev & pres totalTaxableIncome
                        parseFloat(cols[47] || '0'), // 46. tax due (Jan-Dec)
                        parseFloat(cols[49] || '0'), // 47. pres taxWithheld (Jan-Nov)
                        parseFloat(cols[48] || '0'), // 48. prev taxWithheld (Jan-Nov)
                        parseFloat(cols[57] || '0'), // 49. 5% PERA
                        parseFloat(cols[50] || '0'), // 50. taxWithheld December
                        parseFloat(cols[51] || '0'), // 51. tax refund
                        parseFloat(cols[52] || '0'), // 52. taxwithheld adjusted
                        cols[56], // 53. substituted filing?
                    ];
                    ws2Data.push(bodyRow);
                }
            }

            const fullContent = filesWithContent.map(f => f.content).join('\n');
            const footerLine2 = fullContent.split('\n').find(line => line.startsWith('C2,'));

            if (footerLine2) {
                const footerCols = footerLine2.split(',');

                const separatorRow = [null, null, null, null, null, null, null, '------------------', '------------------', '------------------', '------------------', null, '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', null, null, null, null, null, '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------', '------------------'];
                ws2Data.push(separatorRow);

                const grandTotalRow = [
                    "Grand Total :", null, null, null, null, null, null,
                    parseFloat(footerCols[19] || '0'), // Total of pres grossCompensation
                    parseFloat(footerCols[20] || '0'), // Total of MWE basic/day
                    parseFloat(footerCols[21] || '0'), // Total of MWE basic/month
                    parseFloat(footerCols[22] || '0'), // Total of MWE basic/year
                    null,
                    parseFloat(footerCols[44] || '0'), // Total of pres nontaxBasic
                    parseFloat(footerCols[23] || '0'), // Total of pres nontaxHolidayPay
                    parseFloat(footerCols[24] || '0'), // Total of pres nontaxOverTime
                    parseFloat(footerCols[25] || '0'), // Total of pres nontaxNightDiff
                    parseFloat(footerCols[26] || '0'), // Total of pres nontaxHazardPay
                    parseFloat(footerCols[27] || '0'), // Total of pres nontax13thMonth
                    parseFloat(footerCols[28] || '0'), // Total of pres deminimis
                    parseFloat(footerCols[29] || '0'), // Total of pres govtContri
                    parseFloat(footerCols[30] || '0'), // Total of pres otherNontax
                    parseFloat(footerCols[31] || '0'), // Total of pres totalNontax
                    parseFloat(footerCols[32] || '0'), // Total of pres taxable13thMonth
                    parseFloat(footerCols[33] || '0'), // Total of pres otherTaxable
                    parseFloat(footerCols[34] || '0'), // Total of pres totalTaxable
                    null, null, null, null, null,
                    parseFloat(footerCols[5] || '0'),  // Total of prev grossCompensation
                    parseFloat(footerCols[6] || '0'),  // Total of prev nontaxBasic
                    parseFloat(footerCols[7] || '0'),  // Total of prev nontaxHolidayPay
                    parseFloat(footerCols[8] || '0'),  // Total of prev nontaxOverTime
                    parseFloat(footerCols[9] || '0'),  // Total of prev nontaxNightDiff
                    parseFloat(footerCols[10] || '0'), // Total of prev nontaxHazardPay
                    parseFloat(footerCols[11] || '0'), // Total of prev nontax13thMonth
                    parseFloat(footerCols[12] || '0'), // Total of prev deminimis
                    parseFloat(footerCols[13] || '0'), // Total of prev govtContri
                    parseFloat(footerCols[14] || '0'), // Total of prev otherNontax
                    parseFloat(footerCols[15] || '0'), // Total of prev totalNontax
                    parseFloat(footerCols[16] || '0'), // Total of prev taxable13thMonth
                    parseFloat(footerCols[17] || '0'), // Total of prev otherTaxable
                    parseFloat(footerCols[18] || '0'), // Total of prev totalTaxable
                    parseFloat(footerCols[36] || '0'), // Total of prev & pres totalTaxableIncome
                    parseFloat(footerCols[37] || '0'), // Total of tax due (Jan-Dec)
                    parseFloat(footerCols[39] || '0'), // Total of prev taxWithheld (Jan-Nov)
                    parseFloat(footerCols[38] || '0'), // Total of pres taxWithheld (Jan-Nov)
                    parseFloat(footerCols[43] || '0'), // Total of 5% PERA
                    parseFloat(footerCols[40] || '0'), // Total of taxWithheld December
                    parseFloat(footerCols[41] || '0'), // Total of tax refund
                    parseFloat(footerCols[42] || '0'), // Total of taxwithheld adjusted
                ];
                ws2Data.push(grandTotalRow);
                
                const doubleRuleRow = [null, null, null, null, null, null, null, '==================', '==================', '==================', '==================', null, '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', null, null, null, null, null, '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '==================', '=================='];
                ws2Data.push(doubleRuleRow);
            }
            
            ws2Data.push(["END OF REPORT"]);
            const ws2 = xlsx.utils.aoa_to_sheet(ws2Data, {skipHeader: true});
            xlsx.utils.book_append_sheet(wb, ws2, 'sched2');
        }

        const wbout = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
        const fileName = `${tin}-1604C-${yearStr}.xlsx`;

        return { success: true, base64: wbout, fileName };

    } catch (e) {
        console.error("Error generating 1604-C Excel:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { success: false, error: errorMessage };
    }
}
