import * as React from 'react';
import MockJS from 'mockjs';

const Request = () => {
    const [data, reload] = useRequest('xxx', {
        num: 10,
    })
    if (data === null) {
        return <div>loading...</div>
    }
    return <React.Fragment>
        <ul>
            {
                data.map((v, i) => <li key={i} >{v}</li>)
            }
        </ul>
        <button onClick={reload}>刷新数据</button>
    </React.Fragment>
}

function request(url, params) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MockJS.mock({
                [`list|1-${params.num}`]: [{
                    'name': '@cname'
                }]
            }).list.map(x => x.name))

        }, 2000)
    })
}

// 解耦 
const useRequest = (url, params) => {
    const [data, setData] = React.useState(null);
    React.useEffect(
        () => {
            request(url, params).then(
                res => {
                    setData(res);
                }
            )
            console.log('aaa');
        }, []
    )
    const reload = React.useCallback(
        () => {
            setData(null);
            request(url, params).then(
                res => {
                    setData(res);
                }
            )
        }
        , []
    )

    return [
        data,
        reload,
    ]
}

export default Request;