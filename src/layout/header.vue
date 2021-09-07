<!--
 * @Author: your name
 * @Date: 2021-07-22 16:40:53
 * @LastEditTime: 2021-07-27 15:04:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\components\header.vue
-->
<template>
  <div class="menu-group">
    <el-menu :default-active="activeIndex" router mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/main" >首页</el-menu-item>
      <el-menu-item index="/doc">文档</el-menu-item>
      <el-menu-item index="/tools">在线工具</el-menu-item>
      <el-menu-item index="/blogs">博客</el-menu-item>
      <el-menu-item index="/about">案例</el-menu-item>
    </el-menu>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/main'
    }
  },
  methods: {
    tabMenu() {

    }
  }
}
</script>

<style scoped>
.menu-group{
  background-color: #545c64;
}
.el-menu.el-menu--horizontal{
  margin: auto;
  width: 1200px;
  border-bottom: none;
}
</style>