

'use server';

import { generateSalesExcel } from './excel/sales';
import { generatePurchasesExcel } from './excel/purchases';
import { generate1601EQExcel } from './excel/1601eq';
import { generate1601FQExcel } from './excel/1601fq';
import { generateSawtExcel } from './excel/sawt';


export {
    generateSalesExcel,
    generatePurchasesExcel,
    generate1601EQExcel,
    generate1601FQExcel,
    generateSawtExcel
};

