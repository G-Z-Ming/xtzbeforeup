<script>
  import template from './template.template';
  import AreaSelection from '../../common/components/areaSelection/index';
  import SearchTab from '@/common/components/searchTab/index';
  import ItemBar from '@/common/components/itemBar/index';

  export default {
    name: "school",
    components: {
      AreaSelection,
      SearchTab,
      ItemBar
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
        // 验证
        filterTitle: '认证',
        filterList: [{name: '全部', id: '0'}, {name: '已认证', id: '1'}, {name: '未认证', id: '2'}],
        // 列表
        enterLIST: [],
      }
    },
    template,
    methods: {
      /**
       * 行业类型点击事件
       * @param item type: object
       */
      typeIndustryItemClick(item){
        console.log(item);
      },
      /**
       * 地区点击事件
       * @param item type: object
       */
      typeAddItemClick(item){
        console.log(item);
      }
    },
    created(){
      //  学校列表
      this.$ajax.get('xtz/portal/schools', { params: { latest: true, pageNum: 1, pageSize: 6 } }).then(rsp => {
        this.enterLIST = rsp.data.data.map(item=>{
          let arr = [];
          arr.push({name: '学徒制专业', count: item.xtTutorCount});
          arr.push({name: '导师团队', count: item.xtSpecialtyCount});
          item.descriptionList = arr;
          return item
        })
      })
    }
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
