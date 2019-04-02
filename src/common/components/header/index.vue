<script>
  import template from './template.template';
export default {
  name: "CommonHeader",
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
  template,
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
    gotoLogin(){
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "style.less";
</style>

