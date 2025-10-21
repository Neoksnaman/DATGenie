
'use server';

import * as xlsx from 'xlsx';
import { atcWE, atcExempt } from '../../schedules';

interface ExcelResult {
    success: boolean;
    base64?: string;
    fileName?: string;
    error?: string;
}

export async function convertDatToTemplate(datContent: string, originalFileName: string): Promise<ExcelResult> {
    if (!datContent) {
        return { success: false, error: "DAT file content is empty." };
    }

    const lines = datContent.split('\n');
    const headerLine = lines[0];

    try {
        if (headerLine.startsWith('H,S,')) {
            return generateTemplateFromSales(lines, originalFileName);
        } else if (headerLine.startsWith('H,P,')) {
            return generateTemplateFromPurchases(lines, originalFileName);
        } else if (headerLine.startsWith('H,I,')) {
            return generateTemplateFromImportations(lines, originalFileName);
        } else if (headerLine.includes('HSAWT,H')) {
            return generateTemplateFromSAWT(lines, originalFileName);
        } else if (headerLine.includes('HQAP,H1601EQ')) {
            return generateTemplateFrom1601EQ(lines, originalFileName);
        } else if (headerLine.startsWith('H1604C,')) {
            return generateTemplateFrom1604C(lines, originalFileName);
        } else if (headerLine.startsWith('H1604E,')) {
            return generateTemplateFrom1604E(lines, originalFileName);
        } else if (headerLine.startsWith('H1604F,')) {
            return generateTemplateFrom1604F(lines, originalFileName);
        }

        return { success: false, error: 'This DAT file type is not yet supported for template conversion.' };
    } catch (e) {
        console.error('Error during template conversion:', e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred during conversion.";
        return { success: false, error: errorMessage };
    }
}

function generateTemplateFromSales(lines: string[], originalFileName: string): ExcelResult {
    const headers = ['TIN', 'REGISTERED_NAME', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'ADDRESS_1', 'ADDRESS_2', 'EXEMPT_SALES', 'ZERO_RATED_SALES', 'TAXABLE_SALES', 'OUTPUT_TAX'];
    const dataRows = lines.slice(1).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [
            cols[2], // TIN
            cols[3], // REGISTERED_NAME
            cols[4], // LAST_NAME
            cols[5], // FIRST_NAME
            cols[6], // MIDDLE_NAME
            cols[7], // ADDRESS_1
            cols[8], // ADDRESS_2
            parseFloat(cols[9] || '0'),
            parseFloat(cols[10] || '0'),
            parseFloat(cols[11] || '0'),
            parseFloat(cols[12] || '0'),
        ];
    });

    const ws = xlsx.utils.aoa_to_sheet([headers, ...dataRows]);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'vat_sales');
    const base64 = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
    const fileName = `Template_From_${originalFileName.replace('.DAT', '.xlsx')}`;

    return { success: true, base64, fileName };
}

function generateTemplateFromPurchases(lines: string[], originalFileName: string): ExcelResult {
    const headers = ['TIN', 'REGISTERED_NAME', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'ADDRESS_1', 'ADDRESS_2', 'EXEMPT_PURCHASES', 'ZERO_RATED_PURCHASES', 'PURCHASES_OF_SERVICES', 'PURCHASES_OF_CAPITAL_GOODS', 'PURCHASES_OF_OTHER_GOODS', 'INPUT_TAX'];
    const dataRows = lines.slice(1).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [
            cols[2], // TIN
            cols[3], // REGISTERED_NAME
            cols[4], // LAST_NAME
            cols[5], // FIRST_NAME
            cols[6], // MIDDLE_NAME
            cols[7], // ADDRESS_1
            cols[8], // ADDRESS_2
            parseFloat(cols[9] || '0'),
            parseFloat(cols[10] || '0'),
            parseFloat(cols[11] || '0'),
            parseFloat(cols[12] || '0'),
            parseFloat(cols[13] || '0'),
            parseFloat(cols[14] || '0'),
        ];
    });

    const ws = xlsx.utils.aoa_to_sheet([headers, ...dataRows]);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'vat_purchases');
    const base64 = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
    const fileName = `Template_From_${originalFileName.replace('.DAT', '.xlsx')}`;

    return { success: true, base64, fileName };
}

