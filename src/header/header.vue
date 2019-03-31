<template>
    <el-header class="header">
        <ul class="navList">
            <router-link v-for="item in navList" tag="li" :to="item.path">
               {{ item.title }}
            </router-link>
        </ul>
    </el-header>
</template>

<script>
    export default {
       name:"header",
       data(){
          return{
             navList:[
               {title:"首页",path:"/home"},
               {title:"企业",path:"/company"},
               {title:"院校",path:"/school"},
               {title:"认证",path:"/identification"}
             ]
          }
       }
    }
</script>
<style scoped>
  .header{
     height: 80px !important;
     background-color: #202125;
  }
  .header .navList{
    display: flex;
    width: 1174px;
    margin: 0 auto;
    line-height: 80px;
  }

  .header .navList li{
     color: #fff;
     padding: 0 40px;
     cursor: pointer;
  }
</style>
