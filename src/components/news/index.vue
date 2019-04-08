<script>
import template from "./template.template";
export default {
  name: "news",
  data() {
    return {
      // text: "新闻列表"
      newsListData: [],
      activeId: '',
      // 分页器开始
      pageSize: 4,    // 一个页面多少个
      pageNum: 1,     // 当前页面
      totalCount: 0  // 总共多少个
      // 分页器结束
    };
  },
  template,
  created(){
    this.init();
  },
  watch:{
    pageNum(){
      this.init()
    }
  },
  methods: {
    init(){
      const {typeDId} = this.$route.query;
      const {pageNum, pageSize} = this;
      this.activeId = typeDId;
      this.$ajax.get('xtz/portal/informations',{params:{pageNum, pageSize, typeDId, typeId: '5'}}).then(rsp=>{
        // let rspData = rsp.data;
        // console.log(rspData.data);
        this.newsListData = rsp.data.data.map(item=>{
          if(!!item.createtime){
            item.createtime = this.capitalize(item.createtime)
          }
          return item;
        });
        this.totalCount = +rsp.data.totals;
      });
    },
    /** 时间过滤
     * @param value  type:string
     **/
    capitalize(value){
      return value.substring(0, 10)
    },
    gotoNewsInfo(){
      this.$router.push({
        path: "/home/news/newsinfo"
      });
    },
    /**
     * 分页器跳转事件
     * @param num  当前页面
     */
    handleCurrentChange(num){
      this.pageNum = num;
    },
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>
