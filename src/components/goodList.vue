<template>
  <div>
    <div class="good-item">
        <div class="item-left">
          <img src="../assets/images/banner.png" alt="">
        </div>
        <div class="item-right">
          <span class="top">REX雷克斯复古民谣木吉他新手初学者学生 女40寸入门吉它电箱男41</span>
          <span class="shld">已售：456件</span>
          <p class="money">¥5692280 <span></span></p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.good-item {
  margin-top: 110px;
  margin-bottom: 20px;
  padding: 25px 39px 25px 32px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 10px 0px 20px rgba(169, 169, 169, 0.2);
  overflow: hidden;
  .item-left {
    float: left;
    margin-right: 22px;
    img {
      width: 170px;
      height: 170px;
    }
  }
  .item-right {
    margin-top: 10px;
    .top {
      font-size: 22px;
      color: rgba(51, 51, 51, 1);
      // line-height: 34px;
      // display: inline-block;
      span {
        word-break: normal;
        width: auto;
        display: block;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow: hidden;
      }
    }
    .shld {
      font-size: 20px;
      color: rgba(136, 136, 136, 1);
      // line-height: 38px;
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .money {
      width: 58px;
      height: 20px;
      font-size: 20px;
      color: rgba(255, 90, 0, 1);
      // line-height: 38px;
      display: inline-block;
      padding: 0;
      margin: 0;
    }
  }
}
</style>