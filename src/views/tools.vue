<!--
 * @Author: your name
 * @Date: 2021-07-27 09:53:27
 * @LastEditTime: 2021-08-03 10:52:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\views\tool.vue
-->
<template>
  <section>
    <editor v-model="content" @init="editorInit" lang="html" theme="monokai" width="1200" height="500"></editor>
    <el-button-group class="mt-10">
      <el-button plain>格式化</el-button>
      <el-button plain>压缩</el-button>
      <el-button plain>清空</el-button>
    </el-button-group>
  </section>
</template>

<script>
// import ace from 'ace'
export default {
  data(){
    return {
      content : null
    }
  },
  components: {
    editor: require('vue2-ace-editor'),
  },
  created() {
  },
  methods: {
    editorInit: function () {
      require('brace/ext/language_tools') //language extension prerequsite...
      require('brace/mode/html')                
      require('brace/mode/javascript')    //language
      require('brace/mode/less')
      require('brace/theme/monokai')
      require('brace/snippets/javascript') //snippet
    }
  },
}
</script>

<style scoped>
section{
  margin: 10px auto;
  width: 1200px;
}
</style>
