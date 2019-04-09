<script>
  import template from "./template.template";

  export default {
    name: "newsinfo",
    data() {
      return {
        text: "新闻内容",
        newsInfo: {}       // 新闻内容
      };
    },
    template,
    methods: {},
    created() {
      // 获取新闻id
      const {id} = this.$route.query;
      // 获取接口
      this.$ajax.get('xtz/portal/information', {params: {informationId: id}}).then(rsp => {
        this.newsInfo = rsp.data.data;
      }).catch(rej => {
        this.newsInfo = {};
      });
    }
  };
</script>
<style lang="less" scoped>
  @import "./style.less";
</style>
