<template>
  <div class="project">
    <div class="section">
      <div class="section-text">
        <div class="text-item">
          <span>13.80%</span>
          <span>58天</span>
          <span>400000元</span>
        </div>
        <div class="text">
          <span>预期年化利率</span>
          <span>项目期限</span>
          <span>项目规模</span>
        </div>
      </div>
      <p><span>起投金额</span><span>100元</span></p>
      <p><span>剩余金额</span><span>0.00元</span></p>
      <p><span>还款方式</span><span>按天一次还本付息，按天计息，放款后生息</span></p>
    </div>
    <div class="safety">
      <div class="safe-title">
        安全保障
      </div>
      <div class="safe-content">
        <div class="safe-item">
          <span class="iconfont icon-zijincunguan"></span>
          <div class="safe-right">
            <div>银行资金存管</div>
            <div>陕坝银行直接存管 资金出入实时监控</div>
          </div>
        </div>
        <div class="safe-item">
          <span class="iconfont icon-linghuobianjie"></span>
          <div class="safe-right">
            <div>银行资金存管</div>
            <div>陕坝银行直接存管 资金出入实时监控</div>
          </div>
        </div>
        <div class="safe-item">
          <span class="iconfont icon-quanmiankongzhi"></span>
          <div class="safe-right">
            <div>银行资金存管</div>
            <div>陕坝银行直接存管 资金出入实时监控</div>
          </div>
        </div>
        <div class="safe-item">
          <span class="iconfont icon-zhenshitouming"></span>
          <div class="safe-right">
            <div>银行资金存管</div>
            <div>陕坝银行直接存管 资金出入实时监控</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pro-details">
      <div class="pro-type">
        <router-link  to="/proDetails/subjectDetail"> <span class="subjectDetail " >项目详情</span></router-link> 
        <router-link  to="/proDetails/riskDetail"><span class="riskDetail ">风控信息</span></router-link> 
        <router-link  to="/proDetails/invDetail"><span class="invDetail ">投资记录</span></router-link> 
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.project {
  .section {
    padding: 26px 37px 37px 38px;
    box-sizing: border-box;
    margin-bottom: 25px;
    background: rgba(255, 255, 255, 1);
    .section-text {
      background: linear-gradient(
        90deg,
        rgba(87, 117, 249, 1),
        rgba(70, 147, 253, 1)
      );
      height: 195px;
      border-radius: 15px;
      padding: 54px 0 43px 61px;
      box-sizing: border-box;
      font-family: "PingFangSC-Regular";
      color: rgba(255, 255, 255, 1);
      margin-bottom: 36px;

      .text-item {
        display: flex;
        margin-bottom: 30px;
        span {
          flex: 1;
          font-size: 30px;
        }
        span:nth-child(1) {
          font-size: 48px;
          line-height: 38px;
        }
      }
      .text {
        display: flex;

        span {
          flex: 1;
          font-size: 20px;
        }
      }
    }
    p {
      margin-left: 41px;
      span {
        font-size: 22px;
        font-family: "PingFangSC-Regular";
        color: rgba(51, 51, 51, 1);
        line-height: 38px;
      }
      span:nth-child(1) {
        font-size: 22px;
        color: rgba(136, 136, 136, 1);
        line-height: 38px;
        margin-right: 25px;
      }
    }
  }
  .safety {
    background: #fff;
    .safe-title {
      border-bottom: 2px solid #f3f3f3;
      padding: 31px 0px 27px 80px;
      box-sizing: border-box;
      font-size: 30px;
      font-family: "PingFangSC-Regular";
      color: rgba(51, 51, 51, 1);
      line-height: 38px;
      margin-bottom: 31px;
    }
    .safe-content {
      overflow: hidden;
      margin-bottom: 25px;
      .safe-item {
        margin-left: 89px;
        vertical-align: middle;
        position: relative;
        margin-bottom: 45px;
        span {
          width: 55px;
          height: 47px;
          font-size: 60px;
          color: #333;
          position: absolute;
          top: 50%;
          margin-top: -33px;
        }
        .safe-right {
          margin-left: 121px;
          display: inline-block;
          font-size: 20px;
          color: rgba(136, 136, 136, 1);
          div:nth-child(1) {
            margin-bottom: 20px;
            font-size: 24px;
            color: rgba(51, 51, 51, 1);
            line-height: 38px;
          }
        }
      }
    }
  }
  .pro-details {
    .pro-type {
      display: flex;
      justify-content: space-around;
      height: 78px;
      background-color: #ffffff;
      width: 100vw;
      // top: 0;
      // position: fixed;
      z-index: 999;
      line-height: 78px;
      // border: 1px solid #d5d5d5;
      color: #333333;
      font-size: 26px;
      font-family: "PingFangSC-Regular";
      font-size: 0.373333rem;
      text-align: center;
      border-bottom: 1px solid #F3F3F3;
      a {
        width: 33%;
      }
      .router-link-active {
        color: #5967ff;
        border-bottom: 2px solid #5967ff;
      }
      span {
        width: 80px;
      }
    }
  }
}
a {
  text-decoration: none;
}
</style>
