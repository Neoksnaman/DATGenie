
'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import type { UserDetails } from '@/lib/schemas';
import { getCurrentUser } from '@/lib/actions/users';
import { usePathname, useRouter } from 'next/navigation';

interface UserContextType {
  user: UserDetails | null;
  isLoading: boolean;
  updateUser: (newUser: UserDetails) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const fetchUser = useCallback(async () => {
    try {
      const result = await getCurrentUser();
      if (result.success && result.data) {
        setUser(result.data);
      } else {
        setUser(null);
        // This handles cases where the cookie is invalid.
        // The middleware should also catch this, but this is a failsafe.
        if (!['/login', '/signup', '/forgot-password', '/reset-password', '/verify'].some(p => pathname.startsWith(p)) && pathname !== '/') {
            router.push('/login');
        }
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, [router, pathname]);

  useEffect(() => {
    // We fetch user on all pages now, to correctly handle redirects
    // from welcome/auth pages to the dashboard if a valid session exists.
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Re-fetch user when path changes to handle login/logout navigation

  const updateUser = (newUser: UserDetails) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
