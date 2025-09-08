

'use server';

import {
  generateSalesExcel,
  generatePurchasesExcel,
  generate1601EQExcel,
} from './excel';
import { getDatFileContent } from './drive';

// This function seems to be intended for use within a client component,
// but server actions can be defined here. We'll export the excel generators.

export {
  generateSalesExcel,
  generatePurchasesExcel,
  generate1601EQExcel,
  getDatFileContent,
};
