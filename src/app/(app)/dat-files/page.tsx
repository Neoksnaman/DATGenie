

'use client';

import React, { useEffect, useState, useTransition, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Trash, Loader2, SearchX, FileDown, Eye, FileSpreadsheet, XCircle, CheckSquare, Square } from 'lucide-react';
import { getDatFileContent, deleteDatFile } from '@/lib/actions/drive';
import type { DatFile } from '@/lib/schemas';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Checkbox } from '@/components/ui/checkbox';
import { DatPreviewDialog } from '@/components/dat-preview-dialog';
import type { DatPreviewState } from '@/components/dat-preview-dialog';
import { DeleteConfirmationDialog } from '@/components/delete-confirmation-dialog';
import { useDatFiles } from '@/hooks/use-dat-files';
import { useRefresh } from '@/hooks/use-refresh';
import JSZip from 'jszip';
import { generateSalesExcel, generatePurchasesExcel, generate1601EQExcel, generate1601FQExcel, generateSawtExcel } from '@/lib/actions/excel';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


function DatFilesContent() {
    const { files, isPending, initialFetchComplete, removeFile, fetchFiles } = useDatFiles();
    const { setRefreshFunction } = useRefresh();
    const [isViewing, startViewingTransition] = useTransition();
    const [isDownloading, startDownloadingTransition] = useTransition();
    const [isDeleting, startDeleteTransition] = useTransition();
    const [isMultiDownloading, startMultiDownloadTransition] = useTransition();
    const [isExcelDownloading, startExcelDownloadTransition] = useTransition();
    const [viewingFileId, setViewingFileId] = useState<string | null>(null);
    const [downloadingFileId, setDownloadingFileId] = useState<string | null>(null);
    const [deletingFileId, setDeletingFileId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFiles, setSelectedFiles] = useState<DatFile[]>([]);
    const { toast } = useToast();
    const ITEMS_PER_PAGE = 10;
    
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [previewData, setPreviewData] = useState<DatPreviewState | null>(null);

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [fileToDelete, setFileToDelete] = useState<DatFile | null>(null);
    
    const [tinFilter, setTinFilter] = useState<string>('all');
    const [typeFilter, setTypeFilter] = useState<string>('all');
    const [yearFilter, setYearFilter] = useState<string>('all');


    const handleFetch = useCallback((isManualRefresh = false) => {
        fetchFiles(isManualRefresh);
    }, [fetchFiles]);
    
    useEffect(() => {
        setRefreshFunction(() => () => handleFetch(true));
    }, [handleFetch, setRefreshFunction]);


    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedFiles, tinFilter, typeFilter, yearFilter]);
    
    const parseFileName = useCallback((fileName: string) => {
        const tinLength = 9;
        const branchCodeLength = 4;
        const tinAndBranchLength = tinLength + branchCodeLength;
        const sawtSchedules = ["1700", "1702", "2550Q", "1701", "1702Q", "2551M", "1701Q", "2550M", "2553"];

        const tin = fileName.substring(0, tinLength);

        if (fileName.includes('1601EQ')) {
            const monthIndex = tinAndBranchLength;
            const yearIndex = monthIndex + 2;
            const month = fileName.substring(monthIndex, yearIndex);
            const year = fileName.substring(yearIndex, yearIndex + 4);
            const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
            return { transactionType: '1601-EQ', reportingPeriod, year, month, tin };
        }
        
        if (fileName.includes('1601FQ')) {
            const monthIndex = tinAndBranchLength;
            const yearIndex = monthIndex + 2;
            const month = fileName.substring(monthIndex, yearIndex);
            const year = fileName.substring(yearIndex, yearIndex + 4);
            const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
            return { transactionType: '1601-FQ', reportingPeriod, year, month, tin };
        }

        const sortedSawtSchedules = sawtSchedules.sort((a, b) => b.length - a.length);
        const sawtScheduleMatch = sortedSawtSchedules.find(schedule => fileName.includes(schedule));

        if (sawtScheduleMatch) {
            const monthIndex = tinAndBranchLength;
            const yearIndex = monthIndex + 2;
            const month = fileName.substring(monthIndex, yearIndex);
            const year = fileName.substring(yearIndex, yearIndex + 4);
            const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
            return { transactionType: `SAWT-${sawtScheduleMatch}`, reportingPeriod, year, month, tin };
        }
        
        const typeCode = fileName.charAt(9);
        const month = fileName.substring(10, 12);
        const year = fileName.substring(12, 16);

        let transactionType = 'Unknown';
        switch (typeCode) {
            case 'S': transactionType = 'Sales'; break;
            case 'P': transactionType = 'Purchases'; break;
            case 'I': transactionType = 'Importations'; break;
        }

        const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });

        return { transactionType, reportingPeriod, year, month, tin };
    }, []);
    
    const { availableTins, availableTypes, availableYears } = useMemo(() => {
        const getOptions = (filterKey: 'tin' | 'transactionType' | 'year') => {
            const options = new Set<string>();
            files.forEach(file => {
                const info = parseFileName(file.name);
                let isMatch = true;
                if (filterKey !== 'tin' && tinFilter !== 'all' && info.tin !== tinFilter) {
                    isMatch = false;
                }
                if (filterKey !== 'transactionType' && typeFilter !== 'all' && info.transactionType !== typeFilter) {
                    isMatch = false;
                }
                if (filterKey !== 'year' && yearFilter !== 'all' && info.year !== yearFilter) {
                    isMatch = false;
                }
                if (isMatch) {
                    options.add(info[filterKey]);
                }
            });
            return Array.from(options).sort();
        };

        return {
            availableTins: getOptions('tin'),
            availableTypes: getOptions('transactionType'),
            availableYears: getOptions('year').sort((a, b) => b.localeCompare(a)),
        };
    }, [files, parseFileName, tinFilter, typeFilter, yearFilter]);


    const handleViewFile = (file: DatFile) => {
        setViewingFileId(file.id);
        startViewingTransition(async () => {
            try {
                const result = await getDatFileContent(file.id);
                if (result.success && result.content) {
                    const lines = result.content.split('\n');
                    const { transactionType } = parseFileName(file.name);
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
                    }
    
                    setPreviewData({
                        fileName: file.name,
                        content: result.content,
                        isViewing: true,
                        reportType,
                        totals,
                    });
                    setIsPreviewOpen(true);
                } else {
                    if (result.error?.includes('File not found')) {
                        toast({ title: 'File Not Found', description: 'This file may have been deleted. Please refresh the list.', variant: 'destructive'});
                        removeFile(file.id); // Remove from local cache
                    } else {
                        toast({ title: 'Error', description: result.error || 'Failed to fetch file content.', variant: 'destructive' });
                    }
                }
            } finally {
                setViewingFileId(null);
            }
        })
    }

    const handleDownloadFile = (file: DatFile) => {
        setDownloadingFileId(file.id);
        startDownloadingTransition(async () => {
            try {
                const result = await getDatFileContent(file.id);
                if (result.success && result.content) {
                    const blob = new Blob([result.content], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = file.name;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                } else {
                     if (result.error?.includes('File not found')) {
                        toast({ title: 'File Not Found', description: 'This file may have been deleted. Please refresh the list.', variant: 'destructive'});
                        removeFile(file.id); // Remove from local cache
                    } else {
                        toast({ title: 'Error', description: result.error || 'Failed to download file content.', variant: 'destructive' });
                    }
                }
            } finally {
                setDownloadingFileId(null);
            }
        });
    };

    const handleMultiDownload = () => {
        if (selectedFiles.length === 0) return;

        startMultiDownloadTransition(async () => {
            const zip = new JSZip();
            const failedFiles: string[] = [];

            const filePromises = selectedFiles.map(file => 
                getDatFileContent(file.id).then(result => {
                    if (result.success && result.content) {
                        zip.file(file.name, result.content);
                    } else {
                        failedFiles.push(file.name);
                        removeFile(file.id);
                    }
                })
            );

            await Promise.all(filePromises);

            if (failedFiles.length > 0) {
                 toast({
                    title: 'Some Files Failed',
                    description: `Could not download: ${failedFiles.join(', ')}. They may have been deleted.`,
                    variant: 'destructive',
                });
            }

            if (Object.keys(zip.files).length > 0) {
                const { tin, transactionType, year } = parseFileName(selectedFiles[0].name);
                const zipFileName = `${tin}-${transactionType.replace(/ /g, '_')}-${year}.zip`;

                const zipContent = await zip.generateAsync({ type: 'blob' });
                const url = URL.createObjectURL(zipContent);
                const link = document.createElement('a');
                link.href = url;
                link.download = zipFileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);

                toast({ title: 'Download Started', description: `Your files are being downloaded in ${zipFileName}`});
            }
        });
    }

    const handleExcelDownload = () => {
        if (selectedFiles.length === 0) return;
    
        const firstSelectedFile = selectedFiles[0];
        const { transactionType } = parseFileName(firstSelectedFile.name);
    
        startExcelDownloadTransition(async () => {
            let result;
            const fileIds = selectedFiles.map(f => f.id);
            const fileNames = selectedFiles.map(f => f.name); // Pass names for sorting
    
            if (transactionType.startsWith('SAWT')) {
                const zip = new JSZip();
                const failedFiles: string[] = [];

                const excelPromises = selectedFiles.map(async (file) => {
                    const contentResult = await getDatFileContent(file.id);
                    if (contentResult.success && contentResult.content) {
                        const excelResult = await generateSawtExcel(contentResult.content, file.name);
                        if (excelResult.success && excelResult.base64 && excelResult.fileName) {
                            return { status: 'fulfilled', value: excelResult };
                        }
                    }
                    return { status: 'rejected', reason: file.name };
                });

                const results = await Promise.all(excelPromises);

                results.forEach(res => {
                    if (res.status === 'fulfilled' && res.value) {
                         zip.file(res.value.fileName!, res.value.base64!, { base64: true });
                    } else {
                        failedFiles.push(res.reason);
                    }
                });
                
                if (failedFiles.length > 0) {
                     toast({
                        title: 'Some Excel Files Failed',
                        description: `Could not generate Excel for: ${failedFiles.join(', ')}.`,
                        variant: 'destructive',
                    });
                }
                
                if (Object.keys(zip.files).length > 0) {
                    const { tin, year } = parseFileName(selectedFiles[0].name);
                    const zipFileName = `${tin}-SAWT-${year}.zip`;

                    const zipContent = await zip.generateAsync({ type: 'blob' });
                    const url = URL.createObjectURL(zipContent);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = zipFileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);

                    toast({ title: 'Download Started', description: `Your Excel files are being downloaded in ${zipFileName}`});
                }
                return;
            }

            if (transactionType === 'Sales') {
                result = await generateSalesExcel(fileIds, fileNames);
            } else if (transactionType === 'Purchases') {
                result = await generatePurchasesExcel(fileIds, fileNames);
            } else if (transactionType.includes('1601-EQ')) {
                result = await generate1601EQExcel(fileIds, fileNames);
            } else if (transactionType.includes('1601-FQ')) {
                result = await generate1601FQExcel(fileIds, fileNames);
            } else {
                toast({
                    title: "Not Implemented",
                    description: `Excel generation for ${transactionType} is not yet available.`,
                    variant: "destructive"
                });
                return;
            }
    
            if (result.success && result.base64) {
                const byteCharacters = atob(result.base64);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = result.fileName || 'download.xlsx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
    
                toast({
                    title: 'Excel Generated',
                    description: `Your file ${result.fileName} has been downloaded.`,
                });
            } else {
                toast({
                    title: "Excel Generation Failed",
                    description: result.error || "An unknown error occurred.",
                    variant: "destructive"
                });
            }
        });
    };

    const handleDeleteClick = (file: DatFile) => {
        setFileToDelete(file);
        setIsDeleteDialogOpen(true);
    };
    
    const handleConfirmDelete = () => {
        if (!fileToDelete) return;
        
        setDeletingFileId(fileToDelete.id);
        startDeleteTransition(async () => {
            const result = await deleteDatFile(fileToDelete.id);
            if (result.success) {
                removeFile(fileToDelete!.id); // This will update the local state and broadcast the change
                toast({ title: 'File Deleted', description: `Successfully deleted ${fileToDelete!.name}`});
            } else {
                if (result.error?.includes('File not found')) {
                    toast({ title: 'File Not Found', description: 'This file may have been deleted already.', variant: 'destructive'});
                    removeFile(fileToDelete!.id); // Remove from local cache anyway
                } else {
                    toast({ title: 'Error', description: result.error || 'Failed to delete file.', variant: 'destructive' });
                }
            }
            setIsDeleteDialogOpen(false);
            setFileToDelete(null);
            setDeletingFileId(null);
        });
    };
    
    const handleSelectRow = (file: DatFile, checked: boolean) => {
        setSelectedFiles(prevSelected => {
            if (checked) {
                return [...prevSelected, file];
            } else {
                return prevSelected.filter(selectedFile => selectedFile.id !== file.id);
            }
        });
    };
    
    const getQuarter = (month: number) => {
        if (month >= 1 && month <= 3) return 1;
        if (month >= 4 && month <= 6) return 2;
        if (month >= 7 && month <= 9) return 3;
        if (month >= 10 && month <= 12) return 4;
        return 0;
    }

    const filteredFiles = files
        .filter(file => {
            const { tin, transactionType, year } = parseFileName(file.name);
            const query = searchQuery.toLowerCase();
            
            const searchMatch = query ? file.name.toLowerCase().includes(query) : true;
            const tinMatch = tinFilter === 'all' || tin === tinFilter;
            const typeMatch = typeFilter === 'all' || transactionType === typeFilter;
            const yearMatch = yearFilter === 'all' || year === yearFilter;
            
            return searchMatch && tinMatch && typeMatch && yearMatch;
        })
        .filter(file => {
            if (selectedFiles.length === 0) {
                return true;
            }

            const firstSelectedFile = selectedFiles[0];
            const selectedFileInfo = parseFileName(firstSelectedFile.name);
            const currentFileInfo = parseFileName(file.name);
            
            const tinMatch = currentFileInfo.tin === selectedFileInfo.tin;
            const typeMatch = currentFileInfo.transactionType === selectedFileInfo.transactionType;
            const yearMatch = currentFileInfo.year === selectedFileInfo.year;

            if (!tinMatch || !typeMatch || !yearMatch) {
                return false;
            }

            if (selectedFileInfo.transactionType.includes('1601-EQ') || selectedFileInfo.transactionType.includes('1601-FQ')) {
                const selectedQuarter = getQuarter(parseInt(selectedFileInfo.month!, 10));
                const currentQuarter = getQuarter(parseInt(currentFileInfo.month!, 10));
                return selectedQuarter === currentQuarter;
            }
            
            return true;
        })
        .sort((a, b) => new Date(b.modifiedTime).getTime() - new Date(a.modifiedTime).getTime());

    
    const allFilteredSelected = filteredFiles.length > 0 && selectedFiles.length === filteredFiles.length;

    const handleToggleSelectAll = () => {
        if (allFilteredSelected) {
            setSelectedFiles([]);
        } else {
            setSelectedFiles(filteredFiles);
        }
    };


    const totalPages = Math.ceil(filteredFiles.length / ITEMS_PER_PAGE);
    const paginatedFiles = filteredFiles.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    
    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const showLoading = isPending && !initialFetchComplete;
    const noResults = !showLoading && initialFetchComplete && files.length > 0 && paginatedFiles.length === 0;
    const noFilesAtAll = !showLoading && initialFetchComplete && files.length === 0;

    return (
        <>
            <div className="p-4 md:p-6 space-y-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold">DAT Files</h1>
                    <p className="text-muted-foreground">Manage your generated DAT files.</p>
                </div>
                <Card>
                    <CardHeader>
                        {selectedFiles.length === 0 ? (
                            <div className="flex flex-col md:flex-row items-center gap-4 pt-2">
                                <div className="relative flex-1 w-full">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search by filename..."
                                        className="pl-8"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <div className="flex w-full md:w-auto items-center gap-2">
                                    <Select value={tinFilter} onValueChange={setTinFilter}>
                                        <SelectTrigger className="w-full md:w-[180px]"><SelectValue placeholder="Filter by TIN" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All TINs</SelectItem>
                                            {availableTins.map(tin => <SelectItem key={tin} value={tin}>{tin}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                     <Select value={typeFilter} onValueChange={setTypeFilter}>
                                        <SelectTrigger className="w-full md:w-[180px]"><SelectValue placeholder="Filter by Type" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Types</SelectItem>
                                            {availableTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                     <Select value={yearFilter} onValueChange={setYearFilter}>
                                        <SelectTrigger className="w-full md:w-[120px]"><SelectValue placeholder="Filter by Year" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Years</SelectItem>
                                            {availableYears.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between gap-4 pt-2">
                                <div className="text-sm font-semibold">
                                    {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected
                                </div>
                                <div className="flex items-center gap-2">
                                     <Button variant="outline" size="sm" className="h-8 px-2 md:h-9 md:px-3" onClick={handleToggleSelectAll} disabled={isMultiDownloading || isExcelDownloading}>
                                        {allFilteredSelected ? <Square className="h-4 w-4 md:mr-2" /> : <CheckSquare className="h-4 w-4 md:mr-2" />}
                                        <span className="hidden md:inline">{allFilteredSelected ? 'Unselect All' : 'Select All'}</span>
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-8 px-2 md:h-9 md:px-3" onClick={handleExcelDownload} disabled={isExcelDownloading}>
                                        {isExcelDownloading ? <Loader2 className="h-4 w-4 animate-spin md:mr-2" /> : <FileSpreadsheet className="h-4 w-4 md:mr-2" />}
                                        <span className="hidden md:inline">Download as Excel</span>
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-8 px-2 md:h-9 md:px-3" onClick={handleMultiDownload} disabled={isMultiDownloading}>
                                        {isMultiDownloading ? <Loader2 className="h-4 w-4 animate-spin md:mr-2" /> : <FileDown className="h-4 w-4 md:mr-2" />}
                                        <span className="hidden md:inline">Download Selected</span>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardHeader>
                    <CardContent>
                        {showLoading ? (
                            <div className="h-48 text-center flex items-center justify-center">
                                <div className="flex items-center justify-center gap-2">
                                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                                    <p className="text-muted-foreground">Loading files...</p>
                                </div>
                            </div>
                        ) : noResults || noFilesAtAll ? (
                            <div className="h-48 text-center flex flex-col items-center justify-center gap-4">
                            <SearchX className="h-12 w-12 text-muted-foreground" />
                                <h3 className="text-xl font-semibold">No DAT Files Found</h3>
                                <p className="text-muted-foreground">
                                    {noResults ? "No files matched your search." : "You haven't generated any DAT files yet."}
                                </p>
                            </div>
                        ) : (
                        <>
                            {/* Desktop Table View */}
                            <div className="border rounded-md hidden md:block">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[5%]">
                                            </TableHead>
                                            <TableHead className="w-[30%]">File Name</TableHead>
                                            <TableHead className="w-[20%]">Transaction Type</TableHead>
                                            <TableHead className="w-[20%]">Reporting Period</TableHead>
                                            <TableHead className="w-[15%]">Last Modified</TableHead>
                                            <TableHead className="w-[10%] text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {paginatedFiles.map((file) => {
                                            const { transactionType, reportingPeriod } = parseFileName(file.name);
                                            const isFileBeingViewed = isViewing && viewingFileId === file.id;
                                            const isFileBeingDownloaded = isDownloading && downloadingFileId === file.id;
                                            const isFileBeingDeleted = isDeleting && deletingFileId === file.id;
                                            const isDisabled = isViewing || isDownloading || isDeleting || isMultiDownloading;
                                            const isSelected = selectedFiles.some(selected => selected.id === file.id);
                                            return (
                                                <TableRow key={file.id} data-state={isSelected ? "selected" : "unselected"}>
                                                    <TableCell>
                                                            <Checkbox
                                                            checked={isSelected}
                                                            onCheckedChange={(checked) => handleSelectRow(file, Boolean(checked))}
                                                            aria-label="Select row"
                                                            disabled={isDisabled}
                                                        />
                                                    </TableCell>
                                                    <TableCell className="font-mono">{file.name}</TableCell>
                                                    <TableCell>
                                                        {transactionType}
                                                    </TableCell>
                                                    <TableCell>{reportingPeriod}</TableCell>
                                                    <TableCell>{format(new Date(file.modifiedTime), 'PP')}</TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center justify-end gap-2">
                                                            <Button variant="ghost" size="icon" onClick={() => handleViewFile(file)} disabled={isDisabled}>
                                                                {isFileBeingViewed ? <Loader2 className="h-4 w-4 animate-spin" /> : <Eye className="h-4 w-4" />}
                                                                <span className="sr-only">View</span>
                                                            </Button>
                                                            <Button variant="ghost" size="icon" onClick={() => handleDownloadFile(file)} disabled={isDisabled}>
                                                                {isFileBeingDownloaded ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
                                                                <span className="sr-only">Download</span>
                                                            </Button>
                                                            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteClick(file)} disabled={isDisabled}>
                                                                {isFileBeingDeleted ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash className="h-4 w-4" />}
                                                                <span className="sr-only">Delete</span>
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </div>
                            
                            {/* Mobile Card View */}
                             <div className="block md:hidden space-y-4">
                                {paginatedFiles.map((file) => {
                                    const { transactionType, reportingPeriod } = parseFileName(file.name);
                                    const isFileBeingViewed = isViewing && viewingFileId === file.id;
                                    const isFileBeingDownloaded = isDownloading && downloadingFileId === file.id;
                                    const isFileBeingDeleted = isDeleting && deletingFileId === file.id;
                                    const isDisabled = isViewing || isDownloading || isDeleting || isMultiDownloading;
                                    const isSelected = selectedFiles.some(selected => selected.id === file.id);

                                    return (
                                    <Card key={file.id} className="p-4" data-state={isSelected ? "selected" : "unselected"}>
                                        <div className="flex items-center gap-4">
                                            <Checkbox
                                                checked={isSelected}
                                                onCheckedChange={(checked) => handleSelectRow(file, Boolean(checked))}
                                                aria-label="Select row"
                                                className="mr-0"
                                                disabled={isDisabled}
                                            />
                                            <div className="flex-1 overflow-hidden min-w-0">
                                                <p className="font-semibold font-mono truncate block w-full" title={file.name}>{file.name}</p>
                                                <p className="text-sm text-muted-foreground">{reportingPeriod}</p>
                                                <p className="text-sm mt-1">{transactionType}</p>
                                            </div>
                                            <div className="flex flex-col items-center flex-shrink-0 ml-2">
                                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleViewFile(file)} disabled={isDisabled}>
                                                    {isFileBeingViewed ? <Loader2 className="h-4 w-4 animate-spin" /> : <Eye className="h-4 w-4" />}
                                                    <span className="sr-only">View</span>
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDownloadFile(file)} disabled={isDisabled}>
                                                     {isFileBeingDownloaded ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
                                                    <span className="sr-only">Download</span>
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => handleDeleteClick(file)} disabled={isDisabled}>
                                                    {isFileBeingDeleted ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash className="h-4 w-4" />}
                                                    <span className="sr-only">Delete</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                    )
                                })}
                            </div>
                            
                            {filteredFiles.length > ITEMS_PER_PAGE && (
                                <div className="flex items-center justify-end space-x-2 py-4 px-0 md:px-4">
                                    <span className="text-sm text-muted-foreground">
                                        Page {totalPages > 0 ? currentPage : 0} of {totalPages}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handlePreviousPage}
                                        disabled={currentPage <= 1}
                                    >
                                        Previous
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleNextPage}
                                        disabled={currentPage >= totalPages}
                                    >
                                        Next
                                    </Button>
                                </div>
                            )}
                        </>
                        )}
                    </CardContent>
                </Card>
            </div>
            {previewData && (
                <DatPreviewDialog
                    isOpen={isPreviewOpen}
                    onOpenChange={setIsPreviewOpen}
                    fileName={previewData.fileName}
                    content={previewData.content}
                    isViewing={previewData.isViewing}
                    reportType={previewData.reportType}
                    totals={previewData.totals}
                />
            )}
            <DeleteConfirmationDialog
                isOpen={isDeleteDialogOpen}
                onOpenChange={setIsDeleteDialogOpen}
                onConfirm={handleConfirmDelete}
                isDeleting={isDeleting}
                itemName={fileToDelete?.name}
                itemType="DAT file"
            />
        </>
    );
}

export default function DatFilesPage() {
    return <DatFilesContent />;
}

    

    





    




    




    

    