function generateTemplateFromImportations(lines: string[], originalFileName: string): ExcelResult {
    const headers = ['IMPORT_ENTRY#', 'ASSESSMENT_DATE', 'COMPANY_NAME', 'IMPORTATION_DATE', 'COUNTRY_OF_ORIGIN', 'DUTIABLE_VALUE', 'ALL_OTHER_CHARGES', 'EXEMPT', 'TAXABLE_GOODS', 'INPUT_VAT', 'OFFICIAL_RECEIPT#', 'PAYMENT_DATE'];
    const dataRows = lines.slice(1).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [
            cols[2], // IMPORT_ENTRY#
            cols[3], // ASSESSMENT_DATE
            cols[4], // COMPANY_NAME
            cols[5], // IMPORTATION_DATE
            cols[6], // COUNTRY_OF_ORIGIN
            parseFloat(cols[7] || '0'),
            parseFloat(cols[8] || '0'),
            parseFloat(cols[9] || '0'),
            parseFloat(cols[10] || '0'),
            parseFloat(cols[11] || '0'),
            cols[12], // OFFICIAL_RECEIPT#
            cols[13], // PAYMENT_DATE
        ];
    });

    const ws = xlsx.utils.aoa_to_sheet([headers, ...dataRows]);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'vat_import');
    const base64 = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
    const fileName = `Template_From_${originalFileName.replace('.DAT', '.xlsx')}`;

    return { success: true, base64, fileName };
}

function generateTemplateFromSAWT(lines: string[], originalFileName: string): ExcelResult {
    const schedule = originalFileName.substring(16, originalFileName.length - 4);
    const headers = ['TAXPAYER_IDENTIFICATION_NUMBER', 'BRANCH_CODE', 'REGISTERED_NAME', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'ATC', 'RATE', 'INCOME_PAYMENT', 'WITHHOLDING_TAX'];
    
    const dataRows = lines.filter(line => line.startsWith('DSAWT')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [
            cols[3], // TIN
            cols[4], // BRANCH_CODE
            cols[5], // REGISTERED_NAME
            cols[6], // LAST_NAME
            cols[7], // FIRST_NAME
            cols[8], // MIDDLE_NAME
            cols[11], // ATC
            parseFloat(cols[12] || '0'),
            parseFloat(cols[13] || '0'),
            parseFloat(cols[14] || '0'),
        ];
    });
    
    const ws = xlsx.utils.aoa_to_sheet([headers, ...dataRows]);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, `sawt_${schedule}`);
    const base64 = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
    const fileName = `Template_From_${originalFileName.replace('.DAT', '.xlsx')}`;

    return { success: true, base64, fileName };
}


function generateTemplateFrom1601EQ(lines: string[], originalFileName: string): ExcelResult {
    const wb = xlsx.utils.book_new();
    
    const sched1Headers = ['TIN', 'BRANCH_CODE', 'REGISTERED_NAME', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'ATC_CODE', 'RATE', 'INCOME_PAYMENT', 'WITHHOLDING_TAX'];
    const sched1DataRows = lines.filter(line => line.startsWith('D1,')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [cols[3], cols[4], cols[5], cols[6], cols[7], cols[8], cols[10], parseFloat(cols[11] || '0'), parseFloat(cols[12] || '0'), parseFloat(cols[13] || '0')];
    });
    if (sched1DataRows.length > 0) {
        const ws1 = xlsx.utils.aoa_to_sheet([sched1Headers, ...sched1DataRows]);
        xlsx.utils.book_append_sheet(wb, ws1, '1601EQ_sched1');
    }

    const sched2Headers = ['TIN', 'BRANCH_CODE', 'REGISTERED_NAME', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'ATC_CODE', 'INCOME_PAYMENT'];
    const sched2DataRows = lines.filter(line => line.startsWith('D2,')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [cols[3], cols[4], cols[5], cols[6], cols[7], cols[8], cols[10], parseFloat(cols[11] || '0')];
    });
    if (sched2DataRows.length > 0) {
        const ws2 = xlsx.utils.aoa_to_sheet([sched2Headers, ...sched2DataRows]);
        xlsx.utils.book_append_sheet(wb, ws2, '1601EQ_sched2');
    }
    
    if (wb.SheetNames.length === 0) {
        return { success: false, error: "No sched1 or sched2 data found in the DAT file." };
    }

    const base64 = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
    const fileName = `Template_From_${originalFileName.replace('.DAT', '.xlsx')}`;
    return { success: true, base64, fileName };
}

