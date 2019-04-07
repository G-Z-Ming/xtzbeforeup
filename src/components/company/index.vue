<script>
import template from './template.template';
import AreaSelection from '../../common/components/areaSelection/index';
import SearchTab from '@/common/components/searchTab/index';
import ItemBar from '@/common/components/itemBar/index';
export default {
  name: 'company',
  components: {
    AreaSelection,
    SearchTab,
    ItemBar
  },
  data () {
    return {
      // 行业类型开始
      typeIndustryTitle: '行业类型',
      typeIndustry: [
        {baseName: '全部', id: ''}
      ],
      industryId: '',
      // 行业类型结束

      // 地区开始
      typeaddTitle: '<i style="margin-right: 32px;">地</i>址',
      typeAdd: [
        {baseName: '全部', id: ''}
      ],
      areaId: '',
      // 地区结束
      recruitTitle: '招聘需求',
      recruit: [
        {baseName: '全部', id: ''}
      ],
      recruitId: '',
      // 招聘需求开始

      //招聘需求结束

      // 排序
      latest: true,
      // 学校名称
      schoolName: '',
      // 列表
      enterLIST: [],

      // 分页器开始
      pageSize: 6,    // 一个页面多少个
      pageNum: 1,     // 当前页面
      totalCount: 0,  // 总共多少个
      // 分页器结束

      // 验证开始
      filterTitle: '认证',
      filterList: [{name: '全部', id: '0'}, {name: '已认证', id: '1'}, {name: '未认证', id: '2'}],
      certification: '0'
      // 验证结束
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
    },
    recruitId(){
      this.initData()
    },
    certification(){
      this.initData()
    }
  },
  created () {
    // 调用初始化
    this.init()
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
     * 招聘需求点击事件
     * @param item type: object
     */
    recruitItemClick(item){
      this.recruitId = item.id
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
     * 改变验证类型
     * @param item
     */
    handleIdentify(item){
      this.certification = item.id;
    },
    /**
     *  路由跳转
     *  @param id  type:string
     */
    changeToRoute(id){
      this.$router.push({
        path: '/introduce',
        query: {id}
      })
    },
    // 初始化数据
    init () {
      // 类型
      this.$ajax.get('xtz/portal/baseInfos', { params: { baseTypeId: 34 } }).then(rsp => {
        rsp.data.data.unshift({baseName: '全部', id: ''});
        this.typeIndustry = rsp.data.data;
      });
      // 地区
      this.$ajax.get('xtz/portal/baseInfos', { params: { baseTypeId: 35 } }).then(rsp => {
        rsp.data.data.unshift({baseName: '全部', id: ''});
        this.typeAdd = rsp.data.data;
      });
      //  企业列表
      this.initData()
    },
    /**
     * 初始化企业列表
     */
    initData(){
      const {latest, pageNum, pageSize, industryId, areaId, schoolName, certification, recruitId} = this;
      this.$ajax.get('xtz/portal/enterprises', { params: { certification, latest, pageNum, pageSize, industryId, areaId, schoolName} }).then(rsp => {
        this.enterLIST = rsp.data.data.map(item=>{
          let arr = [];
          arr.push({name: '学徒岗位', count: item.xtTutorCount});
          arr.push({name: '企业师傅', count: item.xtSpecialtyCount});
          arr.push({name: '企业规模', count: item.businessScale});
          item.descriptionList = arr;
          item.introduction = item.introduce;
          return item
        });
        this.totalCount = rsp.data.totals;
      });
    }
  }
}
</script>
<style lang="less" scoped>
@import './style.less';
</style>
