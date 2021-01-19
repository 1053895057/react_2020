import React, { Component } from 'react'
import PubsubJs from 'pubsub-js'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

//导入一个hooks例子
import Hooks1 from '../com-hooks/01useState'
import Hooks2 from '../com-hooks/02useEffect'
import Hooks3 from '../com-hooks/03useRef'
import Hooks4 from '../com-hooks/04myContext'
import Hooks5 from '../com-hooks/05useMemo' 
import Hooks6 from '../com-hooks/06useCallback'
import Hooks7_1 from '../com-hooks/07useImeperativeHandle'
import Hooks7_2 from '../com-hooks/07useImperativeHandle1'
import Hooks8 from '../com-hooks/08useLayoutEffect'
import Hooks9 from '../com-hooks/09hooks'
import Hooks10 from '../com-hooks/10useReducer1'
import Hooks11 from '../com-hooks/11index'

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
    addComment = (comment) => {
        const { comments } = this.state
        comments.unshift(comment)
        this.setState({ comments })
    }

    componentDidMount() {
        PubsubJs.subscribe('deleteComment', (msg, index) => {
            this.delComment(index)
        })
    }

    // 删除评论
    delComment = (index) => {
        const { comments } = this.state
        comments.splice(index, 1)
        this.setState({ comments })
    }

    render() {
        const { comments } = this.state
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
                    <CommentAdd addComment={this.addComment} />
                    <CommentList comments={comments}></CommentList>
                </div>
                <hr/>
                <h2>学习hooks:</h2>
                <hr/>
                <div className="hooks">
                    <Hooks1></Hooks1>
                    <Hooks2></Hooks2>
                    <Hooks3></Hooks3>
                    <Hooks4></Hooks4>
                    <Hooks5></Hooks5>
                    <Hooks6></Hooks6>
                    <Hooks7_1></Hooks7_1>
                    <Hooks7_2></Hooks7_2>
                    <Hooks8></Hooks8>
                    <Hooks9></Hooks9>
                    <Hooks10></Hooks10>
                    <Hooks11></Hooks11>
                </div>
            </div>
        )
    }
}