function generateTemplateFrom1604C(lines: string[], originalFileName: string): ExcelResult {
    const wb = xlsx.utils.book_new();

    const sched1Headers = [
        'Employee TIN', 'Branch Code', 'Last Name', 'First Name', 'Middle Name', 'Region', 
        'Prev Gross Compensation', 'Prev 13th Month Pay', 'Prev Deminimis', 'Prev SSS/GSIS/PHIC etc.', 'Prev Other Non-Tax', 'Prev Total Non-Tax', 
        'Prev Basic Salary', 'Prev Taxable 13th Month', 'Prev Other Taxable', 'Prev Total Taxable', 
        'Pres Gross Compensation', 'Pres 13th Month Pay', 'Pres Deminimis', 'Pres SSS/GSIS/PHIC etc.', 'Pres Other Non-Tax', 'Pres Total Non-Tax', 
        'Pres Basic Salary', 'Pres Taxable 13th Month', 'Pres Other Taxable', 'Pres Total Taxable', 
        'Total Taxable Income', 'Tax Due Jan-Dec', 'Tax Withheld (Present)', 'Tax Withheld (Previous)', 'Tax Withheld December', 
        'Tax Refunded', 'Tax Withheld as Adjusted', 'Nationality', 'Employment Status', 'Separation Reason', 'Substituted Filing'
    ];
    const sched1DataRows = lines.filter(line => line.startsWith('D1,')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [
            cols[6], cols[7], cols[8], cols[9], cols[10], cols[11],
            cols[12], cols[14], cols[15], cols[16], cols[17], cols[18],
            cols[19], cols[20], cols[21], cols[22],
            cols[25], cols[27], cols[28], cols[29], cols[30], cols[31],
            cols[32], cols[33], cols[34], cols[35],
            cols[37], cols[38], cols[39], cols[40], cols[41],
            cols[42], cols[43], cols[44], cols[45], cols[46], cols[47]
        ];
    });
     if (sched1DataRows.length > 0) {
        const ws1 = xlsx.utils.aoa_to_sheet([sched1Headers, ...sched1DataRows]);
        xlsx.utils.book_append_sheet(wb, ws1, '1604C_sched1');
    }

    const sched2Headers = [
        'Employee TIN', 'Branch Code', 'Last Name', 'First Name', 'Middle Name', 'Region Where Assigned',
        'Prev Gross Compensation', 'Prev Basic SMW', 'Prev Holiday Pay', 'Prev Overtime Pay', 'Prev Night Shift', 'Prev Hazard Pay',
        'Prev 13th Month Pay', 'Prev Deminimis', 'Prev SSS/GSIS/PHIC etc.', 'Prev Other Non-Tax', 'Prev Total Non-Tax',
        'Prev Taxable 13th Month', 'Prev Other Taxable', 'Prev Total Taxable', 'Employment From', 'Employment To',
        'Pres Gross Compensation', 'Pres Basic SMW', 'Pres Holiday Pay', 'Pres Overtime Pay', 'Pres Night Shift', 'Pres Hazard Pay',
        'Pres 13th Month Pay', 'Pres Deminimis', 'Pres SSS/GSIS/PHIC etc.', 'Pres Other Non-Tax', 'Pres Total Non-Tax',
        'Pres Taxable 13th Month', 'Pres Other Taxable', 'Pres Total Taxable', 'Total Taxable Income', 'Tax Due Jan-Dec',
        'Tax Withheld (Present)', 'Tax Withheld (Previous)', 'Tax Withheld December', 'Tax Refunded', 'Tax Withheld as Adjusted',
        'Nationality', 'Employment Status', 'Separation Reason', 'Substituted Filing'
    ];
    const sched2DataRows = lines.filter(line => line.startsWith('D2,')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [
            cols[6], cols[7], cols[8], cols[9], cols[10], cols[11],
            cols[12], cols[13], cols[14], cols[15], cols[16], cols[17],
            cols[18], cols[19], cols[20], cols[21], cols[22],
            cols[23], cols[24], cols[25], cols[26], cols[27],
            cols[28], cols[29], cols[33], cols[34], cols[35], cols[36],
            cols[37], cols[38], cols[39], cols[40], cols[41],
            cols[42], cols[43], cols[44], cols[46], cols[47],
            cols[48], cols[49], cols[50], cols[51], cols[52],
            cols[53], cols[54], cols[55], cols[56]
        ];
    });
    if (sched2DataRows.length > 0) {
        const ws2 = xlsx.utils.aoa_to_sheet([sched2Headers, ...sched2DataRows]);
        xlsx.utils.book_append_sheet(wb, ws2, '1604C_sched2');
    }

    if (wb.SheetNames.length === 0) {
        return { success: false, error: "No sched1 or sched2 data found in the 1604-C DAT file." };
    }

    const base64 = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
    const fileName = `Template_From_${originalFileName.replace('.DAT', '.xlsx')}`;
    return { success: true, base64, fileName };
}

