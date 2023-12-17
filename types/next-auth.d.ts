import NextAuth from 'next-auth';

/**
 * extend the session type to include our custom property
 */

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
  }
}
