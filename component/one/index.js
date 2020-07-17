import {
    connectComponent
} from '../../redux/mp-redux'

const mapStateToProps = state => ({
    num: state.num
})
const app = getApp()
let store = app.store
const mapDispatchToProps = {
}
const componentConfig = {

    methods: {
        customClick() {
            store.dispatch({
                type: 'Minus',
                payload: 2
            })
        }
    }
}
const nextConnectConfig = connectComponent(mapStateToProps, mapDispatchToProps)(componentConfig)
Component(nextConnectConfig)