import React, { useEffect } from 'react';


// 动态路由加载处理异步

const MySuspense = () => {
    useEffect(()=>{
        console.log('.b.b.b')
    })


    console.log('.a.a.a')
    return <div>MySuspense</div>
}

export default MySuspense;