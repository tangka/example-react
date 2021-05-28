import Animation from "./pages/HookPage/useAnimtion";
import Request from "./pages/HookPage/useRequst";
import CenterPage from "./pages/stylePage/CenterPage";
import FlexPage from "./pages/stylePage/FlexPage";

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
        ],
        title: 'hooks页面',
        content: ``,
    }
}


export {
    routerList,
}