'use client';

import { useState, useTransition, useCallback, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UploadCloud, File as FileIcon, X, Loader2, Wand2, Scan, Copy, Download, FileText, Square, StopCircle, HardDriveUpload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { extractInvoiceData } from '@/lib/actions/ai';
import type { ExtractInvoiceDataOutput } from '@/ai/schemas';
import { PDFDocument } from 'pdf-lib';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import * as xlsx from 'xlsx';
import { DatFileProcessorCard } from '@/components/dat-file-processor-card';


function InvoiceUploader({ onFileSelect, clearFile, selectedFile, isAnalyzing }: { onFileSelect: (file: File) => void, clearFile: () => void, selectedFile: File | null, isAnalyzing: boolean }) {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/') || file.type === 'application/pdf') {
        onFileSelect(file);
      } else {
        toast({
          title: 'Invalid File Type',
          description: 'Please upload a valid image or PDF file.',
          variant: 'destructive',
        });
      }
    }
    e.target.value = '';
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.type.startsWith('image/') || file.type === 'application/pdf') {
        onFileSelect(file);
      } else {
        toast({
          title: 'Invalid File Type',
          description: 'Please upload a valid image or PDF file.',
          variant: 'destructive',
        });
      }
    }
  }, [onFileSelect, toast]);

  if (selectedFile && !isAnalyzing) {
    return (
      <div className="w-full">
        <div className="relative flex items-center p-4 border-2 border-dashed rounded-lg border-primary/50 bg-primary/10">
          <FileIcon className="w-10 h-10 mr-4 text-primary" />
          <div className="flex-grow">
            <p className="font-semibold">{selectedFile.name}</p>
            <p className="text-sm text-muted-foreground">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={clearFile} className="absolute top-2 right-2" disabled={isAnalyzing}>
            <X className="w-5 h-5" />
            <span className="sr-only">Clear file</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
     <div
      className={cn(
        'w-full p-6 border-2 border-dashed rounded-lg text-center transition-colors duration-300',
        isDragging ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
      )}
      onDragEnter={(e) => {e.preventDefault(); e.stopPropagation(); setIsDragging(true);}}
      onDragOver={(e) => {e.preventDefault(); e.stopPropagation();}}
      onDragLeave={(e) => {e.preventDefault(); e.stopPropagation();}}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="invoice-upload"
        className="hidden"
        onChange={handleFileChange}
        accept="image/*,application/pdf"
        disabled={isAnalyzing}
      />
      <label htmlFor="invoice-upload" className={cn("flex flex-col items-center justify-center gap-2", isAnalyzing ? 'cursor-not-allowed' : 'cursor-pointer')}>
        <UploadCloud className="w-8 h-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Drag & drop or <span className="font-semibold text-primary">browse your files</span>
        </p>
        <p className="text-xs text-muted-foreground">Supports images and multi-page PDF files</p>
      </label>
    </div>
  );
}

function InvoiceDataTable({ data, isAnalyzing }: { data: ExtractInvoiceDataOutput[], isAnalyzing: boolean }) {
    const { toast } = useToast();

    const handleDownload = () => {
        const dataForExcel = data.map(({ fullText, ...rest }) => ({
            'Registered Name': rest.registeredName,
            'Sole Proprietor Name': rest.soleProprietorName,
            'TIN': rest.tin,
            'Invoice #': rest.invoiceNumber,
            'Invoice Date': rest.invoiceDate,
            'Address': rest.address,
            'VATable': rest.vatableAmount,
            'VAT': rest.vatAmount,
            'VAT-exempt': rest.vatExempt,
            'Zero-rated': rest.zeroRated,
        }));
        
        const worksheet = xlsx.utils.json_to_sheet(dataForExcel);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, "Invoices");
        xlsx.writeFile(workbook, `InvoiceData_${Date.now()}.xlsx`);
        toast({ title: "Download Started", description: "Your Excel file is being downloaded."});
    };

    const formatCurrency = (value: string | undefined) => {
        const num = parseFloat(String(value || '0').replace(/,/g, ''));
        if (isNaN(num)) return '0.00';
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    if (data.length === 0) {
        return null;
    }

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
                        <TableHead>Registered Name</TableHead>
                        <TableHead>TIN</TableHead>
                        <TableHead>Invoice #</TableHead>
                        <TableHead>Invoice Date</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead className="text-right">VATable</TableHead>
                        <TableHead className="text-right">VAT</TableHead>
                        <TableHead className="text-right">VAT-exempt</TableHead>
                        <TableHead className="text-right">Zero-rated</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.registeredName || '-'}</TableCell>
                            <TableCell>{item.tin || '-'}</TableCell>
                            <TableCell>{item.invoiceNumber || '-'}</TableCell>
                            <TableCell>{item.invoiceDate || 'N/A'}</TableCell>
                            <TableCell className="max-w-[200px] truncate">{item.address || '-'}</TableCell>
                            <TableCell className="text-right">{formatCurrency(item.vatableAmount)}</TableCell>
                            <TableCell className="text-right">{formatCurrency(item.vatAmount)}</TableCell>
                            <TableCell className="text-right">{formatCurrency(item.vatExempt)}</TableCell>
                            <TableCell className="text-right">{formatCurrency(item.zeroRated)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </div>
    );
}

