<template>
  <div class="top">
    <!-- 店铺导航 -->
    <div class="tab">
      <router-link class="nav-li" :to="{ name: 'coll' }">
      <span class="nav-tt">综合</span>
    </router-link>
    <router-link class="nav-li" :to="{ name: 'hotgood' }" >
      <span class="nav-tt">热销</span>
    </router-link >
        <router-link class="nav-li" :to="{ name: 'salespro' }" >
      <span class="nav-tt">促销</span>
    </router-link >
    <div class="nav-li"><span>价格<span class="iconfont icon-shangxia  search"></span></span></div>
    
    </div>
      
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.top {
 margin-top: 20px;
margin-bottom: 30px;
  // z-index: 99;
  width: 100%;
  height: 30px;
  .tab {
    margin-left: 40px;
    overflow: hidden;
    // position: relative;
    // bottom: -76px;
    .nav-li {
      float: left;
      display: flex;
      height: 58px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 16%;
      font-size: 20px;
      text-decoration: none;
      font-size: 24px;
      color: #666666;
      // line-height: 38px;
      margin-right: 60px;
    }
    .search {
      // width: 30px;
      // height: 30px;
      font-size: 24px;
      display: inline-block;
      // float: left;
    }
  }

  .router-link-active {
    color: #5967FF;
    .iconfont {
      color: #5967FF;
    }
  }
}
</style>

