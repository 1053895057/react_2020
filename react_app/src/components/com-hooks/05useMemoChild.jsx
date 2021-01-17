import {useMemo} from 'react'

export default ({c,n})=>{
    let res=useMemo(()=>{
        console.log("useMemo")
        return {c,n}
    },[c])
    return (
        <>
            <h2>子组件：count:{res.c}-----------num:{res.n}</h2>
        </>
    )
}