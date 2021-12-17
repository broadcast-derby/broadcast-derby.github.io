import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Pages */
import TopPage from './components/pages/Top'
import ConfigPage from './components/pages/Config'

/**
 * 画面遷移先をまとめるコンポーネント
 */
const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TopPage} exact />
        <Route path="/config" component={ConfigPage} exact />
      </Switch>
    </Router>
  )
}

export default Routes
