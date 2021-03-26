import { 
  ApolloClient,
  InMemoryCache, 
  createHttpLink, 
  ApolloLink, 
  NormalizedCacheObject ,
} from '@apollo/client';
import fetch from "cross-fetch";
import {setContext} from '@apollo/client/link/context';
import {SETTINGS} from '../settings/settings';

const { URI, TOKEN } = SETTINGS.API_GITHUB;


const httpLink: ApolloLink = createHttpLink({
  uri: URI,
  fetch,
});

const authLink: ApolloLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    },
  };
});

const client :ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
   
});

export default client;
