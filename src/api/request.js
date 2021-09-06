/*
 * @Author: your name
 * @Date: 2021-09-06 14:01:58
 * @LastEditTime: 2021-09-06 14:51:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tianAnd:\work\project\isearch\src\api\request.js
 */
import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // please modify it according to the actual situation
    config.headers['authorization'] = process.env.VUE_APP_TOKEN
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// 返回拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default service