export default function UtilityPage() {
    const [isAnalyzing, startAnalyzingTransition] = useTransition();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [analysisResults, setAnalysisResults] = useState<ExtractInvoiceDataOutput[]>([]);
    const [progress, setProgress] = useState(0);
    const [progressText, setProgressText] = useState('');
    const { toast } = useToast();
    const stopGenerationRef = useRef(false);
    
    useEffect(() => {
        // This is a placeholder for when we have refresh logic for this page.
    }, []);

    const handleFileSelect = (file: File) => {
        setSelectedFile(file);
        setAnalysisResults([]);
        setProgress(0);
        setProgressText('');
    };

    const handleClearFile = () => {
        setSelectedFile(null);
        setAnalysisResults([]);
        setProgress(0);
        setProgressText('');
    };
    
    const handleStop = () => {
        stopGenerationRef.current = true;
        setProgressText('Stopping...');
        toast({
            title: 'Scan Stopped',
            description: 'The scanning process has been stopped by the user.',
        });
    }

    const handleAnalyze = () => {
        if (!selectedFile) {
            toast({ title: 'No File Selected', description: 'Please upload an invoice to scan.', variant: 'destructive' });
            return;
        }

        setAnalysisResults([]);
        setProgress(0);
        setProgressText('');
        stopGenerationRef.current = false;
        
        startAnalyzingTransition(async () => {
            const processFile = async (fileToProcess: File, totalPages: number, currentPage: number) => {
                if(stopGenerationRef.current) return;

                setProgressText(`Scanning page ${currentPage} of ${totalPages}...`);
                
                const formData = new FormData();
                formData.append('file', fileToProcess);
                formData.append('pageIndex', String(currentPage - 1));

                try {
                    const result = await extractInvoiceData(formData);

                    if (result.success && result.data) {
                        setAnalysisResults(prev => [...prev, result.data!]);
                    } else {
                        toast({ 
                            title: `Page ${currentPage} Failed`, 
                            description: result.error || 'An unknown error occurred.', 
                            variant: 'destructive' 
                        });
                    }
                } catch (error) {
                    console.error(error);
                    toast({
                        title: 'Scan Failed',
                        description: `An unexpected error occurred on page ${currentPage}.`,
                        variant: 'destructive'
                    });
                }
                setProgress(Math.round((currentPage / totalPages) * 100));
            };
            
            if (selectedFile.type === 'application/pdf') {
                try {
                    const pdfBytes = await selectedFile.arrayBuffer();
                    const pdfDoc = await PDFDocument.load(pdfBytes);
                    const numPages = pdfDoc.getPageCount();

                    for (let i = 0; i < numPages; i++) {
                        if (stopGenerationRef.current) {
                            setProgressText('Scan stopped.');
                            return;
                        }

                        const newPdf = await PDFDocument.create();
                        const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
                        newPdf.addPage(copiedPage);
                        
                        const newPdfBytes = await newPdf.save();
                        const singlePageFile = new File([newPdfBytes], `page_${i + 1}.pdf`, { type: 'application/pdf' });
                        
                        await processFile(singlePageFile, numPages, i + 1);
                    }
                    if (!stopGenerationRef.current) {
                        setProgressText('All pages processed!');
                        toast({
                            title: 'Scan Complete',
                            description: `Successfully processed ${numPages} page(s).`
                        });
                    }

                } catch (error) {
                    console.error('Failed to process PDF:', error);
                    toast({ title: 'PDF Processing Failed', description: 'Could not read or split the PDF file.', variant: 'destructive'});
                    setProgress(0);
                    setProgressText('');
                }
            } else {
                await processFile(selectedFile, 1, 1);
                 if (!stopGenerationRef.current) {
                    setProgressText('Scan complete!');
                    if (!stopGenerationRef.current) {
                         toast({
                            title: 'Scan Complete',
                            description: 'Successfully processed the invoice.'
                        });
                    }
                }
            }
        });
    };

    return (
        <div className="p-4 md:p-6 space-y-6">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold">Utility Tools</h1>
                <p className="text-muted-foreground">A collection of smart tools to assist with your tax compliance tasks.</p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                            <Wand2 className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle>AI Invoice Scanner</CardTitle>
                            <CardDescription>Upload an invoice image or a multi-page PDF to automatically extract key tax information.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {!isAnalyzing && (
                        <InvoiceUploader 
                            onFileSelect={handleFileSelect}
                            clearFile={handleClearFile}
                            selectedFile={selectedFile}
                            isAnalyzing={isAnalyzing}
                        />
                    )}

                    {selectedFile && !isAnalyzing && (
                         <Button className="w-full" onClick={handleAnalyze} disabled={isAnalyzing}>
                            <Scan className="mr-2 h-4 w-4" />
                            Scan Invoice
                        </Button>
                    )}

                     {isAnalyzing && (
                        <div className="flex items-center gap-4">
                             <Button className="w-full" onClick={handleAnalyze} disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Scanning...
                            </Button>
                             <Button variant="destructive" onClick={handleStop}>
                                <StopCircle className="mr-2 h-4 w-4" />
                                Stop
                            </Button>
                        </div>
                    )}


                    {isAnalyzing && (
                        <div className="space-y-2 pt-4 text-center">
                            <Progress value={progress} className="w-full" />
                            <p className="text-sm text-muted-foreground">{progressText}</p>
                        </div>
                    )}
                    
                    {analysisResults.length > 0 && (
                        <div className="animate-in fade-in-50 duration-500">
                             <InvoiceDataTable data={analysisResults} isAnalyzing={isAnalyzing} />
                        </div>
                    )}
                </CardContent>
            </Card>

            <DatFileProcessorCard />
        </div>
    );
}

    