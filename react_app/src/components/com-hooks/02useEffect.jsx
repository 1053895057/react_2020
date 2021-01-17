import {useState,useEffect} from 'react'

export default ()=>{
    const [count,setCount]=useState(0)
    const [name,setName]=useState('tsj')
    /*
        # useEffect
        1.componentDidMount,componentDidUpdate和componentWillUnmount
        2.副作用（DOM操作，数据请求，组件更新）
        3.useEffect 为什么在组件函数内部执行？可以获取props和state，采用闭包的心事
        4.无组件更新
        5.useEffect(回调函数，数组(可不写))
        6.多个useEffect()
    */ 

    // componentDidMount组件挂载的时候一定会执行
    // componentDidUpdate，添加空数组，不会执行
    // componentWillUnmount，return函数执行
   useEffect(()=>{
       console.log(count)
        // return的函数组件卸载的时候调用   
       return ()=>{
           console.log('componentWillUnmount')
       }
   },[])  //加一个参数空数组，每次更新就不会触发useEffect，如果有多个state属性，数组中[count]写哪几个，就监听哪几个
   return (
       <div>
           <h2>effect</h2>
           <p>{count}</p>
           <button onClick={()=>setCount(count+1)}>点击</button>
       </div>
   )
}