<script>
  import template from './template.template';
  export default {
    name: 'login',
    data(){
      return{
        labelPosition: 'right',
        formLabelAlign: {
          username: '',
          password: ''
        }
      }
    },
    template,
    methods:{
      sendData(){

      }
    },
    create(){
      console.log(123);
    }
  }
</script>
<style scoped lang="less">
  @import './style.less';

</style>
