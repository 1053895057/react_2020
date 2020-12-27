import React,{Component} from 'react'
import logo from '../logo.svg'

class App extends Component{
    render(){
        return (
            <div>
                <img className="logo" src={logo} alt="图片"/>
                <p className="title">react</p>
            </div>
        )
    }
}

export default App
