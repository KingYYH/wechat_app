// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'
import router from './router'
import httpUrl from './api/api.js'
import axios from './Axios/axios.js'
import util from '@/assets/js/util.js'
import store from './store/store.js'
import { ToastPlugin, LoadingPlugin, ConfirmPlugin} from 'vux'
import { Datetime, Group } from 'vux'
Vue.component(Datetime.name, Datetime);
Vue.component(Group.name, Group)

Vue.config.productionTip = false
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.prototype.util = util
Vue.prototype.httpUrl = httpUrl
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
