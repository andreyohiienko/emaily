import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from 'components/App'
import reducers from 'reducers'
import './styles/index.scss'

import axios from 'axios'
window.axios = axios

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

console.log(
  'process.env.react_app_stripe_key',
  process.env.REACT_APP_STRIPE_KEY,
)
console.log('process.env.node_env', process.env.NODE_ENV)
