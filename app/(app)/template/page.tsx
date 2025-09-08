
'use client';

import React, { useEffect, useState } from 'react';
import { useRefresh } from '@/hooks/use-refresh';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Download, AlertTriangle, Loader2 } from 'lucide-react';

const vatReliefTemplate = {
  category: 'VAT Relief',
  files: [
    { name: 'Sales', id: '1zdGeZzGWzBAdZ9yd2qxtWuZpQL2SFvPx' },
    { name: 'Purchases', id: '1vdDNVY6MCU1RFPnE3FNhddUa55q33rf8' },
    { name: 'Importations', id: null },
  ],
};

const alphalistTemplate = {
  category: 'Alphalist',
  subCategories: [
    {
      name: 'Monthly & Quarterly',
      files: [
        { name: '1601EQ Sched 1 & 2', id: '1YnD9YSEkhdB9PRfgPGl1FNrGzi_wsA0d' },
        { name: '1601FQ Sched 1, 2 & 3', id: '1K5JeL9CLqBJ-Xx38ITxT0zKgMaVZj5oP' },
        { name: 'SAWT', id: '18pGCm_9dLZa4ZI4tnnedGX0__m3ngTEa' },
      ],
    },
    {
      name: 'Annual',
      files: [
        { name: '1604C Sched 1 & 2', id: null },
        { name: '1604E Sched 3 & 4', id: null },
        { name: '1604F Sched 4, 5 & 6', id: null },
      ],
    },
  ],
};

const withholdingTaxTemplate = {
  category: 'Withholding Tax Certificate',
  files: [
    { name: 'BIR Form 2307', id: null },
    { name: 'BIR Form 2306', id: null },
    { name: 'BIR Form 2316', id: null },
  ],
};

const guidelines = [
  "Download the provided Excel templates. Take the time to thoroughly analyze the sample data included within the file. This data serves as a reference, offering insight into the expected format and content of your own file.",
  "Take note of the character limit specified in the header of the file for taxpayer details. Ensure that your entries adhere to this limit to prevent any formatting issues.",
  "Negative values are acceptable within the data fields.",
  "The Excel templates come with fixed default sheet names. Do not modify or insert new sheets before these predefined ones. This preserves the integrity of the template structure.",
  "Make all necessary edits and entries starting from row 2 onwards. This preserves the template's pre-existing formatting and calculations, preventing any unintended alterations to critical components.",
  "If you encounter difficulties or wish to experiment with the format, consider employing a trial-and-error approach. You can always download a fresh copy of the BIR Form Excel Format if needed.",
];

const TemplateContent = () => {
  const { setRefreshFunction } = useRefresh();
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  useEffect(() => {
    setRefreshFunction(null);
  }, [setRefreshFunction]);

  const handleDownload = (fileId: string | null, fileName: string) => {
    if (!fileId || downloadingFile) return;

    setDownloadingFile(fileName);
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_self');

    // Reset loading state after a short delay to allow the download to start
    setTimeout(() => {
        setDownloadingFile(null);
    }, 3000);
  };

  const renderDownloadButton = (file: { name: string; id: string | null }) => {
    const isDownloading = downloadingFile === file.name;
    return (
      <Button variant="ghost" size="sm" onClick={() => handleDownload(file.id, file.name)} disabled={!file.id || isDownloading}>
        {isDownloading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
            <Download className="mr-2 h-4 w-4" />
        )}
        Download
      </Button>
    );
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Excel Tools & Templates</h1>
          <p className="text-muted-foreground">Download the required templates to begin the conversion process.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Download Templates</CardTitle>
                <CardDescription>Click a category to see available files for download.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    {/* Column 1 */}
                    <div className="space-y-4">
                      {/* VAT Relief */}
                      <AccordionItem value={vatReliefTemplate.category}>
                        <AccordionTrigger className="font-medium">{vatReliefTemplate.category}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pl-4">
                            {vatReliefTemplate.files.map((file) => (
                              <li key={file.name} className="flex items-center justify-between">
                                <span>{file.name}</span>
                                {renderDownloadButton(file)}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      {/* Alphalist */}
                      <AccordionItem value={alphalistTemplate.category}>
                        <AccordionTrigger className="font-medium">{alphalistTemplate.category}</AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 space-y-3">
                            {alphalistTemplate.subCategories.map((subCategory) => (
                              <div key={subCategory.name}>
                                <h4 className="font-semibold mb-2">{subCategory.name}</h4>
                                <ul className="space-y-2 pl-4">
                                  {subCategory.files.map((file) => (
                                    <li key={file.name} className="flex items-center justify-between">
                                      <span>{file.name}</span>
                                      {renderDownloadButton(file)}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </div>
                    {/* Column 2 */}
                    <div>
                      {/* Withholding Tax Certificate */}
                      <AccordionItem value={withholdingTaxTemplate.category}>
                        <AccordionTrigger className="font-medium">{withholdingTaxTemplate.category}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pl-4">
                            {withholdingTaxTemplate.files.map((file) => (
                              <li key={file.name} className="flex items-center justify-between">
                                <span>{file.name}</span>
                                {renderDownloadButton(file)}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </div>
                  </div>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="bg-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Important Guidelines
                </CardTitle>
                <CardDescription>Please read these instructions carefully before using the templates.</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal list-outside pl-5 text-sm">
                  {guidelines.map((guideline, index) => (
                    <li key={index} className="pl-1">{guideline}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TemplatePage() {
    return <TemplateContent />;
}
