<script>
import template from "./template.template";
export default {
  name: "news",
  data() {
    return {
      // text: "新闻列表"
      newsListData: [],
    };
  },
  template,
  created(){
    this.init();
  },
  methods: {
    init(){
      this.$ajax.get('xtz/portal/informations',{params:{pageNum: '1', pageSize: '5', typeDId: '2', typeId: '5'}}).then(rsp=>{
        console.log(rsp.data.data);
        // let rspData = rsp.data;
        // console.log(rspData.data);
        this.newsListData = rsp.data.data.map(item=>{
          if(!!item.createtime){
            item.createtime = this.capitalize(item.createtime)
          }
          return item;
        })
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
    }
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>