import {useRef} from "react"


export default ()=>{
    // 用法一：获取input的值
    const inputEl=useRef(null)
    // 用法二：保存变量
    const save=useRef({value:'123'})
    return (
        <>
            <h3>useRef</h3>
            <input type="text" ref={inputEl}/>
            <button onClick={()=>{
                console.log(inputEl)
                console.log(inputEl.current)
                console.log(inputEl.current.value)
                console.log(save)
                save.current.value=inputEl.current.value
                console.log(save)
            }}>点击</button>
        </>
    )
}