import { createStore } from './redux/redux'
import reducer from './store/reducer'
import {
  Provider
} from './redux/mp-redux'
const store = createStore(reducer)
import {
  get
} from './utils/request'
import api from './utils/urls'

App(
  Provider(store)({
    onLaunch: function () {
      this.getOpenId()
    },
    // AppID(小程序ID):wx6f18657f1441b123    AppSecret(小程序密钥):3cef2fc89ceb27c0b912557a39776dd1
    getOpenId() {
      const requestData = {
        appid: 'wx6f18657f1441b123',
        secret: '3cef2fc89ceb27c0b912557a39776dd1'
      }
      const openid = wx.getStorageSync('openid')
      if (!openid) {
        wx.login({
          success: res => {
            get(`${api.getOpenIdUrl}?appid=${requestData.appid}&secret=${requestData.secret}&grant_type=authorization_code&js_code=${res.code}`).then(res => {
              wx.setStorageSync('openid', res.openid)
            })
          },
          fail: () => { },
          complete: () => { }
        });
      }
    },
    globalData: {
      openid: ''
    }
  })
)