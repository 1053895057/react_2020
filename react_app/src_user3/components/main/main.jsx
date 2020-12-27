import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Main extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state = {
        searchName:'',
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    // 当组件接收到新的属性时
    static getDerivedStateFromProps(nextProps, prevState) {
        const { searchName } = nextProps
        // 当传入的type发生变化的时候，更新state
        if (searchName !== prevState.searchName) {
            return {
                searchName
            }
        }

        // 否则，对于state不进行任何操作
        return null
    }
    componentDidMount(nextProps, nextState) {
        // 发起axios请求
        const {searchName}=this.state
        if(!searchName) return
        this.setState({
            initView:false,
            loading:true
        })
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url).then(res => {
            const users = res.data.items.map(item=>({
                name:item.login,
                url:item.html_url,
                avatarUrl:item.avatar_url,
                id:item.id
            }))
            this.setState({ users ,loading:false})
        }).catch(err => {
            console.log(err)
            this.setState({
                errorMsg:err
            })
        })

    }
    render() {
        console.log(111)
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