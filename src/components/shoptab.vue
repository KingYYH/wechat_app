<template>
  <div class="top">
    <!-- 店铺导航 -->
    <div class="shop"> 
      <div class="shop-icon">
        <img src="../assets/images/banner.png" alt="">
      </div>
      <div class="shop-name">时尚之家专卖店</div>
    </div>
    <div class="tab">
      <router-link class="nav-li" :to="{ name: 'goodIndex' }">
      <span class="nav-tt">首页</span>
    </router-link>
    <router-link class="nav-li" :to="{ name: 'goodAll' }" >
      <span class="nav-tt">全部</span>
    </router-link >
        <router-link class="nav-li" :to="{ name: 'goodNew' }" >
      <span class="nav-tt">上新</span>
    </router-link >
    <span class="iconfont icon-sousuo nav-li search" @click="searchBtn()"></span>  
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
  methods: {
    searchBtn() {
      this.$router.push('/myshopSearch')
    }
  }
};
</script>
<style lang="less" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 166px;
  background: #aaa;
  .shop {
    margin-left: 52px;
    overflow: hidden;
    margin-top: 30px;
    margin-bottom: 17px;
    .shop-icon {
      width: 58px;
      height: 58px;
      float: left;
      margin-right: 20px;

      img {
        width: 58px;
        height: 58px;
      }
    }
    .shop-name {
      line-height: 58px;
      font-size: 24px;
      color: rgba(255, 255, 255, 1);
    }
  }
  .tab {
    margin-left: 70px;
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
      width: 15%;
      font-size: 20px;
      text-decoration: none;
      font-size: 24px;
      color: rgba(255, 255, 255, 1);
      // line-height: 38px;
      margin-right: 60px;
    }
    .search {
      // width: 30px;
      // height: 30px;
      font-size: 24px;
    }
  }

  .router-link-active {
    border-bottom: 4px solid #fff;
    // .iconfont {
    //   color: #5967FF;
    // }
  }
}
</style>

