<template>
  <div class="par">
    <div class="login">
    <div class="login-bg">
    </div>
    <div class="login-box">
      <div class="tab">
        <div class="tab-item" :class="{active: loginStatus}" @click="exchange('login')" ref="login">登录</div>
        <div class="tab-item" :class="{active: registerStatus}" @click="exchange('register')" ref="register">注册</div>
      </div>
      <div class="tab-container" v-if="loginStatus">
        <div class="section">
          <div class="userinfo-item">
            <img src="../../assets/images/banner.png" alt="">
            <span>用户名</span>
          </div>
            <x-input title="" v-model="tel" class="tel"></x-input>
        </div>
        <div class="section">
          <div class="userinfo-item">
            <img src="../../assets/images/banner.png" alt="">
            <span>密码</span>
          </div>
            <x-input title="" v-model="password" class="pas"></x-input>
        </div>
        <div class="auto-login">
          <input type="checkbox" class="agree" value="true" id="select" v-model="agreeSelect">
          <label class="txt" for="select">下次自动登录
          </label>
        </div>
        <x-button class="login-submit login-btn" type="warn" @click.native="loginSubmit">登录</x-button>
        <router-link to="/forget" class="forget">忘记密码?</router-link>
      </div>
       <div class="tab-container tab-reg" v-if="registerStatus">
        <div class="input-item">
          <span class="iconfont icon-shouji pos"></span>
          <x-input title="" v-model="tel" class="inp" placeholder="请输入手机号"></x-input>
        </div>
        <div class="input-item">
          <span class="iconfont icon-yanzhengma pos"></span>
          <x-input title="" v-model="tel" class="inp test" placeholder="请输入验证码"></x-input>
          <x-button class="verify-btn" :disabled="verifyisabled" @click.native="sendCode">{{verifyCodeVal}}</x-button>
        </div>
        <div class="input-item">
          <span class="iconfont icon-mima pos"></span>
          <x-input title="" v-model="tel" class="inp" placeholder="请输入登录密码"></x-input>
        </div>
        <div class="input-item">
          <span class="iconfont icon-tuijianren pos"></span>
          <x-input title="" v-model="recommend" class="inp" placeholder="请输入推荐人邀请码或者手机号"></x-input>
        </div>
        <div class="auto-login auto-register">
          <input type="checkbox" class="agree" value="true" id="select" v-model="agreeSelect">
          <label class="txt" for="select">同意《用户注册服务协议》
          </label>
        </div>
        <x-button class="login-submit login-btn" type="warn" >注册</x-button>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { XInput, XButton } from "vux";
export default {
  data() {
    return {
      tel: "",
      password: "",
      code: '',
      recommend: '',
      loginStatus: true,
      registerStatus: false,
      agreeSelect: [],
      verifyisabled: false,
      verifyCodeVal: "发送验证码"
    };
  },
  components: {
    XInput,
    XButton
  },
  created() {
    this.$store.state.footerStatus = false;
  },
  methods: {
    exchange(type) {
      if (type == "login") {
        this.loginStatus = true;
        this.registerStatus = false;
      } else {
        this.loginStatus = false;
        this.registerStatus = true;
      }
    },
    countdown(s) {
      if (s === 0) {
        this.verifyisabled = false;
        this.verifyCodeVal = "重新发送";
      } else {
        this.verifyisabled = true;
        this.verifyCodeVal = "已发送(" + s + ")s";
        setTimeout(
          function() {
            this.countdown(--s);
          }.bind(this),
          1000
        );
      }
    },
    sendCode() {
      let reg = /^[1]\d{10}$/;
      if (!reg.test(this.tel)) {
        this.$vux.toast.text("请输入正确的手机号格式", "middle");
      } else {
        // 接口
      }
    }
  }
};
</script>
<style scoped lang="less">
.par {
  overflow: hidden;
  background: #f4f4f4;
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
        padding-top: 50px;

        .input-item {
          margin-left: 38px;
          position: relative;
          display: flex;
          margin-bottom: 38px;
          .weui-cell {
            padding-left: 69px !important;
            font-size: 24px;
            font-family: "PingFangSC-Regular";
            color: #bfbfbf;
            line-height: 22px;
            box-sizing: border-box;
            background: rgba(244, 246, 248, 1);
            border-radius: 10px;
          }
          .pos {
            width: 22px;
            height: 29px;
            display: inline-block;
            color: #5967ff;
            position: absolute;
            top: 16px;
            left: 22px;
            z-index: 2;
          }
          .inp {
            padding-left: 69px;
          }
        }
        .auto-register {
          margin-bottom: 55px;
        }
        .section {
          margin-left: 38px;
          margin-right: 51px;
          .userinfo-item {
            margin-bottom: 15px;
            font-family: "PingFangSC-Regular";
            color: rgba(191, 191, 191, 1);
            font-size: #bfbfbf;
            line-height: 22px;
            img {
              width: 21px;
              height: 26px;
              display: inline-block;
              margin-right: 23px;
              vertical-align: middle;
            }
          }
        }
        .section:nth-child(1) {
          margin-bottom: 42px;
        }
        .section:nth-child(2) {
          margin-bottom: 31px;
        }
        .auto-login {
          margin-left: 41px;
          vertical-align: middle;
          font-size: 24px;
          font-family: "PingFangSC-Regular";
          color: rgba(153, 153, 153, 1);
          line-height: 22px;
          margin-bottom: 55px;
          input {
            display: inline-block;
            vertical-align: middle;
            margin-bottom: 2px;
          }
          label {
            cursor: pointer;
            margin: 0;
            vertical-align: middle;
          }
        }
        .login-submit {
          background: #5248fd;
          font-size: 34px;
          font-family: "PingFang-SC-Regular";
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
          margin-bottom: 30px;
        }
        .forget {
          font-size: 24px;
          font-family: "PingFangSC-Regular";
          color: rgba(88, 101, 254, 1);
          line-height: 22px;
          text-decoration: none;
          float: right;
          margin-right: 30px;
        }
      }
      .tab-reg {
        padding-bottom: 64px;
      }
    }
  }
}

.weui-cell {
  border: 1px solid #aaa;
  width: 550px !important;
  height: 70px !important;
  background: rgba(244, 246, 248, 1) !important;
  border-radius: 10px !important;
}
.login-btn {
  height: 82px;
  background: #5248fd !important;
}
.test {
  width: 314px !important;
}
.verify-btn {
  width: 192px;
  height: 70px;
  border-radius: 10px;
  color: #5967ff;
  border: 2px solid #5967ff;
}
</style>
