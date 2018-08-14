<template>
  <div class="comIntro">
    <div class="section"><img src="../../assets/images/intro.png" alt=""></div>
    <div class="container">
      <p class="brief">网络借贷信息中介机构 业务活动管理暂行办法</p>
      <p class="title">第一章 总则</p>
      <p class="text">
第一条 为规范网络借贷信息中介机构业务活动信息披露行为，维护参与网络借贷信息中介机构业务活动主体的合法权益，建立客观、公平、透明的网络借贷中介业务活动环境, 促进网络借贷行业健康发展, 依据《中华人民共和国民法通则》 《关于促进互联网金融健康发展指导意见》 《网络借贷信息中介机构业务活动管理暂行办法》 等法律法规, 制定本指引。
      </p>
      <p class="text">
        第二条 本指引所称信息披露，是指网络借贷信息中介机构及其分支机构通过其官方网站及其他互联网渠道向社会公众公示网络借贷信息中介机构基本信息、运营信息、项目信息、重大风险信息、消费者咨询投诉渠道信息等相关信息的行为。

      </p>
       <p class="text">
        第三条 网络借贷信息中介机构应当在其官方网站及提供网络借贷信息中介服务的网络渠道显著位置设置信息披露专栏，展示信息披露内容。披露用语应当准确、精练、严谨、通俗易懂。

      </p>
      <p class="text">
        第三条 网络借贷信息中介机构应当在其官方网站及提供网络借贷信息中介服务的网络渠道显著位置设置信息披露专栏，展示信息披露内容。披露用语应当准确、精练、严谨、通俗易懂。
      </p>
      <p class="text">第四条 其他互联网渠道包括网络借贷信息中介机构手机应用软件、微信公众号、微博等社交媒体渠道及网络借贷信息中介机构授权开展信息披露的其他互联网平台。各渠道披露的信息内容应当保持一致。</p>
      <p class="text">第五条 信息披露应当遵循“真实、准确、完整、及时”原则，不得有虚假记载、误导性陈述、重大遗漏或拖延披露。</p>
      <p class="text">第六条  信息披露内容应当符合法律法规关于国家秘密、商业秘密、个人隐私的有关规定。</p>
      
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
  box-sizing: border-box;
  .section {
    height: 161px;
    text-align: center;
    margin-bottom: 35px;
    img {
      height: 161px;
    }
  }
  .container {
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    box-shadow: 10px 0px 20px rgba(60, 199, 192, 0.15);
    font-size: 24px;
    font-family: "PingFangSC-Regular";
    color: rgba(51, 51, 51, 1);
    line-height: 40px;
    padding-top: 30px;
    padding-bottom: 32px;
    .brief {
      text-align: center;
      font-size: 24px;
      font-family: "PingFangSC-Regular";
      color: rgba(154, 52, 255, 1);
      line-height: 38px;
    }
    .title {
      text-align: center;
      font-size: 24px;
      font-family: "PingFangSC-Regular";
      color: #333;
      line-height: 40px;
    }
    .text {
      margin-left: 49px;
      margin-right: 52px;
      font-size: 20px;
      font-family: "PingFangSC-Regular";
      color: #666;
      line-height: 34px;
    }
  }
}
</style>
