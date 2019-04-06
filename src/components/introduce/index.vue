<script>
  import template from './template.template';
  import IntroduceHeader from '@/common/components/introduceHeader/index';
  export default {
    name:"introduce",
    data(){
      return{
        signIdex:0,
        Navigation:[
          {name:'企业介绍',id:0,path:'detailed'},
          {name:'招聘需求',id:1,path:'recruit'},
          {name:'企业师傅库',id:2,path:'master'},
          {name:'成功展示',id:3,path:'detailed'}
        ],
        infoData:{

        }
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
      this.$router.push({path:item.path});
      }
    },
    created() {
      this.$ajax.get('/xtz/portal/enterprise',{params:{nterpriseeId: this.$route.params.id}}).then(rsp=>{
        console.log(rsp.data, '学校数据');
        this.infoData = rsp.data.data;
      });
      console.log(this.$route.params.id, '传值');
    }
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
