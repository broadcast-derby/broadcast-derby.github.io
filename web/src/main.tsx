import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import App from './App'

/**
 * StrictModeが開発を便利にしてくれる！
 */
ReactDOM.render(
  (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider >
    </React.StrictMode>
  ),
  document.getElementById('root')
)
