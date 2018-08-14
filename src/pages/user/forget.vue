<template>
  <div class="par">
    <div class="forget">
      <div class="forget-bg">
      </div>
    <div class="forget-box">
      <div class="tab">
        <div class="tab-title">找回密码</div>
        <div class="section">
          <div class="input-item">
            <span class="iconfont icon-shouji pos"></span>
            <x-input title="" v-model="tel" class="inp" placeholder="请输入手机号"></x-input>
          </div>
          <div class="input-item">
            <span class="iconfont icon-yanzhengma pos"></span>
            <x-input title="" v-model="tel" class="inp test" placeholder="请输入验证码"></x-input>
            <x-button class="verify-btn" :disabled="verifyisabled" @click.native="sendCode">{{verifyCodeVal}}</x-button>
          </div>
          <x-button class="forget-btn" type="warn" >下一步</x-button>
        </div>
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
  .forget {
    position: relative;
    .forget-bg {
      width: 100%;
      height: 549px;
      background: rgba(89, 103, 255, 0.3);
    }
    .forget-box {
      width: 640px;
      position: absolute;
      left: 0;
      top: 362px;
      padding-left: 51px;
      padding-right: 59px;
      .tab {
        text-align: center;
        .tab-title {
          font-size: 36px;
          font-family: "PingFangSC-Medium";
          color: rgba(244, 244, 244, 1);
          margin-bottom: 24px;
        }
        .section {
          width: 640px;
          height: 481px;
          background: rgba(255, 255, 255, 1);
          border-radius: 20px;
          box-shadow: 10px 0px 10px rgba(89, 103, 255, 0.15);
          color: #ffffff;
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
          .forget-btn {
            height: 82px;
            background: rgba(82, 72, 253, 1);
            font-size: 34px;
            font-family: "PingFangSC-Regular";
            color: rgba(255, 255, 255, 1);
            line-height: 22px;
            margin-top: 80px;
          }
        }
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
.forget-btn {
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
