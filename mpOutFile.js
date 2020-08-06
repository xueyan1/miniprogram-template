const path = require('path')
const dir = './_temp_jt_mp/'

function genConfig (obj) {
  let o = {
    component: {
      one: {
        'index.js': [
          path.join(dir, 'component', 'one', 'index.js'),
          obj,
          'path'
        ],
        'index.json': [path.join(dir, 'component', 'one', 'json'), obj, 'path'],
        'index.wxml': [path.join(dir, 'component', 'one', 'wxml'), obj, 'path']
      },
      two: {
        'index.js': [
          path.join(dir, 'component', 'two', 'index.js'),
          obj,
          'path'
        ],
        'index.json': [path.join(dir, 'component', 'two', 'json'), obj, 'path'],
        'index.wxml': [path.join(dir, 'component', 'two', 'wxml'), obj, 'path']
      }
    },
    libs: {
      'regenerator-runtime': {
        'path.js': [
          path.join(dir, 'libs', 'regenerator-runtime', 'path.js'),
          obj,
          'path'
        ],
        'runtime.js': [
          path.join(dir, 'libs', 'regenerator-runtime', 'runtime.js'),
          obj,
          'runtime'
        ]
      }
    },
    pages: {
      tabbar: {
        index: {
          'index.js': [
            path.join(dir, 'pages', 'tabbar', 'index', 'index.js'),
            obj,
            'js'
          ],
          'index.json': [
            path.join(dir, 'pages', 'tabbar', 'index', 'index.json'),
            obj,
            'json'
          ],
          'index.wxml': [
            path.join(dir, 'pages', 'tabbar', 'index', 'index.wxml'),
            obj,
            'wxml'
          ],
          'index.wxss': [
            path.join(dir, 'pages', 'tabbar', 'index', 'index.wxss'),
            obj,
            'wxss'
          ]
        },
        list: {},
        mine: {}
      }
    },
    redux: {
      'mp-redux.js': [path.join(dir, 'redux', 'mp-reduce.js'), obj, 'reduce类'],
      'redux.js': [path.join(dir, 'redux', 'redux.js'), obj, 'redux类']
    },
    services: {
      'login.js': [path.join(dir, 'services', 'login.js'), obj, 'login.js']
    },
    src: {
      images: {
        tabbar: {
          'index.png': [
            path.join(dir, 'src', 'images', 'tabbar', 'index.png'),
            obj,
            '图片'
          ],
          'index-s.png': [
            path.join(dir, 'src', 'images', 'tabbar', 'index-s.png'),
            obj,
            '图片'
          ],
          'list.png': [
            path.join(dir, 'src', 'images', 'tabbar', 'list.png'),
            obj,
            '图片'
          ],
          'list-s.png': [
            path.join(dir, 'src', 'images', 'tabbar', 'list-s.png'),
            obj,
            '图片'
          ],
          'mine.png': [
            path.join(dir, 'src', 'images', 'tabbar', 'mine.png'),
            obj,
            '图片'
          ],
          'mine-s.png': [
            path.join(dir, 'src', 'images', 'tabbar', 'mine-s.png'),
            obj,
            '图片'
          ]
        }
      }
    },
    store: {
      'reduce.js': [path.join(dir, 'store', 'reduce.js'), obj, 'reduce类'],
      'store.js': [path.join(dir, 'store', 'store.js'), obj, '存储类']
    },
    utils: {
      config: {
        'env.config.js': [
          path.join(dir, 'utils', 'config', 'env.config.js'),
          obj,
          '环境配置i'
        ],
        'index.js': [
          path.join(dir, 'utils', 'config', 'index.js'),
          obj,
          '环境配置入口'
        ]
      },
      tools: {
        'public.js': [
          path.join(dir, 'utils', 'tools', 'public.js'),
          obj,
          '公共函数'
        ],
        'systemInfo.js': [
          path.join(dir, 'utils', 'tools', 'systemInfo.js'),
          obj,
          '系统信息类'
        ]
      },
      'request.js': [path.join(dir, 'utils', 'request.js'), obj, '请求类'],
      'urls.js': [path.join(dir, 'utils', 'urls.js'), obj, 'urls类'],
      'util.js': [path.join(dir, 'utils', 'util.js'), obj, 'util类']
    },
    '.gitignore': [path.join(dir, '.gitignore'), obj, 'Git忽略文件列表'],
    'app.js': [path.join(dir, 'app.js'), obj, '主入口'],
    'app.json': [path.join(dir, 'app.json'), obj, '主配置'],
    'app.wxss': [path.join(dir, 'app.wxss'), obj, '主样式'],
    'package.json': [path.join(dir, 'package.json'), obj, 'package.json'],
    'README.md': [path.join(dir, 'README.md'), obj, 'README.md项目说明文件'],
    'sitemap.json': [path.join(dir, 'sitemap.json'), obj, '站点地图']
  }
  return o
}
module.exports = genConfig
