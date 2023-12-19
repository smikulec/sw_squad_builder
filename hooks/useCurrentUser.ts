'use client';

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
        'userToken',
        JSON.stringify(session?.data?.accessToken)
      );
      setIsLoggedIn(true);
    }

    if (session.status === 'unauthenticated') {
      localStorage.removeItem('userToken');
      setIsLoggedIn(false);
    }
  }, [session.status]);

  return { isLoggedIn };
};
