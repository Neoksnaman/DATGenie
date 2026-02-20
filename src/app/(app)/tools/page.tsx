'use client';

import { useState, useTransition, useCallback, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UploadCloud, File as FileIcon, X, Loader2, Wand2, Scan, Copy, Download, Split, Trash2, StopCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { extractInvoiceData, extract2307Data } from '@/lib/actions/ai';
import type { ExtractInvoiceDataOutput, Extract2307DataOutput } from '@/ai/schemas';
import { PDFDocument } from 'pdf-lib';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import * as xlsx from 'xlsx';
import { DatFileProcessorCard } from '@/components/dat-file-processor-card';
import { Textarea } from '@/components/ui/textarea';
import { sanitizeAndValidateString } from '@/lib/dat-utils';
import { useRefresh } from '@/hooks/use-refresh';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Form2307DataTable } from '@/components/form2307-data-table';

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

interface SplitAddressResult {
    original: string;
    line1: string;
    line2: string;
}

const addressAbbreviations: { [key: string]: string } = {
    'BUILDING': 'BLDG', 'INTERIOR': 'INT', 'BLOCK': 'BLK', 'LOT': 'LT', 'PHASE': 'PH',
    'SUBDIVISION': 'SUBD', 'VILLAGE': 'VLG', 'COMPOUND': 'CMPD', 'HEIGHTS': 'HGTS',
    'HOMES': 'HMS', 'ESTATE': 'EST', 'EXECUTIVE': 'EXEC', 'STREET': 'ST', 'AVENUE': 'AVE',
    'ROAD': 'RD', 'DRIVE': 'DR', 'BOULEVARD': 'BLVD', 'EXTENSION': 'EXT', 'HIGHWAY': 'HWY',
    'CORNER': 'COR', 'CIRCLE': 'CIR', 'LANE': 'LN', 'CROSSING': 'XNG', 'ALLEY': 'ALY',
    'BARANGAY': 'BRGY', 'DISTRICT': 'DIST', 'CITY': 'CTY', 'MUNICIPALITY': 'MUN',
    'PROVINCE': 'PROV', 'REGION': 'REG', 'ZONE': 'ZN', 'PUROK': 'PRK', 'SITIO': 'STO',
    'COUNTRY': 'CTRY', 'NUMBER': 'NO', 'NORTH': 'N', 'SOUTH': 'S', 'EAST': 'E', 'WEST': 'W',
    'UPPER': 'UP', 'LOWER': 'LWR', 'TOWER': 'TWR', 'INDUSTRIAL': 'IND',
    'BUSINESS': 'BUS', 'COMMERCIAL': 'COML'
};

function abbreviateAddress(address: string): string {
    let abbreviated = ` ${address.toUpperCase()} `;
    for (const [full, abbr] of Object.entries(addressAbbreviations)) {
        const regex = new RegExp(`\\s${full}\\s`, 'g');
        abbreviated = abbreviated.replace(regex, ` ${abbr} `);
    }
    return abbreviated.trim();
}

function splitAddress(address: string): { line1: string; line2: string } {
    let splitPos = -1;

    // Prioritize splitting at the last space/comma before the 30-char mark for line 1
    const idealSplitPoint = Math.min(30, address.length - 1);
    for (let i = idealSplitPoint; i >= 0; i--) {
        if (address[i] === ' ' || address[i] === ',') {
            splitPos = i;
            break;
        }
    }
    
    // If no good split point is found before 30 chars, find the last space in the whole string
    if (splitPos === -1) {
        splitPos = address.lastIndexOf(' ');
         if (splitPos === -1) { // If there are no spaces at all
             splitPos = Math.floor(address.length / 2);
         }
    }

    const line1 = address.substring(0, splitPos).trim();
    const line2 = address.substring(splitPos + 1).trim();

    return { line1, line2 };
}

