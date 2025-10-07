
'use client';

import { useState, useCallback, type ChangeEvent, type DragEvent, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud, File as FileIcon, X, Loader2, AlertTriangle, FileUp, Upload, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Input } from './ui/input';
import { Progress } from './ui/progress';

interface GenerationCardProps {
  title: string;
  description: string;
  buttonText: string;
  onGenerate: (file: File, args: any) => Promise<boolean>;
  icon: React.ReactNode;
  isDatGeneration: boolean;
  reminders?: string[];
}

export const months = [
    { name: "January", value: "01" },
    { name: "February", value: "02" },
    { name: "March", value: "03" },
    { name: "April", value: "04" },
    { name: "May", value: "05" },
    { name: "June", value: "06" },
    { name: "July", value: "07" },
    { name: "August", value: "08" },
    { name: "September", value: "09" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" }
];

export const reportTypes = [
    "Summary of Sales (SLS)",
    "Summary of Purchases (SLP)",
    "Summary of Importations (SLI)",
    "Summary Alphalist of Withholding Tax (SAWT)",
    "1601-EQ (Schedule 1 and 2)",
    "1601-FQ (Schedule 1, 2, and 3)",
    "1604-C (Schedule 1 and 2)",
    "1604-E (Schedule 3 and 4)",
    "1604-F (Schedule 4, 5, and 7)",
];

const disabledReportTypes: string[] = [
];

const sawtSchedules = [
    "1700", "1702", "2550Q",
    "1701", "1702Q", "2551M",
    "1701Q", "2550M", "2553"
];

const certificateTypes = [
    "Creditable Tax Withheld at Source (BIR Form 2307)",
    "Final Tax Withheld at Source (BIR Form 2306)",
    "Compensation Payment/Tax Withheld (BIR Form 2316)",
];

const disabledCertificateTypes: string[] = [];


const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1999 }, (_, i) => (currentYear - i).toString());

