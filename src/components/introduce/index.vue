<script>
  import template from './template.template';
  import IntroduceHeader from '@/common/components/introduceHeader/index';
  export default {
    name:"introduce",
    data(){
      return{
        signIdex:0,
        Navigation:[
          {name:'企业介绍',id:0,path:'/detailed'},
          {name:'招聘需求',id:1,path:'/recruit'},
          {name:'企业师傅库',id:1,path:'/master'},
          {name:'成功展示',id:3,path:'/detailed'}
        ],
        infoData:{

        },
        isShowContent: false
      }
    },
    components:{
      IntroduceHeader
    },
    template,
    methods:{
      // 点击每一个导航
      HereClick(index,item){
        this.signIdex = index;
        this.$router.push({
            path:item.path,
            query: {
              id: this.$route.query.id,
              typeId: item.id
            }
          });
      }
    },
    created() {
      this.$ajax.get('/xtz/portal/enterprise',{params:{nterpriseeId: this.$route.query.id}}).then(rsp=>{
        this.infoData = rsp.data.data;
      });
    }
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
