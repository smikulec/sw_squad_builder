'use client';

import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { Header } from '../Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <body className={poppins.className}>
      <Header />
      <main>{children}</main>
    </body>
  );
};

export default Layout;
