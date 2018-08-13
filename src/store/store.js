import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex)
const VueSelf = Vue;
export default new Vuex.Store({
  state: {
    token: null, 
    footerStatus: true,
    user: null,
    user_profile: null
  },
  mutations: {
    toggleFooter (state, status) {
      state.footerStatus = status
    },
    // 用户登录成功，存储 token 并设置 header 头
    logined (state, token) {  
      state.token = token   
      localStorage.setItem("token",token)       
    },
    // 用户刷新 token 成功，使用新的 token 替换掉本地的token
    refreshToken (state, token) {
      state.token = token
      localStorage.setItem("token", token)    
    },  
    // 登录成功后拉取用户的信息存储到本地
    profile (state, data) {        
      state.user_profile = data.user_profile;
      state.identityType = data.user ;
      localStorage.setItem('user',JSON.stringify(data.user));
      localStorage.setItem('user_profile',JSON.stringify(data.user_profile));   
    },
    // 用户登出，清除本地数据
    logout (state) { 
      state.user = null ;
      state.user_profile = null;
      state.token = null;
      localStorage.removeItem('token') 
      localStorage.removeItem('user') 
      localStorage.removeItem('user_profile') 
    }
  },
  actions: {
    // 登录成功后保存用户信息
    logined ({ dispatch, commit }, obj) {
      return new Promise(function (resolve, reject) {    
        commit('logined', obj.token)  
        // obj.vue.axios.defaults.headers.common['Authorization'] = "Bearer"+" "+ obj.token 
        dispatch('profile', {vue:obj.vue})       
      })
    },
    // 登录成功后使用 token 拉取用户的信息
    profile ({ commit },obj) {   
      return new Promise(function (resolve, reject) {    
        obj.vue.axios.get(obj.vue.httpUrl.userInfo).then(res=> {   
          if (res !== false) {         
            commit('profile', res)   
            console.log(res)       
          } 
        })
      })
    },
    // 用户登出，清除本地数据并重定向至登录页面  logout
    logout ({ commit },vue) {
      return new Promise(function (resolve, reject) {     
        vue.axios.get(vue.httpUrl.logout).then(res => {
          if (res.status_code == 200){
            router.push({ name: 'login'})
            commit('logout')
          }         
        })
      })
    },
    // 将刷新的 token 保存至本地
    refreshToken ({ commit }, token) {   
      return new Promise(function (resolve, reject) {
        commit('refreshToken', token)
      })
    }
  }
})
