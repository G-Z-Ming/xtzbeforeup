<script>
  import $ from 'jquery';
  import template from './template.template';
  import IntroduceHeader from '@/common/components/introduceHeader/index';
  import ColumnTab from '@/common/components/columnTab/index';
  export default {
    name:"introduce",
    data(){
      return{
        navigationTabs:[
          {name:'企业介绍',id:0,path:'/detailed'},
          {name:'招聘需求',id:1,path:'/recruit'},
          {name:'企业师傅库',id:1,path:'/master'},
          {name:'成功展示',id:3,path:'/detailed'}
        ],
        infoData:{},
        isShowContent: false
      }
    },
    components:{
      IntroduceHeader,
      ColumnTab
    },
    template,
    methods:{
      // 点击每一个导航
      HereClick(item){
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
    },
    mounted() {
      $(".items li", ".header ").eq(1).siblings().removeClass('active');
      $(".items li", ".header ").eq(1).addClass('active');
    }
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
