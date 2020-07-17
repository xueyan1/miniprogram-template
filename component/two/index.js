import {
    connectComponent
}
from '../../redux/mp-redux'

const mapStateToProps = state => ({
    num: state.num
})

Component(
    connectComponent(mapStateToProps)({
        // ...component config
        watch: {
            num(newVal, oldVal) {  // 与绑定的state属性同名，当state.num发生变更时，会调用此函数，并传入新的值与旧的值
                this.setData({    // 注意，此时setData不会再自动触发，由开发者自行对数据处理后调用
                    num: newVal * 10
                })
            }
        }
    })
)