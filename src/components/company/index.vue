<script>
import template from './template.template';
export default {
  name: 'company',
  data () {
    return {
      enterLIST: [],
      // 地区 类型
      typeadd: [],
      typeindustry: [],
      // 当前页数
      currentPage3: 1
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
      })
      // 地区
      this.$ajax.get('xtz/portal/baseInfos', { params: { baseTypeId: 35 } }).then(rsp => {
        this.typeadd = rsp.data.data
      })
      //  企业列表
      this.$ajax.get('xtz/portal/enterprises', { params: { certification: 0, latest: true, pageNum: 1, pageSize: 6 } }).then(rsp => {
        this.enterLIST = rsp.data.data
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style lang="less" scoped>
@import './style.less';
</style>
