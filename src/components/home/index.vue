<script>
import template from './template.template';
export default {
  name: "home",
  data () {
    return {
      // 师资培训
      teachersList: [],
      JNheadline: [],
      newHeaders: [
      ],
      newsActiveIndex: '1',
      // 新闻
      newsDataList: [],
    };
  },
  // 时间过滤
  filters: {
    capitalize: function (value) {
      return value.substring(0, 10)
    }
  },
  template,
  methods: {
    // 初始化数据
    init () {
      // get传参请求 获取新闻报道 师资培训 智能竞赛
      this.$ajax.get('/xtz/portal/baseInfos', { params: { baseTypeId: '1' } }).then(rsp => {
        // console.log(rsp, 'rsp123');
      });
      // 获取新闻类型
      this.$ajax.get('xtz/portal/baseInfos', { params: { baseInfoId: '5', baseTypeId: '1' } }).then(rsp => {
        this.newHeaders = rsp.data.data
      });
      // 获取新闻列表
      this.$ajax.get('xtz/portal/informations', { params: { pageNum: '1', pageSize: '5', typeDId: '1', typeId: '5' } }).then(rsp => {
        this.newsDataList = rsp.data.data
      });
      // 获取师资培训列表
      this.$ajax.get('xtz/portal/informations', { params: { pageNum: '1', pageSize: '5', typeId: '7' } }).then(rsp => {
        this.teachersList = rsp.data.data
      });
    },
    /**
    * 新闻报道的title点击事件
    * @param id id
    */
    exchangeNews (id) {
      this.newsActiveIndex = id
      this.$ajax.get('xtz/portal/informations', { params: { pageNum: '1', pageSize: '5', typeDId: index, typeId: '5' } }).then(rsp => {
        
        this.newsDataList = rsp.data.data
      });

    },
  },
  created () {
    // 调用初始化数据方法
    this.init();
  }
}
</script>
<style lang="less" scoped>
@import './style.less';
</style>
