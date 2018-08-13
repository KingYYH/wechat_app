<template>
  <div class="login">
    <div class="login-bg">
    </div>
    <div class="login-box">
      <div class="tab">
        <div class="tab-item" :class="{active: loginStatus}" @click="exchange('login')" ref="login">登录</div>
        <div class="tab-item" :class="{active: registerStatus}" @click="exchange('register')" ref="register">注册</div>
      </div>
      <div class="tab-container" v-if="loginStatus">
        ccc
      </div>
       <div class="tab-container" v-if="registerStatus">
        bbb
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginStatus: true,
      registerStatus: false
    };
  },
  components: {},
  created() {
    this.$store.state.footerStatus = false;
  },
  methods: {
    exchange (type) {
      if (type == 'login') {
        this.loginStatus = true;
        this.registerStatus = false;
      } else {
        this.loginStatus = false;
        this.registerStatus = true;
      }
    }
  }
};
</script>
<style scoped lang="less">
.login {
  position: relative;
  .login-bg {
    width: 100%;
    height: 549px;
    background: rgba(89, 103, 255, 0.3);
  }
  .login-box {
    width: 640px;
    position: absolute;
    left: 0;
    top: 362px;
    padding-left: 51px;
    padding-right: 59px;
    .tab {
      display: flex;
      text-align: center;
      margin-bottom: 24px;
      .tab-item {
        flex: 1;
        color: #fff4f4f4;
        font-size: 30px;
      }
      .active {
        font-size: 36px;
      }
      // .tab-item:nth-child(1) {
      //   font-size: 36px;
      // }
    }
    .tab-container {
      width: 640px;
      height: 620px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      box-shadow: 10px 0px 10px rgba(89, 103, 255, 0.15);
      
    }
  }
}
</style>
