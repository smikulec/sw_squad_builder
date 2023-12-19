'use client';
import { Button } from '../ui';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/routes';

const Header = () => {
  const pathname = usePathname();

  if (
    pathname.includes(ROUTES.LOGIN_URL) ||
    pathname.includes(ROUTES.SIGNIN_URL)
  ) {
    return null;
  }

  return (
    <header className="header flex justify-end gap-8 bg-black/70 py-8 pr-12">
      <Button variant="ghost" onClick={() => signOut()} className="text-white">
        Logout
      </Button>
    </header>
  );
};

export default Header;
