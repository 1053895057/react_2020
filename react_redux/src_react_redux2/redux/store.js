import { createStore } from 'redux'

import { counter } from './reducers'

// 生成一个store对象
// 内部会第一次调用reduer函数得到处是state
const store = createStore(counter)

export default store