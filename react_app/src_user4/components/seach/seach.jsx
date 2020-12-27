import React, { Component } from 'react'
import PubSubJs from 'pubsub-js'

export default class Search extends Component {
    // 在src_user3中，要把输入框信息传递到父组件，然后在传递给main组件，比较麻烦，这里改为兄弟组件通信，使用发布订阅的方式
    search = () => {
        // 得到输入的关键字
        const searchVal = this.input.value.trim()
        // 搜索（使用发布订阅通知兄弟组件main）
        // 发布消息(search)
        searchVal&&PubSubJs.publish('search',searchVal)
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