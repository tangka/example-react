import * as React from 'react';

// PureComponent 只进行浅比较
// 数据分为基本数据类型(String, Number, Boolean, Null, Undefined，Symbol)和对象数据类型。

// 基本数据类型的特点：直接存储在栈(stack)中的数据
// 引用数据类型的特点：存储的是该对象在栈中引用，真实的数据存放在堆内存里

// 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
export default class MyPureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            string:'',
            item: [{
                a: 'b'
            }],
        };
    }

    componentDidMount() {
        this.setState({
            string:'b',
        });
        console.log('componentDidMount', this.state.string, this.state.item);
        setTimeout(()=>{
            const item = this.state.item;
            item[0].a = 'c';
            this.setState({
                item,
            });
        });

        // 这种情况也会更新，因为是一个全新的对象而非引用地址
        setTimeout(()=>{
            this.setState({
                item: [{
                    a: 'b'
                }],
            });
        });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', this.state.item);
    }

    render() {
        return (
            <>
                aaaaaaa
                <div>
                    {this.state.item[0].a}
                </div> 
                <div>
                    {this.state.string}
                </div>
            </>
        )
    }
}
