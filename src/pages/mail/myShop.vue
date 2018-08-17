<template>
  <div class="shop">
    <!-- 店铺 首页 -->
    <div class="my-shop">
      <shoptab></shoptab>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import shoptab from '@/components/shoptab.vue'
export default {
  components: {
    shoptab
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .shop {
    .my-shop {
      height: 166px;
    }
  }
</style>