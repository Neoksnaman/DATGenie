

'use server';

import { generateSalesExcel } from './excel/sales';
import { generatePurchasesExcel } from './excel/purchases';
import { generate1601EQExcel } from './excel/1601eq';
import { generate1601FQExcel } from './excel/1601fq';
import { generateSawtExcel } from './excel/sawt';
import { generateImportationsExcel } from './excel/importations';
import { generate1604EExcel } from './excel/1604e';
import { generate1604FExcel } from './excel/1604f';
import { generate1604CExcel } from './excel/1604c';


export {
    generateSalesExcel,
    generatePurchasesExcel,
    generate1601EQExcel,
    generate1601FQExcel,
    generateSawtExcel,
    generateImportationsExcel,
    generate1604EExcel,
    generate1604FExcel,
    generate1604CExcel,
};
