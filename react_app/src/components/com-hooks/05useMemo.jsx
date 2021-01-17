// useMemo

// 和shouldComponentUpdate类似作用，在渲染过程中避免重复渲染的问题
// 当状态或者父组件传来的属性发生变化时，更新组件

// 1.useMemo就是用的memoization来提高性能的
// 2.memoization是javascript中的一种缓存技术
// 如果我们有CPU密集型操作。我们可以通过将初识操作的结果存储在缓存中优化使用。如果操作必然会再次执行，我们将不再麻烦使用我们的CPU
// 因为相同结果存储在某个地方，我们只是简单的返回结果

// 记住这个是以空间换速度，所以最好确定你是否值得这么做，有些场景很有必要使用

// useMemo()是一个函数，有两个参数，第一个参数是个函数，第二个参数是个数组
// useMemo(()=>{},[默认可以不写]）
// useMemo和useEffect执行的时间不同，useEffect实在componentDidMount以后执行，useMemo实在组件渲染过程中执行

import {useState} from 'react'

import ChildMemo from './05useMemoChild'

export default ()=>{
    let [count,setCount]=useState(0)
    let [num,setNum]=useState(0)
    // useEffect(() => {
    //     console.log("useEffect")
    // })
    //第二个参数数组，如果是空数组，都不会返回
    return (
        <>
            {/* <h3>父组件状态count:{count}</h3> */}
            <h3>父组件状态count:{count}-------------num:{num}</h3>
            <ChildMemo c={count} n={num}></ChildMemo>
            <button onClick={()=>{
                setCount(count+1)
            }}>memo按钮count</button>
            <button onClick={()=>{
                setNum(num+1)
            }}>memo按钮num</button>
        </>
    )
}