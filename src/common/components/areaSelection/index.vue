<script>
  import template from './template.template';
  export default {
    data() {
      return {
        activeIndex: 0
      }
    },
    props:{
      title: '',
      dataArr: {default:()=>[]}
    },
    template,
    methods: {
      /**
       * 点击事件
       * @param index
       */
      itemClick(index, item){
        this.activeIndex = index;
        this.$emit('itemEvent', item);
      }
    },
    created() {

    }
  }
</script>
<style lang="less" scoped>
  @import "./style.less";

</style>
