//createContext生成容器组件，挂一个属性
//useContext在子组件上接收容器组件传递过来的值

import { useState, useRef,createContext} from 'react'

import ChildContext from './useContext'
// 创建容器组件
export const MyContext = createContext();

export default () => {
    let [count, setCount] = useState(0)
    const inputEl=useRef(null)
    return (
        <>
            <MyContext.Provider value={count}>
                <h3>useContext</h3>
                <ChildContext></ChildContext>
            </MyContext.Provider>
            <input type="text" ref={inputEl}/>
            <button onClick={()=>{
                setCount(inputEl.current.value)
            }}>点击</button>
        </>
    )
}