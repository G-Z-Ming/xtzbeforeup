<script>
  import template from './template.template';
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
        ]
      }
    },
    template,
    methods:{
      // 点击每一个导航
      HereClick(index,id,path){
        this.signIdex = index;
      this.$router.push({path:path});
      }
    }
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
