import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSubJs from 'pubsub-js'

export default class Main extends Component {
    state = {
        searchName:'',
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    componentDidMount(nextProps, nextState) {
        // 发起axios请求
        // 订阅消息（search）
        let that=this
        PubSubJs.subscribe('search',function(msg,searchVal){
            if(!searchVal) return
            that.setState({
                initView:false,
                loading:true,
                searchName:searchVal
            })
            const url = `https://api.github.com/search/users?q=${searchVal}`
            axios.get(url).then(res => {
                const users = res.data.items.map(item=>({
                    name:item.login,
                    url:item.html_url,
                    avatarUrl:item.avatar_url,
                    id:item.id
                }))
                that.setState({ users ,loading:false})
            }).catch(err => {
                console.log(err)
                that.setState({
                    errorMsg:err
                })
            })
        })
        
        

    }
    render() {
        const { initView, loading, users, errorMsg } = this.state
        const { searchName } = this.props
        if (initView) {
            return <h2>请输入关键进行搜索:{searchName}</h2>
        } else if (loading) {
            return <h2>正在请求中</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {users.map((item, index) => (
                        <div className="card" key={item.id}>
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <img src={item.avatarUrl} alt="" style={{ width: '100px' }} />
                            </a>
                            <p className="card-text">{item.name}</p>
                        </div>
                    ))}

                </div>
            )
        }
    }
}