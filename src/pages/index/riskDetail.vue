<template>
  <div class="risk-details">
    <div class="trodition">
      <p>风控措施</p>
      <p><span>濡江财富对借款企业进行了双人实地详细调查，包括该企业的经营能力、盈利能力、资产状况、管理团队、股东状况等。濡江财富业务人员撰写了详实的书面调查报告，风险人员撰写了独立的审查意见，各自平行作业。濡江财富风险评审委员会集体综合评估后表决通过该企业准入授信。借款企业实际控制人为该项目提供连带责任保证担保。濡江财富风控部将定期回访借款企业，及时掌握融资企业的资金使用和账款回收情况，确保企业按期归还借款本息。</span></p>
    </div>
    <div class="message">
<p>风险评估</p>
     <p><span>我们认为该笔借款风险较小，风险可控。该项目风险等级为：<span class="aaa">AAA。</span>适合风险测评为保守型、稳健型、积极型的投资人。</span></p>
      <p>风险提示<span>1、可能存在借款人不能足额及时偿还本息；
 </span>
 <span style="display:block;">2、可能存在担保人不能及时代偿本息；
请各投资人自行评估风险，谨慎投资。</span></p>
  <x-button class="submit invest-btn" @click="invBtn()">我要投资</x-button>
    </div>
    
  </div>
</template>
<script>
import { XButton } from "vux";
export default {
  data() {
    return {};
  },
  methods: {
    invBtn() {
      this.router.push('/invPro')
    }
  },
  components: {
    XButton
  }
};
</script>
<style lang="less" scoped>
.risk-details {
  padding: 31px 50px 54px 55px;
  box-sizing: border-box;
  background: #fff;
  .trodition,
  .message {
    p {
      font-family: "PingFangSC-Regular";
      color: rgba(51, 51, 51, 1);
      font-size: 20px;
      span {
        font-size: 20px;
        margin-left: 10px;
        color: rgba(136, 136, 136, 1);
        line-height: 32px;
      }
      .aaa {
        color: #5967ff;
      }
    }
    p:nth-child(1) {
      font-size: 28px;
      color: rgba(51, 51, 51, 1);
      line-height: 38px;
    }
    .submit {
      background: rgba(82, 72, 253, 1);
      font-size: 30px;
      font-family: "PingFang-SC-Regular";
      color: rgba(255, 255, 255, 1);
      line-height: 32px;
      margin-top: 50px;
    }
  }
}
.invest-btn {
  height: 82px;
  background: #5248fd !important;
}
</style>
