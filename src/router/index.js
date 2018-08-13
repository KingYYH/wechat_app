import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index/index' // 首页
import invest from '@/pages/invest/invest' // 投资
import mail from '@/pages/mail/mail' // 商城
import user from '@/pages/user/user' // 我的
import login from '@/pages/user/login' // 登录

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
      component: index,
      children: [

      ]
    },
    {
      path: '/invest',
      name: 'invest',
      component: invest,
      children: [
        
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
      component: user,
      children: [
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ]
})
