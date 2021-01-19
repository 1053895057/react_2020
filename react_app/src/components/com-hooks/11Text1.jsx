import React, { useContext } from 'react'
import {MyContext} from './11Reducer'

export default ()=> {
    let {state,dispatch}=useContext(MyContext)
    return (
        <div>
            <h1>Text1:名字：{state.name}-----年龄：{state.age}</h1>
            <button onClick={()=>{
                dispatch({
                    type:'setName',
                    name:'text1'
                })
            }}>setName</button>
            <button onClick={()=>{
                dispatch({
                    type:'setAge',
                    age:'2'
                })
            }}>setAge</button>
        </div>
    )  
}
