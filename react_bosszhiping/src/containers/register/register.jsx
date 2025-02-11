/*
注册路由组件
*/

import React, { Component } from 'react'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'
import {reqRegister} from "./../../api"
// import axios from 'axios'

const ListItem = List.Item

export default class register extends Component {
    state = {
        username: '',  // 用户名
        password: '',  // 密码
        password2: '',  // 确认密码
        type: 'laoban',  // 用户类型名称   dashen/laoban
    }
    // 点击注册调用
    register = () => {
        const state=this.state
        // axios.post('/register',state).then((res)=>{
        //     console.log(res)
        // })
        //console.log(this.state)
        reqRegister(state).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        // this.props.register(this.state)
    }
    // 处理输入数据的改变: 更新对应的状态
    handleChange = (name, val) => {
        // 更新状态
        this.setState({
            [name]: val  // 属性名不是name, 而是name变量的值
        })
    }
    toLogin = () => {
        console.log(this.props)
        this.props.history.replace('/login')
    }
    render() {
        const { type } = this.state
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        {/* {msg ? <div className='error-msg'>{msg}</div> : null} */}
                        <WhiteSpace />
                        <InputItem placeholder='请输入用户名' onChange={val => { this.handleChange('username', val) }}>用户名:</InputItem>
                        <WhiteSpace />
                        <InputItem placeholder='请输入密码' type="password" onChange={val => { this.handleChange('password', val) }}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace />
                        <InputItem placeholder='请输入确认密码' type="password" onChange={val => { this.handleChange('password2', val) }}>确认密码:</InputItem>
                        <WhiteSpace />
                        <ListItem>
                            <span>用户类型:</span>&nbsp;&nbsp;&nbsp;
                            <Radio checked={type === 'dashen'} onChange={() => this.handleChange('type', 'dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type === 'laoban'} onClick={() => this.handleChange('type', 'laoban')}>老板</Radio>
                        </ListItem>
                        <WhiteSpace />
                        <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace />
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
