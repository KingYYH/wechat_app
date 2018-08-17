<template>
  <div class="all">
    <!-- 店铺全部 -->
    <div class="good-all">
      <div class="good-tab">
        <div class="switch-tab">
          <tab  :line-width=0 :bar-active-color="tabActiveColor" :active-color="tabActiveColor">
            <tab-item :selected="params.status == 0" >综合</tab-item>
            <tab-item :selected="params.status == 1" >热销</tab-item>
            <tab-item :selected="params.status == 2" >促销</tab-item>
            <tab-item :selected="params.status == 3" >价格<span class="iconfont icon-shangxia  search"></span></tab-item>
          </tab>
        </div>
      </div>
    
       <div class="section">
         <div class="good-items">
          <div class="item-img">
            <img src="../../assets/images/banner.png" alt="">
            <div class="shouqing">已售罄</div>
          </div>
          <span class="item-tip">炒鸡好看 韩国新潮复古平光镜 男女时尚百搭眼镜红人款....</span>
          <div class="item-money">
            <span class="new-money">¥37.5</span>
            <span>
              <span>+</span>
              <span class="jifen-money">¥65</span>
              <span class="iconfont icon-jifen-copy zuanshi"></span>
            </span>
            <span class="shouliang">售量<span>55</span></span>
             </div>
        </div>
         <div class="good-items">
          <div class="item-img">
            <img src="../../assets/images/banner.png" alt="">
            <div class="shouqing">已售罄</div>
          </div>
          <span class="item-tip">炒鸡好看 韩国新潮复古平光镜 男女时尚百搭眼镜红人款....</span>
          <div class="item-money">
            <span class="new-money">¥37.5</span>
            <span>
              <span>+</span>
              <span class="jifen-money">¥65</span>
              <span class="iconfont icon-jifen-copy zuanshi"></span>
            </span>
            <span class="shouliang">售量<span>55</span></span>
             </div>
        </div>
       </div>
    </div>
  </div>
</template>
<script>
// import colltab from '@/components/colltab.vue'
import { Tab, TabItem } from "vux";
export default {
  components: {
    // colltab
    Tab,
    TabItem
  },
  data() {
    return {
      tabActiveColor: "#5967FF",
      params: {
        // page: 1,
        // maxPage: 10,
        status: 0
      }
    };
  }
};
</script>
<style lang="less" scoped>
.all {
  .good-all {
    .good-tab {
      margin-bottom: 20px;
      margin-top: 20px;
      .switch-tab {
        .vux-tab {
          height: 38px;
          color: #666666;
          background-color: #f5f5f5 !important;
          .vux-tab-item {
            font-size: 24px;
          }
        }
      }
    }
    .section {
      padding: 0px 28px 0px 28px;
      .good-items {
        float: left;
        display: flex;
        // align-items: center;
        // justify-content: center;
        flex-direction: column;
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;
        width: 340px;
        margin-bottom: 20px;
        padding-bottom: 30px;
        box-sizing: border-box;
        .item-img {
          width: 340px;
          height: 340px;
          margin-bottom: 28px;
          position: relative;
          .shouqing {
            width: 120px;
            height: 120px;
            background: rgba(0, 0, 0, 1);
            opacity: 0.4;
            font-size: 24px;
            color: #ffffff;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -60px;
            margin-left: -60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item-tip {
          height: 52px;
          margin-left: 15px;
          margin-right: 12px;
          font-size: 22px;
          color: rgba(51, 51, 51, 1);
          overflow: hidden;
          //  white-space: nowrap; text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .item-money {
          margin-top: 25px;
          margin-left: 15px;
          .new-money {
            font-size: 30px;
            color: rgba(255, 90, 0, 1);
            // line-height: 38px;
          }
          .zuanshi {
            font-size: 30px;
            color: #FF9000;
          }
          .jifen-money {
            font-size: 30px;
            color: rgba(255, 90, 0, 1);
            // line-height: 38px;
          }
          .shouliang {
            font-size: 20px;
            color: #888888;
          }
        }
      }
      .good-items:nth-child(2n-1) {
        margin-right: 10px;
      }
    }
  }
}
</style>