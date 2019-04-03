<script>
import template from "./template.template";
export default {
  name: "company",
  data() {
    return {
      enterLIST: [],
      // 地区 类型
      typeadd: [],
      typeindustry: [],
      // 当前页数
      currentPage3: 1
    };
  },
  template,
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$ajax({
        method: "get",
        url: "/xtz/portal/baseTypes",
        data: { baseTypeId: 35 }
      }).then(res => {
        console.log(res);
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>
