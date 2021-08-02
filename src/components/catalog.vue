<!--
 * @Author: your name
 * @Date: 2021-07-27 13:46:21
 * @LastEditTime: 2021-07-27 14:55:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\components\catalog.vue
-->
<template>
  <el-tabs type="border-card">
    <el-tab-pane label="综合">
      <section class="classify" style="">
        <div class="classify-row">
          <div class="classify-item"><div class="line-icon"></div><span>Java</span></div>
          <div class="classify-item"><a target="_blank" href="https://developer.oracle.com/cn/java">Java官网</a></div>
          <div class="classify-item"><a target="_blank" href="https://www.oracle.com/cn/java/technologies/java-se-api-doc.html">Java文档</a></div>
        </div>
      </section>
    </el-tab-pane>
    <el-tab-pane label="前端"></el-tab-pane>
    <el-tab-pane label="后端"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {

}
</script>

<style scoped>
.classify {
  width: 1200px;
  height: auto;
  min-height: 500px;
  margin-bottom: 25px;
  padding-top: 15px;
  padding-bottom: 25px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.classify-item, 
.classify-row {
  display: flex;
  flex-direction: row;
}
.classify-row {
  width: 100%;
  height: wrap;
  margin-left: 54px;
  margin-right: 54px;
}
.classify-item {
  width: 160px;
  height: 30px;
  align-items: center;
}
.classify-item div {
  width: 3px;
  height: 9px;
  background-color: #2f3448;
}
.classify-item span {
  font-size: 12px;
  font-weight: 700;
  color: #2f3448;
  margin-left: 9px;
}
.classify-item a {
  font-size: 12px;
  color: #454545;
  padding-left: 5px;
  padding-right: 5px;
  line-height: 30px;
}

</style>
