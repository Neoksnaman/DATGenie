
'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { LogOut, FileSpreadsheet, History, RefreshCw, Home, Users, User, Loader2, Coffee, Wrench } from 'lucide-react';
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
  SidebarFooter,
} from '@/components/ui/sidebar';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { RefreshProvider, useRefresh } from '@/hooks/use-refresh';
import { TaxProfileProvider, useTaxProfiles } from '@/hooks/use-tax-profiles';
import { DatFilesProvider, useDatFiles } from '@/hooks/use-dat-files';
import { logoutUser } from '@/lib/actions/auth';
import { LoadingPage } from '@/components/loading-page';
import { useIsMobile } from '@/hooks/use-mobile';
import { useUser } from '@/hooks/use-user';


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
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.startsWith('/tools')}>
          <Link href="/tools" onClick={handleLinkClick}>
            <Wrench/>
            Tools
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
            <footer className="py-6 border-t bg-white">
                <div className="container flex flex-col items-center justify-center gap-2 text-center">
                    <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} DATGenie. All Rights Reserved. Designed and Developed by Christian Baccay
                    </p>
                     <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <span>Built with</span>
                        <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold hover:underline">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 409" className="h-[20px] w-auto mt-1" fill="currentColor">
                              <g clipPath="url(#clip0_60_3832)">
                                <path d="M122.838 267.267C134.271 271.869 146.676 274.6 159.7 275.054C177.327 275.67 194.088 272.026 209.073 265.103C191.104 258.043 174.83 247.719 160.941 234.883C151.937 249.298 138.621 260.684 122.838 267.267Z" fill="#FF9100"/>
                                <path d="M160.938 234.887C129.233 205.564 110 163.124 111.625 116.574C111.678 115.062 111.758 113.551 111.851 112.041C106.173 110.572 100.245 109.676 94.1443 109.463C85.4119 109.158 76.9555 110.241 68.9718 112.49C60.5083 127.315 55.4009 144.325 54.7647 162.546C53.1226 209.568 81.5788 250.655 122.835 267.271C138.619 260.688 151.934 249.315 160.938 234.887Z" fill="#FFC400"/>
                                <path d="M160.94 234.886C168.311 223.089 172.78 209.259 173.3 194.359C174.669 155.165 148.32 121.448 111.853 112.04C111.759 113.55 111.68 115.061 111.627 116.572C110.001 163.122 129.235 205.563 160.94 234.886Z" fill="#FF9100"/>
                                <path d="M169.222 1.86735C148.452 18.5064 132.051 40.4465 122.128 65.7209C116.447 80.1978 112.877 95.7483 111.835 112.049C148.303 121.458 174.652 155.174 173.283 194.368C172.763 209.269 168.28 223.085 160.922 234.895C174.811 247.745 191.085 258.056 209.055 265.116C245.122 248.443 270.712 212.568 272.194 170.134C273.154 142.641 262.591 118.138 247.665 97.4553C231.903 75.5811 169.222 1.86735 169.222 1.86735Z" fill="#DD2C00"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_60_3832">
                                  <rect width="327" height="409" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                           <span className="font-semibold">Firebase</span>
                        </a>
                       <span>&</span>
                        <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-semibold hover:underline">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              className="h-4 w-4"
                              fill="currentColor"
                            >
                                <path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#gemini-gradient-app)"></path>
                                <defs>
                                <radialGradient id="gemini-gradient-app" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)">
                                    <stop offset=".067" stopColor="#9168C0"></stop>
                                    <stop offset=".343" stopColor="#5684D1"></stop>
                                    <stop offset=".672" stopColor="#1BA1E3"></stop>
                                </radialGradient>
                                </defs>
                            </svg>
                           <span className="font-semibold">Gemini</span>
                        </a>
                    </div>
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
  const { user, isLoading: isUserLoading } = useUser();
  const { initialFetchComplete: profilesFetchComplete } = useTaxProfiles();
  const { initialFetchComplete: filesFetchComplete } = useDatFiles();

  const isAppLoading = isUserLoading || !profilesFetchComplete || !filesFetchComplete;

  if (isAppLoading) {
    return <LoadingPage />;
  }

  // user should be available here, but this is a fallback.
  // if not, middleware should handle redirect.
  if (!user) {
    return <LoadingPage />;
  }
  
  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
             <Link href="/home" className="flex items-center ml-4 mr-6 space-x-2">
                <Logo />
                <span className="font-bold">DATGenie</span>
              </Link>
          </SidebarHeader>
          <SidebarContent>
            <div className="flex flex-col justify-between h-full">
                <SidebarNavigation />
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild variant="ghost">
                            <Link href="https://ko-fi.com/datgenie" target="_blank" rel="noopener noreferrer">
                                <Coffee className="text-primary" />
                                Buy Me a Coffee
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </div>
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
      <RefreshProvider>
        <TaxProfileProvider>
          <DatFilesProvider>
            <AppLayoutContent>{children}</AppLayoutContent>
          </DatFilesProvider>
        </TaxProfileProvider>
      </RefreshProvider>
  )
}

    