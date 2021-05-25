import * as React from 'react';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import './App.css';
import MyIndex from './pages/Index';
import MyPureComponent from './pages/PureComponent';
import ErrorPage from './pages/ErrorPage';
import StylePage from './pages/stylePage';
// import FlexPage from './pages/stylePage/FlexPage';

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
            component={() => <MyPureComponent />}
          />
          <Route
            path="/style"
            component={StylePage}
          />
          {/* <Route
            exact
            path="/style/flex"
            component={FlexPage}
          /> */}
          <Route exact path="/404" component={() => <ErrorPage code="404" />} />
          <Route component={() => <Redirect to="/404" />} />
      </Switch>
    </Router>
  );
}

export default App;
