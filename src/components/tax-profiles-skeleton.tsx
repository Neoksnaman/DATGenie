
'use client';

import { Skeleton } from '@/components/ui/skeleton';

export function TaxProfilesSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
        <Skeleton className="h-10 w-full sm:flex-1" />
        <Skeleton className="h-10 w-full sm:w-[130px]" />
    </div>
  );
}
