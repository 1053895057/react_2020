// useCallback

//作用：避免组件重复渲染，提高性能（useMemo）
// 可以控制组件什么时候更细
// 同样用到了缓存技术，和useMemo不同
// useCallback缓存的是一个函数，是个函数就可以执行

// useCallback有两个参数，第一个参数是个函数，第二个参数是个数组
// useCallback(()=>{},[可以不写])

// const callback=useCallback(()=>{},[])
// callback是个函数，可以直接callback()执行

import {useState,useCallback} from 'react'
export default ()=>{
    const [count,setCount]=useState(0)
    const [num,setNum]=useState(10)
    let callback=useCallback(()=>{
        console.log(count)
        return count+2
    },[num])
    return (
        <>
            <h3>状态count:{count}</h3>
            <h3>callbakc：{callback()}</h3>
            <h3>状态num:{num}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>setCount</button>
            <button onClick={()=>{
                setNum(num-1)
            }}>setNum</button>
        </>
    )
}