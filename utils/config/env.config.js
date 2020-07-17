const base = {
}
const config = {
  prod: {
    ...base,
    host: 'https://'
  },
  test: {
    ...base,
    host: 'https://'
  },
  dev: {
    ...base,
    host: 'https://'
  }
}

module.exports = config

// appId: wxe22fcf1338d42583 生产环境
// appId: wx1807449059560cc0 测试环境
