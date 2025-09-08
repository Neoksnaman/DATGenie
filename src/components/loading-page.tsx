
'use client';

import { Loader2 } from 'lucide-react';
import { Logo } from './logo';

export function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Logo className="w-20 h-20" />
        <div className="flex items-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <p className="text-lg font-semibold text-muted-foreground">Loading your workspace...</p>
        </div>
      </div>
    </div>
  );
}
