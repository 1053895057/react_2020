import React, { Component } from 'react'

import Search from '../seach/seach'
import Main from '../main/main'

export default class App extends Component {
    state={
        searchName:''
    }
    setSearchName=(val)=>{
        console.log(val)
        this.setState({
            searchName:val
        })
    }
    render() {
        const {searchName}=this.state
        return (
            <div className="container">
                <Search setSearchName={this.setSearchName}/>
                <Main searchName={searchName} key={searchName+'1'}/> 
            </div>
        )
    }
}