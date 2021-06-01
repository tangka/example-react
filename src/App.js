import * as React from 'react';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import './App.css';
import MyIndex from './pages/Index';
import MyPureComponent from './pages/PureComponent';
import ErrorPage from './pages/ErrorPage';
import HOC from './pages/Hoc';
import { routerList } from './const';
import Base from '../src/components/baseComponent';
import Context from './pages/HookPage/useContext';
import MyRef from './pages/HookPage/useRef';

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
          path="/hoc"
          component={HOC}
        />
        <Route
          exact
          path="/context"
          component={() => <Context />}
        />
        <Route
          exact
          path="/ref"
          component={() => <MyRef />}
        />
        <Route
          exact
          path="/pure"
          component={() => <MyPureComponent />}
        />
        <Route
          path="/style"
          component={() => <Base data={routerList.style} />}
        />
        <Route
          path="/hook"
          component={() => <Base data={routerList.hook} />}
        />
        <Route exact path="/404" component={() => <ErrorPage code="404" />} />
        <Route component={() => <Redirect to="/404" />} />
      </Switch>
    </Router>
  );
}

export default App;
