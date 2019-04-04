<script>
  import template from './template.template';
  import AreaSelection from '../../common/components/areaSelection/index';

  export default {
    name: "school",
    components: {
      AreaSelection
    },
    data() {
      return {
        // 行业类型
        typeIndustryTitle: '行业类型',
        typeIndustry: [
          {baseName: '全部'}
        ],
        // 地区
        typeaddTitle: '<i style="margin-right: 32px;">地</i>区',
        typeAdd: [
          {baseName: '全部'}
        ],
        // 列表
        enterLIST: []
      }
    },
    template,
    methods: {}
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
