  <template>
  <div class="headerCommon">      
    <div class="side side-l">
      <span class="iconfont icon-jiantou2" @click="back" v-if="lefticon"></span>    
    </div>
    <h1 class="tt">{{headertt}}</h1>
    <div class="side side-r">
      <router-link  to="/index" class="iconfont icon-shouye"  v-if="righticon" ></router-link>
    </div>   
  </div>
</template>
<script>
export default {
  props: {
    headertt: String,
    lefttxt: String,
    righttxt: String,
    leftUrl: String,
    lefticon: [String, Boolean],
    righticon: [String, Boolean]
  },
  methods: {
    back () {
      let leftUrl = this.leftUrl;
      if (leftUrl) {
        this.$router.push("/"+ leftUrl)
      } else{
        this.$router.go(-1)
      }     
    }
  }
}
</script>
<style lang='less'>
.headerCommon {
  position: fixed;
  width: 100%;
  height: 60px;  
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 99;
  .tt {
    height: 60px;
    line-height: 60px;   
    font-size: 37px;
    color: #FFFFFF;
    font-weight: normal;
    text-align: center;
  }
  .side {
    position: absolute;
    top: 0.106667rem;   
    .iconfont {
      display: inline-block;
      font-size: 0.533333rem;
      padding: 0.133333rem;   
      color: #666;
    }
  }
  .side-l {
    // left: @basic-margin;
    .iconfont {
    }
  }
  .side-r {
    // right: @basic-margin;
  }
}
</style>



