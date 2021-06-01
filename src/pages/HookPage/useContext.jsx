import * as React from 'react';
import withTodo from '../../components/withTodo';

const ctx = React.createContext(null);

// const { Provider, Consumer } = ctx;
const { Provider } = ctx;

// 原
// const Child = () => {
//     return <Consumer>
//         {
//             value => {
//                 return <div>{value}</div>
//             }
//         }
//     </Consumer>
// }

const Desendants = () => {
    const { value, action } = React.useContext(ctx);
    return <React.Fragment>
        <div>{value}</div>
        <button onClick={() => {
            action((value) => {
                console.log(value);
            }, value + 1)
        }}>点击</button>
    </React.Fragment>
}

const Dchild = () => {
    const { value } = React.useContext(ctx);
    return <div style={{color:'aqua'}}>{value}</div>
}

// 现
const Child = () => {
    return <><Desendants />
    <Dchild />
    </>
}

const Context = () => {
    const [count, setCount] = React.useState(0)
    return <Provider value={{
        value: count,
        action: (callback, value) => {
            setCount(value);
            callback(value);
        }
    }}>
        <Child />
    </Provider>
}
export default withTodo(false)(Context);