function AddressSplitterCard() {
    const [isSplitting, startSplittingTransition] = useTransition();
    const [addressList, setAddressList] = useState('');
    const [splitResults, setSplitResults] = useState<SplitAddressResult[]>([]);
    const { toast } = useToast();

    const handleSplit = () => {
        if (!addressList.trim()) {
            toast({ title: "Input Required", description: "Please paste at least one address to split.", variant: "destructive" });
            return;
        }

        startSplittingTransition(() => {
            const addresses = addressList.split('\n').filter(addr => addr.trim() !== '');
            const results: SplitAddressResult[] = addresses.map(originalAddress => {
                
                const sanitizedAddress = sanitizeAndValidateString(originalAddress, "Address", 200, false).value;

                let { line1, line2 } = splitAddress(sanitizedAddress);

                if (line2.length > 30) {
                    const abbreviatedAddress = abbreviateAddress(sanitizedAddress);
                    const resplitResult = splitAddress(abbreviatedAddress);
                    line1 = resplitResult.line1;
                    line2 = resplitResult.line2;
                }

                return {
                    original: originalAddress,
                    line1: line1,
                    line2: line2,
                };
            });
            setSplitResults(results);
            toast({ title: "Success", description: `Processed ${results.length} addresses.`});
        });
    }

    const handleDownload = () => {
        const dataForExcel = splitResults.map(item => ({
            'Original Address': item.original,
            'Address Line 1': item.line1,
            'Address Line 2': item.line2,
        }));
        
        const worksheet = xlsx.utils.json_to_sheet(dataForExcel);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, "Split Addresses");
        xlsx.writeFile(workbook, `SplitAddresses_${Date.now()}.xlsx`);
        toast({ title: "Download Started", description: "Your Excel file is being downloaded."});
    };
    
    const handleCopyAll = () => {
        if (splitResults.length === 0) return;

        const textToCopy = splitResults
            .map(item => `${item.line1}\t${item.line2}`)
            .join('\n');

        navigator.clipboard.writeText(textToCopy);
        toast({ title: "Copied!", description: `Copied ${splitResults.length} addresses to clipboard.`});
    }

    const handleClear = () => {
        setAddressList('');
        setSplitResults([]);
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <Split className="w-6 h-6" />
                    </div>
                    <div>
                        <CardTitle>Address Splitter</CardTitle>
                        <CardDescription>Split a single address into two 30-character lines for BIR compliance.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea 
                    placeholder="Paste one or more addresses here, each on a new line..."
                    value={addressList}
                    onChange={(e) => setAddressList(e.target.value)}
                    rows={5}
                    disabled={isSplitting}
                />
                <Button className="w-full" onClick={handleSplit} disabled={isSplitting}>
                    {isSplitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Split className="mr-2 h-4 w-4" />}
                    Split Addresses
                </Button>

                {splitResults.length > 0 && (
                    <div className="space-y-4 animate-in fade-in-50 duration-500">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Results ({splitResults.length})</h3>
                            <div className="flex items-center gap-2">
                                <Button onClick={handleCopyAll} variant="outline" size="sm">
                                    <Copy className="mr-2 h-4 w-4" />
                                    Copy All
                                </Button>
                                <Button onClick={handleDownload} variant="outline" size="sm">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download as Excel
                                </Button>
                                <Button onClick={handleClear} variant="destructive" size="sm">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Clear
                                </Button>
                            </div>
                        </div>
                         <div className="border rounded-lg overflow-x-auto max-h-[400px]">
                            <Table>
                                <TableHeader className="sticky top-0 bg-secondary">
                                    <TableRow>
                                        <TableHead className="w-[40%]">Original Address</TableHead>
                                        <TableHead className="w-[30%]">Address Line 1 (Max 30)</TableHead>
                                        <TableHead className="w-[30%]">Address Line 2 (Best Effort)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {splitResults.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="text-xs">{item.original}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <span className="flex-1 text-sm font-mono">{item.line1}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                 <div className="flex items-center gap-2">
                                                    <span className="flex-1 text-sm font-mono">{item.line2}</span>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                )}

            </CardContent>
        </Card>
    );
}

