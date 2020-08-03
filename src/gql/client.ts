import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri: 'http://www.recipepuppy.com/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})
