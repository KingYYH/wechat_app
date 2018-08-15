<template>
  <div class="invest">
    <!-- <div class="invest-header"> -->
      <!-- <tab :line-width=2 active-color="#5967FF">
        <tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index">{{item}}</tab-item>
      </tab> -->
      <div class="investType">     
        <router-link  to="/invest/company"> <span class="company" >企业项目</span></router-link> 
        <router-link  to="/invest/mine"><span class="mine">个人项目</span></router-link> 
      </div>
      <router-view></router-view>  
    <!-- </div> -->
  </div>
</template>
<script>
import { Tab, TabItem, Sticky } from "vux";
export default {
  // name: 'invest',
  data() {
    return {
      list4: ["正在放映", "即将上映"],
      demo4: "即将上映"
    };
  },
  components: {
    TabItem,
    Sticky,
    Tab
  },
  created() {
  },
  methods: {}
};
</script>
<style scoped lang="less">
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/center.less";
.invest {
  // .invest-header {
  //   height: 78px;
  //   background: rgba(255, 255, 255, 1);
  .investType {
    display: flex;
    justify-content: space-around;
    height: 78px;
    background-color: #ffffff;
    width: 100vw;
    top: 0;
    position: fixed;
    z-index: 999;
    line-height: 78px;
    border: 1px solid #d5d5d5;
    color: #333333;
    font-size: 26px;
    font-family: "PingFangSC-Regular";
     text-align: center;
      a {
        width: 50%;
        height: 78px;
      }
    .router-link-active {
      color: #5967ff;
      border-bottom: 2px solid #5967ff;
    }
    span {
      width: 80px;
    }
  }
  // }
}
a {
  text-decoration: none;
        height: 78px;
display: inline-block;
}
</style>
