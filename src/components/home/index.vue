<script>
  import $ from 'jquery';
import template from './template.template';
export default {
  name: "home",
  data () {
    return {
      // 师资培训
      teachersList: [],
      JNheadline: [],
      newHeaders: [],
      // 新闻tab切换用的index
      newsActiveIndex: 0,
      // 新闻
      newsDataList: [],
      // 存储新闻的对象
      newsStoreObj: {}
    };
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
        // console.log(rsp);
        
        this.newHeaders = rsp.data.data
      });
      // 获取新闻列表
      this.exchangeNews('1', 0);
      // 获取师资培训列表
      this.$ajax.get('xtz/portal/informations', { params: { pageNum: '1', pageSize: '5', typeId: '7' } }).then(rsp => {
        this.teachersList = rsp.data.data.map(item=>{
          if(!!item.createtime){
            item.createtime = this.capitalize(item.createtime)
          }
          return item;
        });
      });
    },
    /** 时间过滤
     * @param value  type:string
     **/
    capitalize(value){
      return value.substring(0, 10)
    },
    /**
    * 新闻报道的title点击事件
    * @param index 索引  type: number
    * @param id    id    type: string
    */
    exchangeNews (id, index) {
      if(!!this.newsStoreObj[id]){
        this.newsDataList = this.newsStoreObj[id];
        this.newsActiveIndex = index;
      }else{
        this.$ajax.get('xtz/portal/informations', { params: { pageNum: '1', pageSize: '5', typeDId: id, typeId: '5' } }).then(rsp => {
          this.newsDataList = rsp.data.data.map(item=>{
            if(!!item.createtime){
              item.createtime = this.capitalize(item.createtime)
            }
            return item;
          });
          this.newsStoreObj[id] = this.newsDataList;
          this.newsActiveIndex = index;
        }).catch(rej=>{
          console.error(rej);
        });
      }
    },
    gotoNews(){
      this.$router.push({
        path: "/home/news",
        query:{
          typeDId: this.newsActiveIndex+1
        }
      });
    },
  },
  created () {
    // 调用初始化数据方法
    this.init();
  },
  mounted() {
    $(".items li", ".header ").eq(0).siblings().removeClass('active');
    $(".items li", ".header ").eq(0).addClass('active');
  }
}
</script>
<style lang="less" scoped>
@import './style.less';
</style>
