import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3444/graphql',
  }),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}