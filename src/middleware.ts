import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/discord') {
    return NextResponse.redirect(new URL('https://discord.gg/tmwgg', request.url));
  }
}

export const config = {
  matcher: '/discord',
};
