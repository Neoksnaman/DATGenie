
'use client';

import { useEffect, useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Loader2, Monitor, Smartphone, LogOut } from 'lucide-react';
import type { SessionInfo } from '@/lib/schemas';
import { getActiveSessions, logoutSession } from '@/lib/actions/users';
import { useToast } from '@/hooks/use-toast';
import { format, parseISO } from 'date-fns';

export function SessionCard() {
  const [sessions, setSessions] = useState<SessionInfo[]>([]);
  const [currentSessionToken, setCurrentSessionToken] = useState<string | null>(null);
  const [isLoading, startLoadingTransition] = useTransition();
  const [isLoggingOut, startLogoutTransition] = useTransition();
  const [loggingOutToken, setLoggingOutToken] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchSessions = () => {
    startLoadingTransition(async () => {
      const result = await getActiveSessions();
      if (result.success && result.sessions) {
        setSessions(result.sessions);
        setCurrentSessionToken(result.currentSessionToken);
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to load active sessions.',
          variant: 'destructive',
        });
      }
    });
  };

  useEffect(() => {
    fetchSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = (token: string, isAll: boolean = false) => {
    setLoggingOutToken(isAll ? 'all' : token);
    
    startLogoutTransition(async () => {
      const result = await logoutSession(token, isAll);
      if (result.success) {
        toast({
          title: 'Success',
          description: isAll ? 'Logged out of all other sessions.' : 'Session has been logged out.',
        });
        if (isAll) {
            setSessions(prev => prev.filter(s => s.token === currentSessionToken));
        } else {
            setSessions(prev => prev.filter(s => s.token !== token));
        }
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to log out.',
          variant: 'destructive',
        });
      }
      setLoggingOutToken(null);
    });
  };

  const getDeviceIcon = (deviceInfo: string) => {
    const lowerInfo = deviceInfo.toLowerCase();
    if (lowerInfo.includes('mobile') || lowerInfo.includes('iphone') || lowerInfo.includes('android')) {
      return <Smartphone className="h-5 w-5 text-muted-foreground" />;
    }
    return <Monitor className="h-5 w-5 text-muted-foreground" />;
  };

  const formatDeviceInfo = (deviceInfo: string) => {
    try {
        const osMatch = deviceInfo.match(/\(([^)]+)\)/);
        if (!osMatch) return "Unknown Device";
        
        const osInfo = osMatch[1].split(';').map(s => s.trim());
        const os = osInfo.find(s => s.toLowerCase().startsWith('windows') || s.toLowerCase().startsWith('macintosh') || s.toLowerCase().startsWith('linux') || s.toLowerCase().startsWith('android')) || 'Unknown OS';
        
        const browserMatch = deviceInfo.match(/(Chrome|Firefox|Safari|Edge|OPR)\/[\d.]+/);
        const browser = browserMatch ? browserMatch[0].replace('/', ' ') : 'Unknown Browser';

        return `${browser} on ${os.replace('Intel Mac OS X', 'macOS')}`;
    } catch {
        return "Unknown Device";
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
            <div>
                <CardTitle>Active Sessions</CardTitle>
                <CardDescription>Manage devices currently logged into your account.</CardDescription>
            </div>
            {sessions.filter(s => s.token !== currentSessionToken).length > 0 && (
                 <Button
                    variant="outline"
                    size="sm"
                    onClick={() => currentSessionToken && handleLogout(currentSessionToken, true)}
                    disabled={isLoggingOut || !currentSessionToken}
                >
                    {isLoggingOut && loggingOutToken === 'all' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Logout all other sessions
                </Button>
            )}
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center h-24">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {sessions.map((session) => (
              <li key={session.token} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  {getDeviceIcon(session.deviceInfo)}
                  <div>
                    <p className="font-medium">
                      {formatDeviceInfo(session.deviceInfo)}
                      {session.token === currentSessionToken && (
                        <span className="ml-2 text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                          Current device
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {session.ipAddress} &middot; Last active: {format(parseISO(session.loginTime), "MMM d, yyyy 'at' h:mm a")}
                    </p>
                  </div>
                </div>
                {session.token !== currentSessionToken && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLogout(session.token)}
                    disabled={isLoggingOut}
                  >
                    {isLoggingOut && loggingOutToken === session.token ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                    ) : (
                       <LogOut className="mr-2 h-4 w-4" />
                    )}
                    Logout
                  </Button>
                )}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
