<script>
  import template from './template.template';
  export default {
    name: "home",
    data () {
      return {
        indexdata: [],
        indexTwodata: [],
        headline: [],
        SZheadline: [],
        JNheadline: [],
        newHeaders: [
          {title: '企业重大事项'},
          {title: '学校重大事项'}
        ],
        newsActiveIndex: 0,
        newsDataList:[
          {
            content:'供应链管理从业能力水平认证专家研讨大大大大大大大大大大大的',
            date: '2019-03-30'
          },
          {
            content:'供应链管理从业能力水平认证专家研讨大大大大大大大大大大大的',
            date: '2019-03-30'
          },
          {
            content:'供应链管理从业能力水平认证专家研讨大大大大大大大大大大大的',
            date: '2019-03-30'
          },
          {
            content:'供应链管理从业能力水平认证专家研讨大大大大大大大大大大大的',
            date: '2019-03-30'
          },
          {
            content:'供应链管理从业能力水平认证专家研讨大大大大大大大大大大大的',
            date: '2019-03-30'
          }
        ]
      };
    },
    template,
    // mounted () {
    //   this.init()
    // },
    methods: {
      /**
       * 新闻报道的title点击事件
       * @param index 索引
       */
      exchangeNews(index){
        this.newsActiveIndex = index;
      },
      init () {
        // 新闻类型 新闻报道 师资培训 技能竞赛
        // indexData({ baseInfoId: 5, baseTypeId: 1 })
        //   .then(res => {
        //     this.indexTwodata = res.data.data
        //   })
        // // 新闻类型 企业重大事项 学校重大事项
        // indexData({ baseTypeId: 1 })
        //   .then(res => {
        //     this.indexdata = res.data.data
        //   })
        // //  新闻标题
        // headlines({ pageNum: 1, pageSize: 4, typeId: 5 })
        //   .then(res => {
        //     this.headline = res.data.data
        //   })
        // // 师资标题
        // headlines({ pageNum: 1, pageSize: 5, typeId: 7 })
        //   .then(res => {
        //     this.SZheadline = res.data.data
        //   })
        // // 技能竞赛标题
        // headlines({ pageNum: 1, pageSize: 4, typeId: 8 })
        //   .then(res => {
        //     this.JNheadline = res.data.data
        //   })
      }
    },
    created() {
      // get请求
      this.$ajax.get('/xtz/portal/baseTypes').then(rsp=>{
        console.log(rsp,'rsp');
      });
      // get传参请求
      this.$ajax.get('/xtz/portal/baseInfos',{params:{baseTypeId: '1'}}).then(rsp=>{
        console.log(rsp,'rsp123');
      });
      // post请求
    }
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
