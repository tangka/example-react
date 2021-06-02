import * as React from 'react';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import './App.css';
import { mainRouter } from './const';

function App() {
  return (
    <Router>
      <Switch>
        {
          mainRouter.map(item => <Route
            exact={item.exact}
            path={item.to}
            component={item.component}
          />)
        }
        <Route component={() => <Redirect to="/404" />} />
      </Switch>
    </Router>
  );
}

export default App;
