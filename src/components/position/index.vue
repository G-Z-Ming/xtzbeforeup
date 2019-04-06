<script>
  import template from "./template.template";
  export default {
    name: "position",
    data() {
      return {
        signIdex: 0,
        // 导航
        positionNav: [
          { name: "职位描述", path: "" },
          { name: "课程体系(培养方案)", path: "" },
          { name: "学徒晋升", path: "" }
        ]
      };
    },
    template,
    created() {},
    methods: {
      HereClick(index, path) {
        
        
        this.signIdex = index;
      }
    }
  };
</script>
<style lang="less" scoped>
  @import "./style.less";
</style>
