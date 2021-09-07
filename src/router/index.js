/*
 * @Author: your name
 * @Date: 2021-07-22 16:30:23
 * @LastEditTime: 2021-09-07 10:08:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/main',
    component: layout,
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ '@/views/main.vue'),
      },
      {
        path: '/doc',
        name: 'doc',
        component: () => import(/* webpackChunkName: "doc" */ '@/views/doc.vue')
      },
      {
        path: '/tools',
        name: 'tools',
        component: () => import(/* webpackChunkName: "tools" */ '@/views/tools.vue')
      },
      {
        path: '/blogs',
        name: 'blogs',
        component: () => import(/* webpackChunkName: "blogs" */ '@/views/blogs.vue')
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由后置方法
router.afterEach(() => {
  window.scrollTo(0,0)
})
export default router
