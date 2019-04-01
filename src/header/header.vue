<template>
  <div class="header">
    <div class="he_title">
      <div class="system"><img
          src="../img/logo.png"
          alt=""
        ></div>
      <div class="tetle">
        <div
          v-for="(item,index) in roudata"
          :key="item.name"
          @click="gotos(item,index)"
          :class="{ active:index==current}"
        ><a>{{item.name}}</a> </div>
      </div>
      <div
        class="login"
      ><a href="http://localhost:8081"><img
            src="../img/log.png"
            alt=""
          > <span>登录</span> </a></div>
    </div>

    <router-view></router-view>
    <div class="he_tupo">
      <div>电话号码： 020-85525150或85524613或38094955 手机：13660147767 传真：020-85524965 邮箱：info@e-techedu.com</div>
      <div>公司地址：广州天河北路687号光大银行大厦2611室</div>
      <div>Copyright 2011 by 益达教育 粤ICP备1501670</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data () {
    return {
      current: 0,
      roudata: [
        { name: "首页", goto: "/home" },
        { name: "企业", goto: "/company" },
        { name: "院校", goto: "/school" },
        { name: "认证", goto: "/identification" }
      ]
    };
  },
  mounted () {
    // this.$router.push({
    //   path: "/index"
    // });
  },
  methods: {
    gotos (item, index) {
      this.$router.push({
        path: item.goto
      });
      this.current = index;
    },
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
  min-height: 100vh;
  padding-bottom: -150px;
  .he_tupo {
    position: fixed;
    bottom: 0px;
    height: 150px;
    width: 100vw;
    background: #454545;
    color: #fff;
    font-size: 15px;
    text-align: center;
    padding-top: 50px;
    div {
      margin-bottom: 10px;
    }
  }
  .he_title {
    position: relative;
    padding: 0 360px;
    background-color: rgb(#202125);
    height: 80px;
    color: #fff;
    text-align: center;
    line-height: 80px;
    display: flex;
    .system {
      position: absolute;
      top: 18px;
    }
    .tetle {
      display: flex;
      > div:nth-child(1) {
        margin-left: 160px;
      }
      > div {
        width: 64px;
        margin: 0 20px;
        a {
          display: block;
          width: 100%;
        }
        a:hover {
          color: #00aaff;
        }
      }
    }
    .login {
      position: absolute;
      right: 360px;
      width: 100px;
      height: 38px;
      background: #00aaff;
      line-height: 38px;
      top: 18px;
      padding-left: 6px;
      img {
        display: block;
        position: absolute;
        left: 16px;
        top: 10px;
      }
    }
  }
}
</style>

