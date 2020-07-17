import config from './env.config'

const env = 'dev'
const envConfig = config[env]
const version = 'v0.0.1'

export { env, envConfig, version }
