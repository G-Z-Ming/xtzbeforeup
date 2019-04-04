<script>
import template from './template.template';
export default {
  name: 'company',
  data () {
    return {
      // 是否按照最新排序
      Newest: false,
      enterLIST: [],
      // 地区 类型
      typeadd: [],
      typeindustry: [],
      // 当前页数
      currentPage3: 1,
      // 总条数
      totals: 0
    }
  },
  template,
  created () {
    // 调用初始化
    this.init()
  },
  methods: {
    // 初始化数据
    init () {
      // 类型
      this.$ajax.get('xtz/portal/baseInfos', { params: { baseTypeId: 34 } }).then(rsp => {
        this.typeindustry = rsp.data.data
      });
      // 地区
      this.$ajax.get('xtz/portal/baseInfos', { params: { baseTypeId: 35 } }).then(rsp => {
        this.typeadd = rsp.data.data
      });
      //  企业列表
      this.$ajax.get('xtz/portal/enterprises', { params: { certification: 0, latest: this.Newest, pageNum: 1, pageSize: 6 } }).then(rsp => {
        this.enterLIST = rsp.data.data
        this.totals = rsp.data.totals
      });
    },
    // 点击最新发布排序;
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    //点击跳转到公司介绍页
    details (id) {
      this.$router.push({ path: '/introduce', query: { id: id } })
    }
  }
}
</script>
<style lang="less" scoped>
@import './style.less';
</style>