export function GenerationCard({ 
    title, 
    description, 
    buttonText, 
    onGenerate, 
    icon, 
    isDatGeneration, 
    reminders,
}: GenerationCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  
  const [progress, setProgress] = useState(0);

  // DAT Gen State
  const [month, setMonth] = useState(months[0].value);
  const [year, setYear] = useState(currentYear.toString());
  const [reportType, setReportType] = useState(reportTypes[0]);
  const [sawtSchedule, setSawtSchedule] = useState(sawtSchedules[0]);

  // Cert Gen State
  const [certificateType, setCertificateType] = useState(certificateTypes[0]);
  const [signatoryName, setSignatoryName] = useState('');
  const [signatoryTIN, setSignatoryTIN] = useState('');
  const [signatoryPosition, setSignatoryPosition] = useState('');
  const [signatureFile, setSignatureFile] = useState<File | null>(null);
  const [pdfSize, setPdfSize] = useState<'letter' | 'legal' | 'a4'>('legal');
  const [collate, setCollate] = useState<'single' | 'multiple'>('single');
  const [signatureX, setSignatureX] = useState(150);
  const [signatureY, setSignatureY] = useState(185);

  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
  };
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGenerating && !isDatGeneration) {
      setProgress(0);
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(timer);
            return prev;
          }
          return prev + 5;
        });
      }, 300);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isGenerating, isDatGeneration]);
  
  const isAnnualReport = reportType?.includes('1604');

  useEffect(() => {
    if (isAnnualReport) {
      setMonth('12');
    }
  }, [isAnnualReport]);

  useEffect(() => {
    if (isDatGeneration) {
        setSelectedFile(null); // Clear file when DAT report type changes
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reportType, isDatGeneration]);

  useEffect(() => {
    if (!isDatGeneration) {
        setSelectedFile(null); // Clear file when cert type changes
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [certificateType, isDatGeneration]);

  useEffect(() => {
    if (certificateType === certificateTypes[0]) { // 2307
      setSignatureX(150);
      setSignatureY(185);
    } else if (certificateType === certificateTypes[1]) { // 2306
      setSignatureX(110);
      setSignatureY(380);
    } else if (certificateType === certificateTypes[2]) { // 2316
      setSignatureX(150);
      setSignatureY(160);
    }
  }, [certificateType]);


  const handleFileChange = (files: FileList | null) => {
    const file = files?.[0];
    if (file) {
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel') {
        handleFileSelect(file);
      } else {
        toast({
          title: 'Invalid File Type',
          description: 'Please upload a valid Excel file (.xlsx, .xls).',
          variant: 'destructive',
        });
      }
    }
  };
  
  const handleInputElementChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files);
    e.target.value = ''; // Allow re-uploading the same file
  };

  const handleSignatureFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        if (file.size > 1 * 1024 * 1024) {
             toast({
                title: 'Signature File Too Large',
                description: 'Please upload a signature image that is 1MB or less.',
                variant: 'destructive',
            });
            e.target.value = '';
            return;
        }
        if (!file.type.startsWith('image/')) {
             toast({
                title: 'Invalid File Type',
                description: 'Please upload a valid image file for the signature.',
                variant: 'destructive',
            });
        } else {
            setSignatureFile(file);
        }
    }
    e.target.value = '';
  };


  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerateClick = async () => {
    if (!selectedFile) {
        toast({ title: 'No file selected', description: 'Please upload a file to generate.', variant: 'destructive'});
        return;
    };
    
    setIsGenerating(true);

    if (!isDatGeneration) {
        if (signatureFile && signatureFile.size > 1 * 1024 * 1024) {
            toast({
                title: 'Signature File Too Large',
                description: 'Please upload a signature image that is 1MB or less.',
                variant: 'destructive',
            });
            setIsGenerating(false);
            return;
        }
    }
    
    try {
        let args = {};
        if (isDatGeneration) {
            args = { month, year, reportType, sawtSchedule };
        } else {
            args = { certificateType, signatoryName, signatoryTIN, signatoryPosition, signatureFile, pdfSize, collate, signatureX, signatureY };
        }
        const success = await onGenerate(selectedFile, args);

        if (success) {
            if (isDatGeneration) {
                setSelectedFile(null);
            } else {
                setProgress(100);
                setTimeout(() => {
                    setIsGenerating(false);
                    setSelectedFile(null);
                    setSignatureFile(null);
                }, 500);
            }
        } else {
            // if generation fails, stop the generating state
            setIsGenerating(false);
        }
    } catch (error) {
         // Toast is handled by the calling component
         if(!isDatGeneration) {
            setIsGenerating(false);
         }
    } finally {
        if(isDatGeneration) {
            setIsGenerating(false);
        }
    }
  }

  const clearFile = () => {
    handleFileSelect(null);
    if (!isDatGeneration) {
        setSignatureFile(null);
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
            {icon}
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {isDatGeneration ? (
            <div className="space-y-4">
                 <div className="space-y-2">
                    <Label>Reporting Period</Label>
                    <div className="grid grid-cols-2 gap-2">
                        <Select value={month} onValueChange={setMonth} disabled={isAnnualReport}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                                {months.map(m => <SelectItem key={m.value} value={m.value}>{m.name}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Select value={year} onValueChange={setYear}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                                {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                 <div className="space-y-2">
                    <Label>Reporting Type</Label>
                    <Select value={reportType} onValueChange={setReportType}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {reportTypes.map(rt => {
                                const isDisabled = disabledReportTypes.includes(rt);
                                return (
                                    <SelectItem key={rt} value={rt} disabled={isDisabled}>
                                        {rt}
                                        {isDisabled && <span className="text-muted-foreground/80"> (Under Development)</span>}
                                    </SelectItem>
                                );
                            })}
                        </SelectContent>
                    </Select>
                </div>
                {reportType === "Summary Alphalist of Withholding Tax (SAWT)" && (
                  <div className="space-y-2 animate-in fade-in-50 duration-300">
                    <Label>Schedules</Label>
                     <div className="pl-8">
                        <RadioGroup 
                            value={sawtSchedule} 
                            onValueChange={setSawtSchedule}
                            className="grid grid-cols-3 gap-x-4 gap-y-2"
                        >
                            {sawtSchedules.map(schedule => (
                                <div key={schedule} className="flex items-center space-x-2">
                                    <RadioGroupItem value={schedule} id={`r-${schedule}`} />
                                    <Label htmlFor={`r-${schedule}`} className="font-normal">{schedule}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                  </div>
                )}
            </div>
        ) : (
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="signatory-name">Name</Label>
                        <Input id="signatory-name" value={signatoryName} onChange={e => setSignatoryName(e.target.value)} maxLength={30} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="signatory-tin">TIN</Label>
                        <Input 
                          id="signatory-tin" 
                          value={signatoryTIN} 
                          onChange={e => setSignatoryTIN(e.target.value.replace(/[^0-9]/g, ''))} 
                          maxLength={9}
                          pattern="[0-9]*"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="signatory-position">Position</Label>
                        <Input id="signatory-position" value={signatoryPosition} onChange={e => setSignatoryPosition(e.target.value)} maxLength={30} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="signature-file">Signature</Label>
                        <div className="relative">
                            <Input id="signature-file" type="file" accept="image/*" onChange={handleSignatureFileChange} className="hidden" />
                            <label htmlFor="signature-file" className={cn(
                                "cursor-pointer h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                                "flex items-center gap-2 text-muted-foreground",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            )}>
                                {!signatureFile ? (
                                    <>
                                        <Upload className="h-4 w-4" />
                                        <span>Upload Signature (1MB Max)</span>
                                    </>
                                ) : (
                                    <div className="flex items-center gap-2 w-full">
                                        <FileIcon className="h-4 w-4 flex-shrink-0" />
                                        <span className="flex-1 truncate">{signatureFile.name}</span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-6 w-6 shrink-0"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setSignatureFile(null)
                                            }}
                                        >
                                            <X className="h-4 w-4" />
                                            <span className="sr-only">Clear signature</span>
                                        </Button>
                                    </div>
                                )}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Certificate Type</Label>
                    <Select value={certificateType} onValueChange={setCertificateType}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {certificateTypes.map(ct => {
                                const isDisabled = disabledCertificateTypes.includes(ct);
                                return (
                                    <SelectItem key={ct} value={ct} disabled={isDisabled}>
                                        {ct}
                                        {isDisabled && <span className="text-muted-foreground/80"> (Under Development)</span>}
                                    </SelectItem>
                                );
                            })}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        )}


        {selectedFile ? (
            <div className="relative flex items-center p-3 border-2 border-dashed rounded-lg border-primary/50 bg-primary/10">
                <FileIcon className="w-8 h-8 mr-3 text-primary flex-shrink-0" />
                <div className="flex-grow overflow-hidden">
                    <p className="font-semibold truncate">{selectedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearFile}
                    className="flex-shrink-0 w-8 h-8"
                    disabled={isGenerating}
                >
                    <X className="w-5 h-5" />
                    <span className="sr-only">Clear file</span>
                </Button>
            </div>
        ) : (
            <div
                className={cn(
                    'w-full p-6 border-2 border-dashed rounded-lg text-center transition-colors duration-300',
                    isDragging ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
                )}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    id={`file-upload-${title.replace(/\s+/g, '-')}`}
                    className="hidden"
                    onChange={handleInputElementChange}
                    accept=".xlsx, .xls"
                    disabled={isGenerating}
                />
                <label htmlFor={`file-upload-${title.replace(/\s+/g, '-')}`} className="cursor-pointer space-y-2 flex flex-col items-center">
                    <UploadCloud className="w-10 h-10 text-muted-foreground" />
                     <div className="space-y-1">
                        <p className="font-semibold">Drag & drop or <span className="text-primary">browse</span></p>
                        <p className="text-xs text-muted-foreground">Supports .xlsx, .xls</p>
                    </div>
                </label>
            </div>
        )}

        <div className="space-y-2">
            <Button className="w-full" onClick={handleGenerateClick} disabled={isGenerating || !selectedFile}>
              {isGenerating && isDatGeneration && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isGenerating && !isDatGeneration ? 'Generating PDFs...' : buttonText}
            </Button>
            {isGenerating && !isDatGeneration && (
                <Progress value={progress} className="w-full h-2" />
            )}
        </div>
        
        {isDatGeneration && reminders && reminders.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="reminders">
              <AccordionTrigger className="text-sm">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                  Important Reminders
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className="space-y-3 list-decimal list-outside pl-5 text-xs text-muted-foreground">
                  {reminders.map((reminder, index) => (
                    <li key={index} className="pl-1">{reminder}</li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        {!isDatGeneration && (
             <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="pdf-settings">
                <AccordionTrigger className="text-sm">
                    <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-primary" />
                    PDF Settings
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0">
                    <div className="space-y-4 pt-4">
                        <div className="grid grid-cols-2 gap-4">
                             <div className="space-y-2">
                                <Label className="text-xs">Paper Size</Label>
                                <Select value={pdfSize} onValueChange={(v) => setPdfSize(v as any)}>
                                    <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="letter">Letter (8.5" x 11")</SelectItem>
                                        <SelectItem value="legal">Legal (8.5" x 13")</SelectItem>
                                        <SelectItem value="a4">A4 (8.27" x 11.69")</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs">PDF Output Mode</Label>
                                <RadioGroup value={collate} onValueChange={(v) => setCollate(v as any)} className="space-y-2 pt-1">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="single" id="single" />
                                        <Label htmlFor="single" className="font-normal text-sm">Single PDF (All rows in one file)</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="multiple" id="multiple" />
                                        <Label htmlFor="multiple" className="font-normal text-sm">Multiple PDFs (One per row)</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label className="text-xs">Signature Position</Label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <Label htmlFor="sig-x" className="text-sm w-4">X</Label>
                                    <Input id="sig-x" type="number" value={signatureX} onChange={(e) => setSignatureX(parseInt(e.target.value, 10))} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Label htmlFor="sig-y" className="text-sm w-4">Y</Label>
                                    <Input id="sig-y" type="number" value={signatureY} onChange={(e) => setSignatureY(parseInt(e.target.value, 10))} />
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        )}
      </CardContent>
    </Card>
  );
}

    

    
