import { loginHandler, signupHandler } from '@/graphql/mutations/handlers';
import { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials || !credentials.email || !credentials.password) {
            return null;
          }

          const isSignup = req?.headers?.referer?.includes('signin');

          const response = isSignup
            ? await signupHandler({
                email: credentials?.email,
                password: credentials?.password,
              })
            : await loginHandler({
                email: credentials?.email,
                password: credentials?.password,
              });

          if (response) {
            return {
              email: response.user.email,
              id: response.token,
            };
          }
        } catch (error) {
          return null;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.sub;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};
