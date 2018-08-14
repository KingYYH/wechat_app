<template>
  <div class="company">
    <div class="head"></div>
    <div class="section">
      <div class="section-item">
        <div class="item-top">
          <span>短期资金周转</span>
          <span class="qiye">企业</span>
        </div>
        <div class="item-content">
          <span class="lilu">13.8%</span>
          <span class="day">54天</span>
          <span class="money">1000000元</span>
        </div>
        <div class="item-bottom">
          <span>预期年化利率</span>
          <span>期限</span>
          <span>借款金额</span>
        </div>

      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name: "company",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.company {
  .head {
    margin-top: 78px;
  }
  .section {
    padding: 31px 39px 98px 36px;
    .section-item {
      // width: 675px;
      height: 200px;
      padding: 26px 0px 39px 44px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      box-shadow: 10px 0px 20px rgba(88, 116, 249, 0.15);
      .item-top {
        font-size: 26px;
        font-family: "PingFangSC-Regular";
        color: rgba(136, 136, 136, 1);
        line-height: 38px;
        margin-bottom: 38px;
        .qiye {
          // width: 56px;
          height: 29px;
          // -moz-border-radius: 5px;
          // -ms-border-radius: 5px;
          // -o-border-radius: 5px;
          border-radius: 5px;
          color: #02cbe9;
          font-size: 14px;
          border: 2px solid #02cbe9;
          text-align: center;
        }
      }
      .item-content {
        font-family: "PingFangSC-Regular";
        line-height: 38px;
        display: flex;
        span {
          flex: 1;
        }
        .lilu {
          font-size: 44px;
          color: rgba(255, 71, 73, 1);
        }
        .day {
          font-size: 24px;
          color: #333333;
        }
        .money {
          font-size: 24px;
          color: #333333;
        }
        margin-bottom: 18px;
      }
      .item-bottom {
        display: flex;
        font-size: 20px;
        font-family: "PingFangSC-Regular";
        color: #b5b5b5;
        line-height: 38px;
        span {
          flex: 1;
        }
      }
    }
  }
}
</style>
