import React from 'react'
import { Button,Toast } from 'antd-mobile'


export default class App extends React.Component {
    handleClick = () => {
        Toast.info('提交成功')
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>点击</Button>
            </div>
        )
    }
}
