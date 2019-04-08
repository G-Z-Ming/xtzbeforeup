<script>
  import template from "./template.template";
  import ColumnTab from '@/common/components/columnTab/index';
  import JobCommonHeader from '@/common/components/jobCommonHeader/index';
  import $ from 'jquery';

  export default {
    name: "position",
    data() {
      return {
        signIdex: 0,
        // 导航
        positionNav: [
          {name: "职位描述", id: 0, path: "/description"},
          {name: "课程体系(培养方案)", id: 1, path: "/system"},
          {name: "学徒晋升", id: 2, path: "/promotion"}
        ]
      };
    },
    template,
    components: {
      ColumnTab,
      JobCommonHeader
    },
    created() {
    },
    mounted() {
      $(".items li", ".header ").eq(1).siblings().removeClass('active');
      $(".items li", ".header ").eq(1).addClass('active');
    },
    methods: {
      HereClick(item) {
        this.$router.push({
          path: item.path,
          query: {
            id: item.id,
          }
        });
      }
    }
  };
</script>
<style lang="less" scoped>
  @import "./style.less";
</style>
