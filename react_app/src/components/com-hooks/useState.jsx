import React, { useState } from 'react'

const Index = () => {
    const [count, setCount] = useState(0)
    const [obj,setObj]=useState({name:"zhangsan"})
    const [arr,setArr]=useState([1,2,3])
    const [func,setfunc]=useState(()=>{
        return {name:'tsj'}
    })
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>(setCount(count+1))}>点击</button>
            <h2>{obj.name}---{obj.age}</h2>
            {/* 方法1 */}
            <button onClick={()=>(setObj({name:'lisi'}))}>点击</button>
            {/* 方法二 */}
            <button onClick={()=>(
                setObj({
                    ...obj,
                    name:'lisi',
                    age:18
                })
            )}>点击</button>
            <h2>数组：{arr}</h2>
            <button onClick={()=>(
                setArr(()=>{
                    arr.push(4)
                    console.log(arr)
                    return [...arr]
                })
            )}>点击</button>
            {/* 如果是函数类型的，显示的是返回体 */}
            <h2>函数：{func.name}</h2>
        </div>
    )
}
export default Index
