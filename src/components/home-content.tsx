
'use client';

import Link from 'next/link';
import type { TaxProfile } from '@/lib/schemas';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProfileSelector } from '@/components/profile-selector';
import { GenerationCard } from '@/components/generation-card';
import { FileUp, FileText, Download, Loader2, Users, BarChart, Clock, File as FileIcon, PlusCircle } from 'lucide-react';
import { TaxProfilesSkeleton } from './tax-profiles-skeleton';
import { Button } from './ui/button';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { convertExcelToDat, overwriteDatFile } from '@/lib/actions/dat/main';
import { validateExcelForPurchases, createPurchasesDatFile } from '@/lib/actions/dat/purchases';
import { useToast } from '@/hooks/use-toast';
import { DatPreviewDialog } from './dat-preview-dialog';
import type { DatPreviewState } from './dat-preview-dialog';
import { useState, useMemo } from 'react';
import { ErrorSummaryDialog } from './error-summary-dialog';
import { NonCreditableTaxDialog } from './non-creditable-tax-dialog';
import { OverwriteDialog } from './overwrite-dialog';
import { useDatFiles } from '@/hooks/use-dat-files';
import { useUser } from '@/hooks/use-user';
import { MonthlyChart } from './monthly-chart';
import { format } from 'date-fns';

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
  const { files: allFiles, addOrUpdateFile } = useDatFiles();
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

  const getSimpleTransactionType = (type: string, schedule?: string) => {
      if (type.includes('Sales')) return 'Sales';
      if (type.includes('Purchases')) return 'Purchases';
      if (type.includes('1601-EQ')) return '1601-EQ';
      if (type.includes('1601-FQ')) return '1601-FQ';
      if (type.includes('SAWT')) return `SAWT-${schedule}`;
      return type;
  }
  
  const analytics = useMemo(() => {
    const filesToAnalyze = selectedProfile 
      ? allFiles.filter(file => file.name.startsWith(selectedProfile)) 
      : allFiles;
      
    const sortedFiles = [...filesToAnalyze].sort((a, b) => new Date(b.modifiedTime).getTime() - new Date(a.modifiedTime).getTime());

    const typeCounts = filesToAnalyze.reduce((acc, file) => {
        let simpleType = 'Other';
        if (file.name.includes('S')) simpleType = 'Sales';
        else if (file.name.includes('P')) simpleType = 'Purchases';
        else if (file.name.includes('SAWT')) simpleType = 'SAWT';
        else if (file.name.includes('1601EQ')) simpleType = '1601-EQ';
        else if (file.name.includes('1601FQ')) simpleType = '1601-FQ';
        
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


  const handleDatGeneration = async (file: File, month: string, year: string, type: string, schedule?: string) => {
    if (!selectedProfile) {
        toast({ title: 'No Profile Selected', description: 'Please select a tax profile before generating a DAT file.', variant: 'destructive'});
        return;
    }
    const profile = profiles.find(p => p.tpTIN === selectedProfile);
    if (!profile) {
        toast({ title: 'Profile not found', description: 'Please select a valid profile.', variant: 'destructive'});
        return;
    }
    
    if (!user?.folderId) {
        toast({ title: 'User folder not found', description: 'Please log in again to sync your user folder.', variant: 'destructive'});
        return;
    }
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('reportType', type);
    formData.append('month', month);
    formData.append('year', year);
    formData.append('profile', JSON.stringify(profile));
    formData.append('folderId', user.folderId);
     if (schedule) {
        formData.append('schedule', schedule);
    }
    
    if (type === "Summary Alphalist of Withholding Tax (SAWT)") {
        if (!schedule) {
            toast({ title: 'Schedule Missing', description: 'Please select a schedule for SAWT.', variant: 'destructive' });
            return;
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
        } else if (!result.success && result.errors && result.errors.length > 0) {
            setValidationErrors(result.errors);
            setIsErrorsOpen(true);
        } else if (!result.success && result.fileExists) {
             const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
             setOverwriteState({
                isOpen: true,
                fileName: result.fileName || 'Unknown',
                transactionType: getSimpleTransactionType(type, schedule),
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
        return;
    }


    if (type === 'Summary of Purchases (SLP)') {
        const validationResult = await validateExcelForPurchases(formData);
        if (validationResult.success && validationResult.totalInputTax !== null && validationResult.processedData) {
            setPurchaseTotals({
                totalInputTax: validationResult.totalInputTax,
                processedData: validationResult.processedData,
            });
            setCurrentGenerationArgs({ month, year, profile, folderId: user.folderId, reportType: type });
            setIsNonCreditableDialogOpen(true);
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
        return;
    }

    const result = await convertExcelToDat(formData);

    if (result.success && result.datContent !== null && result.fileName) {
        if (type.includes('1601-FQ')) {
             addOrUpdateFile();
        }
        
        if (type === 'Summary of Sales (SLS)') {
            addOrUpdateFile();
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
        } else if (type === '1601-EQ (Schedule 1 and 2)') {
            addOrUpdateFile();
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
        } else if (type === '1601-FQ (Schedule 1, 2, and 3)') {
             setDatPreview({ 
                fileName: result.fileName, 
                content: result.datContent,
                reportType: '1601fq',
                totals: {
                    withholdingTax: result.totalWithholdingTax ?? 0,
                    services: result.totalServices ?? 0,
                    exemptIncome: result.totalExemptIncomePayment ?? 0,
                }
            });
        } else {
             setDatPreview({ 
                fileName: result.fileName, 
                content: result.datContent,
                reportType: 'none',
                totals: {}
            });
        }
        setIsPreviewOpen(true);
    } else if (!result.success && result.errors && result.errors.length > 0) {
        setValidationErrors(result.errors);
        setIsErrorsOpen(true);
    } else if (!result.success && result.fileExists) {
        const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
        setOverwriteState({
            isOpen: true,
            fileName: result.fileName || 'Unknown',
            transactionType: getSimpleTransactionType(type),
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

  const handleCertGeneration = (file: File, name: string, tin: string, position: string, signatureFile: File | null) => {
    if (!selectedProfile) {
        toast({ title: 'No Profile Selected', description: 'Please select a tax profile before generating a certificate.', variant: 'destructive'});
        return;
    }
    console.log('Generating Certificate for:', selectedProfile, 'with details:', {
      file: file.name,
      signatoryName: name,
      signatoryTIN: tin,
      signatoryPosition: position,
      signatureFile: signatureFile?.name,
    });
    // Placeholder for Certificate generation logic
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
                            <div className="space-x-1 text-xs text-muted-foreground">
                            {Object.entries(analytics.typeCounts).map(([type, count]) => (
                                <span key={type} className="bg-secondary px-1.5 py-0.5 rounded-full">{count} {type}</span>
                            ))}
                            </div>
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
                            <Link href="/dat-files" key={file.id} className="block p-2 -m-2 rounded-md hover:bg-muted/50 transition-colors">
                                <div className="flex items-center">
                                <FileIcon className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium leading-none truncate">{file.name}</p>
                                    <p className="text-sm text-muted-foreground">{format(new Date(file.modifiedTime), 'PPp')}</p>
                                </div>
                                </div>
                            </Link>
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
