<template>
  <div class="footer">
    <router-link class="nav-li" :to="{ name: 'index' }">
      <span class="iconfont icon-shouye"></span>
      <span class="nav-tt">首页</span>
    </router-link>
    <router-link class="nav-li" :to="{ name: 'company' }" >
      <span class="iconfont icon-touzi_"></span>
      <span class="nav-tt">投资</span>
    </router-link >
        <router-link class="nav-li" :to="{ name: 'mail' }" >
      <span class="iconfont icon-shangcheng"></span>
      <span class="nav-tt">商城</span>
    </router-link >    
        <router-link class="nav-li" :to="{ name: 'user' }" >
      <span class="iconfont icon-wode"></span>
      <span class="nav-tt">我的</span>
    </router-link >
  </div>
</template>
<script>
export default {
  components: {

  },
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 98px;
  background:rgba(247,247,250,1);
  border-top: 1px solid rgba(0,0,0,0.2);
  .nav-li {    
    float: left;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25%;
    font-size: 20px; 
    color: #7F8389;
    text-decoration: none;
    .iconfont {
      width: 52px;
      height: 52px;
      font-size: 48px !important; 
      color: #DADADA;
      margin-bottom: 9px;     
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

