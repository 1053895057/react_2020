// useLayoutEffect
// 和useEffect作用一样，在组件生成过程中，做一些操作

// 不同：
// 1.执行时间不同，useEffect实在componentDidMount以后执行，
// useLayoutEffect在浏览器执行绘制之前执行（会阻塞组件挂载，慎用）

import React,{useLayoutEffect,useEffect,useState} from 'react'

export default ()=>{
    const [count,setCount]=useState(0)
    useEffect(() => {
        console.log("useEffect")
        return () => {
            console.log("useEffect-return")
        }
    })

    useLayoutEffect(()=>{
        console.log("useLayoutEffect")
        return ()=>{
            console.log("useLayoutEffect-return")
        }
    })

    return (
        <div>
            <h1>useLayoutEffect</h1>
            <h2>{count}</h2>
            <button onClick={()=>{
                setCount(count+1)
            }}>useLayoutEffect-useEffect</button>
        </div>
    )
}