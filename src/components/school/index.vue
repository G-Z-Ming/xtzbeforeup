<script>
  import $ from 'jquery';
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
        // 行业类型开始
        typeIndustryTitle: '行业类型',
        typeIndustry: [
          {baseName: '全部', id: ''}
        ],
        industryId: '',
        // 行业类型结束

        // 地区开始
        typeaddTitle: '<i style="margin-right: 32px;">地</i>区',
        typeAdd: [
          {baseName: '全部', id: ''}
        ],
        areaId: '',
        // 地区结束

        // 排序
        latest: true,
        // 学校名称
        schoolName: '',
        // 列表
        enterLIST: [],

        // 分页器开始
        pageSize: 6,    // 一个页面多少个
        pageNum: 1,     // 当前页面
        totalCount: 0  // 总共多少个
        // 分页器结束
      }
    },
    template,
    watch:{
      pageNum(){
        this.initData()
      },
      schoolName(){
        this.initData()
      },
      latest(){
        this.initData()
      },
      areaId(){
        this.initData()
      },
      industryId(){
        this.initData()
      }
    },
    methods: {
      /**
       * 行业类型点击事件
       * @param item type: object
       */
      typeIndustryItemClick(item){
        this.industryId = item.id
      },
      /**
       * 地区点击事件
       * @param item type: object
       */
      typeAddItemClick(item){
        this.areaId = item.id
      },
      /**
       * 分页器跳转事件
       * @param num  当前页面
       */
      handleCurrentChange(num){
        this.pageNum = num;
      },
      /**
       * 选择排序规则
       * @param flag  排序规则
       */
      handleOrder(flag){
        this.latest = flag;
      },
      /**
       * 筛选学校名称
       * @param name  排序名称
       */
      handleSearchName(name){
        this.schoolName = name;
      },
      /**
       * 获取学校列表
       */
      initData(){
        const {latest, pageNum, pageSize, industryId, areaId, schoolName} = this;
        this.$ajax.get('xtz/portal/schools', { params: { latest, pageNum, pageSize, industryId, areaId, schoolName} }).then(rsp => {
          this.enterLIST = rsp.data.data.map(item=>{
            let arr = [];
            arr.push({name: '学徒制专业', count: item.xtTutorCount});
            arr.push({name: '导师团队', count: item.xtSpecialtyCount});
            item.descriptionList = arr;
            item.picture = item.logopic;
            item.name = item.schoolname;
            return item
          });
          this.totalCount = +rsp.data.totals;
        })
      }
    },
    created(){
      //  初始化数据
      this.initData()
    },
    mounted() {
      $(".items li", ".header ").eq(2).siblings().removeClass('active');
      $(".items li", ".header ").eq(2).addClass('active');
    }
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
