
'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/logo';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { loginUser } from '@/lib/actions/auth';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const loginSchema = z.object({
  userName: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    startTransition(async () => {
      const result = await loginUser(data);
      if (result.success && result.user) {
        toast({
          title: 'Login Successful!',
          description: `Welcome back, ${result.user.userName}!`,
        });
        // The session cookie is set on the server.
        // We just need to navigate to the home page.
        // A full page reload ensures all contexts are reset and fresh data is fetched.
        window.location.href = '/home';
      } else {
        toast({
          title: 'Login Failed',
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
          <Link href="/" className="inline-block">
            <Logo className="mx-auto w-20 h-20" />
          </Link>
          <CardTitle className="text-2xl font-bold font-headline">Welcome Back</CardTitle>
          <CardDescription className="font-body">Enter your credentials to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
               <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                       <div className="flex items-center">
                          <FormLabel className="font-body">Password</FormLabel>
                        </div>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                       <div className="text-right">
                          <Link href="/forgot-password" className="inline-block text-sm underline font-body">
                            Forgot your password?
                          </Link>
                        </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm font-body">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
