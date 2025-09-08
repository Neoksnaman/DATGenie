
'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Loader2 } from 'lucide-react';

interface OverwriteDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  fileName: string;
  transactionType: string;
  reportingPeriod: string;
  onConfirm: () => void;
  isOverwriting: boolean;
}

export function OverwriteDialog({
  isOpen,
  onOpenChange,
  fileName,
  transactionType,
  reportingPeriod,
  onConfirm,
  isOverwriting,
}: OverwriteDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-white text-black">
        <AlertDialogHeader>
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <AlertDialogTitle className="text-xl text-black">Existing File Found!</AlertDialogTitle>
                    <AlertDialogDescription className="text-slate-600 pt-1">
                        An existing file was found. Do you want to overwrite it?
                    </AlertDialogDescription>
                </div>
            </div>
        </AlertDialogHeader>
        <div className="pl-16 pr-6 py-4 space-y-2 text-sm text-slate-800">
            <p><span className="font-semibold text-slate-500">File Name:</span> {fileName}</p>
            <p><span className="font-semibold text-slate-500">Transaction Type:</span> {transactionType}</p>
            <p><span className="font-semibold text-slate-500">Reporting Period:</span> {reportingPeriod}</p>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isOverwriting}>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              onClick={onConfirm}
              disabled={isOverwriting}
            >
              {isOverwriting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Overwrite
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
