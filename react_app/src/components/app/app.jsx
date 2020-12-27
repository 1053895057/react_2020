import React, { Component } from 'react'
import PubsubJs from 'pubsub-js'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'



// app里的删除评论的方法要传递给list，list传递给item,比较麻烦，用用发布订阅的方式做


export default class App extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         comment:[
    //             {userName:'Tom',content:'很好的啊'},
    //             {userName:'Jack',content:'怎么好的啊'},
    //         ]
    //     }
    // }
    //给组件对象指定state
    state = {
        comments: [
            { userName: 'Tom', content: '很好的啊' },
            { userName: 'Jack', content: '怎么好的啊' }
        ]
    }
    // 添加评论
    addComment=(comment)=>{
        const {comments}=this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    componentDidMount(){
        PubsubJs.subscribe('deleteComment',(msg,index)=>{
            this.delComment(index)
        })
    }

    // 删除评论
    delComment=(index)=>{
        const {comments}=this.state
        comments.splice(index,1)
        this.setState({comments})
    }
    
    render() {
        const {comments}=this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments}></CommentList>
                </div>
            </div>
        )
    }
}
