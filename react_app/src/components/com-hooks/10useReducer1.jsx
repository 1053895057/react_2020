// useReducer(和useContext结合就可以达到redux的作用)
// 1.useReducer和redux中的Reducer是一样的，说白了Reducer就是这个函数
// 2.useReducer()是个函数，有3个参数，第一个参数reducer,第二个是初始值，第三个参数时init
// 3.useReducer()返回值是个数组，第一个是state,第二个是dispatch
// 4.const [state,dispatch]=useReducer(reducer,初始值)

import React, { useReducer } from 'react'

export default ()=> {
    const [state,dispatch]=useReducer((state,action)=>{
        switch(action.type){
            case 'setName':
                return {
                    ...state,
                    name:action.name
                }
            case 'setAge':
                return{
                    ...state,
                    age:action.age
                }
            default:
                return state
        }
    },{name:'张三',age:18})
    return (
        <div>
            <h1>姓名：{state.name}-----年龄：{state.age}</h1>
            <button onClick={()=>{
                dispatch({
                    type:'setName',
                    name:'李四'
                })
            }}>setName</button>
            <button onClick={()=>{
                dispatch({
                    type:'setAge',
                    age:10
                })
            }}>setAge</button>
        </div>
    )
    
}
