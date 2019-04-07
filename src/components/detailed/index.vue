<script>
  import $ from 'jquery';
  import template from './template.template';

  export default {
    name: 'detailed',
    data() {
      return {
        introduce: '',
        address: ''
      }
    },
    template,
    created() {
      this.$ajax.get('/xtz/portal/enterprise', {params: {nterpriseeId: this.$route.query.id}}).then(rsp => {
        this.address = rsp.data.data.address;
        this.introduce = rsp.data.data.introduce;
      });
    },
    mounted() {
      $(".items li", ".header ").eq(1).siblings().removeClass('active');
      $(".items li", ".header ").eq(1).addClass('active');
    },
    methods: {}
  }
</script>
<style lang="less" scoped>
  @import 'style.less';
</style>
