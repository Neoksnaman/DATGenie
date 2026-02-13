
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { PartyPopper } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface ChangelogDialogProps {
  isOpen: boolean;
  onClose: (hideUntilNextUpdate: boolean) => void;
  version: string;
  date: string;
  title: string;
  changes: string[];
}

export function ChangelogDialog({
  isOpen,
  onClose,
  version,
  date,
  title,
  changes,
}: ChangelogDialogProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleClose = () => {
    onClose(dontShowAgain);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-2xl w-full flex flex-col p-0 bg-white text-black max-h-[80vh]">
        <DialogHeader className="p-6 pb-4 shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <PartyPopper className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl text-black">{title}</DialogTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary">Version {version}</Badge>
                <DialogDescription className="text-slate-600">{date}</DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className="flex-1 px-6 min-h-0">
            <ul className="space-y-3 list-disc list-outside pl-5 text-sm text-slate-700">
                {changes.map((change, index) => (
                    <li key={index} className="pl-1">{change}</li>
                ))}
            </ul>
        </ScrollArea>
        <DialogFooter className="p-4 border-t shrink-0 flex-row justify-between items-center w-full">
          <div className="flex items-center space-x-2">
            <Checkbox 
                id="dont-show-again" 
                checked={dontShowAgain}
                onCheckedChange={(checked) => setDontShowAgain(Boolean(checked))}
            />
            <Label htmlFor="dont-show-again" className="text-xs font-normal text-muted-foreground">
              Don't show this again until the next update
            </Label>
          </div>
          <Button onClick={handleClose}>
            Got it, thanks!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
