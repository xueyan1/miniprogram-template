import { createStore } from './redux/redux'
import reducer from './store/reducer'
import {
  Provider
} from './redux/mp-redux'

App(
  Provider(store)({
    onLaunch () {
    },
    globalData: {
      openid: ''
    }
  })
)