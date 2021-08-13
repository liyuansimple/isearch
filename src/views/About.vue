<!--
 * @Author: your name
 * @Date: 2021-07-22 16:30:23
 * @LastEditTime: 2021-08-12 17:06:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\views\About.vue
-->
<template>
  <span>1</span>
</template>

<script>
import indexDB from '@/indexDb'
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
  }
}
</script>

<style>

</style>
