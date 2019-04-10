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
    methods: {
      dateFilter(input, splitchar){
        var input = new Date(input);
        var y = input.getFullYear();
        var m = input.getMonth() + 1;
        var d = input.getDate();
        var h = input.getHours();
        var mi = input.getMinutes();
        var s = input.getSeconds();
        if (splitchar == "yyyy-MM-dd hh:mm") {
          return y + "-" + m + "-" + d + " " + h + ":" + mi;
        }
        if (splitchar == "YY-MM-DD") {
          return y + "-" + m + "-" + d;
        }
      },
      prev(){
        this.$router.go(-1)
      }
    },
    created() {
      // 获取新闻id
      const {id} = this.$route.query;
      // 获取接口
      this.$ajax.get('xtz/portal/information', {params: {informationId: id}}).then(rsp => {
        rsp.data.data.createtime = this.dateFilter(rsp.data.data.createtime, 'yyyy-MM-dd hh:mm');
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
