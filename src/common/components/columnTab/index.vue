<script>
  import template from './template.template';
  export default {
    data(){
      return {
        signIdex: 0
      }
    },
    template,
    props:{
      navigationTabs: {default: ()=>[]}
    },
    methods:{
      // 点击每一个导航
      tabClick(index,item){
        this.signIdex = index;
        this.$emit('itemClick', item);
      }
    }
  }
</script>
<style lang="less" scoped>
@import "./style.less";
</style>
