
'use client';

import { useState, useTransition, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/logo';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertTriangle } from 'lucide-react';
import { resetUserPassword } from '@/lib/actions/auth';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const resetPasswordSchema = z.object({
    newPassword: z.string().min(6, 'New password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Please confirm your new password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;


function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });
  
  useEffect(() => {
    if (!token) {
        setError('Invalid or missing password reset token. Please try again.');
    }
  }, [token]);

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = (data) => {
    if (!token) return;
    
    startTransition(async () => {
      const result = await resetUserPassword(token, data.newPassword);
      if (result.success) {
        toast({
          title: 'Password Reset Successful!',
          description: 'You can now log in with your new password.',
        });
        router.push('/login');
      } else {
        toast({
          title: 'Password Reset Failed',
          description: result.error,
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="space-y-2 text-center">
          <Link href="/" className="inline-block mb-4">
            <Logo className="mx-auto w-20 h-20" />
          </Link>
          <CardTitle className="text-2xl font-bold font-headline">Reset Your Password</CardTitle>
          <CardDescription className="font-body">
            Enter a new password for your account below. For your security, this action will log you out of all other devices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
             <div className="flex flex-col items-center gap-4 text-center">
              <AlertTriangle className="h-12 w-12 text-destructive" />
              <p className="font-semibold text-destructive">{error}</p>
               <Button asChild className="w-full" variant="secondary">
                <Link href="/forgot-password">Request a new link</Link>
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">New Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Confirm New Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Reset Password
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader2 className="h-12 w-12 animate-spin"/></div>}>
            <ResetPasswordContent />
        </Suspense>
    )
}
