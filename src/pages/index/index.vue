<template>
  <div class="home">
    <div class="container">
       <div class="recommed">
        <slide :loop = 'loop' :autoPlay='autoPlay'>
            <div class="slider-item"><img src="../../assets/images/banner.png" alt=""></div>
            <div class="slider-item"><img src="../../assets/images/banner.png" alt=""></div>
            <div class="slider-item"><img src="../../assets/images/banner.png" alt=""></div>
        </slide>
    </div>
    <div class="tab">
      <router-link to="/comIntro" class="tab-item">
        <img src="../../assets/images/company.png" alt="">
        <p>企业介绍</p>
      </router-link>
      <div class="tab-item">
        <img src="../../assets/images/count.png" alt="">
        <p>统计数据</p>
      </div>
      <div class="tab-item">
        <img src="../../assets/images/law.png" alt="">
        <p>法律条款</p>
      </div>
      <div class="tab-item">
        <img src="../../assets/images/intro.png" alt="">
        <p>使用说明</p>
      </div>
    </div>
    </div>
    <div class="dongtai">
      <img src="../../assets/images/dongtai.png" alt="">
      <div class="dong-right">

      </div>
    </div>
    <div class="section">
       <div class="section-item">
        <div class="item-top">
          <span>短期资金周转</span>
          <span class="qiye">个人</span>
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
        <div class="section-item">
        <div class="item-top">
          <span>短期资金周转</span>
          <span class="qiye">个人</span>
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
import Slide from "@/components/slider.vue";
export default {
  data() {
    return {
      loop: true,
      autoPlay: true
    };
  },
  components: {
    Slide
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="less">
.home {
  padding-top: 30px;
  .container {
    background: #ffffff;
    border-bottom: 2px solid #ededed;
    .recommend {
    }
    .tab {
      display: flex;
      margin-top: 48px;
      justify-content: center;
      a {
        text-decoration: none;
      }
      .tab-item {
        justify-content: center;
        text-align: center;
        flex: 1;
        img {
          width: 40px;
          height: 40px;
        }
        p {
        }
      }
    }
  }
  .dongtai {
    background: #ffffff;
    padding: 25px 54px 24px 50px;
    img {
      width: 68px;
      height: 60px;
    }
  }
  .section {
    height: 200px;
    margin: 30px 39px 98px 36px;
    border-radius: 20px;
    box-shadow: 10px 0px 20px rgba(88, 116, 249, 0.15);
    .section-item {
      // width: 675px;
      height: 200px;
      padding: 26px 0px 39px 44px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      box-shadow: 10px 0px 20px rgba(88, 116, 249, 0.15);
      margin-bottom: 20px;
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
