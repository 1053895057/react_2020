import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// chrome扩展插件
import {composeWithDevTools} from 'redux-devtools-extension'

import { counter } from './reducers'

// 生成一个store对象
// 内部会第一次调用reduer函数得到初始state
const store = createStore(
    counter,
    // 应用上异步中间件
    composeWithDevTools(applyMiddleware(thunk))
    
)

export default store