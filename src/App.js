import * as React from 'react';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import './App.css';
import MyIndex from './pages/Index';
import MyPureComponent from './pages/PureComponent';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
          <Route
            exact
            path="/"
            component={MyIndex}
          />
          <Route
            exact
            path="/pure"
            component={MyPureComponent}
          />
          {/* <Route
            exact
            path="/supplier/supplierInfoSet"
            component={SupplierInfoSet}
          /> */}
          <Route exact path="/404" component={() => <ErrorPage code="404" />} />
          <Route component={() => <Redirect to="/404" />} />
      </Switch>
    </Router>
  );
}

export default App;
