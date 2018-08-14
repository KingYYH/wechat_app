<template>
  <div id="app">
    <transition >
      <router-view class="child-view"></router-view>
    </transition>
    <Footer v-if="this.$store.state.footerStatus"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  },
  data(){
    return {
      footerStatus: true
    }
  },
  created() {
    this.getPath()
  },
  methods: {
    getPath () {
      let path = this.$route.path.replace("/", "");
      const RouteName = ['index', 'invest', 'mail', 'user']
      if (RouteName.indexOf(path) >= 0) {
        this.$store.commit('toggleFooter', true)
      } else {
        this.$store.commit('toggleFooter', false)
      }

    },
  }
}
</script>

<style lang="less">
@import './assets/font/iconfont.css';
@import './assets/css/vuxreset.less';
html,
body {
  margin: 0;
  padding: 0;
}

a {
  color: #000;
}
/* //解决闪烁 */
[v-cloak] {
  display: none !important;
}
/* // router 动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.takespace {
  height: 1.12rem;
}

.base-btn {
  display: block;
  margin: 0 0.266667rem;
  display: flex;
  height: 1.066667rem;
  align-items: center;
  justify-content: center;
  font-size: 0.453333rem;
  background-color: #ef5a48;
  color: #fff;
  border-radius: 0.16rem;
}

.child-view {
  position: absolute;
  width: 100%;
  min-height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #f5f5f5;
  /* // transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1); */
}

.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active {
  transition: all 0.3s ease;
}

.slide-right-leave-to,
.slide-left-enter {
  -webkit-transform: translate(100%, 0);
  transform: translate(100% 0);
}
.slide-right-enter,
.slide-left-leave-to {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

.slide-l-leave-active,
.slide-l-enter-active {
  transition: all 0.3s ease;
}

.slide-l-enter {
  -webkit-transform: translate(100%, 0);
  transform: translate(100% 0);
}

.slide-l-leave-to {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  line-height: 1.2;
  font-size: 12px;
  color: #7F8389;
  background-color: #FAFAFA;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

* {
  -webkit-tap-highlight-color: transparent;
}

body {
  position: static !important;
}
</style>
