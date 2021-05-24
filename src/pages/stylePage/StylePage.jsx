import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FlexPage from './FlexPage';

export default function StylePage () {
    return (<>
        style页面
        <Route
          exact
          path="/style/flex"
          component={FlexPage}
        />
        <Route component={() => <Redirect to="/404" />} />
        {/* <Route component={() => <Redirect to="/404" />} /> */}
        {/* <Route
          exact
          path="/supplier/supplierInfoSet"
          component={SupplierInfoSet}
        /> */}
        {/* <Route component={() => <Redirect to="/style/flex" />} /> */}
  </>)
} 