<script>
  import template from './template.template';
  import collapse from '@/img/collapse.png';
  import expend from '@/img/expend.png';
  import $ from 'jquery';
  export default {
    data() {
      return {
        text: '全部',
        isFold: false,     // 是否展开
        collapse,
        expend
      }
    },
    // 可配置项
    props: {
      // select控件的前面文字
      title: '',
      // select的list
      optionList: {default: [{name: '全部', id: '0'}, {name: '已认证', id: '1'}, {name: '未认证', id: '2'}]},
      // 可定义的默认展示select控件的前面文字
      selectText: {default: ''},
      // 搜索框的placeholder
      searchPlaceholder: {default: ''},
      // 可定义的默认展示的选项的id
      defaultId: {default: ''},
      // 可配置的展开时select控件的右边小图标
      openIcon: {default: ''},
      // 可配置的关闭时select控件的右边小图标
      closeIcon: {default: ''},
      // 是否展示认证筛选
      isShowIdentify:{default: true}
    },
    template,
    methods: {
      /**
       * 点击展开与收起选项栏
       */
      tabClick() {
        this.isFold = !this.isFold;
      },
      /**
       * 子项的点击事件
       * @param val
       */
      itemClick(val) {
        this.isFold = false;
        this.text = val.name;
        // this.$emit('transfer', val);
      },
      searchClick(){

      }
    },
    mounted(){
      // 如果外部未传递默认展示的defaultId,则显示selectText
      if (!!this.selectText) {
        this.text = this.selectText
      }
      // 遍历optionList找到与defaultId匹配的一项
      this.optionList.forEach((item, index) => {
        if (item.id === this.defaultId) {
          this.text = item.name;
        }
      });
      $(document).click(() => {
        this.isFold = false;
      });
      // 阻止冒泡
      $(".select").click(function (event) {
        event.stopPropagation();
      });
    }
  }
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
