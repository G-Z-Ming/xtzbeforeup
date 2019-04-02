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
        JNheadline: []
      };
    },
    template,
    // mounted () {
    //   this.init()
    // },
    // methods: {
    //   init () {
    //     // 新闻类型 新闻报道 师资培训 技能竞赛
    //     indexData({ baseInfoId: 5, baseTypeId: 1 })
    //       .then(res => {
    //         this.indexTwodata = res.data.data
    //       })
    //     // 新闻类型 企业重大事项 学校重大事项
    //     indexData({ baseTypeId: 1 })
    //       .then(res => {
    //         this.indexdata = res.data.data
    //       })
    //     //  新闻标题
    //     headlines({ pageNum: 1, pageSize: 4, typeId: 5 })
    //       .then(res => {
    //         this.headline = res.data.data
    //       })
    //     // 师资标题
    //     headlines({ pageNum: 1, pageSize: 5, typeId: 7 })
    //       .then(res => {
    //         this.SZheadline = res.data.data
    //       })
    //     // 技能竞赛标题
    //     headlines({ pageNum: 1, pageSize: 4, typeId: 8 })
    //       .then(res => {
    //         this.JNheadline = res.data.data
    //       })
    //   }
    // },
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
