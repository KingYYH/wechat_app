<template>
  <div class="sub-details">
    <div class="trodition">
      <p>项目介绍</p>
      <p>借款用途<span>工程保证金</span></p>
      <p>还款用途<span>保证金回笼或公司经营收入</span></p>
      <p>借款描述<span>借款企业本次通过濡江财富平台发起借款40万元，期限55天以内。该笔借款拟用于用于新站高新区2018-2020年度土石方工程定点单位招标。该借款还款方式为按天一次还本付息，按天计息，放款后生息，年化利率13.8%。利息计算公式为：(本金*年化利率/365*实际使用天数) ，还款来源为保证金回笼或公司经营收入，该公司实际控制人为该笔借款提
供连带责任保证担保。
</span></p>
    </div>
    <div class="message">
<p>借款信息</p>
      <p>企业简介<span>借款企业成立于2017年1月22日，注册资本金2000万元整，位于安徽省合肥市。根据国民经济行业分类(GB/T4754---2011)该公司属于建筑业。公司拥有建筑工程施工总承包三级、市政公用工程施工总承包三级、地基基础工程专业承包三级、古建筑工程专业承包三级、钢结构工程专业承包三级、城市及道路照明工程专业承包三级、环保工程专业承包三筑装修装饰工程专业承包二级等资质。</span></p>
      <p>经营情况<span>公司主要经营范围有房屋建筑工程；市政公用工程；地基与基础工程；建筑装饰装修工程；建筑幕墙工程；钢结构工程；园林古建筑工程；园林绿化工程；水利水电工程；土石方工程；建筑劳务；建筑材料、装饰材料销售。2017年公司资产总额为787.68万元，负债合计金额为-153.86万元，主营业务收入791.22万元。经了解，该公司未在其他网络借贷平台借款。</span></p>
      <p>征信情况<span>经查询该企业银行征信报告，未发现贷款逾期情况。
</span></p>
 <p>涉诉情况<span>经查询全国法院被执行人信息查询系统、全国法院失信被执行人名单信息公布与查询平台、全国企业信息公示系统，未发现融资企业和经营者重大涉诉信息。
</span></p>
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
.sub-details {
  padding: 31px 50px 54px 55px;
  box-sizing: border-box;
  background: #fff;
  .trodition, .message {
    p {
      font-family: "PingFangSC-Regular";
      color: rgba(51, 51, 51, 1);
      font-size: 20px;
      span {
        font-size: 20px;
        margin-left: 10px;
        color: rgba(136, 136, 136, 1);
        line-height:38px;
      }
    }
    p:nth-child(1) {
      font-size: 28px;
      color: rgba(51, 51, 51, 1);
    }
     .submit {
           background:rgba(82,72,253,1);;
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
