import { isEnviroment, requestUrl } from '@/utils/config'
import request from '@/utils/request'

// get 请求 (param) - params: { param }
// post 请求 (data) - data

export function getLogin () {
  return request({
    method: 'get',
    url: isEnviroment ? '/mock/login.json' : requestUrl + '/api/login'
  })
}

export function getLoginOut () {
  return request({
    method: 'get',
    url: isEnviroment ? '/mock/loginout.json' : requestUrl + '/api/login'
  })
}
