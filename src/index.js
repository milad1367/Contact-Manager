import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import * as serviceWorker from './serviceWorker'
import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { resolvers, defaults } from './resolvers';
import { withClientState } from 'apollo-link-state';
const typeDefs = `

`;
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: withClientState({ resolvers, defaults, cache, typeDefs }),
});


  const query = gql`
  query test {
    showEditModal @client 
    
  }
`;
  let previous = cache.readQuery({ query });
  console.log(previous);
ReactDOM.render(<ApolloProvider client={client}>
                    <App />
                </ApolloProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
