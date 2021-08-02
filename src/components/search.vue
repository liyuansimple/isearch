<!--
 * @Author: your name
 * @Date: 2021-07-22 16:40:53
 * @LastEditTime: 2021-07-27 09:32:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\components\header.vue
-->
<template>
  <div class="serch-group">
    <div class="search-layout">
      <div class="search-container">
        <el-menu :default-active="activeName" class="el-menu-demo" mode="horizontal" @select="handleClick">
          <el-menu-item index="1">百度</el-menu-item>
          <el-menu-item index="2">Google</el-menu-item>
          <el-menu-item index="3">Github</el-menu-item>
          <el-menu-item index="4">NPM</el-menu-item>
        </el-menu>
        <el-form :inline="true" style="margin-top: 10px">
          <el-form-item>
            <el-input v-model="search" class="iSearch" placeholder="search"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button plain @click="searchEvent" icon="el-icon-search"></el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1',
      search: null,
    }
  },
  methods: {
    handleClick() {

    },
    searchEvent() {

    }
  }
}
</script>

<style lang="scss" scoped>
.serch-group{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 224px;
  background-color: #2f3448;
}
.search-layout{
  height: 224px;
  width: 1200px;
  background-image: url('~@/assets/search-bg.png');
}
.search-container{
  margin: auto;
  width: 600px;
}
.el-menu-demo{
  margin-top: 50px;
  background-color: transparent;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 2px solid #fff;
  color: #fff;
  background-color: transparent;
}
.el-menu--horizontal>.el-menu-item:hover{
  background-color: transparent;
  color: #fff;
}
.iSearch{
  min-width: 500px;
}
</style>
