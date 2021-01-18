import {forwardRef,useRef,useImperativeHandle,useState} from 'react'

const Imperative=forwardRef((props,refa)=>{
    const inputRef=useRef()
    const [count,setCount]=useState(0)
    const [num,setNum]=useState(0)
    useImperativeHandle(refa,()=>(
        {
            name:'tsj',
            focus:()=>{
                inputRef.current.focus()
            },
            count
        }
    ),[num])
        
    return (
        <>
            <h3>count:{count}</h3>
            <h3>count:{num}</h3>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>{setCount(count+1)}}>setCount</button>
            <button onClick={()=>{setNum(num+1)}}>setNum</button>
        </>
    )
})


export default ()=>{
    const el=useRef()
    return (
        <>
            <Imperative ref={el}></Imperative>
            <button onClick={()=>{
                console.log(el)
                el.current.focus()
            }}>点击</button>
        </>
    )
}