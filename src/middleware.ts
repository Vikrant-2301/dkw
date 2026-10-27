import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the grand-opening page and all Next.js internals/static assets through
  if (
    pathname === '/grand-opening' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/logo') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to grand-opening
  return NextResponse.redirect(new URL('/grand-opening', request.url));
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logo.png|images/).*)',
  ],
};
