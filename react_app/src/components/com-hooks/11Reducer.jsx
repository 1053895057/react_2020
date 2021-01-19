import React, { createContext,useReducer } from 'react'

export const MyContext=createContext()


const data={name:'张三',age:18}

const reducer= (state,action)=>{
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
}
export const Reducer=(props)=>{
    const [state,dispatch]=useReducer(reducer,data)
    return (
        <MyContext.Provider value={{state,dispatch}}>
            {props.children}
        </MyContext.Provider>
    )
}
