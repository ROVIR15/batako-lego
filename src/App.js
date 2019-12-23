import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import Main from './layouts/main'
import withRoot from './withRoot'
import { createBrowserHistory } from 'history'

const hist = createBrowserHistory()

function App() {
  return (
    <div id="home" className="App" style={{maxWidth: `calc(${window.innerWidth}px)`}}>
      <Router history={hist}>
        <Switch>
          <Main />
        </Switch>
      </Router>
    </div>
  )
}

export default withRoot(App);
