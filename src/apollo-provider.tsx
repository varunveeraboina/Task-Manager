'use client';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/apollo-client';

export default function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
