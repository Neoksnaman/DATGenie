'use server';

import * as xlsx from 'xlsx';

export async function processExcelFile(file: File, sheetName: string): Promise<{ data: any[][], validationErrors: string[] }> {
    const bytes = await file.arrayBuffer();
    const workbook = xlsx.read(bytes, { type: 'array' });

    if (!workbook.SheetNames.includes(sheetName)) {
        return { data: [], validationErrors: [`Sheet "${sheetName}" not found in the uploaded file.`] };
    }

    const worksheet = workbook.Sheets[sheetName];
    const data: any[][] = xlsx.utils.sheet_to_json(worksheet, {
        header: 1,
        defval: '',
        raw: false,
    });

    if (data.length <= 1) {
        return { data: [], validationErrors: [] };
    }

    return { data: data.slice(1), validationErrors: [] };
}
