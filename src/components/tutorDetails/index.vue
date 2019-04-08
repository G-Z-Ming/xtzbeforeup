<script>
import template from "./template.template";
export default {
  name: "tutordetails",
  data() {
    return {
      infoData: {}
    };
  },
  template,
  methods: {
    initData(){
      const {id} = this.$route.query;
      this.$ajax.get('/xtz/portal/enterpriseMaster', {
        params: {
          enterprisesMasterId: id
        }
      }).then(rsp => {
        this.infoData = rsp.data.data;
      }).catch(rej=>{
        this.infoData = {}
      });
    }
  },
  created() {
    this.initData()
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>
