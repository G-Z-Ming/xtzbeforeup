<script>
import template from './template.template';
export default {
  name: "home",
  data () {
    return {
      // 师资培训
      teachersList: [],
      JNheadline: [],
<<<<<<< HEAD
      newHeaders: [
      ],
      newsActiveIndex: '1',
=======
      newHeaders: [],
      // 新闻tab切换用的index
      newsActiveIndex: 0,
>>>>>>> 0d79ce80398e9bdde1d11dfb10357b3ea0525ed8
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
<<<<<<< HEAD
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

=======
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
        path: "/home/news"
      });
>>>>>>> 0d79ce80398e9bdde1d11dfb10357b3ea0525ed8
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
