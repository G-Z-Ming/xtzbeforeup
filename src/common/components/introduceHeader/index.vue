<script>
  import template from './template.template';
  export default {
    data(){
        return {

        }
    },
    template,
    props:{
      name: {default: ''},                                     // 公司名称
      picture: {default: ''},                                  // 公司logo
      businessScale: {default: ''},                            // 公司规模
      certificationFlag: {default: ''},                        // 是否通过验证
      baseName: {default: ''},                                 // 行业类型
    },
    methods:{

    }
  }
</script>
<style lang="less"  scoped>
  @import "./style.less";
</style>
