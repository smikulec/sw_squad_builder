'use client';

import { makeApolloClient } from '@/lib/apollo';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';

const ApolloNextProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeApolloClient}>
      {children}
    </ApolloNextAppProvider>
  );
};

export default ApolloNextProvider;
