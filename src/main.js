/*
 * @Author: your name
 * @Date: 2021-07-22 16:30:23
 * @LastEditTime: 2021-07-27 13:49:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
