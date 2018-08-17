<template>
  <div class="myshopSearch">
    <div class="section">
      <div class="search">
         <div class="input-item">
          <span class="iconfont icon-shouji pos"></span>
          <x-input title="" v-model="seach" class="inp" placeholder="请输入手机号"></x-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XInput, XButton } from "vux";
export default {
  components: {
    XInput,
    XButton
  },
  data() {
    return {
      seach: ""
    };
  }
};
</script>
<style lang="less" scoped>
.myshopSearch {
  .section {
    margin-top: 30px;
    .search {
      .input-item {
        margin-left: 38px;
        position: relative;
        display: flex;
        .weui-cell {
          padding-left: 69px !important;
          font-size: 28px;
          font-family: "PingFangSC-Regular";
          color:rgba(153,153,153,1);
          line-height: 22px;
          box-sizing: border-box;
          background: rgba(244, 246, 248, 1);
          border-radius: 10px;
        }
        .pos {
          width: 36px;
          height: 36px;
          display: inline-block;
          color: #5967ff;
          position: absolute;
          top: 50%;
          left: 30px;
          margin-top: -18px;
          z-index: 2;
        }
        .inp {
          padding-left: 69px;

        }
      }
    }
  }
}
.weui-cell {
  border: 1px solid #aaa;
  width: 580px !important;
  height: 84px !important;
  border-radius: 10px !important;
  background:rgba(255,255,255,1) !important;
box-shadow:10px 0px 20px rgba(169,169,169,0.2);
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