function ToolsPageContent() {
    const [isAnalyzing, startAnalyzingTransition] = useTransition();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [analysisResults, setAnalysisResults] = useState<ExtractInvoiceDataOutput[]>([]);
    const [form2307Results, setForm2307Results] = useState<(Extract2307DataOutput & { pageNumber: number; error?: string; })[]>([]);
    const [progress, setProgress] = useState(0);
    const [progressText, setProgressText] = useState('');
    const { toast } = useToast();
    const stopGenerationRef = useRef(false);
    const [scanType, setScanType] = useState<'invoice' | 'form2307'>('invoice');
    
    const handleFileSelect = (file: File) => {
        setSelectedFile(file);
        setAnalysisResults([]);
        setForm2307Results([]);
        setProgress(0);
        setProgressText('');
    };

    const handleClearFile = () => {
        setSelectedFile(null);
        setAnalysisResults([]);
        setForm2307Results([]);
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
            toast({ title: 'No File Selected', description: 'Please upload a document to scan.', variant: 'destructive' });
            return;
        }

        setAnalysisResults([]);
        setForm2307Results([]);
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
                    if (scanType === 'invoice') {
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
                    } else if (scanType === 'form2307') {
                        const result = await extract2307Data(formData);
                         if (result.success && result.data) {
                            setForm2307Results(prev => [...prev, { ...result.data!, pageNumber: currentPage }]);
                        } else {
                            const skippedPage: any = {
                                pageNumber: currentPage,
                                payeeName: `Page ${currentPage} Skipped`,
                                error: result.error || 'An unknown error occurred.',
                                taxDetails: [],
                            };
                            setForm2307Results(prev => [...prev, skippedPage]);
                             toast({ 
                                title: `Page ${currentPage} Skipped`, 
                                description: result.error || 'An unknown error occurred.', 
                                variant: 'destructive' 
                            });
                        }
                    }
                } catch (error) {
                    console.error(error);
                    const errorMessage = `An unexpected error occurred on page ${currentPage}.`;
                     if(scanType === 'form2307') {
                        const skippedPage: any = {
                            pageNumber: currentPage,
                            payeeName: `Page ${currentPage} Skipped`,
                            error: errorMessage,
                            taxDetails: [],
                        };
                        setForm2307Results(prev => [...prev, skippedPage]);
                    }
                    toast({
                        title: 'Scan Failed',
                        description: errorMessage,
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
                            description: 'Successfully processed the document.'
                        });
                    }
                }
            }
        });
    };

    return (
        <div className="p-4 md:p-6 space-y-6">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold">Tools</h1>
                <p className="text-muted-foreground">A collection of smart tools to assist with your tax compliance tasks.</p>
            </div>

            <AddressSplitterCard />

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                            <Wand2 className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle>AI Document Scanner</CardTitle>
                            <CardDescription>Upload a document to automatically extract key tax information.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <Label>Document Type</Label>
                        <Select value={scanType} onValueChange={(v) => { setScanType(v as any); handleClearFile(); }} disabled={isAnalyzing}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select document type..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="invoice">Invoice</SelectItem>
                                <SelectItem value="form2307">BIR Form 2307</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

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
                            Scan Document
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
                    
                    {analysisResults.length > 0 && scanType === 'invoice' && (
                        <div className="animate-in fade-in-50 duration-500">
                             <InvoiceDataTable data={analysisResults} isAnalyzing={isAnalyzing} />
                        </div>
                    )}
                     {form2307Results.length > 0 && scanType === 'form2307' && (
                        <div className="animate-in fade-in-50 duration-500">
                             <Form2307DataTable data={form2307Results} isAnalyzing={isAnalyzing} />
                        </div>
                    )}
                </CardContent>
            </Card>

            <DatFileProcessorCard />
        </div>
    );
}

export default function ToolsPage() {
    const { setRefreshFunction } = useRefresh();

    useEffect(() => {
        setRefreshFunction(null);
    }, [setRefreshFunction]);
    
    return <ToolsPageContent />;
}

    
