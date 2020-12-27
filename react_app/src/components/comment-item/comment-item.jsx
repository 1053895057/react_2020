import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PubsubJs from 'pubsub-js'

import './item.css'

export default class commentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    handleDel=()=>{
        const {comment,index}=this.props
        if(window.confirm(`确定删除${comment.userName}的评论吗？`)){
            // 删除
            PubsubJs.publish('deleteComment',index)
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
