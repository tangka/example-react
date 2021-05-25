import * as React from 'react';
import { Route, Switch, HashRouter, NavLink } from 'react-router-dom';
import { Header, NavWrapper } from '@/style';
import ErrorPage from '../ErrorPage';
import FlexPage from './FlexPage';
import CenterPage from './CenterPage';

function LinkWrapper(props) {
  return <NavWrapper><NavLink exact to={props.to}>
    {props.content}
  </NavLink>
  </NavWrapper>
};

const styleNavList = [
  {
    to: '/style/flex',
    content: 'To Flex',
    component: FlexPage,
  },
  {
    to: '/style/center',
    content: '垂直居中',
    component: CenterPage,
  },
];



export default function StylePage() {
  return (<>
    <HashRouter>
      <div>
        <Header>
          style页面
        </Header>
        {
          styleNavList.map(
            nav => <LinkWrapper to={nav.to} content={nav.content} key={nav.to} />
          )
        }
        <Switch>
          {
            styleNavList.map(
              nav => <Route
                exact
                path={nav.to}
                component={nav.component}
              />
            )
          }
          <Route component={ErrorPage} />
        </Switch>
      </div></HashRouter>
  </>)
}