<template>
  <div class="new">
    <div class="section">
        <div class="good-day">8/12日</div>
        <div class="good-items">
          <div class="item-img">
            <img src="../../assets/images/banner.png" alt="">
            <div class="shouqing">已售罄</div>
          </div>
          <span class="item-tip">炒鸡好看 韩国新潮复古平光镜 男女时尚百搭眼镜红人款....</span>
          <div class="item-money"><span class="new-money">¥37.5</span><span class="xiaoliang">销量<span>¥65</span></span></div>
        </div>
        <div class="good-items">
          <div class="item-img">
            <img src="../../assets/images/banner.png" alt="">
            <div class="shouqing">已售罄</div>
          </div>
          <span class="item-tip">炒鸡好看 韩国新潮复古平光镜 男女时尚百搭眼镜红人款....</span>
          <div class="item-money"><span class="new-money">¥37.5</span><span class="xiaoliang">销量<span>¥65</span></span></div>
        </div>
      </div>
      <div class="section">
        <div class="good-day">8/12日</div>
        <div class="good-items">
          <div class="item-img">
            <img src="../../assets/images/banner.png" alt="">
            <div class="shouqing">已售罄</div>
          </div>
          <span class="item-tip">炒鸡好看 韩国新潮复古平光镜 男女时尚百搭眼镜红人款....</span>
          <div class="item-money"><span class="new-money">¥37.5</span><span class="xiaoliang">销量<span>¥65</span></span></div>
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
.new {
  background: #ffffff;
  padding: 30px 30px 0px 30px;
  .section {
    overflow: hidden;
    .good-day {
      font-size: 30px;
      color: #333;
      margin-left: 30px;
      margin-bottom: 30px;
    }
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
          font-size: 24px;
          color: rgba(255, 90, 0, 1);
          margin-right: 33px;
          margin-left: 10px;
          // line-height: 38px;
        }
        .xiaoliang {
          font-size: 24px;
          color: #888888;
          float: right;
        }
      }
    }
    .good-items:nth-child(2n-1) {
      margin-left: 10px;
    }
  }
}
</style>