
'use client';

import { useEffect, useState, useTransition, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { verifyUserAccount } from '@/lib/actions/auth';
import { Logo } from '@/components/logo';

function VerifyContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('Verifying your account, please wait...');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('No verification token found. Please check the link and try again.');
      return;
    }

    startTransition(async () => {
      const result = await verifyUserAccount(token);
      if (result.success) {
        setStatus('success');
        setMessage('Your account has been successfully verified! You can now log in.');
      } else {
        setStatus('error');
        setMessage(result.error || 'An unknown error occurred during verification.');
      }
    });
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader className="space-y-2 text-center">
            <Link href="/" className="inline-block mb-4">
                <Logo className="mx-auto w-20 h-20" />
            </Link>
          <CardTitle className="text-2xl font-bold font-headline">Account Verification</CardTitle>
          <CardDescription className="font-body">Please wait while we activate your account.</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          {status === 'verifying' && (
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="text-muted-foreground">{message}</p>
            </div>
          )}
          {status === 'success' && (
            <div className="flex flex-col items-center gap-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
              <p className="font-semibold">{message}</p>
              <Button asChild className="w-full">
                <Link href="/login">Go to Login</Link>
              </Button>
            </div>
          )}
          {status === 'error' && (
            <div className="flex flex-col items-center gap-4">
              <AlertTriangle className="h-12 w-12 text-destructive" />
              <p className="font-semibold text-destructive">{message}</p>
               <Button asChild className="w-full" variant="secondary">
                <Link href="/signup">Back to Signup</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function VerifyPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader2 className="h-12 w-12 animate-spin"/></div>}>
            <VerifyContent />
        </Suspense>
    )
}
