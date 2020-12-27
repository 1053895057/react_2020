import React, { Component } from 'react'

import Search from '../seach/seach'
import Main from '../main/main'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Search/>
                <Main/> 
            </div>
        )
    }
}