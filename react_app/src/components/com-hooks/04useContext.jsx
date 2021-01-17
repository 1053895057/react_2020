//createContext生成容器组件，挂一个属性
//useContext在子组件上接收容器组件传递过来的值

import { useContext } from 'react'
import {MyContext} from './04myContext'
export default () => {
    let value = useContext(MyContext)
    console.log(value)
    return (
        <>
            <h3>我是子组件{value.count}+{value.name}</h3>
        </>
    )
}
