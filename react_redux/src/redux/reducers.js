/*
包含N个reducer函数（根据老的state和action返回一个新的state）
*/
import {combineReducers} from 'redux'
import {ADD_COMMENT,DEL_COMMENT,RECEIVE_COMMENTS} from './action-types'

const initComments=[]
export const comments=(state=initComments, action) =>{
    switch (action.type){
        case ADD_COMMENT:
           return [action.data,...state]
        case DEL_COMMENT:
            return state.filter((item,index)=>index!==action.data)
        case RECEIVE_COMMENTS:
            return state.concat(action.data)
        default:
            return state
    }
}

// const comments=(state=initComments, action) =>{
//     switch (action.type){
//         case ADD_COMMENT:
//            return [action.data,...state]
//         case DEL_COMMENT:
//             return state.filter((item,index)=>index!==action.data)
//         case RECEIVE_COMMENTS:
//             return state.concat(action.data)
//         default:
//             return state
//     }
// }

// export default combineReducers({
//     comments
// })