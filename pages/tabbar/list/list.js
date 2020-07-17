import {
  connect
} from '../../../redux/mp-redux'
const app = getApp()
let store = app.store
const mapStateToProps = state => ({
})

const mapDispatchToProps = {

}
const pageConfig = {
  data: {},
  onLoad() {}
}
const nextPageConfig = connect(mapStateToProps, mapDispatchToProps)(pageConfig)
Page(nextPageConfig)