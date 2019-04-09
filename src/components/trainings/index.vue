<script>
import template from "./template.template";
export default {
  name: "trainings",
  data() {
    return {
      // text: "新闻列表"
      newsListData: [],
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
   
    /**
     * 初始化数据
     **/
    init(){
      const {pageNum, pageSize} = this;
      this.$ajax.get('xtz/portal/informations',{params:{pageNum, pageSize,  typeId: '7'}}).then(rsp=>{
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
    gotoNewsInfo(id){
      this.$router.push({
        path: "/home/news/newsinfo",
        query:{id}
      });
    },
    /**
     * 分页器跳转事件
     * @param num  当前页面
     */
    handleCurrentChange(num){
      this.pageNum = num;
    },
    /**
     * 改变当前activeId
     * @param id
     */
   
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>
