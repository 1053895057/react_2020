import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    static propTypes = {
        setSearchName: PropTypes.func.isRequired
    }
    search = () => {
        // 得到输入的关键字
        const value = this.input.value.trim()
        // 搜索
        value && this.props.setSearchName(value)
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input => this.input = input} />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}