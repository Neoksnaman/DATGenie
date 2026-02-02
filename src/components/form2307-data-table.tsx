
'use client';

import * as xlsx from 'xlsx';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Extract2307DataOutput } from '@/ai/schemas';

interface Form2307DataTableProps {
  data: Extract2307DataOutput[];
  isAnalyzing: boolean;
}

export function Form2307DataTable({ data, isAnalyzing }: Form2307DataTableProps) {
  const { toast } = useToast();
  
  const handleDownload = () => {
    const allDetails: any[] = [];
    data.forEach(item => {
        item.taxDetails.forEach(detail => {
            allDetails.push({
                'Payor TIN': item.payorTIN,
                'Payor Name': item.payorName,
                'Payee TIN': item.payeeTIN,
                'Payee Name': item.payeeName,
                'Period From': item.periodFrom,
                'Period To': item.periodTo,
                'ATC': detail.atc,
                '1st Month Income': detail.firstMonthIncomePayment,
                '2nd Month Income': detail.secondMonthIncomePayment,
                '3rd Month Income': detail.thirdMonthIncomePayment,
                'Total Income': detail.totalIncomePayment,
                'Tax Withheld': detail.taxWithheld,
            });
        });
    });

    const worksheet = xlsx.utils.json_to_sheet(allDetails);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Form 2307 Data");
    xlsx.writeFile(workbook, `Form2307Data_${Date.now()}.xlsx`);
    toast({ title: "Download Started", description: "Your Excel file is being downloaded." });
  };

  if (data.length === 0) {
    return null;
  }

  const formatCurrency = (value: string | undefined) => {
    const num = parseFloat(String(value || '0').replace(/,/g, ''));
    if (isNaN(num)) return '0.00';
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={handleDownload} variant="outline" size="sm" disabled={isAnalyzing}>
          <Download className="mr-2 h-4 w-4" />
          Download as Excel
        </Button>
      </div>
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payee Name</TableHead>
              <TableHead>Payee TIN</TableHead>
              <TableHead>Period</TableHead>
              <TableHead>ATC</TableHead>
              <TableHead className="text-right">1st Month Income</TableHead>
              <TableHead className="text-right">2nd Month Income</TableHead>
              <TableHead className="text-right">3rd Month Income</TableHead>
              <TableHead className="text-right">Tax Withheld</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              item.taxDetails.map((detail, detailIndex) => (
                <TableRow key={`${index}-${detailIndex}`}>
                  {detailIndex === 0 && (
                    <>
                      <TableCell rowSpan={item.taxDetails.length} className="align-top">{item.payeeName || '-'}</TableCell>
                      <TableCell rowSpan={item.taxDetails.length} className="align-top">{item.payeeTIN || '-'}</TableCell>
                      <TableCell rowSpan={item.taxDetails.length} className="align-top text-xs">{item.periodFrom} - {item.periodTo}</TableCell>
                    </>
                  )}
                  <TableCell>{detail.atc}</TableCell>
                  <TableCell className="text-right">{formatCurrency(detail.firstMonthIncomePayment)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(detail.secondMonthIncomePayment)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(detail.thirdMonthIncomePayment)}</TableCell>
                  <TableCell className="text-right font-semibold">{formatCurrency(detail.taxWithheld)}</TableCell>
                </TableRow>
              ))
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
