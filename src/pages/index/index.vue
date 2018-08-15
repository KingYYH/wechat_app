<template>
  <div class="home">
    <div class="container">
       <div class="recommed">
      
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="sli"><img src="../../assets/images/banner.png" alt=""></swiper-slide>
        <swiper-slide class="sli"><img src="../../assets/images/banner.png" alt=""></swiper-slide>
        <swiper-slide class="sli"><img src="../../assets/images/banner.png" alt=""></swiper-slide>
      </swiper>
        <div class="swiper-pagination" slot="pagination"></div>

    </div>
    <div class="tab">
      <router-link to="/comIntro" class="tab-item">
        <img src="../../assets/images/company.png" alt="">
        <p>企业介绍</p>
      </router-link>
      <router-link class="tab-item" to="/statistical">
        <img src="../../assets/images/count.png" alt="">
        <p>统计数据</p>
      </router-link>
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
         <ul :style="{ top }" class=" scroll-content" >
          <li v-for="(item,index) in prizeList" :key="index" @click="itemBtn(item,index)">{{item.name}}</li >  
        </ul>
      </div>
      <router-link :to="{ name: 'dynamicNews' }" class="iconfont icon-quanbu dynamicNews" @click="dtbtn"></router-link>
    </div>
    <div class="section">
       <div class="section-item" @click="invBtn()">
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
// import Slide from "@/components/slider.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        effect: "coverflow",
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
      },
      prizeList: [
        { name: "骆星敏：对濡江财富的一次全面解读1111111111111111111…" },
        { name: "新华社评P2P：不能因短时间内出现…1111111111111111111" },
        { name: "骆星敏：对濡江财富的一次全面解读11111111111111…" },
        { name: "新华社评P2P：不能因短时间内出现…111111111111111111111111111" },
        { name: "骆星敏：对濡江财富的一次全面解读111111111111111…" },
        { name: "新华社评P2P：不能因短时间内出现…11111111111111" },
        { name: "新华社评P2P：不能因短时间内出现…11111111111111" }
      ],
      activeIndex: 0
    };
  },
  components: {
    // Slide,
    swiper,
    swiperSlide
  },
  created() {
    this.$store.state.footerStatus = true;
  },
  computed: {
    top() {
      return -this.activeIndex * 38 + "px";
    }
  },
  mounted() {
    setInterval(_ => {
      if (this.activeIndex < this.prizeList.length) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, 2000);
  },
  methods: {
    invBtn() {
      this.$router.push('/proDetails')
    },
    dtbtn() {
      console.log(11)
    },
     itemBtn(item,index) {
      console.log(item,index)
    }
  }
};
</script>
<style scoped lang="less">
.home {
  // padding-bottom: 98px;
  // box-sizing: border-box;
  background-color: #fafafa;
  .container {
    padding-top: 30px;
    background: #ffffff;
    border-bottom: 2px solid #ededed;
    .recommed {
      overflow: hidden;
    }

    .tab {
      display: flex;
      margin-top: 90px;
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
    position: relative;
    img {
      width: 68px;
      height: 60px;
      margin-top: 10px;
      float: left;
    }
    .dynamicNews {
      position: absolute;
      top:38px;
      right: 54px;
      display: inline-block;
      width: 30px;
      height: 30px;
      font-size: 50px;
      color: #C7CDCD;
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
    .section-item:last-child{
      margin-bottom: 110px;
    }
  }
}
.swiper-slide {
  height: 370px;
  img {
    height: 370px;
    transform: translateX(50px);
  }
}
.swiper-pagination {
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
.recommed .swiper-pagination {
  text-align: center;
  margin-left: 342px;
  margin-top: 30px;
  // .swiper-pagination-bullet{
  //   width: 14px !important;
  //   height: 14px !important;
  // }
}
// .swiper-pagination-bullet{background-color: #D2D2D2;width: 14px !important;height: 14px !important; border-radius: 50%;opacity: 1;}

//  .swiper-pagination-bullet-active{background: #838383;}
.dong-right {
  overflow: hidden;
  height: 80px;
}

.scroll-content {
  position: relative;
  margin-top: 0;
  transition: top 0.5s;

  li {
    line-height: 38px;
    text-align: center;
    list-style: none;
    width: 405px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
