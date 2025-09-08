
'use client';

import { useState, useEffect, useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { updateUserDetails } from '@/lib/actions/users';
import { SessionCard } from '@/components/session-card';
import { useUser } from '@/hooks/use-user';

const profileSchema = z.object({
  currentUserName: z.string(), // Hidden field to know who we're updating
  userName: z.string()
    .min(3, 'Username must be at least 3 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores (_).'),
  email: z.string().email(),
});

const passwordSchema = z.object({
    currentUserName: z.string(),
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(6, 'New password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Please confirm your new password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

type ProfileFormValues = z.infer<typeof profileSchema>;
type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function ProfilePage() {
  const { toast } = useToast();
  const [isProfilePending, startProfileTransition] = useTransition();
  const [isPasswordPending, startPasswordTransition] = useTransition();
  const { user, isLoading, updateUser } = useUser();

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
        currentUserName: '',
        userName: '',
        email: '',
    },
  });

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentUserName: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (user) {
        profileForm.reset({
            currentUserName: user.userName,
            userName: user.userName,
            email: user.email,
        });
        passwordForm.setValue('currentUserName', user.userName);
    }
  }, [user, profileForm, passwordForm]);

  const onProfileSubmit: SubmitHandler<ProfileFormValues> = (data) => {
    startProfileTransition(async () => {
      if (data.userName === data.currentUserName) {
        toast({
          title: 'No Changes',
          description: 'The new username is the same as the current one.',
        });
        return;
      }
      const result = await updateUserDetails(data.currentUserName, { newUserName: data.userName });
      if (result.success) {
        toast({
          title: 'Profile Updated',
          description: 'Your username has been successfully updated.',
        });
        
        // Update user context
        if(user) {
            updateUser({ ...user, userName: data.userName });
        }
        
        profileForm.reset({
            currentUserName: data.userName,
            userName: data.userName,
            email: data.email,
        });
        passwordForm.setValue('currentUserName', data.userName);
      } else {
        toast({
          title: 'Update Failed',
          description: result.error,
          variant: 'destructive',
        });
      }
    });
  };

  const onPasswordSubmit: SubmitHandler<PasswordFormValues> = (data) => {
    startPasswordTransition(async () => {
      const result = await updateUserDetails(data.currentUserName, {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      if (result.success) {
        toast({
          title: 'Password Updated',
          description: 'Your password has been changed successfully.',
        });
        passwordForm.reset({
            currentUserName: data.currentUserName,
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        });
      } else {
        toast({
          title: 'Update Failed',
          description: result.error,
          variant: 'destructive',
        });
      }
    });
  };
  
  if (isLoading || !user) {
    return (
        <div className="flex items-center justify-center h-full p-6">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    )
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="space-y-1">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Manage your profile and account settings.</p>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your username and view your email address.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...profileForm}>
              <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={profileForm.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={profileForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} disabled />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <div className="flex justify-end pt-2">
                    <Button type="submit" disabled={isProfilePending}>
                        {isProfilePending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Save Changes
                    </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Enter your current password to set a new one.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                    control={passwordForm.control}
                    name="currentPassword"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Current Password</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={passwordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={passwordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="flex justify-end pt-2">
                    <Button type="submit" disabled={isPasswordPending}>
                        {isPasswordPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Change Password
                    </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <SessionCard />
      </div>
    </div>
  );
}
