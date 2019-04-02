<template>
  <div id="app">
    <el-container class="is-vertical">
      <CommonHeader></CommonHeader>
      <transition  name="fade">
        <router-view  class="mainWarp"></router-view>
      </transition>
      <CommonFooter></CommonFooter>
    </el-container>

  </div>
</template>

<script>
  import CommonHeader from "./common/components/header/index"
  import CommonFooter from "./common/components/footer/index"
  export default {
    name: 'App',
    components:{
      CommonHeader,
      CommonFooter
    },

  }
</script>

<style>
  @import './common/css/common.css';
</style>
