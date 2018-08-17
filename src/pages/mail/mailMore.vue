<template>
 <!-- 更多商品 -->
  <div class="more">
    <div class="mail-more">
       <router-link  to="/mailMore/musical"> <span class="company" >乐器</span></router-link> 
        <router-link  to="/mailMore/writing"><span class="mine">文具</span></router-link> 
        <router-link  to="/mailMore/classing"><span class="mine">课时</span></router-link> 
        <router-link  to="/mailMore/doll"><span class="mine">玩偶</span></router-link> 
        <router-link  to="/mailMore/shoes"><span class="mine">鞋子</span></router-link> 
        <router-link  to="/mailMore/leather"><span class="mine">皮具</span></router-link> 
    </div>
     <router-view></router-view> 
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.more {
  .mail-more {
    display: flex;
    justify-content: space-around;
    height: 78px;
    background-color: #ffffff;
    width: 100vw;
    top: 0;
    position: fixed;
    z-index: 999;
    line-height: 78px;
    // border: 4px solid #d5d5d5;
    color: #333333;
    font-size: 24px;
    font-family: "PingFangSC-Regular";
    text-align: center;
    a {
      width: 50%;
      height: 78px;
    }
    .router-link-active {
      color: #5967ff;
      border-bottom: 4px solid #5967ff;
    }
    span {
      width: 80px;
    }
  }
}
</style>