<template>
  <div class="comIntro">
    <div class="section"><img src="../../assets/images/intro.png" alt=""></div>
    <div class="container">
      <p class="brief">企业简介</p>
      <p class="text">
安徽省濡江金融信息服务有限公司（以下简称濡江财富）是首家落户无为的互联网金融信息服务平台，于安徽省濡江金融信息服务有限公司（以下简称濡江财富）是首家落户无为的互联网金融信息服务平台，于安徽省濡江金融信息服务有限公司（以下简称濡江财富）是首家落户无为的互联网金融信息服务平台，于
      </p>
      <p class="text">
        公司秉承“普惠金融”理念，专注于工程保证金投融资，依托互联网技术，着力为广大亟需理财的投资者和有资金需求的企业或个人提供信息撮合服务。
      </p>
       <p class="text">
        濡江财富作为互联网金融的积极践行者，将严格遵照行业监管规定，努力做您身边的理财专家。     
      </p>
      <p class="jiagou">企业组织架构</p>
      <img src="" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.state.footerStatus = false;
  }
};
</script>
<style scoped lang="less">
.comIntro {
  padding: 26px 37px 49px 39px;
   box-sizing:border-box; 
  .section {
    height: 161px;
    text-align: center;
    margin-bottom: 35px;
    img {
      height: 161px;
    }
  }
  .container {
    height: 935px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    box-shadow: 10px 0px 20px rgba(60, 199, 192, 0.15);
    font-size: 24px;
    font-family: "PingFangSC-Regular";
    color: rgba(51, 51, 51, 1);
    line-height: 40px;
    padding-top: 30px;
    .brief {
      text-align: center;
      font-size: 26px;
      font-family: "PingFangSC-Regular";
      color: rgba(60, 200, 192, 1);
      line-height: 38px;
      margin-bottom: 30px;
    }
    .text {
      text-indent: 2em;
      margin-left: 49px;
      margin-right: 52px;
      font-size: 24px;
      font-family: "PingFangSC-Regular";
      color: #333333;
      line-height: 40px;
    }
    .jiagou {
      text-align: center;
      margin-top: 43px;
      margin-bottom: 38px;
      font-size: 26px;
      font-family: "PingFangSC-Regular";
      color: rgba(60, 200, 192, 1);
      line-height: 38px;
    }
  }
}
</style>
