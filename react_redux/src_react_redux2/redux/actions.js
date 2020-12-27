/*
包含所有的action creater
*/
import { DECREASE, INCREASE } from "./action-type";

 

// 增加
export const increment=(number)=>({type:INCREASE,data:number})
// 减少
export const decrement=(number)=>({type:DECREASE,data:number})