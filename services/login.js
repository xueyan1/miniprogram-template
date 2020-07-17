import regeneratorRuntime, { async } from '../libs/regenerator-runtime/runtime'
import { post, get } from '../utils/request'
import apiUrl from '../utils/urls'

/* 搜索结果
* @export
* @param {*} params
* @param {*} options
* @returns {Object}
*/
export async function getSearchList(params, options = {showLoading: true,withToken:false}) {
 return post(apiUrl.getOpenIdUrl, params, {
   ...options
 })
}
