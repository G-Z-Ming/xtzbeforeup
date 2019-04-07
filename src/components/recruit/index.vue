<script>
  import template from './template.template';
  import SearchTab from '@/common/components/searchTab/index';
  import jobComponent from '@/common/components/jobComponent/index';
  import $ from 'jquery';

  export default {
    name: 'recruit',
    data() {
      return {
        typeIndex: 0,
        navName: [
          {name: '全部', id: 0},
          {name: '学徒招聘', id: 1},
          {name: '内部招聘', id: 2},
          {name: '兼职招聘', id: 3}
        ],
        latest: true,                   // 排序是否为最新发布
        jobName: '',                    // 搜索的职位名称
      }
    },
    components: {
      SearchTab,
      jobComponent
    },
    template,
    created() {
    },
    mounted() {
      $(".items li", ".header ").eq(1).siblings().removeClass('active');
      $(".items li", ".header ").eq(1).addClass('active');
    },
    methods: {
      // 点击单独的跳转到详情页
      jumpTo(id) {
        this.$router.push({
          path: 'position',
          query: {
            id: ''
          }
        })
      },
      /**
       * 改变工作类型
       * @param index
       */
      changeJobType(index) {
        this.typeIndex = index;
      },
      /**
       * 选择排序规则
       * @param flag  排序规则
       */
      handleOrder(flag) {
        this.latest = flag;
      },
      /**
       * 筛选学校名称
       * @param name  排序名称
       */
      handleJobName(name) {
        this.jobName = name;
      }
    }
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
