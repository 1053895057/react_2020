import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// 按需打包不需要下面这个引入了，它会把整个css文件都打包，浪费资源
// import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


