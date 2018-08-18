<template>
  <div class="shop">
    <div class="shop-list">
      <div class="sec-content">
        <div class="recommend">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="sli"><img src="../assets/images/banner.png" alt=""></swiper-slide>
            <swiper-slide class="sli"><img src="../assets/images/banner.png" alt=""></swiper-slide>
            <swiper-slide class="sli"><img src="../assets/images/banner.png" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>

          </swiper>
        </div>
        <div class="section">
          <h1 class="title">b家粉猫眼石扇形项链精工品质925纯银裙子项链晚宴单品时尚经典</h1>
        <p class="all-money"><span class="money">¥37.5</span> <span class="jifen">＋<span>2280</span><span class="iconfont icon-jifen-copy"></span></span></p>
        <div class="money-type">
          <div class="old-money">原价：<span>¥49</span></div>
          <div class="sales">销量：<span>49</span></div>
        </div>
        </div>
      </div>
      <div class="sec-choose">
        <div class="yunfei">
          <span class="label">运费</span>
          <span class="inp">包邮...</span>
        </div>
        <div class="shop-num">
          <span class='label'>已选择</span>
          <span class="placeholder" v-if="!params.good_num">请选择</span>
          <span class="inp" v-else>{{params.good_num}}件</span>
          <div class="opacity-wrap" @click="chooseToast()">
            <span >请选择</span>
          </div>
          <span class="iconfont icon-youbian youbian"></span>
        </div>
      </div>
      <div class="sec-miaoshu">
        <div class="miaoshu-tab">
          <router-link :to="{ name: 'shoplistDetail' }" class="nav-li">商品详情</router-link>
          <router-link :to="{ name: 'shoplistEva' }" class="nav-li">商品评价</router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <toast :showToast="showToast" @closeToast="closeToast"></toast>
    <x-button class="login-submit buy-btn" type="warn" >立即购买</x-button>
  </div>
</template>
<script>
import Toast from '@/components/toast.vue'
import { PopupPicker, XButton } from "vux";
export default {
  components: {
    PopupPicker,
    XButton,
    Toast
  },
  data() {
    return {
      params: {
        good_num: ""
      },
      showToast: false,
      swiperOption: {
        notNextTick: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          // bulletActiveClass: 'my-pagination-clickable',
          clickableClass: "my-pagination-clickable"
          // bulletElement : 'li',
          // bulletClass : 'my-bullet',
        }
      }
    };
  },
  created() {
  },
  methods: {
    chooseToast() {
      console.log(11)
      this.showToast = true
    },
    closeToast(showToast) {
      console.log(showToast)
      this.showToast = showToast;
    }
  }
};
</script>
<style lang="less" scoped>
.shop {
  margin-bottom: 98px;
  .shop-list {
    .sec-content {
      margin-bottom: 15px;
      background: rgba(255, 255, 255, 1);
      .recommend {
        margin-bottom: 30px;
      }
      .section {
        padding: 0px 60px 30px 30px;
        box-sizing: border-box;
        overflow: hidden;
        .title {
          font-size: 34px;
          color: rgba(51, 51, 51, 1);
          line-height: 34px;
        }
        .all-money {
          font-size: 30px;
          color: rgba(255, 90, 0, 1);
          line-height: 43px;
          .money {
          }
          .jifen {
          }
        }
        .money-type {
          font-size: 30px;
          color: rgba(136, 136, 136, 1);
          line-height: 38px;
          .old-money {
            float: left;
          }
          .sales {
            font-size: 24px;
            color: rgba(136, 136, 136, 1);
            line-height: 38px;
            float: right;
          }
        }
      }
    }
    .sec-choose {
      margin-bottom: 15px;
      height: 183px;
      background: rgba(255, 255, 255, 1);
      .yunfei {
        margin-left: 40px;
        margin-right: 60px;
        height: 90px;
        border-bottom: 2px solid #f4f4f4;
        display: flex;
        align-items: center;
        flex: 1;
        position: relative;
        box-sizing: border-box;
        font-size: 24px;
        color: #888888;
        .label {
          width: 80%;
          font-size: 30px;
          color: rgba(51, 51, 51, 1);
        }
      }
      .shop-num {
        margin-left: 40px;
        margin-right: 60px;
        height: 90px;
        display: flex;
        align-items: center;
        flex: 1;
        position: relative;
        box-sizing: border-box;
        font-size: 24px;
        color: #888888;
        .label {
          width: 80%;
          font-size: 30px;
          color: rgba(51, 51, 51, 1);
        }
        .youbian {
          margin-left: 15px;
        }
      }
    }
    .sec-miaoshu {
      .miaoshu-tab {
        height: 85px;
        font-size: 24px;
        color: rgba(89, 103, 255, 1);
        line-height: 85px;
        display: flex;
        // align-items: center;
        // justify-content: center;
        background: rgba(255, 255, 255, 1);
        border-bottom: 2px solid #F4F4F4;
        .nav-li {
          width: 30%;
          text-align: center;
         
        }
        .nav-li:nth-child(1) {
          margin-right: 40%;
        }
        .router-link-active {
          color: #5967ff;
          border-bottom: 4px solid #5967ff;
        }
      }
    }
  }
}
.swiper-slide {
  width: 750px;
  height: 260px;
  img {
    width: 750px;
    height: 400px;
    border-radius: 0;
  }
}
.swiper-pagination {
  // position: static;
  // margin-top: 20px;
  .swiper-pagination-bullet-active {
    background: #5967ff;
  }
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    margin-right: 10px !important;
  }
}
.my-pagination-clickable {
  color: #5967ff;
}
.swiper-container {
  height: 400px;
}
.opacity-wrap {
  opacity: 0;
  position: absolute;
  right: 30px;
  top: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  // padding-left: 1.333333rem;
  box-sizing: border-box;
}
.buy-btn {
  height: 92px;
  font-size:30px;
  background: #5248FD !important;
  position: fixed;
  bottom: 0;
  z-index: 99;
}
</style>