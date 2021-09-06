/*
 * @Author: your name
 * @Date: 2021-09-06 14:37:29
 * @LastEditTime: 2021-09-06 14:42:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tianAnd:\work\project\isearch\src\api\index.js
 */
import request from './request'

export function exportFile() {
  return request({
    url: 'manager/v2.2/activity/prize/log/list/export?prize_config_id=30', 
    method: 'get',
    responseType: 'blob'
  })
}