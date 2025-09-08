
'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { LogOut, FileSpreadsheet, History, RefreshCw, Home, Users, User, Loader2 } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  useSidebar,
} from '@/components/ui/sidebar';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { RefreshProvider, useRefresh } from '@/hooks/use-refresh';
import { TaxProfileProvider } from '@/hooks/use-tax-profiles';
import { DatFilesProvider } from '@/hooks/use-dat-files';
import { logoutUser } from '@/lib/actions/auth';
import { LoadingPage } from '@/components/loading-page';
import { useIsMobile } from '@/hooks/use-mobile';
import { UserProvider, useUser } from '@/hooks/use-user';


function SidebarNavigation() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.startsWith('/home')}>
          <Link href="/home" onClick={handleLinkClick}>
            <Home/>
            Home
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.startsWith('/tax-profiles')}>
          <Link href="/tax-profiles" onClick={handleLinkClick}>
            <Users/>
            Tax Profiles
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.startsWith('/template')}>
          <Link href="/template" onClick={handleLinkClick}>
            <FileSpreadsheet/>
            Template
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.startsWith('/dat-files')}>
          <Link href="/dat-files" onClick={handleLinkClick}>
            <History/>
            DAT Files
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function LayoutBody({ children }: { children: React.ReactNode }) {
    const [isPending, startTransition] = useTransition();
    const [isLoggingOut, startLogoutTransition] = useTransition();
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const { refresh } = useRefresh();
    const { toast } = useToast();
    
    const handleRefresh = () => {
      if (refresh) {
        startTransition(() => {
          refresh(true);
        });
      } else {
        toast({
            title: 'No action to refresh',
            description: 'This page does not have a refresh action.',
        });
      }
    };
  
    const handleLogout = async () => {
      startLogoutTransition(async () => {
          await logoutUser();
          window.location.href = '/login';
      });
    };
  
    return (
        <div className="flex flex-col flex-1">
          <header className="sticky top-0 z-40 w-full border-b bg-white">
            <div className="flex items-center h-16 px-4">
              <div className="flex items-center">
                <SidebarTrigger />
              </div>
              <div className="flex items-center justify-end flex-1 space-x-4">
                <nav className="flex items-center space-x-1">
                   <Button variant="ghost" size="icon" onClick={handleRefresh} disabled={isPending}>
                    <RefreshCw className={cn("h-4 w-4", isPending && "animate-spin")} />
                    <span className="sr-only">Refresh</span>
                  </Button>
                   <DropdownMenu open={isAccountMenuOpen} onOpenChange={(open) => {if (!isLoggingOut) setIsAccountMenuOpen(open)}}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" disabled={isLoggingOut}>
                           <User />
                           <span className="sr-only">My Account</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild className="cursor-pointer" disabled={isLoggingOut}>
                           <Link href="/profile">
                            <Users className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="cursor-pointer" 
                          onSelect={(e) => {
                            e.preventDefault();
                            handleLogout();
                          }} 
                          disabled={isLoggingOut}
                        >
                           <div className="flex items-center w-full">
                            {isLoggingOut ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <LogOut className="mr-2 h-4 w-4" />
                            )}
                            <span>Logout</span>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
              </div>
            </div>
          </header>

          <SidebarInset className="flex flex-col flex-1">
             <main className="flex-1">
              {children}
            </main>
            <footer className="py-4 border-t bg-white">
                <div className="container flex items-center justify-center h-8 px-4">
                    <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} DATGenie. All Rights Reserved. Designed and Developed by Christian Baccay
                    </p>
                </div>
            </footer>
          </SidebarInset>
        </div>
    );
}

function AppLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <LoadingPage />;
  }

  // user should be available here, but this is a fallback.
  // if not, middleware should handle redirect.
  if (!user) {
    return <LoadingPage />;
  }
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
             <div className="flex items-center ml-4 mr-6 space-x-2">
                <Logo />
                <span className="font-bold">DATGenie</span>
              </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarNavigation />
          </SidebarContent>
        </Sidebar>
        <LayoutBody>{children}</LayoutBody>
      </SidebarProvider>
    </div>
  );
}


export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <RefreshProvider>
        <TaxProfileProvider>
          <DatFilesProvider>
            <AppLayoutContent>{children}</AppLayoutContent>
          </DatFilesProvider>
        </TaxProfileProvider>
      </RefreshProvider>
    </UserProvider>
  )
}
