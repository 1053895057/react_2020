import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired
    }
    increase = () => {
        // 1.得到选择增加的数量
        const number = this.select.value * 1
        // 2.调用store的方法更新状态
        this.props.increment(number)

    }
    decrease = () => {
        // 1.得到选择增加的数量
        const number = this.select.value * 1

        //2.调用store的方法更新状态
        this.props.decrement(number)
    }
    increaseOdd = () => {
        // 1.得到选择增加的数量
        const number = this.select.value * 1
        // 2.得到原来的count,判断，满足条件计算新的count
        const count = this.props.count
        if (count % 2 === 1) {
            // 3.更新状态
            this.props.increment(number)
        }

    }
    increaseAsync = () => {
        // 1.得到选择增加的数量
        const number = this.select.value * 1
       
        this.props.incrementAsync(number)
      
    }
    render() {
        const count = this.props.count

        console.log(count)
        return (
            <div>
                <h3>click {count} times</h3>
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


