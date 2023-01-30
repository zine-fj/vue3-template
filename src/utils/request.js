import axios from "axios";

import { requestUrl } from "@/utils/config";

const instance = axios.create({
  baseURL: requestUrl, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 60 // request timeout
})

// request interceptor
instance.interceptors.request.use(
  config => {
    config.headers.The_Token = 'i am token'
    return config
  },
  error => {
    showToast('请求异常')
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  res => {
    const resData = res.data
    if (resData.statusCode !== '200') {
      console.log('200 以外的错误')
      return Promise.reject(new Error(resData.message || 'Error'))
    } else {
      return resData
    }
  },
  error => {
    showToast('响应异常')
    return Promise.reject(error)
  }
)

export default instance