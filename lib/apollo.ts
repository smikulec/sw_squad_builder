/**
 * The code adapted from this blog post for making ApolloProvider work in NextJS
 * https://www.apollographql.com/blog/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router
 **/

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { getLocalStorageItem } from './utils';
import { STORAGE_TOKEN_KEY } from '@/constants';

const storedToken = getLocalStorageItem(STORAGE_TOKEN_KEY);

export const makeApolloClient = () => {
  const userToken = storedToken ? JSON.parse(storedToken) : '';
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: 'no-store' },
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
    headers: {
      authorization: userToken,
    },
  });

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
};
