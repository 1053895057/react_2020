/*
包含了所有的action creator（action的工厂函数）
*/ 
import {ADD_COMMENT,DEL_COMMENT,RECEIVE_COMMENTS} from './action-types'
// 添加评论
export const addComment=(comment)=>({type:ADD_COMMENT,data:comment})

// 删除评论
export const delComment=(index)=>({type:DEL_COMMENT,data:index})

// 同步接收comments
const receiveComment=(comments)=>({type:RECEIVE_COMMENTS,data:comments})

// 异步从后台获取数据
export const getComments=()=>{
    return dispatch=>{
        setTimeout(()=>{
            const initComments = [
                { userName: 'Tom', content: '很好的啊' },
                { userName: 'Jack', content: '怎么好的啊' }
            ]
            // 分发一个同步的action
            dispatch(receiveComment(initComments))
        },1000)
        
    }
}