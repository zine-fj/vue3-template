import { isEnviroment, requestUrl } from '@/utils/config'
import request from '@/utils/request'



export function getList () {
  return request({
    method: 'get',
    url: isEnviroment ? '/mock/list.json' : requestUrl + '/api/list'
  })
}

export function getDetail (id) {
  return request({
    url: isEnviroment ? '/mock/detail.json' : requestUrl + '/api/detail',
    method: 'get',
    params: { id }
  })
}
