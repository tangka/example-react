import * as React from 'react';
import { LinkWrapper } from '../../components/baseComponent';
import { mainRouter } from '../../const';

export default function MyIndex() {
    return <React.Fragment>DEMO集合
        {mainRouter.map(
        nav => <LinkWrapper to={nav.to} content={nav.content} key={nav.to} />
    )}
    </React.Fragment>
}