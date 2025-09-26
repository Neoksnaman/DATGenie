
'use client';

import Link from 'next/link';
import type { DatFile, TaxProfile } from '@/lib/schemas';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProfileSelector } from '@/components/profile-selector';
import { GenerationCard, reportTypes } from '@/components/generation-card';
import { FileUp, FileText, Download, Loader2, Users, BarChart, Clock, File as FileIcon, PlusCircle, ChevronDown, Eye } from 'lucide-react';
import { TaxProfilesSkeleton } from './tax-profiles-skeleton';
import { Button } from './ui/button';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { convertExcelToDat, overwriteDatFile } from '@/lib/actions/dat/main';
import { validateExcelForPurchases, createPurchasesDatFile } from '@/lib/actions/dat/purchases';
import { generatePdf } from '@/lib/actions/pdf';
import { useToast } from '@/hooks/use-toast';
import { DatPreviewDialog } from './dat-preview-dialog';
import type { DatPreviewState } from './dat-preview-dialog';
import { useState, useMemo, useTransition } from 'react';
import { ErrorSummaryDialog } from './error-summary-dialog';
import { NonCreditableTaxDialog } from './non-creditable-tax-dialog';
import { OverwriteDialog } from './overwrite-dialog';
import { useDatFiles } from '@/hooks/use-dat-files';
import { useUser } from '@/hooks/use-user';
import { MonthlyChart } from './monthly-chart';
import { format } from 'date-fns';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getDatFileContent } from '@/lib/actions/drive';

interface HomeContentProps {
  profiles: TaxProfile[];
  isPending: boolean;
  initialFetchComplete: boolean;
  onNewProfile: () => void;
  selectedProfile: string;
  onProfileSelect: (tin: string) => void;
}

const datFileReminders = [
  "Ensure all required data fields in the Excel template are populated accurately.",
  "Specify the reporting month and reporting year. Select the reporting type you need to generate. Each reporting type has a corresponding Excel template. Verify that you are using the correct template for the chosen reporting type.",
  "Before submission, validate the generated DAT File using the BIR Validation Module. This step is crucial to ensure the file complies with BIR standards. Once validated, email the DAT File to esubmission@bir.gov.ph."
];

interface PurchaseTotalsState {
    totalInputTax: number;
    processedData: any[]; // Store the successfully processed data
}

interface OverwriteState {
    isOpen: boolean;
    fileName: string;
    transactionType: string;
    reportingPeriod: string;
    formData: FormData | null;
    processedData?: any[];
    nonCreditableTax?: number;
}

