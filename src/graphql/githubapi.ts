import { 
  ApolloClient,
  createHttpLink, 
  ApolloLink, 
  NormalizedCacheObject,
  gql
} from '@apollo/client';
import fetch from "cross-fetch";
import {setContext} from '@apollo/client/link/context';
import {SETTINGS} from '../settings/settings';
import { cache } from '../cache';

// Squema
export const typeDefs = gql`
  extend type Query {
    getLoadingVar: Boolean!
    getErrorVar: Boolean!
  }
`;



const { URI, TOKEN } = SETTINGS.API_GITHUB;


const httpLink: ApolloLink = createHttpLink({
  uri: URI,
  fetch
});

const authLink: ApolloLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    }
  };
});


const client :ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs
});

export default client;
