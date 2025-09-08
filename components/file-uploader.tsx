
'use client';

import { useState, useCallback, type ChangeEvent, type DragEvent } from 'react';
import { UploadCloud, File as FileIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  clearFile: () => void;
  selectedFile: File | null;
  isAnalyzing: boolean;
}

export function FileUploader({ onFileSelect, clearFile, selectedFile, isAnalyzing }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel') {
        onFileSelect(file);
      } else {
        toast({
          title: 'Invalid File Type',
          description: 'Please upload a valid Excel file (.xlsx, .xls).',
          variant: 'destructive',
        });
      }
    }
    e.target.value = ''; // Reset input to allow re-uploading the same file
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
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel') {
        onFileSelect(file);
      } else {
        toast({
          title: 'Invalid File Type',
          description: 'Please upload a valid Excel file (.xlsx, .xls).',
          variant: 'destructive',
        });
      }
    }
  }, [onFileSelect, toast]);

  if (selectedFile && !isAnalyzing) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative flex items-center p-4 border-2 border-dashed rounded-lg border-primary/50 bg-primary/10">
          <FileIcon className="w-10 h-10 mr-4 text-primary" />
          <div className="flex-grow">
            <p className="font-semibold">{selectedFile.name}</p>
            <p className="text-sm text-muted-foreground">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={clearFile}
            className="absolute top-2 right-2"
            disabled={isAnalyzing}
          >
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
        'w-full max-w-2xl mx-auto p-8 border-2 border-dashed rounded-lg text-center transition-colors duration-300',
        isDragging ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
      )}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
        accept=".xlsx, .xls"
        disabled={isAnalyzing}
      />
      <label htmlFor="file-upload" className={cn(isAnalyzing ? 'cursor-not-allowed' : 'cursor-pointer')}>
        <div className="flex flex-col items-center justify-center space-y-4">
          <UploadCloud className="w-16 h-16 text-primary" />
          <p className="font-headline text-lg font-semibold">Drag & drop your Excel file here</p>
          <p className="text-muted-foreground font-body">or</p>
          <Button type="button" onClick={() => document.getElementById('file-upload')?.click()} disabled={isAnalyzing}>
            Browse File
          </Button>
          <p className="text-xs text-muted-foreground font-body">Supports .xlsx, .xls</p>
        </div>
      </label>
    </div>
  );
}
