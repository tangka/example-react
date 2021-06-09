import React, {useEffect, useState} from 'react';
import img from './fiber.image';


class FiberNode1 extends React.Component {
    componentDidMount() {
        console.log('FiberNode1 Mount')
    }
    componentDidUpdate() {
        console.log('FiberNode1 Update')
    }
    render() {
        console.log('FiberNode1 Render')
        return <FiberNode3 />
    }
}


class FiberNode2 extends React.Component {
    componentDidMount() {
        console.log('FiberNode2 Mount')
    }
    componentDidUpdate() {
        console.log('FiberNode2 Update')
    }
    render() {
        console.log('FiberNode2 Render')
        return <FiberNode4 />
    }
}

class FiberNode3 extends React.Component {
    componentDidMount() {
        console.log('FiberNode3 Mount')
    }
    componentDidUpdate() {
        console.log('FiberNode3 Update')
    }
    render() {
        console.log('FiberNode3 Render')
        return <div>FiberNode3</div>
    }
}

class FiberNode4 extends React.Component {
    componentDidMount() {
        console.log('FiberNode4 Mount')
    }
    componentDidUpdate() {
        console.log('FiberNode4 Update')
    }
    render() {
        console.log('FiberNode4 Render')
        return <div>FiberNode4</div>
    }
}

export default class Fiber extends React.Component {
    constructor() {
        super()
        this.state = {
            a: '1'
        }
    }
    componentDidMount() {
        console.log(this._reactInternals)
        console.log(this._reactInternals.child)
        // debugger
        setTimeout(()=>{
            this.setState(()=>{
                return {
                    a: '2'
                }
            })
        })
    }

    render() {
        return <><FiberNode1 data={this.state.a} />
        <img src={img} alt="" />
        {this.state.a === '2' ? <FiberNode2 data={this.state.a}  /> : null }</>
    }
}


/*     

{   type 对于类组件，它指向构造函数；对于DOM元素，它指定HTML tag
    key 唯一标识符
    stateNode 实例对象 如果是原生dom，就是dom对象； 如果是rootFiber 就是FiberRoot；
    tag;  标记不同组件类型，如函数组件、类组件、文本、原生组件...

    // fiber
    return  父节点
    child  第一个子节点
    sibling 兄弟节点
    memoizedState  记录state  hooks 用于创建输出的fiber状态
    updateQueue 记录副作用 commit阶段调用  用于状态更新，回调函数，DOM更新的队列
    index 第几个子节点
    pendingProps: any, // 已从React元素中的新数据更新，并且需要应用于子组件或DOM元素的props
    memoizedProps: any, // 在前一次渲染期间用于创建输出的props

    //effect
    flags 当前 fiber 要进行何种更新
    effectTag 当前 fiber 要进行何种更新
    this.nextEffect = null; // 指向下个需要更新的fiber
    this.firstEffect = null; // 指向所有子节点里，需要更新的 fiber 里的第一个
    this.lastEffect = null; // 指向所有子节点中需要更新的 fiber 的最后一个
    this.expirationTime = NoWork; // 过期时间，代表任务在未来的哪个时间点应该被完成
    this.childExpirationTime = NoWork; // child 过期时间
    lanes 
    // ou t lei t 交替
    this.alternate = null; // current 树和 workInprogress 树之间的相互引用
} 
*/

/* 
workInProgess current 双缓存机制的作用

fiber结果上的 alternate 就是互相引用

类似于图形化领域的'双缓存(Double Buffering)'技术, 
图形绘制引擎一般会使用双缓冲技术，先将图片绘制到一个缓冲区，
再一次性传递给屏幕进行显示，
这样可以防止屏幕抖动，优化渲染性能。

放到React 中，WIP树就是一个缓冲，它在Reconciliation 完毕后一次性提交给浏览器进行渲染。
它可以减少内存分配和垃圾回收，
WIP 的节点不完全是新的，比如某颗子树不需要变动，React会克隆复用旧树中的子树。

双缓存技术还有另外一个重要的场景就是异常的处理，比如当一个节点抛出异常，仍然可以继续沿用旧树的节点，避免整棵树挂掉。

类似与git 分支 处理

*/

/* 
遍历顺序 深度优先  双向链表结构 render协调过程

workInProgess 表示当前正在更新的fiber树，current树表示上一次更新的dom树，每次更新完，workInProgess会复制
给 current workInProgess通过alternate属性和 currentFiber 的节点建立联系
在新 workInProgress tree 的创建过程中，会同 currentFiber 的对应节点进行 Diff 比较，收集副作用。同时也会复用和 currentFiber 对应的节点对象，减少新创建对象带来的开销。也就是说无论是创建还是更新，挂起、恢复以及终止操作都是发生在 workInProgress tree 创建过程中。workInProgress tree  构建过程其实就是循环的执行任务和创建下一个任务，大致过程如下：

执行一个工作单元完成后，会看还有没多余的时间，没有把控制权给浏览器，有继续执行下一个工作单元

*/

/* js基础
 事件执行 => js执行(定时器是否到时间) => Begin Frame（开始帧）=> requestAnimationFrame 动画帧 =>  布局 => 绘制 => requestIdleCallback 

*/