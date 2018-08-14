<template>
  <div class="inv-detail">
    <div class="int-title">
      <p>全部购买记录</p>
      <span>（按投资时间倒叙排列）</span>
    </div>
    <div class="item">
      <p><span>151****88</span><span> 44000.00元</span></p>
      <p><span>2018-08-06 11:09:56</span></p>
    </div>
    <x-button class="submit invest-btn">已售罄</x-button>
  </div>
</template>
<script>
import { XButton } from "vux";
export default {
  data() {
    return {};
  },
  components: {
    XButton
  }
};
</script>
<style lang="less" scoped>
.inv-detail {
  padding-top: 1px;
  padding-bottom: 41px;
  // padding: 0px 56px 41px 56px;
  background: #ffffff;
  .int-title {
    text-align: center;
    font-family: "PingFangSC-Regular";
    margin-bottom: 21px;
    p {
      font-size: 28px;
      font-family: "PingFangSC-Regular";
      color: rgba(51, 51, 51, 1);
      // line-height: 38px;
      margin-bottom: 12px;
    }
    span {
      font-size: 20px;
      color: rgba(136, 136, 136, 1);
    }
  }
  .item {
    font-family: "PingFangSC-Regular";
    border-bottom: 2px solid #f3f3f3;
    p {
      font-size: 20px;
      overflow: hidden;
      margin-left: 57px;
      margin-right: 39px;
      span {
        float: left;
        color: #888888;
      }
      span:nth-child(1) {
        float: right;
      }
    }
    p:nth-child(1) {
      span {
        color: #333333;
        float: right;
      }
      span:nth-child(1) {
        float: left;
      }
    }
  }
  .submit {
    background: #a4a4a4;
    margin-left: 56px;
    width: 638px;
    margin-right: 56px;
    font-size: 30px;
    font-family: "PingFang-SC-Regular";
    color: rgba(255, 255, 255, 1);
    line-height: 32px;
    margin-top: 35px;
    text-align: center;
  }
  .invest-btn {
  height: 82px;
  // background: #5248fd !important;
}
}
</style>
