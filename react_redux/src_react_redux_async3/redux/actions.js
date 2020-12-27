/*
包含所有的action creater
同步action返回一个对象
异步action返回一个函数
*/
import { DECREASE, INCREASE } from "./action-type";


 

// 增加
export const increment=(number)=>({type:INCREASE,data:number})
// 减少
export const decrement=(number)=>({type:DECREASE,data:number})
// 异步action
export const incrementAsync = (number)=>{
    return dispatch=>{
        // 异步代码
        setTimeout(()=>{
            // 1S后才去分发一个增加的action
            dispatch(increment(number))
        },1000)
    }

}