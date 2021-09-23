import * as React from 'react';

const MyState: React.FC = () => {
    const [ count, useCount ] = React.useState(0);
        
    return <button onClick={() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useCount(count+ 1);useCount(count+ 1);useCount(count+ 1)}}>按钮{count}</button>
}



export default MyState;