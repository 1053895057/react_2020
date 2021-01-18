// useImperativeHandle

// useImperativeHandle可以让你在使用ref时自定义暴露给父组件的实例值。在大多数情况下
// ，应当避免使用ref这样的命令式代码。useImperativeHandle应当与forwardRef一起

// useImperativeHandle(ref(传递来的),()=>{},[])


import {forwardRef,useRef} from 'react'

const Forwar=forwardRef((props,ref)=>{
    return (
        <>
            <h3 ref={ref}>123</h3>
            <h4>456</h4>
        </>
    )
})

export default ()=>{
    const h3El=useRef(null)
    return (
        <>
           <Forwar ref={h3El}></Forwar> 
           <button onClick={()=>{
               console.log(h3El)
           }}>点击</button>
        </>
    )
}