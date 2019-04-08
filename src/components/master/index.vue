<script>
import template from './template.template';
import masterItem from '@/common/components/masterItem/index';
import $ from 'jquery';

export default {
  name: 'master',
  data () {
    return {
      infoData: [],
      // 分页器开始
      pageSize: 6,    // 一个页面多少个
      pageNum: 1,     // 当前页面
      totalCount: 0  // 总共多少个
      // 分页器结束
    }
  },
  components: {
    masterItem
  },
  watch: {
    pageNum () {
      this.initData()
    }
  },
  template,
  created () {
    this.initData()
  },
  mounted () {
    $(".items li", ".header ").eq(1).siblings().removeClass('active');
    $(".items li", ".header ").eq(1).addClass('active');
  },
  methods: {
    /**
     * 分页器跳转事件
     * @param num  当前页面
     */
    handleCurrentChange (num) {
      this.pageNum = num;
    },
    initData () {
      const { pageSize, pageNum } = this;
      const { id, typeId } = this.$route.query;
      
      this.$ajax.get('/xtz/portal/enterpriseMasters', {
        params: {
          enterpriseId: id,
          typeId,
          pageSize,
          pageNum
        }
      }).then(rsp => {
        this.infoData = rsp.data.data;
        this.totalCount = +rsp.data.totals;
      });
    },

    // 点击师傅跳转详情页
    tutorials (id) {
      this.$router.push({
        path: '/tutorDetails',
        query:{
            id
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import './style.less';
</style>
