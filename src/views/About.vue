<!--
 * @Author: your name
 * @Date: 2021-07-22 16:30:23
 * @LastEditTime: 2021-09-06 14:43:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\views\About.vue
-->
<template>
  <section>
    <el-button @click="download">下载</el-button>
  </section>
</template>

<script>
import indexDB from '@/indexDb'
import { downloadFile } from '@/utils/download'
import { exportFile } from '@/api/index'
export default {
  created() {
    indexDB.openDB('test1', 1,(db) => {
      console.log('success',db);
      indexDB.addData(db, 'student', {id:1, name:'张三11'})
    },() => {

    }, (db) => {
      console.log('update');
      indexDB.createStore(db, 'student')
      indexDB.createStore(db, 'sex')
    })
  },
  methods: {
    download() {
      exportFile().then(res => {
        downloadFile(res, 'name.xlsx')
      })
    }
  }
}
</script>

<style>

</style>