export function HomeContent({ 
  profiles, 
  isPending, 
  initialFetchComplete, 
  onNewProfile,
  selectedProfile,
  onProfileSelect
}: HomeContentProps) {
  const { toast } = useToast();
  const { user } = useUser();
  const { files: allFiles, addOrUpdateFile, removeFile } = useDatFiles();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [datPreview, setDatPreview] = useState<DatPreviewState>({ 
    fileName: '', 
    content: '',
    reportType: 'none',
    totals: {}
  });
  const [isErrorsOpen, setIsErrorsOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isNonCreditableDialogOpen, setIsNonCreditableDialogOpen] = useState(false);
  const [purchaseTotals, setPurchaseTotals] = useState<PurchaseTotalsState | null>(null);
  const [currentGenerationArgs, setCurrentGenerationArgs] = useState<any>(null);
  const [isCreatingDat, setIsCreatingDat] = useState(false);
  const [isOverwriting, setIsOverwriting] = useState(false);
  const [overwriteState, setOverwriteState] = useState<OverwriteState>({
    isOpen: false,
    fileName: '',
    transactionType: '',
    reportingPeriod: '',
    formData: null,
    processedData: undefined,
    nonCreditableTax: undefined,
  });
  const [isViewing, startViewingTransition] = useTransition();
  const [viewingFileId, setViewingFileId] = useState<string | null>(null);

    const parseFileName = (fileName: string) => {
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
        
        if (fileName.includes('1604F')) {
            const dateStartIndex = tinAndBranchLength;
            const month = fileName.substring(dateStartIndex, dateStartIndex + 2);
            const day = fileName.substring(dateStartIndex + 2, dateStartIndex + 4);
            const year = fileName.substring(dateStartIndex + 4, dateStartIndex + 8);
            const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).toLocaleString('default', { month: 'long', year: 'numeric' });
            return { transactionType: '1604-F', reportingPeriod, year, month, tin };
        }

        if (fileName.includes('1604E')) {
            const dateStartIndex = tinAndBranchLength;
            const month = fileName.substring(dateStartIndex, dateStartIndex + 2);
            const day = fileName.substring(dateStartIndex + 2, dateStartIndex + 4);
            const year = fileName.substring(dateStartIndex + 4, dateStartIndex + 8);
            const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).toLocaleString('default', { month: 'long', year: 'numeric' });
            return { transactionType: '1604-E', reportingPeriod, year, month, tin };
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
    };

  const getSimpleTransactionType = (type: string, schedule?: string) => {
      if (type.includes('Sales')) return 'Sales';
      if (type.includes('Purchases')) return 'Purchases';
      if (type.includes('Importations')) return 'Importations';
      if (type.includes('1601-EQ')) return '1601-EQ';
      if (type.includes('1601-FQ')) return '1601-FQ';
      if (type.includes('1604-E')) return '1604-E';
      if (type.includes('1604-F')) return '1604-F';
      if (type.includes('SAWT')) return `SAWT-${schedule}`;
      return type;
  }
  
    const analytics = useMemo(() => {
    const filesToAnalyze = selectedProfile 
      ? allFiles.filter(file => file.name.startsWith(selectedProfile)) 
      : allFiles;
      
    const sortedFiles = [...filesToAnalyze].sort((a, b) => new Date(b.modifiedTime).getTime() - new Date(a.modifiedTime).getTime());
    
    const sawtSchedules = ["1700", "1702", "2550Q", "1701", "1702Q", "2551M", "1701Q", "2550M", "2553"];
    
    const typeCounts = filesToAnalyze.reduce((acc, file) => {
        let simpleType = 'Other';
        const name = file.name;

        if (sawtSchedules.some(schedule => name.includes(schedule))) {
            simpleType = 'SAWT';
        } else if (name.includes('1604F')) {
            simpleType = '1604-F';
        } else if (name.includes('1604E')) {
            simpleType = '1604-E';
        } else if (name.includes('1601EQ')) {
            simpleType = '1601-EQ';
        } else if (name.includes('1601FQ')) {
            simpleType = '1601-FQ';
        } else if (name.charAt(9) === 'S') {
            simpleType = 'Sales';
        } else if (name.charAt(9) === 'P') {
            simpleType = 'Purchases';
        } else if (name.charAt(9) === 'I') {
            simpleType = 'Importations';
        }
        
        acc[simpleType] = (acc[simpleType] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);


    const monthlyData = filesToAnalyze.reduce((acc, file) => {
        const month = format(new Date(file.modifiedTime), 'MMM');
        const existingMonth = acc.find(d => d.month === month);
        if (existingMonth) {
            existingMonth.total++;
        } else {
            acc.push({ month, total: 1 });
        }
        return acc;
    }, [] as { month: string; total: number }[]);
    
    const lastSixMonths = Array.from({ length: 6 }).map((_, i) => {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        return format(d, 'MMM');
    }).reverse();
    
    const finalMonthlyData = lastSixMonths.map(monthName => {
        const data = monthlyData.find(d => d.month === monthName);
        return data || { month: monthName, total: 0 };
    });

    return {
        totalFiles: filesToAnalyze.length,
        lastActivity: sortedFiles.length > 0 ? format(new Date(sortedFiles[0].modifiedTime), 'PP') : 'N/A',
        typeCounts,
        recentFiles: sortedFiles.slice(0, 5),
        monthlyData: finalMonthlyData
    };
  }, [selectedProfile, allFiles]);


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
    
                    setDatPreview({
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
                        removeFile(file.id);
                    } else {
                        toast({ title: 'Error', description: result.error || 'Failed to fetch file content.', variant: 'destructive' });
                    }
                }
            } finally {
                setViewingFileId(null);
            }
        })
    }

  const handleDatGeneration = async (file: File, args: any): Promise<boolean> => {
    if (!selectedProfile) {
        toast({ title: 'No Profile Selected', description: 'Please select a tax profile before generating a DAT file.', variant: 'destructive'});
        return false;
    }
    const profile = profiles.find(p => p.tpTIN === selectedProfile);
    if (!profile) {
        toast({ title: 'Profile not found', description: 'Please select a valid profile.', variant: 'destructive'});
        return false;
    }
    
    if (!user?.folderId) {
        toast({ title: 'User folder not found', description: 'Please log in again to sync your user folder.', variant: 'destructive'});
        return false;
    }
    
    const { month, year, reportType, sawtSchedule } = args;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('reportType', reportType);
    formData.append('month', month);
    formData.append('year', year);
    formData.append('profile', JSON.stringify(profile));
    formData.append('folderId', user.folderId);
     if (sawtSchedule) {
        formData.append('schedule', sawtSchedule);
    }
    
    if (reportType === "Summary Alphalist of Withholding Tax (SAWT)") {
        if (!sawtSchedule) {
            toast({ title: 'Schedule Missing', description: 'Please select a schedule for SAWT.', variant: 'destructive' });
            return false;
        }
        const result = await convertExcelToDat(formData);
        if (result.success && result.datContent && result.fileName) {
            addOrUpdateFile();
            setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: 'sawt',
                totals: {
                    taxableIncome: result.totalTaxableIncomePayment ?? 0,
                    withholdingTax: result.totalWithholdingTax ?? 0,
                }
            });
            setIsPreviewOpen(true);
            return true;
        } else if (!result.success && result.errors && result.errors.length > 0) {
            setValidationErrors(result.errors);
            setIsErrorsOpen(true);
        } else if (!result.success && result.fileExists) {
             const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
             setOverwriteState({
                isOpen: true,
                fileName: result.fileName || 'Unknown',
                transactionType: getSimpleTransactionType(reportType, sawtSchedule),
                reportingPeriod: reportingPeriod,
                formData: formData,
            });
        } else {
             toast({
                title: 'SAWT Processing Failed',
                description: result.error || 'An unexpected error occurred during SAWT processing.',
                variant: 'destructive',
            });
        }
        return false;
    }


    if (reportType === 'Summary of Purchases (SLP)') {
        const validationResult = await validateExcelForPurchases(formData);
        if (validationResult.success && validationResult.totalInputTax !== null && validationResult.processedData) {
            setPurchaseTotals({
                totalInputTax: validationResult.totalInputTax,
                processedData: validationResult.processedData,
            });
            setCurrentGenerationArgs({ month, year, profile, folderId: user.folderId, reportType: reportType });
            setIsNonCreditableDialogOpen(true);
            // We return true here to signal the process has moved to the next step
            return true;
        } else if (!validationResult.success && validationResult.errors && validationResult.errors.length > 0) {
            setValidationErrors(validationResult.errors);
            setIsErrorsOpen(true);
        } else {
             toast({
                title: 'Validation Failed',
                description: validationResult.error || 'An unexpected error occurred during validation.',
                variant: 'destructive',
            });
        }
        return false;
    }

    const result = await convertExcelToDat(formData);

    if (result.success && result.datContent !== null) {
        if(result.fileName) {
            addOrUpdateFile();
        }

        if (reportType === "Summary of Importations (SLI)") {
            setDatPreview({
                fileName: result.fileName!,
                content: result.datContent,
                reportType: 'importations',
                totals: {
                    exempt: result.totalExempt ?? 0,
                    taxable: result.totalTaxableSales ?? 0, // Mapped to taxable in preview
                    inputTax: result.totalInputTax ?? 0,
                }
            });
        } else if (reportType === 'Summary of Sales (SLS)') {
            setDatPreview({ 
                fileName: result.fileName!, 
                content: result.datContent,
                reportType: 'sales',
                totals: {
                    exempt: result.totalExempt ?? 0,
                    zeroRated: result.totalZeroRated ?? 0,
                    vatable: result.totalTaxableSales ?? 0,
                    outputVat: result.totalOutputTax ?? 0,
                }
            });
        } else if (reportType === '1601-EQ (Schedule 1 and 2)') {
            setDatPreview({ 
                fileName: result.fileName!, 
                content: result.datContent,
                reportType: '1601eq',
                totals: {
                    taxableIncome: result.totalTaxableIncomePayment ?? 0,
                    exemptIncome: result.totalExemptIncomePayment ?? 0,
                    withholdingTax: result.totalWithholdingTax ?? 0,
                }
            });
        } else if (reportType === '1601-FQ (Schedule 1, 2, and 3)') {
             setDatPreview({ 
                fileName: result.fileName!, 
                content: result.datContent,
                reportType: '1601fq',
                totals: {
                    withholdingTax: result.totalWithholdingTax ?? 0,
                    services: result.totalServices ?? 0,
                    exemptIncome: result.totalExemptIncomePayment ?? 0,
                }
            });
        } else if (reportType === '1604-E (Schedule 3 and 4)') {
            setDatPreview({
                fileName: result.fileName!,
                content: result.datContent,
                reportType: '1604e',
                totals: {
                    withholdingTax: result.totalWithholdingTax ?? 0,
                    exemptIncome: result.totalExemptIncomePayment ?? 0,
                }
            });
        } else if (reportType === '1604-F (Schedule 4, 5, and 7)') {
            setDatPreview({
                fileName: result.fileName!,
                content: result.datContent,
                reportType: '1604f',
                totals: {
                    withholdingTax: result.totalWithholdingTax ?? 0,
                    services: result.totalServices ?? 0,
                    exemptIncome: result.totalExemptIncomePayment ?? 0,
                }
            });
        } else {
             setDatPreview({ 
                fileName: result.fileName || 'preview.txt', 
                content: result.datContent,
                reportType: 'none',
                totals: {}
            });
        }
        setIsPreviewOpen(true);
        return true;
    } else if (!result.success && result.errors && result.errors.length > 0) {
        setValidationErrors(result.errors);
        setIsErrorsOpen(true);
    } else if (!result.success && result.fileExists) {
        let reportingPeriod: string;
        if (reportType.includes('1604')) {
            const fiscalEndMonth = parseInt(profile.monthSelect, 10);
            reportingPeriod = new Date(parseInt(year), fiscalEndMonth - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
        } else {
            reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
        }
        setOverwriteState({
            isOpen: true,
            fileName: result.fileName || 'Unknown',
            transactionType: getSimpleTransactionType(reportType),
            reportingPeriod: reportingPeriod,
            formData: formData,
        });
    } else {
        toast({
            title: 'Conversion Failed',
            description: result.error || 'An unknown error occurred.',
            variant: 'destructive',
        });
    }
    return false;
  };

  const handleOverwriteConfirm = async () => {
    if (!overwriteState.formData) return;
    setIsOverwriting(true);
    
    const result = await overwriteDatFile(overwriteState.formData);
    
    setIsOverwriting(false);
    setOverwriteState({ isOpen: false, fileName: '', transactionType: '', reportingPeriod: '', formData: null });

    if (result.success && result.datContent !== null && result.fileName) {
        addOrUpdateFile();
        if (overwriteState.transactionType === 'Sales') {
            setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: 'sales',
                totals: {
                    exempt: result.totalExempt ?? 0,
                    zeroRated: result.totalZeroRated ?? 0,
                    vatable: result.totalTaxableSales ?? 0,
                    outputVat: result.totalOutputTax ?? 0,
                }
            });
        } else if (overwriteState.transactionType === 'Purchases') {
            setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: 'purchases',
                totals: {
                    exempt: result.totalExempt ?? 0,
                    zeroRated: result.totalZeroRated ?? 0,
                    services: result.totalServices ?? 0,
                    capitalGoods: result.totalCapitalGoods ?? 0,
                    otherGoods: result.totalOtherGoods ?? 0,
                    inputTax: result.totalInputTax ?? 0,
                }
            });
        } else if (overwriteState.transactionType === 'Importations') {
             setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: 'importations',
                totals: {
                    exempt: result.totalExempt ?? 0,
                    taxable: result.totalTaxableSales ?? 0,
                    inputTax: result.totalInputTax ?? 0,
                }
            });
        } else if (overwriteState.transactionType === '1601-EQ') {
            setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: '1601eq',
                totals: {
                    taxableIncome: result.totalTaxableIncomePayment ?? 0,
                    exemptIncome: result.totalExemptIncomePayment ?? 0,
                    withholdingTax: result.totalWithholdingTax ?? 0,
                }
            });
        } else if (overwriteState.transactionType === '1601-FQ') {
             setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: '1601fq',
                totals: {
                    withholdingTax: result.totalWithholdingTax ?? 0,
                    services: result.totalServices ?? 0, // Fringe Benefit Tax
                    exemptIncome: result.totalExemptIncomePayment ?? 0,
                }
            });
        } else if (overwriteState.transactionType.startsWith('SAWT')) {
             setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: 'sawt',
                totals: {
                    taxableIncome: result.totalTaxableIncomePayment ?? 0,
                    withholdingTax: result.totalWithholdingTax ?? 0,
                }
            });
        } else if (overwriteState.transactionType === '1604-E') {
             setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: '1604e',
                totals: {
                    withholdingTax: result.totalWithholdingTax ?? 0,
                    exemptIncome: result.totalExemptIncomePayment ?? 0,
                }
            });
        } else if (overwriteState.transactionType === '1604-F') {
             setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: '1604f',
                totals: {
                    withholdingTax: result.totalWithholdingTax ?? 0,
                    services: result.totalServices ?? 0,
                    exemptIncome: result.totalExemptIncomePayment ?? 0,
                }
            });
        }
        setIsPreviewOpen(true);
    } else {
        toast({
            title: 'Overwrite Failed',
            description: result.error || 'An unknown error occurred.',
            variant: 'destructive',
        });
    }
  };


  const handleNonCreditableContinue = async (nonCreditableTax: number) => {
    if (!purchaseTotals || !currentGenerationArgs) return;
    
    setIsCreatingDat(true);

    try {
        const { month, year, profile, folderId, reportType } = currentGenerationArgs;
        
        const formData = new FormData();
        formData.append('processedData', JSON.stringify(purchaseTotals.processedData));
        formData.append('profile', JSON.stringify(profile));
        formData.append('month', month);
        formData.append('year', year);
        formData.append('nonCreditableInputTax', nonCreditableTax.toString());
        formData.append('folderId', folderId);
        formData.append('reportType', reportType);

        const result = await createPurchasesDatFile(formData);

        if (result.success && result.datContent && result.fileName) {
             addOrUpdateFile();
             setDatPreview({
                fileName: result.fileName,
                content: result.datContent,
                reportType: 'purchases',
                totals: {
                    exempt: result.totalExempt ?? 0,
                    zeroRated: result.totalZeroRated ?? 0,
                    services: result.totalServices ?? 0,
                    capitalGoods: result.totalCapitalGoods ?? 0,
                    otherGoods: result.totalOtherGoods ?? 0,
                    inputTax: result.totalInputTax ?? 0,
                }
            });
            setIsPreviewOpen(true);
        } else if (!result.success && result.fileExists && result.fileName) {
             const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
             const overwriteFormData = new FormData();
             overwriteFormData.append('processedData', JSON.stringify(purchaseTotals.processedData));
             overwriteFormData.append('profile', JSON.stringify(profile));
             overwriteFormData.append('month', month);
             overwriteFormData.append('year', year);
             overwriteFormData.append('nonCreditableInputTax', nonCreditableTax.toString());
             overwriteFormData.append('folderId', folderId);
             overwriteFormData.append('reportType', reportType);
             
             setOverwriteState({
                isOpen: true,
                fileName: result.fileName,
                transactionType: getSimpleTransactionType(reportType),
                reportingPeriod: reportingPeriod,
                formData: overwriteFormData,
            });
        } else {
            toast({
                title: 'Conversion Failed',
                description: result.error || 'An unknown error occurred.',
                variant: 'destructive',
            });
        }
    } finally {
        setIsCreatingDat(false);
        setIsNonCreditableDialogOpen(false);
        setPurchaseTotals(null);
        setCurrentGenerationArgs(null);
    }
  }

  const handleCertGeneration = async (file: File, args: any): Promise<boolean> => {
    const { certificateType, signatoryName, signatoryTIN, signatoryPosition, signatureFile, pdfSize, collate, signatureX, signatureY } = args;

    if (!selectedProfile) {
        toast({ title: 'No Profile Selected', description: 'Please select a tax profile before generating a certificate.', variant: 'destructive'});
        return false;
    }
    const profile = profiles.find(p => p.tpTIN === selectedProfile);
    if (!profile) {
        toast({ title: 'Profile not found', description: 'Please select a valid profile.', variant: 'destructive'});
        return false;
    }
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('certificateType', certificateType);
    formData.append('signatoryName', signatoryName);
    formData.append('signatoryTIN', signatoryTIN);
    formData.append('signatoryPosition', signatoryPosition);
    if (signatureFile) {
        formData.append('signatureFile', signatureFile);
    }
    formData.append('profile', JSON.stringify(profile));
    formData.append('pdfSize', pdfSize);
    formData.append('collate', collate);
    formData.append('signatureX', String(signatureX));
    formData.append('signatureY', String(signatureY));


    const result = await generatePdf(formData);
    
    if (result.success && result.base64) {
        const byteCharacters = atob(result.base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = result.fileName || 'certificate.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        toast({
            title: "Success",
            description: "Your PDF certificate has been generated and downloaded.",
        });
        return true;

    } else if (result.errors && result.errors.length > 0) {
        setValidationErrors(result.errors);
        setIsErrorsOpen(true);
    } else {
        toast({
            title: "PDF Generation Failed",
            description: result.error || "An unknown error occurred.",
            variant: "destructive",
        });
    }
    return false;
  };

  const showLoading = isPending || !initialFetchComplete;
  
  const analyticsTitle = selectedProfile 
    ? `Analytics for ${profiles.find(p => p.tpTIN === selectedProfile)?.tradeName || selectedProfile}` 
    : 'All Profiles Overview';

  return (
    <>
      <div className="flex-1 space-y-4 p-4 md:p-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Welcome to DATGenie!</h1>
          <p className="text-muted-foreground">Select a tax profile to view your dashboard and start generating files.</p>
        </div>

        <Card className="w-full">
            <CardHeader>
              <CardTitle>Select a Profile</CardTitle>
              <CardDescription>Choose the tax profile you want to work with or create a new one.</CardDescription>
            </CardHeader>
            <CardContent>
              {showLoading ? (
                <TaxProfilesSkeleton />
              ) : profiles.length > 0 ? (
                <ProfileSelector 
                    profiles={profiles} 
                    onProfileSelect={onProfileSelect} 
                    onNewProfile={onNewProfile}
                    selectedProfile={selectedProfile}
                />
              ) : (
                <div className="text-center py-6 px-4 border-2 border-dashed rounded-lg">
                    <Users className="mx-auto h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-3 text-lg font-medium">Create Your First Tax Profile</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Get started by adding a tax profile to generate files.
                    </p>
                    <div className="mt-4">
                        <Button onClick={onNewProfile}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Create New Profile
                        </Button>
                    </div>
                </div>
              )}
            </CardContent>
        </Card>
        
        {/* This div handles the mobile order of template -> generation -> analytics */}
        <div className="space-y-6">
            <div className="block lg:hidden">
              <Card>
                  <CardHeader>
                      <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>Get Templates</CardTitle>
                            <CardDescription>Download the required Excel file before proceeding.</CardDescription>
                          </div>
                          <Download className="h-6 w-6 text-muted-foreground" />
                      </div>
                  </CardHeader>
                  <CardContent>
                      <Button asChild size="sm" className="w-full">
                        <Link href="/template">Download Templates</Link>
                      </Button>
                  </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                <div className="lg:col-span-4 space-y-6">
                    <GenerationCard
                        title="Generate DAT File"
                        description="Convert your Excel file into a .DAT file for e-submission."
                        buttonText="Generate .DAT"
                        onGenerate={handleDatGeneration}
                        icon={<FileUp className="w-6 h-6" />}
                        isDatGeneration={true}
                        reminders={datFileReminders}
                    />
                    <GenerationCard
                        title="Generate BIR Certificate"
                        description="Provide signatory details to generate a BIR certificate."
                        buttonText="Generate Certificate"
                        onGenerate={handleCertGeneration}
                        icon={<FileText className="w-6 h-6" />}
                        isDatGeneration={false}
                    />
                </div>

                <div className="lg:col-span-3 space-y-6">
                    <div className="hidden lg:block">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle>Get Templates</CardTitle>
                                        <CardDescription>Download the required Excel file before proceeding.</CardDescription>
                                    </div>
                                    <Download className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Button asChild size="sm" className="w-full">
                                <Link href="/template">Download Templates</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">{selectedProfile ? 'Profile Stats' : 'Total Files'}</CardTitle>
                                <FileIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{analytics.totalFiles}</div>
                                {Object.keys(analytics.typeCounts).length > 0 ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="link" className="px-0 h-auto text-xs text-muted-foreground">
                                                View Breakdown
                                                <ChevronDown className="h-3 w-3 ml-1" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start">
                                            {Object.entries(analytics.typeCounts).map(([type, count]) => (
                                                <DropdownMenuItem key={type} className="flex justify-between">
                                                    <span>{type}</span>
                                                    <span className="font-semibold ml-4">{count}</span>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <p className="text-xs text-muted-foreground">No files yet.</p>
                                )}
                            </CardContent>
                        </Card>
                        <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Last Activity</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{analytics.lastActivity}</div>
                            <p className="text-xs text-muted-foreground">Last file generation date.</p>
                        </CardContent>
                        </Card>
                    </div>
                    <Card>
                        <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>The last 5 files generated.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                        {analytics.recentFiles.length > 0 ? (
                            analytics.recentFiles.map(file => (
                            <div key={file.id} className="flex items-center justify-between p-2 -m-2 rounded-md hover:bg-muted/50 transition-colors">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium leading-none truncate">{file.name}</p>
                                    <p className="text-sm text-muted-foreground">{format(new Date(file.modifiedTime), 'PPp')}</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 flex-shrink-0 ml-4 flex items-center justify-center"
                                    onClick={() => handleViewFile(file)}
                                    disabled={isViewing && viewingFileId === file.id}
                                >
                                    <span className="sr-only">View File</span>
                                    {isViewing && viewingFileId === file.id ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </Button>
                            </div>
                            ))
                        ) : (
                            <p className="text-sm text-muted-foreground text-center pt-8">No files generated for this profile yet.</p>
                        )}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                        <CardTitle>Monthly Generation</CardTitle>
                        <CardDescription>{analyticsTitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="pl-2">
                        <MonthlyChart data={analytics.monthlyData} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </div>

      <DatPreviewDialog
        isOpen={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
        fileName={datPreview.fileName}
        content={datPreview.content}
        reportType={datPreview.reportType}
        totals={datPreview.totals}
        isViewing={datPreview.isViewing}
      />
      <ErrorSummaryDialog
        isOpen={isErrorsOpen}
        onOpenChange={setIsErrorsOpen}
        errors={validationErrors}
      />
      {purchaseTotals && (
        <NonCreditableTaxDialog
          isOpen={isNonCreditableDialogOpen}
          onOpenChange={(open) => {
            if (!isCreatingDat) {
                setIsNonCreditableDialogOpen(open);
            }
          }}
          totalInputTax={purchaseTotals.totalInputTax}
          onContinue={handleNonCreditableContinue}
          isCreating={isCreatingDat}
        />
      )}
      <OverwriteDialog
        isOpen={overwriteState.isOpen}
        onOpenChange={(open) => {
            if (!isOverwriting) {
                setOverwriteState(prev => ({...prev, isOpen: open}));
            }
        }}
        fileName={overwriteState.fileName}
        transactionType={overwriteState.transactionType}
        reportingPeriod={overwriteState.reportingPeriod}
        onConfirm={handleOverwriteConfirm}
        isOverwriting={isOverwriting}
      />
    </>
  );
}
