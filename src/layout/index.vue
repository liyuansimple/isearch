<!--
 * @Author: your name
 * @Date: 2021-07-26 13:29:07
 * @LastEditTime: 2021-07-27 13:41:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\layout\index.html
-->
<template>
  <section>
    <layout-header/>
    <router-view/>
    <layout-footer/>
  </section>
</template>

<script>
import layoutHeader from './header.vue'
import layoutFooter from './footer.vue'
export default {
  components: { layoutHeader, layoutFooter }
}
</script>

<style>

</style>