import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './item.css'

export default class commentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        delComment:PropTypes.func.isRequired
    }
    handleDel=()=>{
        const {comment,delComment,index}=this.props
        if(window.confirm(`确定删除${comment.userName}的评论吗？`)){
            // 删除
            delComment(index)
        }
    }
    render() {
        const { comment } = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#!" onClick={this.handleDel}>删除</a>
                </div>
                <p className="user"><span >{comment.userName}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
