<template>
  <div class="comment">
    <div class="section">
      <div class="user-top">
        <div class="useavater"><img :src="avatar"></div>
        <span class="user-name">蕙***雅</span>
        <span class="user-date">8月5日 16:24</span>
      </div>
      <div class="user-content">
        <div class="star">
          <span class="iconfont icon-start3"></span>
          <span class="iconfont icon-start3"></span>
          <span class="iconfont icon-start3"></span>
          <span class="iconfont icon-start3"></span>
          <span class="iconfont icon-start3"></span>
        </div>
        <div class="text">项链很好看，高端大气上档次，最近每天都戴。</div>
        <div class="type">型号：金色</div>
      </div>
    </div>
     <div class="section">
      <div class="user-top">
        <div class="useavater"><img :src="avatar"></div>
        <span class="user-name">蕙***雅</span>
        <span class="user-date">8月5日 16:24</span>
      </div>
      <div class="user-content">
        <div class="star">
          <span class="iconfont icon-start3"></span>
          <span class="iconfont icon-start3"></span>
          <span class="iconfont icon-start3"></span>
          <span class="iconfont icon-start3"></span>
          <span class="iconfont icon-start3"></span>
        </div>
        <div class="text">项链很好看，高端大气上档次，最近每天都戴。</div>
        <div class="type">型号：金色</div>
      </div>
    </div>
  </div>
</template>
<script>
import defaultAvatar from "@/assets/images/banner.png";
export default {
  data() {
    return {
      avatar: defaultAvatar
    };
  }
};
</script>
<style lang="less" scoped>
.comment {
  .section {
    padding: 35px 30px 30px 25px;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 12px solid #F6F6F6;
    .user-top {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .useavater {
        width: 60px;
        height: 60px;
        display: inline-block;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .user-name {
        width: 66%;
        margin-left: 20px;
        font-size: 30px;
        color: rgba(51, 51, 51, 1);
      }
      .user-date {
        font-size: 24px;
        color: rgba(136, 136, 136, 1);
      }
    }
    .user-content {
      .star {
        color: #FF9000;
        font-size: 30px;
      }
      .text {
        font-size: 30px;
        color: rgba(51, 51, 51, 1);
        line-height: 60px;
      }
      .type {
        font-size: 24px;
        color: rgba(136, 136, 136, 1);
      }
    }
  }
  .section:last-child {
    border-bottom: 0;
  }
}
</style>