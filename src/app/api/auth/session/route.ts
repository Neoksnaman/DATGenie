
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { findUserByTokenFromSheet } from '@/lib/googlesheets';

export async function GET(request: NextRequest) {
  const sessionToken = request.cookies.get('sessionToken')?.value;

  if (!sessionToken) {
    return NextResponse.json({ isValid: false }, { status: 401 });
  }

  try {
    const user = await findUserByTokenFromSheet(sessionToken);
    if (user) {
      return NextResponse.json({ isValid: true });
    } else {
      return NextResponse.json({ isValid: false }, { status: 401 });
    }
  } catch (error) {
    console.error('API session validation error:', error);
    return NextResponse.json(
      { isValid: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Implement a HEAD method for lightweight session checks if needed
export async function HEAD(request: NextRequest) {
  const sessionToken = request.cookies.get('sessionToken')?.value;
  if (!sessionToken) {
    return new Response(null, { status: 401 });
  }
  try {
    const user = await findUserByTokenFromSheet(sessionToken);
    if (user) {
        return new Response(null, { status: 200 });
    } else {
        return new Response(null, { status: 401 });
    }
  } catch (error) {
    // In case of a backend error, we should deny access for security.
    return new Response(null, { status: 500 });
  }
}
