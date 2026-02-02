
'use server';

import * as xlsx from 'xlsx';
import { headers } from 'next/headers';
import { PDFDocument, PageSizes, type PDFImage } from 'pdf-lib';
import type { TaxProfile } from '../../schemas';
import { sanitizeAndValidateString, sanitizeAndValidateNumber } from '../../dat-utils';
import type { PdfResult } from './types';
import JSZip from 'jszip';
import sharp from 'sharp';


function splitTIN(tin: string): { tin1: string; tin2: string; tin3: string; } {
    const cleanTIN = String(tin || '').replace(/[^0-9]/g, '');
    return {
        tin1: cleanTIN.substring(0, 3),
        tin2: cleanTIN.substring(3, 6),
        tin3: cleanTIN.substring(6, 9),
    };
}

function formatCurrency(value: any): string {
    const num = parseFloat(String(value || '0').replace(/,/g, ''));
    if (isNaN(num)) return '0.00';
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

async function fillPdfForm(
    templateWithSignatureBytes: Uint8Array,
    rowData: any,
    profile: TaxProfile,
    signatoryName: string,
    pdfSize: 'letter' | 'legal' | 'a4'
) {
    const pdfDoc = await PDFDocument.load(templateWithSignatureBytes);
    const form = pdfDoc.getForm();
    
    const year = new Date(rowData.employment_to_full).getFullYear();
    form.getTextField('dateYear').setText(String(year));

    const fromDate = new Date(rowData.employment_from_full);
    const toDate = new Date(rowData.employment_to_full);
    form.getTextField('dateFrom').setText(`${String(fromDate.getMonth() + 1).padStart(2, '0')}${String(fromDate.getDate()).padStart(2, '0')}`);
    form.getTextField('dateTo').setText(`${String(toDate.getMonth() + 1).padStart(2, '0')}${String(toDate.getDate()).padStart(2, '0')}`);

    const eeTinParts = splitTIN(rowData.employeeTIN);
    form.getTextField('ee_TIN1').setText(eeTinParts.tin1);
    form.getTextField('ee_TIN2').setText(eeTinParts.tin2);
    form.getTextField('ee_TIN3').setText(eeTinParts.tin3);
    form.getTextField('ee_branchcode').setText('00000');

    const eeFullName = `${rowData.employeeLastName}, ${rowData.employeeFirstName} ${rowData.employeeMiddleName}`;
    const eeFullName2 = `${rowData.employeeFirstName} ${rowData.employeeMiddleName} ${rowData.employeeLastName}`;
    form.getTextField('ee_name').setText(eeFullName);
    form.getTextField('ee_name2').setText(eeFullName2);
    form.getTextField('ee_name3').setText(eeFullName2);
    form.getTextField('ee_regAddress').setText(rowData.employeeAddress);
    form.getTextField('ee_zipCode').setText(rowData.employeeZipCode);

    const payorTinParts = splitTIN(profile.tpTIN);
    form.getTextField('PayorTIN1').setText(payorTinParts.tin1);
    form.getTextField('PayorTIN2').setText(payorTinParts.tin2);
    form.getTextField('PayorTIN3').setText(payorTinParts.tin3);
    form.getTextField('PayorBranchCode').setText(profile.branchCode.padStart(5, '0'));

    const payorName = profile.entityType === 'Individual'
        ? `${profile.firstName} ${profile.middleName} ${profile.lastName}`
        : profile.companyName;
    form.getTextField('PayorName').setText(payorName);
    
    const payorAddress = `${profile.subStreet} ${profile.street} ${profile.barangay} ${profile.cityMunicipality} ${profile.province}`.trim().replace(/\s+/g, ' ');
    form.getTextField('PayorAddress').setText(payorAddress);
    form.getTextField('PayorZipCode').setText(profile.zipCode);

    // Map amounts
    form.getTextField('pres_grossCompensation').setText(formatCurrency(rowData.presGrossCompensation));
    form.getTextField('pres_totalNontax').setText(formatCurrency(rowData.presTotalNontax));
    form.getTextField('pres_totalTaxable').setText(formatCurrency(rowData.presTotalTaxable));
    form.getTextField('prev_totalTaxable').setText(formatCurrency(rowData.prevTotalTaxable));
    form.getTextField('totalTaxable').setText(formatCurrency(rowData['prev & pres totalTaxable']));
    form.getTextField('pres_totalWTax').setText(formatCurrency(rowData.presTaxWithheld));
    form.getTextField('prev_totalWTax').setText(formatCurrency(rowData.prevTaxWithheld));
    form.getTextField('totalTax_adjusted').setText(formatCurrency(rowData.taxwithheldadjusted));
    form.getTextField('taxCredit_PERA').setText(formatCurrency(rowData.taxCreditPERA));
    form.getTextField('totalTax').setText(formatCurrency(rowData.totalTax));
    form.getTextField('nontax_basic').setText(formatCurrency(rowData.presNontaxBasic));
    form.getTextField('nontax_holidayPay').setText(formatCurrency(rowData.presNontaxHolidayPay));
    form.getTextField('nontax_overtime').setText(formatCurrency(rowData.presNontaxOverTime));
    form.getTextField('nontax_nightdif').setText(formatCurrency(rowData.presNontaxNightDiff));
    form.getTextField('nontax_hazardpay').setText(formatCurrency(rowData.presNontaxHazardPay));
    form.getTextField('nontax_13thMonth').setText(formatCurrency(rowData.presNontax13thMonth));
    form.getTextField('nontax_deminimis').setText(formatCurrency(rowData.presDeminimis));
    form.getTextField('nontax_govtContri').setText(formatCurrency(rowData.presGovtContri));
    form.getTextField('nontax_others').setText(formatCurrency(rowData.presOtherNontax));
    form.getTextField('pres_totalNontax2').setText(formatCurrency(rowData.pres_totalNontax));
    form.getTextField('taxable_basic').setText(formatCurrency(rowData.presTaxableBasic));
    form.getTextField('taxable_commission').setText(formatCurrency(rowData.presTaxableCommission));
    form.getTextField('taxable_13thMonth').setText(formatCurrency(rowData.presTaxable13thMonth));
    form.getTextField('pres_totalTaxable').setText(formatCurrency(rowData.pres_totalTaxable));


    form.getTextField('SignatoryName').setText(signatoryName);
    
    form.flatten();

    // ==== Handle page size ====
    if (pdfSize !== 'legal') {
        const page = pdfDoc.getPage(0);
        const { width, height } = page.getSize();

        let targetWidth: number, targetHeight: number;
        if (pdfSize === 'letter') {
            [targetWidth, targetHeight] = PageSizes.Letter;
        } else {
            [targetWidth, targetHeight] = PageSizes.A4;
        }

        const scale = Math.min(targetWidth / width, targetHeight / height);
        page.scale(scale, scale);

        const newWidth = width * scale;
        const newHeight = height * scale;
        const xOffset = (targetWidth - newWidth) / 2;
        const yOffset = (targetHeight - newHeight) / 2;

        page.translateContent(xOffset, yOffset);
        page.setSize(targetWidth, targetHeight);
    }

    return pdfDoc;
}


export async function generate2316Pdf(formData: FormData): Promise<PdfResult> {
    const file = formData.get('file') as File | null;
    const signatoryName = formData.get('signatoryName') as string || '';
    const signatureFile = formData.get('signatureFile') as File | null;
    const profileString = formData.get('profile') as string | null;
    const pdfSize = formData.get('pdfSize') as 'letter' | 'legal' | 'a4' || 'legal';
    const collate = formData.get('collate') as 'single' | 'multiple' || 'single';
    const signatureX = parseInt(formData.get('signatureX') as string, 10) || 150;
    const signatureY = parseInt(formData.get('signatureY') as string, 10) || 160;

    if (!file) return { success: false, error: 'No Excel file uploaded.' };
    if (!profileString) return { success: false, error: 'Tax profile not provided.' };
    
    try {
        const profile: TaxProfile = JSON.parse(profileString);

        const excelBuffer = await file.arrayBuffer();
        const workbook = xlsx.read(excelBuffer, { type: 'buffer' });
        const sheetName = "form_2316";
        if (!workbook.SheetNames.includes(sheetName)) {
            return { success: false, error: `Sheet "${sheetName}" not found in the uploaded file.` };
        }

        const worksheet = workbook.Sheets[sheetName];
        const dataRows: any[][] = xlsx.utils.sheet_to_json(worksheet, { header: 1, defval: '', raw: false, range: 1 });

        if (dataRows.length === 0) return { success: false, error: 'No data found in the "form_2316" sheet.' };

        const validationErrors: string[] = [];
        const processedRows: any[] = [];
        
        for (const [index, row] of dataRows.entries()) {
             if (row.every(cell => String(cell).trim() === '')) {
                continue;
            }
            const originalRowNumber = index + 2;
            const errorPrefix = `Row ${originalRowNumber}`;

            const rowData: { [key: string]: any } = {
                employeeTIN: row[0],
                employeeLastName: row[1],
                employeeFirstName: row[2],
                employeeMiddleName: row[3],
                employeeAddress: row[4],
                employeeZipCode: row[5],
                employment_from: row[6],
                employment_to: row[7],
                presGrossCompensation: row[8],
                presTotalNontax: row[9],
                presTotalTaxable: row[10],
                prevTotalTaxable: row[11],
                'prev & pres totalTaxable': row[12],
                presTaxWithheld: row[13],
                prevTaxWithheld: row[14],
                taxwithheldadjusted: row[15],
                taxCreditPERA: row[16],
                totalTax: row[17],
                presNontaxBasic: row[18],
                presNontaxHolidayPay: row[19],
                presNontaxOverTime: row[20],
                presNontaxNightDiff: row[21],
                presNontaxHazardPay: row[22],
                presNontax13thMonth: row[23],
                presDeminimis: row[24],
                presGovtContri: row[25],
                presOtherNontax: row[26],
                pres_totalNontax: row[27],
                presTaxableBasic: row[28],
                presTaxableCommission: row[29],
                presTaxable13thMonth: row[30],
                pres_totalTaxable: row[31],
            };

            // Validations
            const originalTin = String(rowData['employeeTIN'] || '').trim();
            if (originalTin) {
                const sanitizedTin = originalTin.replace(/[^0-9]/g, '');
                if (sanitizedTin.length > 0 && sanitizedTin.length < 9) {
                    validationErrors.push(`${errorPrefix}: Employee TIN '${originalTin}' is too short. It must be 9 digits.`);
                }
                if (sanitizedTin === '000000000') {
                    validationErrors.push(`${errorPrefix}: Invalid Employee TIN '000000000'.`);
                }
                rowData['employeeTIN'] = sanitizedTin.substring(0, 9);
            } else {
                rowData['employeeTIN'] = '';
            }
            
            rowData.employeeLastName = sanitizeAndValidateString(rowData.employeeLastName, 'employee lastName', 30, true, errorPrefix).value;
            rowData.employeeFirstName = sanitizeAndValidateString(rowData.employeeFirstName, 'employee firstName', 30, true, errorPrefix).value;
            rowData.employeeMiddleName = sanitizeAndValidateString(rowData.employeeMiddleName, 'employee middleName', 30, false, errorPrefix).value;
            rowData.employeeAddress = sanitizeAndValidateString(rowData.employeeAddress, 'employee address', 100, false, errorPrefix).value;
            
            const zip = String(rowData['employeeZipCode'] || '');
            if(zip && !/^\d{4}$/.test(zip)) {
                validationErrors.push(`${errorPrefix}: employee zipCode must be 4 digits if provided.`);
            }

            const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{4}$/;
            if (!dateRegex.test(rowData['employment_from'])) validationErrors.push(`${errorPrefix}: employment_from format is invalid. Use MM/DD/YYYY.`);
            if (!dateRegex.test(rowData['employment_to'])) validationErrors.push(`${errorPrefix}: employment_to format is invalid. Use MM/DD/YYYY.`);
            
            rowData['employment_from_full'] = rowData['employment_from'];
            rowData['employment_to_full'] = rowData['employment_to'];

            processedRows.push(rowData);
        }

        if (validationErrors.length > 0) {
            return { success: false, errors: validationErrors };
        }
        
        const host = headers().get('host');
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
        const pdfUrl = `${protocol}://${host}/templates/form_2316_template.pdf`;
        const res = await fetch(pdfUrl);
        if (!res.ok) {
            throw new Error(`Failed to fetch PDF template from ${pdfUrl}. Status: ${res.status}`);
        }
        let pdfTemplateBytes: ArrayBuffer | Buffer = await res.arrayBuffer();

        if (signatureFile) {
             if (signatureFile.size > 1 * 1024 * 1024) { 
                return { success: false, error: 'Signature image file size cannot exceed 1MB.' };
            }

            let signatureBuffer: Buffer;
            let signatureType: 'png' | 'jpeg';
            const rawBuffer = Buffer.from(await signatureFile.arrayBuffer());

            if (signatureFile.size > 200 * 1024) {
                signatureBuffer = await sharp(rawBuffer).resize({ width: 400 }).png({ quality: 80 }).toBuffer();
                signatureType = 'png';
            } else {
                signatureBuffer = rawBuffer;
                signatureType = signatureFile.type === 'image/png' ? 'png' : 'jpeg';
            }
            
            const templateDoc = await PDFDocument.load(pdfTemplateBytes);
            let embeddedSignature: PDFImage;
            if (signatureType === 'png') {
                embeddedSignature = await templateDoc.embedPng(signatureBuffer);
            } else {
                embeddedSignature = await templateDoc.embedJpg(signatureBuffer);
            }
            const page = templateDoc.getPage(0);
            const dims = embeddedSignature.scaleToFit(150, 35);
            
            // First signature
            const y_pos1 = signatureY + (35 - dims.height) / 2;
            page.drawImage(embeddedSignature, { x: signatureX, y: y_pos1, width: dims.width, height: dims.height });
            
            // Second signature
            const signatureX2 = signatureX;
            const signatureY2 = signatureY - 110;
            const y_pos2 = signatureY2 + (35 - dims.height) / 2;
            page.drawImage(embeddedSignature, { x: signatureX2, y: y_pos2, width: dims.width, height: dims.height });
            
            pdfTemplateBytes = await templateDoc.save();
        }

        const pdfDocs = await Promise.all(
            processedRows.map(rowData =>
                fillPdfForm(
                    pdfTemplateBytes as Uint8Array,
                    rowData,
                    profile,
                    signatoryName,
                    pdfSize
                )
            )
        );

        if (collate === 'multiple') {
            const zip = new JSZip();
            for (const [index, pdfDoc] of pdfDocs.entries()) {
                const rowData = processedRows[index];
                const pdfBytes = await pdfDoc.save();
                const sanitizedPayeeName = `${rowData.employeeLastName}_${rowData.employeeFirstName}`.replace(/[^a-zA-Z0-9]/g, '_');
                const pdfFileName = `2316_${rowData.employeeTIN}_${sanitizedPayeeName}_${index + 1}.pdf`;
                zip.file(pdfFileName, pdfBytes);
            }
            const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
            const base64 = zipBuffer.toString('base64');
            const fileName = `Generated_Certificates_2316_${Date.now()}.zip`;
            return { success: true, base64, fileName };
        } else {
            const mergedPdf = await PDFDocument.create();
            for (const pdfDoc of pdfDocs) {
                const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                pages.forEach(page => mergedPdf.addPage(page));
            }
            const pdfBytes = await mergedPdf.save();
            const base64 = Buffer.from(pdfBytes).toString('base64');
            const fileName = `Generated_Certificates_2316_${Date.now()}.pdf`;
            return { success: true, base64, fileName };
        }

    } catch (error) {
        console.error('Error generating 2316 PDF:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}
