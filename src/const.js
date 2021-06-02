import Animation from "./pages/HookPage/useAnimtion";
import Request from "./pages/HookPage/useRequst";
import CenterPage from "./pages/stylePage/CenterPage";
import FlexPage from "./pages/stylePage/FlexPage";
import Context from './pages/HookPage/useContext';
import MyRef from './pages/HookPage/useRef';
import Base from "./components/baseComponent";
import HOC from "./pages/Hoc";
import MyPureComponent from "./pages/PureComponent";
import MyIndex from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";

const routerList = {
    style: {
        navList: [
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
        ],
        title: 'style页面',
        content: `回流与重绘；
        回流改变layout布局 必定重绘

        不影响回流的。  脱离文档流 position transform transforms 和 opacity。

        display:none 会触发 reflow（回流）
        visibility:hidden 只会触发 repaint（重绘），因为没有发现位置变化`,
    },
    hook: {
        navList: [
            {
                to: '/hook/useRequest',
                content: 'To Request',
                component: Request,
            },
            {
                to: '/hook/useAnimation',
                content: 'To Animation',
                component: Animation,
            },
            {
                to: '/hook/useContext',
                content: 'To Context',
                component: Context,
            },
            {
                to: '/hook/useRef',
                content: 'To Ref',
                component: MyRef,
            },
        ],
        title: 'hooks页面',
        content: ``,
    }
}

const mainRouter = [
    {
        to: '/',
        content: 'To Index',
        component: MyIndex,
        exact: true,
    }, {
        to: '/hook',
        content: 'To Hook',
        component: () => <Base data={routerList.hook} />,
        exact: false,
    }, {
        to: '/style',
        content: 'To Style',
        component: () => <Base data={routerList.style} />,
        exact: false,
    }, {
        to: '/hoc',
        content: 'To HOC',
        component: HOC,
        exact: true,
    }, {
        to: '/pure',
        content: 'To Pure',
        component: () => <MyPureComponent />,
        exact: true,
    }, {
        to: '/404',
        content: '404',
        component: () => <ErrorPage code="404" />,
        exact: true,
    }
]


export {
    routerList,
    mainRouter,
}