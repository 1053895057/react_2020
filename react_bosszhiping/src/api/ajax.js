/*
能发送ajax请求的函数模块
函数的返回值是promise对象
 */
import axios from 'axios'
const baseUrl = ''
// const baseUrl = 'http://localhost:4000'
export default function ajax(url, data={}, type='GET') {
  url = baseUrl + url
  if(type==='GET') { // 发送GET请求
    // 拼请求参数串
    // data: {username: tom, password: 123}
    // paramStr: username=tom&password=123
    let paramStr = ''
    Object.keys(data).forEach(key => {
      paramStr += key + '=' + data[key] + '&'
    })
    if(paramStr) {
      paramStr = paramStr.substring(0, paramStr.length-1)
    }
    // 使用axios发get请求
    return axios.get(url + '?' + paramStr)
  } else {// 发送POST请求
    // 使用axios发post请求
    return axios.post(url, data)
  }
}


// import axios from 'axios'
// import qs from "qs";

// const devBaseURL = "http://127.0.0.1:4000/"
// const proBaseURL = "https://product.org"

// const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL
// const TIMEOUT = 5000

// const instance = axios.create({
//     baseURL: BASE_URL,
//     timeout: TIMEOUT,
//     withCredentials:true
// })

// instance.interceptors.request.use(config => {
//     // 1.发送网络请求时候,在界面的中间位置显示loading组件

//     // 2.某一些请求用户必须携带TOKEN,如果没有携带，那么直接跳转到登陆页面

//     // 3.params/data序列化的操作,qs.stringfly
//     // config.data = JSON.stringify(config.data)
//     // console.log(config.method)
//     // config.headers = {
//     //   "Content-Type": "application/json",
//     // }
//     return config
// }, err => {
//     return Promise.reject(err)
// })

// instance.interceptors.response.use(res => {
//     console.log(res)
//     if (res.status !== 200) {
//         return Promise.reject(new Error('网络异常，请稍后重试'))
//     }
//     return res
// }, err => {
//     console.log(err)
//     if (err && err.response) {
//         switch (err.response.status) {
//             case 400:
//                 console.log('请求错误')
//                 break;
//             case 401:
//                 console.log('未授权访问')
//                 break
//             default:
//                 console.log('其他错误信息')
//         }
//     }
//     return Promise.reject(err)
// })

// export default instance