/*
包含N个reducer函数的模块
*/
import {INCREASE,DECREASE} from './action-type'
export function counter(state = 0, action) {
    switch (action.type) {
        case INCREASE:
            return state + action.data
        case DECREASE:
            return state - action.data
        default:
            return state
    }
}