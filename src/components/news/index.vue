<script>
import template from "./template.template";
export default {
  name: "news",
  data() {
    return {
      text: "新闻列表"
    };
  },
  template,
  methods: {
    gotoNewsInfo(){
      this.$router.push({
        path: "/home/news/newsinfo"
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>