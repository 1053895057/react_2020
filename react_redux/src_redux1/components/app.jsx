import React, { Component } from 'react'
import * as actions from '../redux/actions'

export default class app extends Component {
    increase = () => {
        // 1.得到选择增加的数量
        const number = this.select.value * 1
        // // 2.得到原来的count,计算新的count
        // const count = this.state.count + number
        // // 3.更新状态
        // this.setState({ count })

        //2.调用store的方法更新状态
        this.props.store.dispatch(actions.increment(number))
    }
    decrease = () => {
        // 1.得到选择增加的数量
        const number = this.select.value * 1
        // // 2.得到原来的count,计算新的count
        // const count = this.state.count - number
        // // 3.更新状态
        // this.setState({ count })

        //2.调用store的方法更新状态
        this.props.store.dispatch(actions.decrement(number))
    }
    increaseOdd = () => {
        // 1.得到选择增加的数量
        const number = this.select.value * 1
        // 2.得到原来的count,判断，满足条件计算新的count
        // const count = this.state.count
        const count=this.props.store.getState()
        if (count % 2 === 1) {
            // 3.更新状态
            // this.setState({
            //     count: count + number
            // })
            this.props.store.dispatch(actions.increment(number))
        }

    }
    increaseAsync = () => {
        // 1.得到选择增加的数量
        const number = this.select.value * 1
        // 2.得到原来的count,计算新的count
        // const count = this.state.count
        setTimeout(()=>{
            // this.setState({
            //     count:count+number
            // })
            this.props.store.dispatch(actions.increment(number))
        },1000)
    }
    render() {
        const count= this.props.store.getState()

        console.log(count)
        return (
            <div>
                <h3>click {count} time2</h3>
                <div>
                    <select ref={value => this.select = value}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    &nbsp;&nbsp;
                    <button onClick={this.increase}>+</button>&nbsp;&nbsp;
                    <button onClick={this.decrease}>-</button>&nbsp;&nbsp;
                    <button onClick={this.increaseOdd}>increament if odd</button>&nbsp;&nbsp;
                    <button onClick={this.increaseAsync}>increment async</button>
                </div>
            </div>
        )
    }
}
