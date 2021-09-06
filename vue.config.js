/*
 * @Author: your name
 * @Date: 2021-07-22 17:27:24
 * @LastEditTime: 2021-09-06 14:33:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\vue.config.js
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 选项...
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/dev-api': {
        target: process.env.VUE_APP_BASE_PROXY_API,
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
    // before: require('./mock/mock-server.js')
  },
}