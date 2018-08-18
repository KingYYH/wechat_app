<template>
  <div class="myshopSearch">
    <!-- 店铺搜索 -->
    <div class="section">
      <div class="search">
         <div class="input-item">
          <span class="iconfont icon-sousuo pos" @click="searchKeyword"></span>
          <x-input title="" v-model="seach" class="inp" placeholder="搜索商品" v-on:keyup.enter='searchKeyword'></x-input>
          <x-button class="login-submit search-btn" type="warn" @click.native="searchKeyword">搜本店</x-button>
        </div>
      </div>
      <div class="hot-search">
        <h3 class="hot-title">热门搜索</h3>
        <ul class="hot-list">
          <li class="hot-name">平光镜</li>
          <li class="hot-name">太阳镜</li>
          <li class="hot-name">腰带</li>
          <li class="hot-name">项链</li>
          <li class="hot-name">撞色包包</li>
          <li class="hot-name">时尚手表</li>
          <li class="hot-name">斩男色口红</li>
        </ul>
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
      seach: "",
      keyword: ''
    };
  },
  methods: {
    searchKeyword() {
      console.log(1)
    }
  }
};
</script>
<style lang="less" scoped>
.myshopSearch {
  .section {
    // margin-top: 30px;
    padding: 30px 50px 0px 30px;
    box-sizing: border-box;
    .search {
      margin-bottom: 40px;
      .input-item {
        // margin-left: 38px;
        position: relative;
        display: flex;
        .weui-cell {
          padding-left: 90px !important;
          font-size: 28px;
          font-family: "PingFangSC-Regular";
          color: rgba(153, 153, 153, 1) !important;
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
          // font-size: 28px;
          position: absolute;
          top: 50%;
          left: 30px;
          margin-top: -18px;
          z-index: 2;
        }
        .inp {
          padding-left: 90px;
          color: red;
        }
      }
    }
    .hot-search {
      padding: 42px 52px 6px 66px;
      box-sizing: border-box;
      // height: 313px;
      background: rgba(255, 255, 255, 1);
      border-radius: 6px;
      .hot-title {
        font-size: 28px;
        color: rgba(92, 106, 255, 1);
        margin-bottom: 45px;
        line-height: normal;
      }
      .hot-list {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        .hot-name {
          margin-right: 36px;
          align-items: center;
          box-sizing: border-box;
          text-align: center;
          color: rgba(153, 153, 153, 1);
          margin-bottom: 45px;
          font-size: 26px;
        }
      }
    }
  }
}
.weui-cell {
  // border: 1px solid #aaa;
  width: 580px !important;
  height: 84px !important;

  border-radius: 10px !important;
  background: rgba(255, 255, 255, 1) !important;
  box-shadow: 10px 0px 20px rgba(169, 169, 169, 0.2);
}
.search-btn {
  width: 110px;
  height: 84px;
  position: absolute;
  right: 0px;
  background: linear-gradient(
    90deg,
    rgba(88, 116, 250, 1),
    rgba(72, 143, 252, 1)
  ) !important;
  border-radius: 15px;
  box-shadow: 10px 0px 20px rgba(88, 117, 250, 0.2);
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