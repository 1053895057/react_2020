import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class commentAdd extends Component {
    state={
        userName:'',
        content:''
    }
    static propTypes={
        addComment:PropTypes.func.isRequired
    }

    // 箭头函数，直接绑定外边的this
    submit=()=>{
        // 收集数据，斌封装成comment对象
        const comment=this.state
        this.props.addComment(comment)
        this.setState({
            userName:'',
            content:''
        })
    }
    handleNameChange=(event)=>{
        const userName=event.target.value
        this.setState({
            userName
        })
    }
    handleConChange=(event)=>{
        const content=event.target.value
        this.setState({
            content
        })
    }
    render() {
        const {userName,content}=this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" onChange={this.handleNameChange} value={userName} placeholder="用户名" />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" onChange={this.handleConChange} value={content} placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
