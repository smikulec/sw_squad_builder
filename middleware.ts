import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { ROUTES } from './routes';

export default withAuth(
  function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/') {
      {
        return NextResponse.redirect(
          new URL(ROUTES.DASHBOARD_URL, request.url)
        );
      }
    }
  },
  {
    pages: {
      signIn: ROUTES.LOGIN_URL,
    },
  }
);

export const config = { matcher: ['/dashboard', '/'] };
