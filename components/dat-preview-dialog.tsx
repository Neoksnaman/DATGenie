
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Download, CheckCircle, Eye } from 'lucide-react';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

interface Totals {
    exempt?: number;
    zeroRated?: number;
    vatable?: number;
    outputVat?: number;
    services?: number;
    capitalGoods?: number;
    otherGoods?: number;
    inputTax?: number;
    taxableIncome?: number;
    exemptIncome?: number;
    withholdingTax?: number;
}

export interface DatPreviewState {
    fileName: string;
    content: string;
    isViewing?: boolean;
    reportType?: 'sales' | 'purchases' | '1601eq' | 'sawt' | '1601fq' | 'none';
    totals?: Totals;
}

interface DatPreviewDialogProps extends DatPreviewState {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}


export function DatPreviewDialog({
  isOpen,
  onOpenChange,
  fileName,
  content,
  isViewing = false,
  reportType = 'none',
  totals = {},
}: DatPreviewDialogProps) {

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  const formatCurrency = (value: number | undefined) => {
    if (value === undefined) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  const showDownload = !isViewing || (isViewing && reportType !== 'none');

  const title = isViewing ? "DAT File Preview" : "Conversion Successful";
  const description = isViewing 
        ? "Review the content of the DAT file below."
        : "Your DAT file is ready. Please review the content below before downloading.";
  const icon = isViewing ? <Eye className="w-6 h-6 text-primary" /> : <CheckCircle className="w-6 h-6 text-accent-foreground" />;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full h-[80vh] flex flex-col p-0 bg-white text-black">
        <DialogHeader className="p-6 pb-4 shrink-0">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <DialogTitle className="text-xl text-black">{title}</DialogTitle>
                    <DialogDescription className="text-slate-600">
                        {description}
                    </DialogDescription>
                </div>
            </div>
        </DialogHeader>
        <div className="flex-1 px-6 pb-4 flex flex-col gap-4 min-h-0">
            <div className="font-mono text-sm space-y-1 shrink-0">
                <p><span className="font-semibold">Filename:</span> {fileName}</p>
                {reportType === 'sales' && (
                    <>
                        <p><span className="font-semibold">Total Exempt:</span> {formatCurrency(totals.exempt)}</p>
                        <p><span className="font-semibold">Total Zero-Rated:</span> {formatCurrency(totals.zeroRated)}</p>
                        <p><span className="font-semibold">Total Vatable:</span> {formatCurrency(totals.vatable)}</p>
                        <p><span className="font-semibold">Total Output VAT:</span> {formatCurrency(totals.outputVat)}</p>
                    </>
                )}
                {reportType === 'purchases' && (
                    <>
                        <p><span className="font-semibold">Total Exempt Purchases:</span> {formatCurrency(totals.exempt)}</p>
                        <p><span className="font-semibold">Total Zero-Rated Purchases:</span> {formatCurrency(totals.zeroRated)}</p>
                        <p><span className="font-semibold">Total Purchases of Services:</span> {formatCurrency(totals.services)}</p>
                        <p><span className="font-semibold">Total Purchases of Capital Goods:</span> {formatCurrency(totals.capitalGoods)}</p>
                        <p><span className="font-semibold">Total Purchases of Other Goods:</span> {formatCurrency(totals.otherGoods)}</p>
                        <p><span className="font-semibold">Total Input Tax:</span> {formatCurrency(totals.inputTax)}</p>
                    </>
                )}
                {reportType === '1601eq' && (
                    <>
                        <p><span className="font-semibold">Total Taxable Income Payment:</span> {formatCurrency(totals.taxableIncome)}</p>
                        <p><span className="font-semibold">Total Exempt Income Payment:</span> {formatCurrency(totals.exemptIncome)}</p>
                        <p><span className="font-semibold">Total Withholding Tax:</span> {formatCurrency(totals.withholdingTax)}</p>
                    </>
                )}
                 {reportType === 'sawt' && (
                    <>
                        <p><span className="font-semibold">Total Income Payment:</span> {formatCurrency(totals.taxableIncome)}</p>
                        <p><span className="font-semibold">Total Tax Withheld:</span> {formatCurrency(totals.withholdingTax)}</p>
                    </>
                )}
                 {reportType === '1601fq' && (
                    <>
                        <p><span className="font-semibold">Total Withholding Tax:</span> {formatCurrency(totals.withholdingTax)}</p>
                        <p><span className="font-semibold">Total Fringe Benefit Tax:</span> {formatCurrency(totals.services)}</p>
                        <p><span className="font-semibold">Total Exempt Income Payment:</span> {formatCurrency(totals.exemptIncome)}</p>
                    </>
                )}
            </div>
            <ScrollArea className="flex-1 border rounded-md">
                <pre className="p-4 text-xs font-mono whitespace-pre">{content}</pre>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
        <DialogFooter className="p-4 border-t shrink-0">
          {showDownload && (
              <Button onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

    