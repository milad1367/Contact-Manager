import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { resolvers, defaults } from './resolvers';
import { withClientState } from 'apollo-link-state';
import * as serviceWorker from './serviceWorker'

const typeDefs = `

`;
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: withClientState({ resolvers, defaults, cache, typeDefs }),
});

ReactDOM.render(<ApolloProvider client={client}>
                   <div className="container">
                     <App />
                  </div>
                </ApolloProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
