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
import subjectDetail from '@/pages/index/subjectDetail' // 法律条款
import riskDetail from '@/pages/index/riskDetail' // 法律条款
import invDetail from '@/pages/index/invDetail' // 法律条款

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
      redirect: 'company',  
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
      component: mail
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
     }
  ]
})
