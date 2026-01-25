
'use client';

import React, { useState, useTransition, useCallback, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HardDriveUpload, UploadCloud, X, Loader2, Eye, FileSpreadsheet, FileUp, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { DatPreviewDialog, type DatPreviewState } from './dat-preview-dialog';
import { generateSalesExcel, generatePurchasesExcel, generate1601EQExcel, generate1601FQExcel, generateSawtExcel, generateImportationsExcel, generate1604EExcel, generate1604FExcel, generate1604CExcel } from '@/lib/actions/excel';
import { useTaxProfiles } from '@/hooks/use-tax-profiles';
import { convertDatToTemplate } from '@/lib/actions/excel/dat-to-template';
import JSZip from 'jszip';
import { parseFileName } from '@/lib/dat-utils';

interface StagedFile {
    id: string;
    file: File;
    content: string;
    parsed: {
        tin: string;
        transactionType: string;
        year: string;
        month: string;
        quarter: number;
    }
}

interface FileGroup {
    key: string;
    header: string;
    files: StagedFile[];
    type: string;
}


export function DatFileProcessorCard() {
    const [stagedFiles, setStagedFiles] = useState<StagedFile[]>([]);
    const [isProcessing, startProcessingTransition] = useTransition();
    const { toast } = useToast();
    const { profiles } = useTaxProfiles();

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [previewData, setPreviewData] = useState<DatPreviewState | null>(null);

    const [actionStates, setActionStates] = useState<{ [key: string]: boolean }>({});


    const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        handleFiles(e.dataTransfer.files);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            handleFiles(e.target.files);
        }
        e.target.value = '';
    };

    const handleFiles = (files: FileList) => {
        startProcessingTransition(() => {
            const newFilePromises = Array.from(files).map(file => {
                if (!file.name.toUpperCase().endsWith('.DAT')) {
                    toast({ title: 'Invalid File Type', description: `Skipping '${file.name}'. Only .DAT files are allowed.`, variant: 'destructive'});
                    return null;
                }
                
                if (stagedFiles.some(staged => staged.file.name === file.name && staged.file.size === file.size)) {
                    toast({ title: 'Duplicate File', description: `Skipping '${file.name}' as it's already in the list.`, variant: 'default'});
                    return null;
                }

                return new Promise<StagedFile | null>((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const content = event.target?.result as string;
                        try {
                            const parsed = parseFileName(file.name);
                            if (parsed.transactionType === 'Unknown' || !parsed.year) {
                                toast({ title: 'Parsing Error', description: `Could not determine type or year for '${file.name}'.`, variant: 'destructive'});
                                resolve(null);
                            } else {
                                resolve({ id: `${file.name}-${file.size}`, file, content, parsed });
                            }
                        } catch (err) {
                            toast({ title: 'File Read Error', description: `Could not parse file name: ${file.name}`, variant: 'destructive'});
                            resolve(null);
                        }
                    };
                    reader.onerror = () => {
                         toast({ title: 'File Read Error', description: `Failed to read file: ${file.name}`, variant: 'destructive'});
                        resolve(null);
                    };
                    reader.readAsText(file);
                });
            });

            Promise.all(newFilePromises).then(resolvedFiles => {
                const validFiles = resolvedFiles.filter(f => f !== null) as StagedFile[];
                setStagedFiles(prev => [...prev, ...validFiles]);
            });
        });
    };
    
    const fileGroups = useMemo<FileGroup[]>(() => {
        const groups: { [key: string]: FileGroup } = {};
        stagedFiles.forEach(file => {
            const { transactionType, year, quarter } = file.parsed;
            let groupKey = `${transactionType}-${year}`;
            let groupHeader = `${transactionType} - ${year}`;

            if (transactionType === '1601-EQ' || transactionType === '1601-FQ') {
                groupKey += `-Q${quarter}`;
                groupHeader += ` (Q${quarter})`;
            }

            if (!groups[groupKey]) {
                groups[groupKey] = { key: groupKey, header: groupHeader, files: [], type: transactionType };
            }
            groups[groupKey].files.push(file);
        });
        return Object.values(groups);
    }, [stagedFiles]);

    const removeFile = (id: string) => {
        setStagedFiles(prev => prev.filter(f => f.id !== id));
    };

    const handleViewContent = (file: StagedFile) => {
        const lines = file.content.split('\n');
        const { transactionType } = parseFileName(file.file.name);
        let reportType: DatPreviewState['reportType'] = 'none';
        let totals: DatPreviewState['totals'] = {};

        if (transactionType.includes('1601-EQ')) {
            reportType = '1601eq';
            const footer1 = lines.find(line => line.startsWith('C1,'));
            const footer2 = lines.find(line => line.startsWith('C2,'));
            if (footer1) {
                const cols = footer1.split(',');
                totals.taxableIncome = parseFloat(cols[5] || '0');
                totals.withholdingTax = parseFloat(cols[6] || '0');
            }
            if (footer2) {
                    const cols = footer2.split(',');
                totals.exemptIncome = parseFloat(cols[5] || '0');
            }
        } else if (transactionType.includes('1601-FQ')) {
            reportType = '1601fq';
            const footer1 = lines.find(line => line.startsWith('C1,'));
            const footer2 = lines.find(line => line.startsWith('C2,'));
            const footer3 = lines.find(line => line.startsWith('C3,'));
                if (footer1) {
                const cols = footer1.split(',');
                totals.withholdingTax = parseFloat(cols[6] || '0');
            }
                if (footer2) {
                const cols = footer2.split(',');
                totals.services = parseFloat(cols[7] || '0');
            }
                if (footer3) {
                const cols = footer3.split(',');
                totals.exemptIncome = parseFloat(cols[5] || '0');
            }
        } else if (transactionType.includes('1604-E')) {
            reportType = '1604e';
            const footer3 = lines.find(line => line.startsWith('C3,'));
            const footer4 = lines.find(line => line.startsWith('C4,'));
            if (footer3) {
                const cols = footer3.split(',');
                totals.withholdingTax = parseFloat(cols[5] || '0');
            }
            if (footer4) {
                    const cols = footer4.split(',');
                totals.exemptIncome = parseFloat(cols[5] || '0');
            }
        } else if (transactionType.includes('1604-F')) {
            reportType = '1604f';
            const footer4 = lines.find(line => line.startsWith('C4,'));
            const footer5 = lines.find(line => line.startsWith('C5,'));
            const footer6 = lines.find(line => line.startsWith('C6,'));
                if (footer4) {
                const cols = footer4.split(',');
                totals.withholdingTax = parseFloat(cols[6] || '0');
            }
                if (footer5) {
                const cols = footer5.split(',');
                totals.services = parseFloat(cols[7] || '0');
            }
                if (footer6) {
                const cols = footer6.split(',');
                totals.exemptIncome = parseFloat(cols[5] || '0');
            }
        } else if (transactionType.includes('1604-C')) {
            reportType = '1604c';
            const footer1 = lines.find(line => line.startsWith('C1,'));
            const footer2 = lines.find(line => line.startsWith('C2,'));
            let grossComp = 0;
            let taxWithheld = 0;
            
            if (footer1) {
                const cols = footer1.split(',');
                grossComp += parseFloat(cols[5] || '0') + parseFloat(cols[16] || '0');
                taxWithheld += parseFloat(cols[34] || '0');
            }
            
            if (footer2) {
                const cols = footer2.split(',');
                grossComp += parseFloat(cols[5] || '0') + parseFloat(cols[19] || '0');
                taxWithheld += parseFloat(cols[42] || '0');
            }

            totals.taxableIncome = grossComp;
            totals.withholdingTax = taxWithheld;

        } else if (transactionType.startsWith('SAWT')) {
            reportType = 'sawt';
            const footer = lines.find(line => line.startsWith('CSAWT,'));
            if (footer) {
                const cols = footer.split(',');
                totals.taxableIncome = parseFloat(cols[5] || '0');
                totals.withholdingTax = parseFloat(cols[6] || '0');
            }
        } else if (transactionType === 'Sales') {
            reportType = 'sales';
            const detailLines = lines.filter(line => line.startsWith('D,'));
            totals = detailLines.reduce((acc, line) => {
                const columns = line.split(',');
                acc.exempt = (acc.exempt ?? 0) + parseFloat(columns[9] || '0');
                acc.zeroRated = (acc.zeroRated ?? 0) + parseFloat(columns[10] || '0');
                acc.vatable = (acc.vatable ?? 0) + parseFloat(columns[11] || '0');
                acc.outputVat = (acc.outputVat ?? 0) + parseFloat(columns[12] || '0');
                return acc;
            }, { exempt: 0, zeroRated: 0, vatable: 0, outputVat: 0 });
        } else if (transactionType === 'Purchases') {
            reportType = 'purchases';
            const detailLines = lines.filter(line => line.startsWith('D,'));
            totals = detailLines.reduce((acc, line) => {
                const columns = line.split(',');
                acc.exempt = (acc.exempt ?? 0) + parseFloat(columns[9] || '0');
                acc.zeroRated = (acc.zeroRated ?? 0) + parseFloat(columns[10] || '0');
                acc.services = (acc.services ?? 0) + parseFloat(columns[11] || '0');
                acc.capitalGoods = (acc.capitalGoods ?? 0) + parseFloat(columns[12] || '0');
                acc.otherGoods = (acc.otherGoods ?? 0) + parseFloat(columns[13] || '0');
                acc.inputTax = (acc.inputTax ?? 0) + parseFloat(columns[14] || '0');
                return acc;
            }, { exempt: 0, zeroRated: 0, services: 0, capitalGoods: 0, otherGoods: 0, inputTax: 0 });
        } else if (transactionType === 'Importations') {
            reportType = 'importations';
            const detailLines = lines.filter(line => line.startsWith('D,'));
            totals = detailLines.reduce((acc, line) => {
                const columns = line.split(',');
                acc.exempt = (acc.exempt ?? 0) + parseFloat(columns[9] || '0');
                acc.taxable = (acc.taxable ?? 0) + parseFloat(columns[10] || '0');
                acc.inputTax = (acc.inputTax ?? 0) + parseFloat(columns[11] || '0');
                return acc;
            }, { exempt: 0, taxable: 0, inputTax: 0 });
        }

        setPreviewData({
            fileName: file.file.name,
            content: file.content,
            isViewing: true,
            reportType,
            totals,
        });
        setIsPreviewOpen(true);
    };

    const handleAction = async (actionKey: string, actionFn: () => Promise<any>) => {
        setActionStates(prev => ({ ...prev, [actionKey]: true }));
        try {
            await actionFn();
        } catch (error) {
            console.error(error);
            toast({ title: 'Error', description: 'An unexpected error occurred.', variant: 'destructive' });
        } finally {
            setActionStates(prev => ({ ...prev, [actionKey]: false }));
        }
    };
    
    const handleDownloadAsReport = (group: FileGroup) => handleAction(`report-${group.key}`, async () => {
        const fileIds = group.files.map(f => f.id);
        const fileNames = group.files.map(f => f.file.name);
        const contents = group.files.map(f => f.content);
        const { type } = group;

        // Note: The excel generation actions expect file IDs to fetch content.
        // Here, we already have content. We'll adapt by passing contents directly.
        // For now, let's create a temporary solution. We will pass a placeholder for IDs
        // and handle the logic inside the action.
        
        let result;

        if (type === 'Sales') result = await generateSalesExcel(contents, fileNames);
        else if (type === 'Purchases') result = await generatePurchasesExcel(contents, fileNames);
        else if (type === 'Importations') result = await generateImportationsExcel(contents, fileNames);
        else if (type.includes('1601-EQ')) result = await generate1601EQExcel(contents, fileNames);
        else if (type.includes('1601-FQ')) result = await generate1601FQExcel(contents, fileNames);
        else if (type.includes('1604-E')) result = await generate1604EExcel(contents, fileNames, profiles);
        else if (type.includes('1604-F')) result = await generate1604FExcel(contents, fileNames, profiles);
        else if (type.includes('1604-C')) result = await generate1604CExcel(contents, fileNames, profiles);
        else if (type.startsWith('SAWT')) {
            const zip = new JSZip();
            const failedFiles: string[] = [];

            const excelPromises = group.files.map(async (file) => {
                const excelResult = await generateSawtExcel(file.content, file.file.name);
                if (excelResult.success && excelResult.base64 && excelResult.fileName) {
                    return { status: 'fulfilled', value: excelResult };
                }
                return { status: 'rejected', reason: file.file.name };
            });

            const results = await Promise.all(excelPromises);
            results.forEach(res => {
                if (res.status === 'fulfilled' && res.value) {
                    zip.file(res.value.fileName!, res.value.base64!, { base64: true });
                } else {
                    failedFiles.push(res.reason as string);
                }
            });
            
            if (failedFiles.length > 0) toast({ title: 'Some Files Failed', description: `Could not generate Excel for: ${failedFiles.join(', ')}.`, variant: 'destructive' });
            
            if (Object.keys(zip.files).length > 0) {
                const zipContent = await zip.generateAsync({ type: 'blob' });
                const url = URL.createObjectURL(zipContent);
                const link = document.createElement('a');
                link.href = url;
                link.download = `${group.key}.zip`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                toast({ title: 'Download Started', description: `Your Excel files are being downloaded in ${group.key}.zip` });
            }
            return;
        } else {
            toast({ title: "Not Implemented", description: `Excel report generation for ${type} is not yet available.`, variant: "destructive" });
            return;
        }

        if (result && result.success && result.base64) {
            const byteCharacters = atob(result.base64);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) byteNumbers[i] = byteCharacters.charCodeAt(i);
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = result.fileName || 'report.xlsx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            toast({ title: 'Excel Generated', description: `Your file ${result.fileName} has been downloaded.` });
        } else if (result) {
            toast({ title: "Excel Generation Failed", description: result.error || "An unknown error occurred.", variant: "destructive" });
        }
    });

    const handleDownloadAsTemplate = (file: StagedFile) => handleAction(`template-${file.id}`, async () => {
        const result = await convertDatToTemplate(file.content, file.file.name);
        if (result.success && result.base64) {
            const byteCharacters = atob(result.base64);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) byteNumbers[i] = byteCharacters.charCodeAt(i);
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = result.fileName || 'template.xlsx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            toast({ title: 'Template Generated', description: `Excel template for ${file.file.name} has been downloaded.` });
        } else {
            toast({ title: 'Template Generation Failed', description: result.error || 'An unknown error occurred.', variant: 'destructive'});
        }
    });


    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <HardDriveUpload className="w-6 h-6" />
                    </div>
                    <div>
                        <CardTitle>DAT File Processor</CardTitle>
                        <CardDescription>Upload DAT files to view their content or convert them into Excel reports/templates.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {stagedFiles.length === 0 ? (
                     <div
                        className={cn(
                            'w-full p-6 border-2 border-dashed rounded-lg text-center transition-colors duration-300',
                            'border-border hover:border-primary/50'
                        )}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleFileDrop}
                    >
                        <input
                            type="file"
                            id="dat-upload"
                            className="hidden"
                            onChange={handleFileChange}
                            accept=".dat"
                            multiple
                            disabled={isProcessing}
                        />
                        <label htmlFor="dat-upload" className={cn("flex flex-col items-center justify-center gap-2", isProcessing ? 'cursor-not-allowed' : 'cursor-pointer')}>
                            {isProcessing ? <Loader2 className="w-8 h-8 text-primary animate-spin" /> : <UploadCloud className="w-8 h-8 text-muted-foreground" />}
                             <p className="text-sm text-muted-foreground">
                                {isProcessing ? 'Processing Files...' : <>Drag & drop or <span className="font-semibold text-primary">browse your DAT files</span></>}
                            </p>
                        </label>
                    </div>
                ) : (
                    <div className='space-y-4'>
                        <Accordion type="multiple" className="w-full" defaultValue={fileGroups.map(g => g.key)}>
                           {fileGroups.map(group => (
                               <AccordionItem value={group.key} key={group.key} className="border-b-0">
                                   <AccordionTrigger className='p-3 bg-secondary/50 rounded-t-md border'>
                                        <div className='font-semibold'>{group.header} ({group.files.length} file{group.files.length > 1 ? 's':''})</div>
                                   </AccordionTrigger>
                                   <AccordionContent className='p-4 border border-t-0 rounded-b-md'>
                                       <div className='space-y-2'>
                                            {group.files.map(file => (
                                                <div key={file.id} className='flex items-center justify-between p-2 rounded-md bg-slate-50'>
                                                    <div className='flex-1 font-mono text-sm truncate pr-4' title={file.file.name}>
                                                        {file.file.name}
                                                    </div>
                                                     <div className="flex items-center gap-1">
                                                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleViewContent(file)} disabled={actionStates[`template-${file.id}`]}>
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleDownloadAsTemplate(file)} disabled={actionStates[`template-${file.id}`]}>
                                                            {actionStates[`template-${file.id}`] ? <Loader2 className="h-4 w-4 animate-spin"/> : <FileUp className="h-4 w-4" />}
                                                        </Button>
                                                        <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive hover:text-destructive" onClick={() => removeFile(file.id)}>
                                                            <X className="h-4 w-4" />
                                                        </Button>
                                                     </div>
                                                </div>
                                            ))}
                                       </div>
                                       <div className='mt-4 flex justify-end'>
                                            <Button size="sm" onClick={() => handleDownloadAsReport(group)} disabled={actionStates[`report-${group.key}`]}>
                                                 {actionStates[`report-${group.key}`] ? <Loader2 className="h-4 w-4 animate-spin mr-2"/> : <FileSpreadsheet className="h-4 w-4 mr-2" />}
                                                Download Group as Excel Report
                                            </Button>
                                       </div>
                                   </AccordionContent>
                               </AccordionItem>
                           ))}
                        </Accordion>
                        <div className="flex justify-center">
                            <Button variant="outline" onClick={() => setStagedFiles([])}>Clear All Files</Button>
                        </div>
                    </div>
                )}
                 {stagedFiles.length > 0 && fileGroups.length === 0 && !isProcessing && (
                     <div className="text-center p-4">
                        <AlertTriangle className="mx-auto h-8 w-8 text-muted-foreground" />
                        <p className="mt-2 text-sm font-medium">No valid groups found.</p>
                        <p className="text-xs text-muted-foreground">Please upload files that can be grouped by type and year.</p>
                    </div>
                )}

                {previewData && (
                     <DatPreviewDialog
                        isOpen={isPreviewOpen}
                        onOpenChange={setIsPreviewOpen}
                        {...previewData}
                    />
                )}
            </CardContent>
        </Card>
    );
}

    

    
