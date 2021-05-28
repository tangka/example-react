import * as React from 'react';
import { Route, Switch, HashRouter, NavLink } from 'react-router-dom';
import { Header, NavWrapper } from '@/style';
import ErrorPage from '../pages/ErrorPage';

function LinkWrapper(props) {
    return <NavWrapper><NavLink exact to={props.to}>
        {props.content}
    </NavLink>
    </NavWrapper>
};

export default function Base({ data: { navList, title, content } }) {
    return (<>
        <HashRouter>
            <div>
                <Header>
                    {title}
                </Header>
                {content}

                {
                    navList.map(
                        nav => <LinkWrapper to={nav.to} content={nav.content} key={nav.to} />
                    )
                }
                <Switch>
                    {
                        navList.map(
                            nav => <Route
                                exact
                                path={nav.to}
                                component={nav.component}
                                key={nav.to}
                            />
                        )
                    }
                    <Route component={ErrorPage} />
                </Switch>
            </div></HashRouter>
    </>)
}