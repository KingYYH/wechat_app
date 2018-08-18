<template>
  <div class="mail">
    <div class="search">
          <span class="iconfont icon-sousuo pos"></span>
          <x-input title="" v-model="search" class="inp test" placeholder="搜索商品、店铺"></x-input>
    </div>
   <div class="mail-content" v-if="!search">
      <div class="recommend">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide class="sli"><img src="../../assets/images/banner.png" alt=""></swiper-slide>
          <swiper-slide class="sli"><img src="../../assets/images/banner.png" alt=""></swiper-slide>
          <swiper-slide class="sli"><img src="../../assets/images/banner.png" alt=""></swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
     <div class="goods">
      <router-link to="/comIntro" class="good-item">
        <img src="../../assets/images/company.png" alt="">
        <p>乐器</p>
      </router-link>
      <router-link class="good-item" to="/statistical">
        <img src="../../assets/images/count.png" alt="">
        <p>文具</p>
      </router-link>
      <div class="good-item">
        <img src="../../assets/images/law.png" alt="">
        <p>课时</p>
      </div>
      <router-link class="good-item" to="/mailMore">
        <img src="../../assets/images/intro.png" alt="">
        <p>更多</p>
      </router-link>
    </div>
    <div class="shop">
      <div class="shop-title">
        <span class="shop-hot">热门推荐</span>
        <router-link class="shop-all" to="/allShop">全部</router-link>
      </div>
      <div class="shop-item">
        <div class="item-title">
          <img src="../../assets/images/company.png" alt="">
          <span class="shop-name">诚品e家品牌直营店</span>
          <span class="shop-new">10+ 上新</span>
        </div>
        <div class="item-content">
          <div class="section-item">
            <img src="../../assets/images/law.png" alt="">
          </div>
          <div class="section-item">
            <img src="../../assets/images/law.png" alt="">
          </div>
          <div class="section-item">
            <img src="../../assets/images/law.png" alt="">
          </div>
         
        </div>
      </div>
      <div class="shop-item">
        <div class="item-title">
          <img src="../../assets/images/company.png" alt="">
          <span class="shop-name">诚品e家品牌直营店</span>
          <span class="shop-new">10+ 上新</span>
        </div>
        <div class="item-content">
          <div class="section-item">
            <img src="../../assets/images/law.png" alt="">
          </div>
          <div class="section-item">
            <img src="../../assets/images/law.png" alt="">
          </div>
          <div class="section-item">
            <img src="../../assets/images/law.png" alt="">
          </div>
         
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
      search: "",
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
  components: {
    XInput,
    XButton
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="less">
.mail {
  padding: 29px 33px 90px 29px;
  box-sizing: border-box;
  font-family: "PingFangSC-Regular";

  .search {
    display: flex;
    width: 690px;
    height: 85px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 10px 0px 20px rgba(169, 169, 169, 0.2);
    position: relative;
    margin-bottom: 32px;
    .weui-cell {
      padding-left: 90px !important;
      font-size: 24px;
      font-family: "PingFangSC-Regular";
      color: #999999;
      line-height: 22px;
      box-sizing: border-box;
      background: rgba(244, 246, 248, 1);
      border-radius: 10px;
    }
    .pos {
      width: 54px;
      height: 54px;
      display: inline-block;
      color: #5967ff;
      position: absolute;
      top: 23px;
      left: 47px;
      z-index: 2;
    }
    .inp {
      padding-left: 69px;
      font-size: 24px;
      font-family: "PingFangSC-Regular";
      color: rgba(153, 153, 153, 1);
    }
  }
  .recommend {
    margin-bottom: 38px;
  }
  .goods {
    // width: 609px;
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
    }
    .good-item {
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
  .shop {
    .shop-title {
      overflow: hidden;
      font-family: "PingFangSC-Regular";
      margin-bottom: 29px;
      margin-left: 21px;
      margin-top: 46px;
      .shop-hot {
        font-size: 30px;
        float: left;
        color: rgba(51, 51, 51, 1);
      }
      .shop-all {
        font-size: 24px;
        float: right;
        color: rgba(136, 136, 136, 1);
      }
    }
    .shop-item {
      margin-bottom: 20px;
      .item-title {
        overflow: hidden;
        margin-left: 21px;
        margin-bottom: 20px;
        img {
          width: 60px;
          height: 60px;
          float: left;
        }
        .shop-name {
          margin-left: 15px;
          float: left;
          font-size: 24px;
          margin-top: 20px;
          color: rgba(51, 51, 51, 1);
        }
        .shop-new {
          width: 50px;
          text-align: center;
          white-space: pre-wrap;
          float: right;
          margin-top: 10px;
          font-size: 20px;
          color: rgba(89, 103, 255, 1);
        }
      }
      .item-content {
        // display: flex;
        overflow: hidden;
        .section-item {
          // flex: 1;
          // justify-content: center;
          // align-items: center;
          float: left;
          background: rgba(255, 255, 255, 1);
          border-radius: 10px;
          box-shadow: 10px 0px 20px rgba(169, 169, 169, 0.2);
          img {
            width: 220px;
            height: 220px;
          }
        }
        .section-item:nth-child(2) {
          margin-left: 12px;
          margin-right: 12px;
        }
      }
    }
    // .shop-item:last-child {
    //   margin-bottom: 110px;
    // }
  }
}
.weui-cell {
  // border: 1px solid #aaa;
  width: 690px !important;
  height: 85px !important;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 10px 0px 20px rgba(169, 169, 169, 0.2);
}
.swiper-slide {
  width: 690px;
  height: 260px;
  img {
    width: 690px;
    height: 260px;
  }
}
.swiper-pagination {
  position: static;
  margin-top: 20px;
  .swiper-pagination-bullet-active {
    background: #838383;
  }
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
  }
}
.my-pagination-clickable {
  color: #838383;
}
</style>
