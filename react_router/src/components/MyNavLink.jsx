import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'


export default class MyNavLink extends Component {
    render() {
        // {...this.props}  将外部的属性全部传给Navlink
        return <NavLink {...this.props} activeClassName='activeClass'></NavLink>
        
    }
}
