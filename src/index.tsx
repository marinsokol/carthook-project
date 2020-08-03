import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import App from './App'
import { Store } from './context'
import { client } from './gql/client'
import * as serviceWorker from './serviceWorker'

import 'antd/dist/antd.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Store>
      <App />
    </Store>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
