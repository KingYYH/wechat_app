import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index/index' // 首页
import invest from '@/pages/invest/invest' // 投资
import mail from '@/pages/mail/mail' // 商城
import user from '@/pages/user/user' // 我的
import login from '@/pages/user/login' // 登录
import forget from '@/pages/user/forget' // 找回密码
import changePass from '@/pages/user/changePass' // 新密码
import company from '@/components/company' // 企业
import mine from '@/components/mine' //个人
import proDetails from '@/pages/index/proDetails' // 详情介绍
import slider from '@/components/slider' // 滚动
import comIntro from '@/pages/index/comIntro' // 详情介绍
import legal from '@/pages/index/legal' // 法律条款
import subjectDetail from '@/pages/index/subjectDetail' // 项目详情
import riskDetail from '@/pages/index/riskDetail' // 风控详情
import invDetail from '@/pages/index/invDetail' // 风险评估
import dynamicNews from '@/pages/index/dynamicNews' // 动态新闻
import newPage from '@/pages/index/newPage' // 新闻详情
import invPro from '@/pages/invest/invPro' //  投资
import statistical from '@/pages/index/statistical' // 统计数据
import allShop from '@/pages/mail/allShop' // 全部店铺
import mailMore from '@/pages/mail/mailMore' // 更多商品
import musical from '@/pages/mail/musical' // 乐器
import classing from '@/pages/mail/classing' // 课时
import doll from '@/pages/mail/doll' // 玩偶
import leather from '@/pages/mail/leather' // 皮具
import shoes from '@/pages/mail/shoes' // 鞋子
import writing from '@/pages/mail/writing' // 文具
import myShop from '@/pages/mail/myShop' // 我的店铺
import goodIndex from '@/pages/mail/goodIndex' // 我的店铺 首页
import goodAll from '@/pages/mail/goodAll' // 我的店铺全部
import goodNew from '@/pages/mail/goodNew' // 我的店铺上新
// import coll from '@/pages/mail/coll' // 我的店铺综合
// import hotgood from '@/pages/mail/hotgood' // 我的店铺热销
// import salespro from '@/pages/mail/salespro' // 我的店铺促销
import myshopSearch from '@/pages/mail/myshopSearch' // 本店搜索

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',    
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/invest',
      name: 'invest',
      component: invest,
      redirect: 'invest/company',  
      children: [
        {  
          path: '/invest/company',
          name: 'company',       
          component: company
        },

        {
          path: '/invest/mine',
          name: 'mine',
          component: mine
        }
      ]
    },
    {
      path: '/mail',
      name: 'mail',
      component: mail,
      children: [
        
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget,
    },
    {
      path: '/changePass',
      name: 'changePass',
      component: changePass,
    },
    {
      path: '/proDetails',
      name: 'proDetails',
      component: proDetails,
      redirect: 'proDetails/subjectDetail',  
      children: [
        {  
          path: '/proDetails/subjectDetail',
          name: 'subjectDetail',       
          component: subjectDetail
        },

        {
          path: '/proDetails/riskDetail',
          name: 'riskDetail',
          component: riskDetail
        },
        {
          path: '/proDetails/invDetail',
          name: 'invDetail',
          component: invDetail
        }
      ]
    },
    {
      path: '/slider',
      name: 'slider',
      component: slider
    },
    {
      path: '/comIntro',
      name: 'comIntro',
      component: comIntro
     },
     {
      path: '/legal',
      name: 'legal',
      component: legal
     },
     {
       path: '/dynamicNews',
       name: 'dynamicNews',
      component: dynamicNews
     },
     {
      path: '/newPage',
      name: 'newPage',
      component: newPage
    },
    {
      path: '/invPro',
      name: 'invPro',
      component: invPro
    },
    {
      path: '/statistical',
      name: 'statistical',
      component: statistical
    },
    {  
      path: '/allShop',
      name: 'allShop',       
      component: allShop
    },
    {  
      path: '/mailMore',
      name: 'mailMore',       
      component: mailMore,
      redirect: '/mailMore/musical',
      children: [
        {  
          path: '/mailMore/musical',
          name: 'musical',       
          component: musical
        },

        {
          path: '/mailMore/writing',
          name: 'writing',
          component: writing
        },
        {
          path: '/mailMore/classing',
          name: 'classing',
          component: classing
        },
        {
          path: '/mailMore/doll',
          name: 'doll',
          component: doll
        },
        {
          path: '/mailMore/shoes',
          name: 'shoes',
          component: shoes
        },
        {
          path: '/mailMore/leather',
          name: 'leather',
          component: leather
        }
      ]
    },
    {
      path: '/myShop',
      name: 'myShop',
      component: myShop,
      redirect: '/myShop/goodIndex',
      children: [
        {  
          path: '/myShop/goodIndex',
          name: 'goodIndex',       
          component: goodIndex
        },

        {
          path: '/myShop/goodAll',
          name: 'goodAll',
          component: goodAll
        },
        {
          path: '/myShop/goodNew',
          name: 'goodNew',
          component: goodNew
        },
       
      ]
    },
    
    {
      path: '/myshopSearch',
      name: 'myshopSearch',
      component: myshopSearch
    },
  ]
})
