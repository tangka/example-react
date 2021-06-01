import React, { useEffect, useRef, useState, useImperativeHandle } from 'react'
import { forwardRef } from 'react';
import withTodo from '../../components/withTodo'

const Input = (props, mref) => {
    const ref = useRef();

    // 子组件提供使用ref的属性 在使用 ref 时自定义暴露给父组件的实例值
    useImperativeHandle(mref, () => {
        return {
            focus: () => {
                ref.current.focus()
            }
        }
    }, [])

    useEffect(() => {
        ref.current.value = props.initialValue
    }, [props.initialValue])

    return <input ref={ref} onChange={(e) => { props.onChange(e.target.value) }} />
}

const MInput = forwardRef(Input);

const MyRef = () => {
    const r1 = useRef();
    const [value, setValue] = useState('')

    useEffect(() => {
        console.log('didMount')
        return () => {
            console.log('will nomount')
        }
    }, [])

    return <div>
        {/* <Input initialValue={1000} onChange={(e) => { console.log(e) }} /> */}
        <MInput ref={r1} initialValue={1000} onChange={(e) => { console.log(e) }} />
        <button onClick={() => { console.log(r1);r1.current.focus() }}>click me</button>
    </div>
}

export default withTodo(false)(MyRef);