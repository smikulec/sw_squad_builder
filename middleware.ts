import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/') {
      {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    }
  },
  {
    pages: {
      signIn: '/login',
    },
  },
);

export const config = { matcher: ['/dashboard', '/'] };
