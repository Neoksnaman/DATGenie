
'use client';

import type { ExcelErrorDetectionOutput } from '@/ai/schemas';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, FileDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AnalysisResultsProps {
  analysis: ExcelErrorDetectionOutput | null;
  onReset: () => void;
}

export function AnalysisResults({ analysis, onReset }: AnalysisResultsProps) {
  const { toast } = useToast();

  if (!analysis) return null;

  const handleDownload = (type: string) => {
    toast({
      title: 'Conversion Successful',
      description: `Your ${type} file is ready for download.`,
      className: 'bg-accent text-accent-foreground',
    });
  };

  const hasErrors = analysis.errors && analysis.errors.length > 0;

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8 animate-in fade-in-50 duration-500">
      <CardHeader>
        <div className="flex items-center gap-4">
          {hasErrors ? (
            <AlertCircle className="w-10 h-10 text-destructive" />
          ) : (
            <CheckCircle className="w-10 h-10 text-green-500" />
          )}
          <div>
            <CardTitle className="font-headline">
              {hasErrors ? `Found ${analysis.errors.length} Potential Issue(s)` : 'No Issues Found!'}
            </CardTitle>
            <CardDescription className="font-body">
              {hasErrors
                ? 'Review the issues below before converting your file.'
                : 'Your file looks good. You can now proceed with conversion.'}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {hasErrors && (
          <Accordion type="single" collapsible className="w-full mb-6">
            <AccordionItem value="errors">
              <AccordionTrigger className="font-headline">Potential Errors</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 list-disc list-inside font-body">
                  {analysis.errors.map((error, index) => (
                    <li key={`error-${index}`}>{error}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            {analysis.suggestions && analysis.suggestions.length > 0 && (
              <AccordionItem value="suggestions">
                <AccordionTrigger className="font-headline">Suggestions for Fixes</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 list-disc list-inside font-body">
                    {analysis.suggestions.map((suggestion, index) => (
                      <li key={`suggestion-${index}`}>{suggestion}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        )}

        <div className="p-6 mt-4 border rounded-lg bg-secondary/30">
          <h3 className="mb-4 text-lg font-semibold font-headline">Conversion Options</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col items-start gap-2 p-4 border rounded-lg bg-background">
              <h4 className="font-semibold font-headline">.DAT File Conversion</h4>
              <p className="text-sm text-muted-foreground font-body">Convert your Excel file to the standard .DAT format.</p>
              <Button className="w-full mt-auto" onClick={() => handleDownload('.DAT')}>
                <FileDown className="w-4 h-4 mr-2" />
                Convert and Download .DAT
              </Button>
            </div>
            <div className="flex flex-col items-start gap-2 p-4 border rounded-lg bg-background">
              <h4 className="font-semibold font-headline">BIR PDF Conversion</h4>
              <p className="text-sm text-muted-foreground font-body">Generate BIR-ready PDF forms from your data.</p>
               <div className="grid w-full grid-cols-1 gap-2 mt-auto sm:grid-cols-3">
                 <Button variant="outline" size="sm" onClick={() => handleDownload('2307 PDF')}><FileDown className="w-3 h-3 mr-1.5" /> 2307</Button>
                 <Button variant="outline" size="sm" onClick={() => handleDownload('2316 PDF')}><FileDown className="w-3 h-3 mr-1.5" /> 2316</Button>
                 <Button variant="outline" size="sm" onClick={() => handleDownload('2306 PDF')}><FileDown className="w-3 h-3 mr-1.5" /> 2306</Button>
               </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Button variant="outline" onClick={onReset}>
            Upload Another File
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
