<script>
import template from './template.template';
export default {
  name: 'recruit',
  data () {
    return {
      navName:[
        {name:'全部',id:0},
        {name:'学徒招聘',id:1},
        {name:'内部招聘',id:2},
        {name:'兼职招聘',id:3}
      ]
    }
  },
  template,
  created () {
  },
  methods: {
// 点击单独的跳转到详情页
jump(){
  console.log('5555');
  
  this.$router.push({path:'position'})
}
  }
}
</script>
<style lang="less" scoped>
@import './style.less';
</style>
