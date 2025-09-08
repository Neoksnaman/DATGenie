
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
    setIsLoading(true);
    try {
      const result = await getCurrentUser();
      if (result.success && result.data) {
        setUser(result.data);
      } else {
        setUser(null);
        // This handles cases where the cookie is invalid.
        // The middleware should also catch this, but this is a failsafe.
        if (pathname !== '/login') {
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
    // Only fetch user if not on a public-facing auth page
    const isAuthPage = ['/login', '/signup', '/forgot-password', '/reset-password', '/verify'].some(p => pathname.startsWith(p));
    
    // We only want to run this on the initial load.
    // If the user is already loaded, or we're on an auth page, we do nothing.
    if (!user && !isAuthPage) {
        fetchUser();
    } else {
        // If we are on an auth page, or user is already loaded, stop the loading indicator.
        if (isLoading) {
            setIsLoading(false);
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // We depend on pathname to correctly handle auth vs. protected pages on initial load.

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