function generateTemplateFrom1604E(lines: string[], originalFileName: string): ExcelResult {
    const wb = xlsx.utils.book_new();

    const sched3Headers = ['TIN', 'BRANCH_CODE', 'REGISTERED_NAME', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'ATC_CODE', 'INCOME_PAYMENT', 'RATE', 'WITHHOLDING_TAX'];
    const sched3DataRows = lines.filter(line => line.startsWith('D3,')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [cols[6], cols[7], cols[8], cols[9], cols[10], cols[11], cols[12], parseFloat(cols[13] || '0'), parseFloat(cols[14] || '0'), parseFloat(cols[15] || '0')];
    });
    if (sched3DataRows.length > 0) {
        const ws = xlsx.utils.aoa_to_sheet([sched3Headers, ...sched3DataRows]);
        xlsx.utils.book_append_sheet(wb, ws, '1604E_sched3');
    }

    const sched4Headers = ['TIN', 'BRANCH_CODE', 'REGISTERED_NAME', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'ATC_CODE', 'INCOME_PAYMENT'];
    const sched4DataRows = lines.filter(line => line.startsWith('D4,')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [cols[6], cols[7], cols[8], cols[9], cols[10], cols[11], cols[12], parseFloat(cols[13] || '0')];
    });
    if (sched4DataRows.length > 0) {
        const ws = xlsx.utils.aoa_to_sheet([sched4Headers, ...sched4DataRows]);
        xlsx.utils.book_append_sheet(wb, ws, '1604E_sched4');
    }

    if (wb.SheetNames.length === 0) {
        return { success: false, error: "No sched3 or sched4 data found in the 1604-E DAT file." };
    }

    const base64 = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
    const fileName = `Template_From_${originalFileName.replace('.DAT', '.xlsx')}`;
    return { success: true, base64, fileName };
}

function generateTemplateFrom1604F(lines: string[], originalFileName: string): ExcelResult {
    const wb = xlsx.utils.book_new();

    const sched4Headers = ['TIN', 'BRANCH_CODE', 'REGISTERED_NAME', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'STATUS', 'ATC_CODE', 'INCOME_PAYMENT', 'RATE', 'WITHHOLDING_TAX'];
    const sched4DataRows = lines.filter(line => line.startsWith('D4,')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [cols[6], cols[7], cols[8], cols[9], cols[10], cols[11], cols[12], cols[13], parseFloat(cols[14] || '0'), parseFloat(cols[15] || '0'), parseFloat(cols[16] || '0')];
    });
    if (sched4DataRows.length > 0) {
        const ws = xlsx.utils.aoa_to_sheet([sched4Headers, ...sched4DataRows]);
        xlsx.utils.book_append_sheet(wb, ws, '1604F_sched4');
    }
    
    const sched5Headers = ['TIN', 'BRANCH_CODE', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'ATC_CODE', 'FRINGE_BENEFIT', 'GROSSED_UP_MONETARY_VALUE', 'WITHHOLDING_TAX'];
    const sched5DataRows = lines.filter(line => line.startsWith('D5,')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [cols[6], cols[7], cols[8], cols[9], cols[10], cols[11], parseFloat(cols[12] || '0'), parseFloat(cols[13] || '0'), parseFloat(cols[14] || '0')];
    });
    if (sched5DataRows.length > 0) {
        const ws = xlsx.utils.aoa_to_sheet([sched5Headers, ...sched5DataRows]);
        xlsx.utils.book_append_sheet(wb, ws, '1604F_sched5');
    }
    
    const sched6Headers = ['TIN', 'BRANCH_CODE', 'REGISTERED_NAME', 'LAST_NAME', 'FIRST_NAME', 'MIDDLE_NAME', 'STATUS_CODE', 'ATC_CODE', 'INCOME_PAYMENT'];
    const sched6DataRows = lines.filter(line => line.startsWith('D6,')).map(line => {
        const cols = line.split(',').map(c => c.replace(/"/g, ''));
        return [cols[6], cols[7], cols[8], cols[9], cols[10], cols[11], cols[12], cols[13], parseFloat(cols[14] || '0')];
    });
     if (sched6DataRows.length > 0) {
        const ws = xlsx.utils.aoa_to_sheet([sched6Headers, ...sched6DataRows]);
        xlsx.utils.book_append_sheet(wb, ws, '1604F_sched6');
    }

    if (wb.SheetNames.length === 0) {
        return { success: false, error: "No sched4, sched5 or sched6 data found in the 1604-F DAT file." };
    }

    const base64 = xlsx.write(wb, { bookType: 'xlsx', type: 'base64' });
    const fileName = `Template_From_${originalFileName.replace('.DAT', '.xlsx')}`;
    return { success: true, base64, fileName };
}
