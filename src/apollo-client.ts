import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;
