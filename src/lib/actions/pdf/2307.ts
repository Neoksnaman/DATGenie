
'use server';

import { readFile } from 'fs/promises';
import path from 'path';
import * as xlsx from 'xlsx';
import { PDFDocument, PageSizes, type PDFImage } from 'pdf-lib';
import type { TaxProfile } from '../../schemas';
import { atcWE } from '../../schedules';
import { sanitizeAndValidateString } from '../../dat-utils';
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
    if (isNaN(num) || num === 0) return '';
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
    signatoryTIN: string,
    signatoryPosition: string,
    signatureX: number,
    signatureY: number,
    pdfSize: 'letter' | 'legal' | 'a4'
) {
    const pdfDoc = await PDFDocument.load(templateWithSignatureBytes);
    const form = pdfDoc.getForm();

    // ==== Fill fields ====
    const payorTIN = splitTIN(profile.tpTIN);
    form.getTextField('PayorTIN1').setText(payorTIN.tin1);
    form.getTextField('PayorTIN2').setText(payorTIN.tin2);
    form.getTextField('PayorTIN3').setText(payorTIN.tin3);
    form.getTextField('PayorBranchCode').setText('0' + profile.branchCode);
    form.getTextField('PayorName').setText(
        profile.entityType === 'Individual'
            ? `${profile.firstName} ${profile.middleName} ${profile.lastName}`
            : profile.companyName
    );
    const payorAddress = `${profile.subStreet} ${profile.street} ${profile.barangay} ${profile.cityMunicipality} ${profile.province}`.trim().replace(/\s+/g, ' ');
    form.getTextField('PayorAddress').setText(payorAddress);
    form.getTextField('PayorZipCode').setText(profile.zipCode);

    const payeeTINParts = splitTIN(rowData['PayeeTIN']);
    form.getTextField('PayeeTIN1').setText(payeeTINParts.tin1);
    form.getTextField('PayeeTIN2').setText(payeeTINParts.tin2);
    form.getTextField('PayeeTIN3').setText(payeeTINParts.tin3);
    form.getTextField('PayeeBranchCode').setText(String(rowData['PayeeBranchCode'] || '00000'));

    form.getTextField('PayeeName').setText(rowData['PayeeName']);
    form.getTextField('PayeeAddress').setText(rowData['PayeeAddress']);
    form.getTextField('PayeeFAddress').setText(rowData['PayeeFAddress']);
    form.getTextField('PayeeZipCode').setText(rowData['PayeeZipCode']);

    form.getTextField('dateFrom').setText(String(rowData['dateFrom'] || ''));
    form.getTextField('dateTo').setText(String(rowData['dateTo'] || ''));

    const atcCode = String(rowData['ATC'] || '');
    const atcData = atcWE.find(item => item.atc === atcCode);
    form.getTextField('ATC').setText(atcCode);
    form.getTextField('EWTDescription').setText(atcData ? atcData.description : 'ATC NOT FOUND');

    form.getTextField('1stMonthPayment').setText(formatCurrency(rowData['1stMonthPayment']));
    form.getTextField('2ndMonthPayment').setText(formatCurrency(rowData['2ndMonthPayment']));
    form.getTextField('3rdMonthPayment').setText(formatCurrency(rowData['3rdMonthPayment']));
    form.getTextField('TotalPayment').setText(formatCurrency(rowData['TotalPayment']));
    form.getTextField('TotalEWT').setText(formatCurrency(rowData['TotalEWT']));

    form.getTextField('SignatoryName').setText(signatoryName);
    form.getTextField('SignatoryTIN').setText(signatoryTIN);
    form.getTextField('SignatoryPosition').setText(signatoryPosition);
    
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

export async function generate2307Pdf(formData: FormData): Promise<PdfResult> {
    const file = formData.get('file') as File | null;
    const signatoryName = formData.get('signatoryName') as string || '';
    const signatoryTIN = formData.get('signatoryTIN') as string || '';
    const signatoryPosition = formData.get('signatoryPosition') as string || '';
    const signatureFile = formData.get('signatureFile') as File | null;
    const profileString = formData.get('profile') as string | null;
    const pdfSize = formData.get('pdfSize') as 'letter' | 'legal' | 'a4' || 'legal';
    const collate = formData.get('collate') as 'single' | 'multiple' || 'single';
    const signatureX = parseInt(formData.get('signatureX') as string, 10) || 150;
    const signatureY = parseInt(formData.get('signatureY') as string, 10) || 190;

    if (!file) return { success: false, error: 'No Excel file uploaded.' };
    if (!profileString) return { success: false, error: 'Tax profile not provided.' };

    try {
        const profile: TaxProfile = JSON.parse(profileString);

        const excelBuffer = await file.arrayBuffer();
        const workbook = xlsx.read(excelBuffer, { type: 'buffer' });
        const sheetName = "form_2307";
        if (!workbook.SheetNames.includes(sheetName)) {
            return { success: false, error: `Sheet "${sheetName}" not found in the uploaded file.` };
        }

        const worksheet = workbook.Sheets[sheetName];
        const data: any[][] = xlsx.utils.sheet_to_json(worksheet, {
            header: 1,
            defval: '',
            raw: false,
        });

        if (data.length <= 1) return { success: false, error: 'No data found in the "form_2307" sheet.' };

        const dataRows = data.slice(1);
        const validationErrors: string[] = [];
        const processedRows: any[] = [];

        for (const [index, row] of dataRows.entries()) {
            const originalRowNumber = index + 2;
            const errorPrefix = `Row ${originalRowNumber}`;

            if (row.every(cell => String(cell).trim() === '')) {
                continue;
            }

            const rowData: {[key: string]: any} = {
                dateFrom: row[0],
                dateTo: row[1],
                PayeeTIN: row[2],
                PayeeBranchCode: row[3],
                PayeeName: row[4],
                PayeeAddress: row[5],
                PayeeZipCode: row[6],
                PayeeFAddress: row[7],
                ATC: row[8],
                rate: row[9],
                '1stMonthPayment': row[10],
                '2ndMonthPayment': row[11],
                '3rdMonthPayment': row[12],
                TotalPayment: row[13],
                TotalEWT: row[14],
            };
            
            const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
            let fromDate: Date | null = null;
            let toDate: Date | null = null;

            ['dateFrom', 'dateTo'].forEach(dateField => {
                const dateValue = String(rowData[dateField] || '').trim();
                if (dateValue) {
                    if (!dateRegex.test(dateValue)) {
                        validationErrors.push(`${errorPrefix}: ${dateField} format is invalid. Please use MM/DD/YYYY.`);
                    } else {
                        const dateParts = dateValue.split('/');
                        const parsedDate = new Date(parseInt(dateParts[2]), parseInt(dateParts[0]) - 1, parseInt(dateParts[1]));
                        if(dateField === 'dateFrom') fromDate = parsedDate;
                        if(dateField === 'dateTo') toDate = parsedDate;
                        rowData[dateField] = dateValue.replace(/\//g, '');
                    }
                }
            });
            
            if(fromDate && toDate && fromDate > toDate) {
                validationErrors.push(`${errorPrefix}: 'dateFrom' cannot be later than 'dateTo'.`);
            }

            const rawPayeeTin = String(rowData['PayeeTIN'] || '').trim();
            if (!rawPayeeTin) {
                validationErrors.push(`${errorPrefix}: Payee TIN is required.`);
            } else {
                let sanitizedTin = rawPayeeTin.replace(/[^0-9]/g, '');
                if (sanitizedTin.length > 9) {
                   sanitizedTin = sanitizedTin.substring(0, 9);
                }
                if (sanitizedTin.length < 9) {
                    validationErrors.push(`${errorPrefix}: Payee TIN '${rawPayeeTin}' is too short. It must be 9 digits.`);
                } else {
                    if (sanitizedTin === '000000000') {
                        validationErrors.push(`${errorPrefix}: Invalid Payee TIN '000000000'.`);
                    }
                    if (sanitizedTin === profile.tpTIN) {
                        validationErrors.push(`${errorPrefix}: Payee TIN cannot be the same as the payor's TIN.`);
                    }
                    rowData['PayeeTIN'] = sanitizedTin;
                }
            }
            
            let branchCode = String(rowData['PayeeBranchCode'] || '').replace(/[^0-9]/g, '');
            if (branchCode) {
                branchCode = branchCode.slice(-5);
                rowData['PayeeBranchCode'] = branchCode.padStart(5, '0');
            } else {
                rowData['PayeeBranchCode'] = '00000';
            }
            
            const nameResult = sanitizeAndValidateString(rowData['PayeeName'], 'Payee Name', 50, true, errorPrefix);
            if(nameResult.error) validationErrors.push(nameResult.error);
            rowData['PayeeName'] = nameResult.value;

            const addressResult = sanitizeAndValidateString(rowData['PayeeAddress'], 'Payee Address', 100, true, errorPrefix);
            if(addressResult.error) validationErrors.push(addressResult.error);
            rowData['PayeeAddress'] = addressResult.value;
            
            rowData['PayeeFAddress'] = sanitizeAndValidateString(rowData['PayeeFAddress'], 'Payee Foreign Address', 100, false, errorPrefix).value;
            
            let zipCode = String(rowData['PayeeZipCode'] || '').trim();
            if (zipCode) {
                zipCode = zipCode.replace(/[^0-9]/g, '');
                if (zipCode.length !== 4) validationErrors.push(`${errorPrefix}: Payee Zip Code must be 4 digits.`);
                rowData['PayeeZipCode'] = zipCode;
            }

            const atcCode = String(rowData['ATC'] || '').toUpperCase().trim();
            if (!atcCode) {
                validationErrors.push(`${errorPrefix}: ATC code is missing.`);
            } else {
                const atcData = atcWE.find(item => item.atc === atcCode);
                const excelRate = parseFloat(String(row[9]));

                if (!atcData) {
                    validationErrors.push(`${errorPrefix}: ATC code '${atcCode}' is not a valid Expanded Withholding Tax code.`);
                } else if (isNaN(excelRate) || excelRate !== atcData.rate) {
                    validationErrors.push(`${errorPrefix}: Invalid rate for ATC ${atcCode}. Expected ${atcData.rate}%, but got ${excelRate || 'a non-numeric value'}%.`);
                }
            }
            processedRows.push(rowData);
        }


        if (validationErrors.length > 0) {
            return { success: false, errors: validationErrors };
        }

		const templatePath = path.join(process.cwd(), 'src', 'templates', 'form_2307_template.pdf');
		const pdfTemplateBytes = await readFile(templatePath);

        if (signatureFile) {
            if (signatureFile.size > 1 * 1024 * 1024) { // 1MB limit
                return { success: false, error: 'Signature image file size cannot exceed 1MB.' };
            }

            let signatureBuffer: Buffer;
            let signatureType: 'png' | 'jpeg';

            const rawBuffer = Buffer.from(await signatureFile.arrayBuffer());

            if (signatureFile.size > 200 * 1024) { // Compress if > 200KB
                signatureBuffer = await sharp(rawBuffer)
                    .resize({ width: 400 })
                    .png({ quality: 80 })
                    .toBuffer();
                signatureType = 'png';
            } else {
                signatureBuffer = rawBuffer;
                if (signatureFile.type === 'image/png') {
                    signatureType = 'png';
                } else if (signatureFile.type === 'image/jpeg') {
                    signatureType = 'jpeg';
                } else {
                     return { success: false, error: 'Unsupported signature image type. Please use PNG or JPEG.' };
                }
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
            const y_pos = signatureY + (35 - dims.height) / 2;

            page.drawImage(embeddedSignature, {
                x: signatureX,
                y: y_pos,
                width: dims.width,
                height: dims.height,
            });
            pdfTemplateBytes = await templateDoc.save();
        }

        const pdfDocs = await Promise.all(
            processedRows.map(rowData =>
                fillPdfForm(
                    pdfTemplateBytes,
                    rowData,
                    profile,
                    signatoryName,
                    signatoryTIN,
                    signatoryPosition,
                    signatureX,
                    signatureY,
                    pdfSize
                )
            )
        );

        if (collate === 'multiple') {
            const zip = new JSZip();
            for (const [index, pdfDoc] of pdfDocs.entries()) {
                const rowData = processedRows[index];
                const pdfBytes = await pdfDoc.save();
                const sanitizedPayeeName = rowData['PayeeName'].replace(/[^a-zA-Z0-9]/g, '_');
                const pdfFileName = `2307_${rowData['PayeeTIN']}_${sanitizedPayeeName}_${index + 1}.pdf`;
                zip.file(pdfFileName, pdfBytes);
            }
            const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
            const base64 = zipBuffer.toString('base64');
            const fileName = `Generated_Certificates_2307_${Date.now()}.zip`;
            return { success: true, base64, fileName };
        } else {
            const mergedPdf = await PDFDocument.create();
            for (const pdfDoc of pdfDocs) {
                const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                pages.forEach(page => mergedPdf.addPage(page));
            }
            const pdfBytes = await mergedPdf.save();
            const base64 = Buffer.from(pdfBytes).toString('base64');
            const fileName = `Generated_Certificates_2307_${Date.now()}.pdf`;
            return { success: true, base64, fileName };
        }

    } catch (error) {
        console.error('Error generating PDF:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}
