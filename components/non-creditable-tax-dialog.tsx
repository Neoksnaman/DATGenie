
'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NonCreditableTaxDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  totalInputTax: number;
  onContinue: (nonCreditableTax: number) => void;
  isCreating: boolean;
}

const formatCurrency = (value: number | undefined) => {
    if (value === undefined || isNaN(value)) return '0.00';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
};

const formatInputValue = (value: string): string => {
    if (!value) return '';
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};


export function NonCreditableTaxDialog({
  isOpen,
  onOpenChange,
  totalInputTax,
  onContinue,
  isCreating,
}: NonCreditableTaxDialogProps) {
  const [nonCreditableTax, setNonCreditableTax] = useState(0);
  const [inputValue, setInputValue] = useState('0.00');
  const [error, setError] = useState<string | null>(null);
  const creditableTax = totalInputTax - nonCreditableTax;

  useEffect(() => {
    // Reset when dialog opens
    if (isOpen) {
      setNonCreditableTax(0);
      setInputValue('0.00');
      setError(null);
    }
  }, [isOpen]);

  const handleContinueClick = () => {
    if (!error) {
      onContinue(nonCreditableTax);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const sanitizedValue = rawValue.replace(/[^0-9.]/g, '');
    const parts = sanitizedValue.split('.');
    
    // Ensure only one decimal point
    if (parts.length > 2) {
      return; 
    }

    const numericValue = parseFloat(sanitizedValue);

    if (isNaN(numericValue)) {
        setNonCreditableTax(0);
        setError(null);
        setInputValue('');
        return;
    }
    
    setNonCreditableTax(numericValue);

    if (numericValue > totalInputTax) {
        setError('Amount cannot exceed Total Input Tax.');
    } else {
        setError(null);
    }

    // Format for display
    const formattedValue = formatInputValue(sanitizedValue);
    setInputValue(formattedValue);
  };
  
  const handleBlur = () => {
     let numericValue = parseFloat(inputValue.replace(/,/g, ''));
      if (isNaN(numericValue)) {
        numericValue = 0;
      }
      setInputValue(formatCurrency(numericValue));
  };


  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-black">Enter Value</DialogTitle>
          <DialogDescription className="text-slate-600">
            Please provide the non-creditable input tax amount.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="non-creditable" className="text-black">
              Non-Creditable Input Tax
            </Label>
            <Input
              id="non-creditable"
              type="text"
              inputMode="decimal"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={cn("bg-slate-100", error && 'border-destructive focus-visible:ring-destructive')}
              disabled={isCreating}
            />
            {error && <p className="text-sm text-destructive mt-1">{error}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="total-input" className="text-black">
              Total Input Tax
            </Label>
            <Input
              id="total-input"
              value={formatCurrency(totalInputTax)}
              disabled
              className="bg-slate-200"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="creditable" className="text-black">
              Creditable Input Tax
            </Label>
            <Input
              id="creditable"
              value={formatCurrency(error ? 0 : creditableTax)}
              disabled
              className="bg-slate-200"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleContinueClick} disabled={isCreating || !!error}>
            {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
