<template>
  <div class="toast">
    <div class="good-toast">
      <div>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div style="padding:15px;">
          <x-button  type="primary">show toast</x-button>
        </div>
        <div @click="closeToast" >
          <span class="vux-close">xxxx</span>
        </div>
      </x-dialog>
    </div>
    </div>
  </div>
</template>
<script>
import { XDialog, XButton } from "vux";
export default {
   components: {
    XDialog,
    XButton
  },
  props:{
    showToast: false,
  },
  methods: {
    closeToast() {
      this.$emit('closeToast',false); 
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.toast {
  .good-toast {

  }
}
</style>