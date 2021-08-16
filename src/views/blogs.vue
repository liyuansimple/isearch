<!--
 * @Author: your name
 * @Date: 2021-07-27 09:55:18
 * @LastEditTime: 2021-08-13 16:50:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\views\blogs.vue
-->
<template>
  <span>tool</span>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  created() {
    
  },
  methods: {
    ImLogin() {
      const loginInfo = {
        sdkAppID: '1400452781',
        appIDAt3rd: '1400452781',
        identifier: 'liyuan_128',
        userSig: 'eJyrVgrxCdZLrSjILEpVsjI0NTU1MjAw0AGLlqUWKVkpGekZKEH4xSnZiQUFmSlAdSYGBiamRuYWhhCZzJTUvJLMtEywhpzMytLEvHhDIwuYvsx0oHB2RFhgRLCZRUVVmV*Fa2VueZinl3NEVnBFqU*wZ6GBZUqYv6*2WYWRk4uBLVRjSWYuyFFmRhYWJsYWBsa1AEeYMuo_',
        accountType: 440
      }
      window.webim.login(loginInfo,{
        onConnNotify: (res) => {
          console.log('==连接状态==', res);
        }
      },{
        isLogOn: false
      }, (res) => {
        console.log('==login success===', res);
      }, (err) => {
        console.log('==login error===', err);
      })
    }
  }
}
</script>

<style>

</style>