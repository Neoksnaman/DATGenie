
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { AlertTriangle } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface ErrorSummaryDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  errors: string[];
}

export function ErrorSummaryDialog({
  isOpen,
  onOpenChange,
  errors,
}: ErrorSummaryDialogProps) {

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full flex flex-col p-0 bg-white text-black max-h-[80vh]">
        <DialogHeader className="p-6 pb-4 shrink-0">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                    <DialogTitle className="text-xl text-black">Validation Errors Found</DialogTitle>
                    <DialogDescription className="text-slate-600">
                        Please correct the following issues in your Excel file and upload it again.
                    </DialogDescription>
                </div>
            </div>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto px-6 min-h-0">
            <ScrollArea className="h-full pr-4">
                 <div className="space-y-2 font-mono text-sm">
                    {errors.map((error, index) => (
                        <div key={index} className="p-3 rounded-md border bg-slate-50 text-slate-700 text-xs">
                           {error}
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
        <DialogFooter className="p-4 border-t shrink-0">
          <Button onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
