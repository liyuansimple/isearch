<!--
 * @Author: your name
 * @Date: 2021-07-27 15:01:35
 * @LastEditTime: 2021-07-29 15:03:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\views\doc.vue
-->
<template>
  <section class="classify">
    <div class="classify-descRow">
      <div class="classify-titleItem">
        <div class="line-icon"></div> 
        <span>速查表</span>
      </div>
    </div> 
    <div class="classify-descRow" v-for="(row, rowIndex) in list" :key="rowIndex">
      <div class="classify-descItem" v-for="(col, colIndex) in row" :key="colIndex">
        <a :href="col.href">
          <div class="classify-descItem-top">
            <img :src="col.icon"> 
            <span>{{col.title}}</span>
          </div>
        </a> 
        <div class="classify-descItemLine"></div> 
        <span class="item-desc">{{col.desc}}</span>
      </div> 
    </div>
  </section>
</template>

<script>
import dsDoc from '@/ds/doc'
export default {
  data(){
    return {
      list : dsDoc
    }
  }
}
</script>

<style scoped>
.classify{
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  max-width: 1200px;
}
.classify-descRow {
  margin-bottom: 10px;
  width: 100%;
  height: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.classify-titleItem {
  width: 160px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.classify-titleItem div {
  width: 4px;
  height: 15px;
  background-color: #2f3448;
  border-radius: 5px;
}
.classify-titleItem span {
  font-size: 16px;
  font-weight: 700;
  color: #2f3448;
  margin-left: 9px;
}
.classify-descItem {
  width: 23%;
  height: 110px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.classify-descItem a {
  margin-top: 2px;
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
}
.classify-descItem-top {
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.classify-descItem-top img {
  margin-left: 15px;
  margin-right: 10px;
}
.classify-descItem-top span {
  font-size: 17px;
  color: #2f3448;
}
.classify-descItemLine {
  width: 208px;
  margin-left: 10px;
  margin-right: 10px;
  height: 0;
  border-top: 1px solid #dcdcdc;
  background-color: "#dcdcdc";
}
.item-desc {
  font-size: 12px;
  color: #5d5d5d;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>