import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
    defaultOptions: {
        query: {
        fetchPolicy: 'no-cache',
        },
        mutate: {
        fetchPolicy: 'no-cache',
        }
    },

});

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}



