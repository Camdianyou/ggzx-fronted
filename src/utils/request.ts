// 进行axios的二次封装:使用它的请求和响应拦截器
import axios from 'axios'

import { ElMessage } from 'element-plus'
// 第一步:利用axios对象的create方法,去创建axios实例
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 第二部:request添加请求和响应拦截器
request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (response) => {
    // 成功的回调
    return response.data
  },
  (error) => {
    // 失败的回调
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = '401 TOKEN过期'
        break
      case 403:
        message = '403 无权访问'
        break
      case 404:
        message = '404 请求地址错误'
        break
      case 500:
        message = '500 服务器出现问题'
        break
      default:
        message = '网络问题'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })

    return Promise.reject(error)
  },
)

export default request
