<script>
import template from "./template.template";
export default {
  name: "skill",
  data() {
    return {
      // text: "新闻列表"
      skillListData: [],
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
    this.initId();
    this.init();
  },
  watch:{
    pageNum(){
      this.init()
    },
    activeId(){
      this.init()
    }
  },
  methods: {
    /**
     * 初始化activeId
     **/
    initId(){
      const {typeDId} = this.$route.query;
      this.activeId = typeDId;
    },
    /**
     * 初始化数据
     **/
    init(){
      const {pageNum, pageSize} = this;
      this.$ajax.get('xtz/portal/informations',{params:{pageNum, pageSize, typeDId: this.activeId, typeId: '8'}}).then(rsp=>{
        // let rspData = rsp.data;
        // console.log(rspData.data);
        this.skillListData = rsp.data.data.map(item=>{
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
    gotoskillInfo(id){
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
    changeActiveId(id){
      this.activeId = id;
    }
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>
