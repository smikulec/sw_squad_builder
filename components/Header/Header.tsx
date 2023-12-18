'use client';
import { Button } from '../ui';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const handleCreateSquad = () => {
    // Logic for creating a squad
  };

  if (pathname.includes('/login') || pathname.includes('signin')) {
    return null;
  }

  return (
    <header className="header flex justify-end gap-8 bg-black/70 py-8 pr-12">
      <Button
        variant="outline"
        onClick={handleCreateSquad}
        className="text-white"
      >
        Create Squad
      </Button>
      <Button variant="ghost" onClick={() => signOut()} className="text-white">
        Logout
      </Button>
    </header>
  );
};

export default Header;
