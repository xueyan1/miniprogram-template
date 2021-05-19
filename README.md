
目录结构
```bash
├── components // 抽象公共组件
├── libs // 第三方库
├── pages // 主包页面
├── services // 接口层(可在此处Mock数据)
├── redux // 状态管理库
├── store // 状态管理数据
├── src // 静态资源文件(图片,SVG)
├── utils // 工具函数
├── package.json // 项目模块依赖
├── project.config.json // 工具配置
├── sitemap.json // 索引
├── app.js
├── app.json
├── app.wxss
└── READEME.md
```

## 目录结构说明

当前已增加await/async支持，需要在js文件中添加代码
```javascript
import regeneratorRuntime from '../libs/regenerator-runtime/runtime'
```

### src
该目录存放静态资源文件，如图片、svg，目前暂时放在项目内，后续需要放到CDN上面。

### utils
目前已简单封装request，基本可以满足get/post请求的发起

- request
- icons 统一图片、svg资源使用。请勿直接在wxml中使用绝对路径加载图片。使用这个映射文件，便于静态资源同步到CDN


# redux

### 页面定义

```
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
  onLoad() {}
}
const nextPageConfig = connect(mapStateToProps, mapDispatchToProps)(pageConfig)
Page(nextPageConfig)

```
#### 小程序上传相应环境代码执行命令
    - 测试环境 npm run  publish:test
    - 正式环境 npm run  publish
