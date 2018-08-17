<template>
  <div class="all">
    <!-- 全部店铺 -->
    <div class="all-shop">
      <router-link to="/myShop" class="shop-item">
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
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
 .all {
   .all-shop {
     padding: 25px 35px 110px 34px;
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
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }
   }
 }
</style>