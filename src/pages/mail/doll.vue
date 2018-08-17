<template>
  <div class="goods">
    <div class="section">
      <good-list></good-list>
    </div>
  </div>
</template>
<script>
import goodList from '@/components/goodList.vue'
export default {
  components: {
    goodList
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.goods {
  .section {
    padding: 0px 35px;
    
  }
}
</style>