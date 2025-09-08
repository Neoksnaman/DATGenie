
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

async function validateSession(token: string, requestUrl: string): Promise<boolean> {
    try {
        const url = new URL('/api/auth/session', requestUrl);
        // Use a lightweight HEAD request for validation
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

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const sessionToken = request.cookies.get('sessionToken')?.value;
    const { pathname } = request.nextUrl;

    const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname === '/forgot-password' || pathname === '/reset-password';

    // If the user is on an auth page
    if (isAuthPage) {
        if (sessionToken && pathname !== '/reset-password') {
            // Validate the token. If valid, redirect to home.
            // Allow access to reset-password even if logged in.
            const isValid = await validateSession(sessionToken, request.url);
            if (isValid) {
                return NextResponse.redirect(new URL('/home', request.url));
            }
            // If token is invalid, clear it and let them stay on auth page
            const response = NextResponse.next();
            response.cookies.delete('sessionToken');
            return response;
        }
        // No token, or on reset-password page, allow access
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
    '/home/:path*',
    '/profile/:path*',
    '/tax-profiles/:path*',
    '/dat-files/:path*',
    '/template/:path*',
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password',
  ],
}
