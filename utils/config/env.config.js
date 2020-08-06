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
