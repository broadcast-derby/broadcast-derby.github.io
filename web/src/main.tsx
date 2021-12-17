import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/**
 * StrictModeが開発を便利にしてくれる！
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
