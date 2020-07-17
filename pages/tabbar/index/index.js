import {
  connect
} from '../../../redux/mp-redux'
const app = getApp()
let store = app.store
const mapStateToProps = state => ({
  num: state.num
})

const mapDispatchToProps = {

}
const pageConfig = {
  data: {},
  onLoad() {},
  customClick() {
    store.dispatch({
      type: 'Add',
      payload: 1
    })
  }
}
const nextPageConfig = connect(mapStateToProps, mapDispatchToProps)(pageConfig)
Page(nextPageConfig)