
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

async function validateSession(token: string, requestUrl: string): Promise<boolean> {
    try {
        const url = new URL('/api/auth/session', requestUrl);
        const response = await fetch(url, {
            method: 'HEAD',
            headers: {
                'Cookie': `sessionToken=${token}`
            }
        });
        return response.ok;
    } catch (error) {
        console.error('Error validating session in middleware:', error);
        return false;
    }
}

export async function middleware(request: NextRequest) {
    const sessionToken = request.cookies.get('sessionToken')?.value;
    const { pathname } = request.nextUrl;

    const isAuthPage = ['/login', '/signup', '/forgot-password', '/reset-password', '/verify'].some(p => pathname.startsWith(p));
    const isWelcomePage = pathname === '/';

    // If the user is on an auth page or the welcome page
    if (isAuthPage || isWelcomePage) {
        if (sessionToken) {
            // Validate the token. If valid, redirect them to the app.
            const isValid = await validateSession(sessionToken, request.url);
            if (isValid) {
                 // For logged-in users, root path and auth pages redirect to home
                 if(isWelcomePage || isAuthPage) {
                    return NextResponse.redirect(new URL('/home', request.url));
                 }
            } else {
                // If token is invalid, clear it and let them stay on the public page
                const response = NextResponse.next();
                response.cookies.delete('sessionToken');
                return response;
            }
        }
        // No token, allow access to public pages
        return NextResponse.next();
    }

    // If the user is on a protected page
    if (!sessionToken) {
        // No token, redirect to login
        return NextResponse.redirect(new URL('/login', request.url));
    }
    
    // Validate the token for protected routes
    const isValid = await validateSession(sessionToken, request.url);
    if (!isValid) {
        // If token is invalid, redirect to login and clear the cookie
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.delete('sessionToken');
        return response;
    }

    // If everything is fine, allow access
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/', // Root welcome page
    '/home/:path*',
    '/profile/:path*',
    '/tax-profiles/:path*',
    '/dat-files/:path*',
    '/template/:path*',
    '/tools/:path*',
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password',
    '/verify',
  ],
}
