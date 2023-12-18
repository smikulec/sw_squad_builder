import type { Metadata } from 'next';
import { ApolloNextProvider, NextAuthProvider } from '@/providers';
import '../styles/globals.css';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Star Wars Squad Builder',
  description: 'Simple app for building Star Wars squads',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ApolloNextProvider>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </ApolloNextProvider>
    </html>
  );
}
