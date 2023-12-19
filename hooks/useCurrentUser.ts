'use client';

import { STORAGE_TOKEN_KEY } from '@/constants';
/**
 *  This is a hacky patch to save the token received when the user has logged in on client side.
 *  This is needed to adjust headers in ApolloClient to be able to make authenticated requests.
 */

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export const useCurrentUser = () => {
  const session = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (session.status === 'authenticated') {
      localStorage.setItem(
        STORAGE_TOKEN_KEY,
        JSON.stringify(session?.data?.accessToken)
      );
      setIsLoggedIn(true);
    }

    if (session.status === 'unauthenticated') {
      localStorage.removeItem(STORAGE_TOKEN_KEY);
      setIsLoggedIn(false);
    }
  }, [session.status]);

  return { isLoggedIn };
};
