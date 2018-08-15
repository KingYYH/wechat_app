<template>
  <div class="dynamicNews">
    <div class="new-title">
      <img src="../../assets/images/banner.png" alt="">
    </div>
    <div class="new-section">
      <div class="section-item" @click="newBtn()">
        <span class="item-date">2018-07-23</span>
        <span class="item-mine">骆星敏：对濡江财富的一次全面解读</span>
      </div>
    </div>
    <div class="page">
      <span class="prev" @click="prevBtn()" v-if="page > 1">上一页</span>
      <span class="next" @click="nexrBtn()" >下一页</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: "1"
    };
  },
  created() {},
  methods: {
    prevBtn() {
      this.page--;
    },
    nexrBtn() {
      this.page++;
    },
    newBtn() {
      this.$router.push('/newPage')
    }
  }
};
</script>
<style lang="less" scoped>
.dynamicNews {
  padding-top: 26px;
  // padding-left: 38px;
  // padding-right: 38px;
  .new-title {
    text-align: center;
    margin-bottom: 34px;
    img {
      width: 675px;
      height: 126px;
    }
  }
  .new-section {
    width: 675px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    box-shadow: 10px 0px 20px rgba(88, 116, 249, 0.15);
    margin-bottom: 35px;
    .section-item {
      overflow: hidden;
      border-bottom: 1px solid #ededed;
      .item-date {
        margin-top: 35px;
        margin-left: 52px;
        margin-right: 54px;
        font-size: 20px;
        font-family: "PingFangSC-Regular";
        color: rgba(153, 153, 153, 1);
        display: block;
        margin-bottom: 20px;
      }
      .item-mine {
        width: 570px;
        margin-left: 52px;
        margin-right: 54px;
        font-size: 26px;
        font-family: "PingFangSC-Regular";
        color: rgba(51, 51, 51, 1);
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 36px;
      }
    }
  }
  .page {
    display: inline-block;
    font-size: 24px;
    font-family: "PingFangSC-Regular";
    color: rgba(89, 103, 255, 1);
    line-height: 38px;
    display: flex;
    span {
      flex: 1;
      justify-content: center;
      margin-right: 50px;
      text-align: center;
    }
    .prev {
    }
    .next {
    }
  }
}
</style>