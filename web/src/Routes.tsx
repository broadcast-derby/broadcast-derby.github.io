import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Pages */
import ConfigPage from 'pages/Config'
import GamePage from 'pages/Game'
import TopPage from 'pages/Top'

/**
 * 画面遷移先をまとめるコンポーネント
 */
const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TopPage} exact />
        <Route path="/config" component={ConfigPage} exact />
        <Route path="/game" component={GamePage} exact />
      </Switch>
    </Router>
  )
}

export default Routes
