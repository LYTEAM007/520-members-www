import { getUrlParams } from 'common/js/util'
import axios from "axios"
const configHeader = {
  timeout: 0,
  headers: {},
}
const _axios = axios.create(configHeader)

// 添加请求拦截器
_axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  try {
    config.headers['Authorization'] = getUrlParams().username || ''
  } catch (e) {
  }
  config.headers['action'] = 'web'
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});

// 添加响应拦截器
_axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response;
}, function (error) {
  console.error(error, 'error')
  // 对响应错误做点什么
  return Promise.reject(error);
});

export const service = (type, url, data) => {

  let reqData = {
    method: type,
    url: process.env.VUE_APP_BASE_API + url,
    timeout: 0,
    headers: {},
  }
  if (data) {
    if (type === 'get') {
      reqData.params = data
    } else {
      reqData.data = data
    }
  }
  return _axios(reqData).then((res) => {
    return res.data
  }).catch(function (error) {
    console.log(error,"error")
    return Promise.reject(error)
  })
}
