//createContext生成容器组件，挂一个属性
//useContext在子组件上接收容器组件传递过来的值

import { useContext } from 'react'
import {MyContext} from './myContext'
export default () => {
    let count = useContext(MyContext)
    return (
        <>
            <h3>我是子组件{count}</h3>
        </>
    )
}
