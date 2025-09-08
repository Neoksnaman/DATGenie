
'use client';

import { useState, useCallback, type ChangeEvent, type DragEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud, File as FileIcon, X, Loader2, AlertTriangle, FileUp, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Input } from './ui/input';

interface GenerationCardProps {
  title: string;
  description: string;
  buttonText: string;
  onGenerate: (file: File, ...args: any[]) => Promise<void>;
  icon: React.ReactNode;
  isDatGeneration: boolean;
  reminders?: string[];
}

const months = [
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

const reportTypes = [
    "Summary of Sales (SLS)",
    "Summary of Purchases (SLP)",
    "Summary Alphalist of Withholding Tax (SAWT)",
    "1601-EQ (Schedule 1 and 2)",
    "1601-FQ (Schedule 1, 2, and 3)",
    "Summary of Importations (SLI)",
    "1604-CF (Schedule 3 and 4)",
    "1604-E (Schedule 4)",
    "1604-F (Schedule 5, 6, and 7)",
];

const disabledReportTypes = [
    "Summary of Importations (SLI)",
    "1604-CF (Schedule 3 and 4)",
    "1604-E (Schedule 4)",
    "1604-F (Schedule 5, 6, and 7)",
];

const sawtSchedules = [
    "1700", "1702", "2550Q",
    "1701", "1702Q", "2551M",
    "1701Q", "2550M", "2553"
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1999 }, (_, i) => (currentYear - i).toString());

export function GenerationCard({ title, description, buttonText, onGenerate, icon, isDatGeneration, reminders }: GenerationCardProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  // DAT Gen State
  const [month, setMonth] = useState(months[0].value);
  const [year, setYear] = useState(currentYear.toString());
  const [reportType, setReportType] = useState(reportTypes[0]);
  const [sawtSchedule, setSawtSchedule] = useState(sawtSchedules[0]);

  // Cert Gen State
  const [signatoryName, setSignatoryName] = useState('');
  const [signatoryTIN, setSignatoryTIN] = useState('');
  const [signatoryPosition, setSignatoryPosition] = useState('');
  const [signatureFile, setSignatureFile] = useState<File | null>(null);


  const handleFileChange = (files: FileList | null) => {
    const file = files?.[0];
    if (file) {
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel') {
        setSelectedFile(file);
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
        if (file.type.startsWith('image/')) {
            setSignatureFile(file);
        } else {
            toast({
                title: 'Invalid File Type',
                description: 'Please upload a valid image file for the signature.',
                variant: 'destructive',
            });
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
  }, []);

  const handleGenerateClick = async () => {
    if (!selectedFile) {
        toast({ title: 'No file selected', description: 'Please upload a file to generate.', variant: 'destructive'});
        return;
    };
    setIsGenerating(true);
    
    try {
        if (isDatGeneration) {
            await onGenerate(selectedFile, month, year, reportType, sawtSchedule);
        } else {
            await onGenerate(selectedFile, signatoryName, signatoryTIN, signatoryPosition, signatureFile);
        }
    } catch (error) {
         // Toast is handled by the calling component
    } finally {
        setIsGenerating(false);
    }
  }

  const clearFile = () => {
    setSelectedFile(null);
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
                        <Select value={month} onValueChange={setMonth}>
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
                                        <span>Upload Signature</span>
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

        <Button className="w-full" onClick={handleGenerateClick} disabled={isGenerating || !selectedFile}>
          {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {buttonText}
        </Button>
        
        {reminders && reminders.length > 0 && (
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
      </CardContent>
    </Card>
  );
}
