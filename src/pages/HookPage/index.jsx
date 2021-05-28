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



export default function HookPage() {
  return (<>
    <HashRouter>
      <div>
        <Header>
          style页面
        </Header>
        回流与重绘；
        回流改变layout布局 必定重绘

        不影响回流的。  脱离文档流 position transform transforms 和 opacity。

        display:none 会触发 reflow（回流）
        visibility:hidden 只会触发 repaint（重绘），因为没有发现位置变化
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