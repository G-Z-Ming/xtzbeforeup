<template>
  <div>
    <div>
      <!-- 图 -->
      <div>
        <el-carousel
          :interval="5000"
          arrow="always"
          height="538px"
        >

          <el-carousel-item
            v-for="item in 4"
            :key="item"
          >
            <img
              src="@/img/banner.png"
              alt=""
            >
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 中间 -->
      <nav>
        <div class="nav-Top">
          <img
            src=""
            alt=""
          >
          <div class="nav-nei">
            <h1>新闻报道</h1>
            <div class="Journalism">
              <!-- 图片 -->
              <div>
                <img
                  src="../img/大图标题.png"
                  alt=""
                >
              </div>
              <!-- 内容 -->
              <div class="content">
                <!-- 标题 -->
                <div>
                  <div class="lft">
                    <!-- <router-link
                      class="a-btn"
                      :to="{name:'journalism',query:{id:5,pid:1}}"
                    >{{indexTwodata[0].baseDName}}</router-link> -->
                    <!-- <router-link :to="{name:'journalism',query:{id:5,pid:2}}">{{indexTwodata[1].baseDName}}</router-link> -->
                  </div>
                  <div class="rit">
                    <!-- <router-link :to="{name:'journalism',query:{id:5}}">更多</router-link> -->
                  </div>
                </div>

                <div>
                  <div
                    class="name"
                    v-for="(item,index) in SZheadline"
                    :key="index"
                  >
                    <div>
                      <!-- <router-link :to="{path:'/trained',id:item.id}"> {{item.informationName}}</router-link> -->

                    </div>
                    <div>{{item.createtime}}</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-Bot">
          <div class="sz-Train">
            <div class="SZ-upper">
              <div>师资培训</div>
              <div class="SZ-list">
                <div
                  v-for="(item,index) in SZheadline"
                  :key="index"
                >
                  <div>
                    <div>{{index+1}}</div>
                  </div>
                  <div>
                    <!-- <div>&nbsp; {{item.informationName}}</div> -->
                    <div class="time">
                      {{item.createtime}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="SZ-lower">查看更多></div>
          </div>
          <div class="competition">
            <div class="CI-upper">
              <div>技能竞赛</div>
              <div class="CI-list">
                <div>
                  <div><img
                      src="@/img/place2.png"
                      alt=""
                    >
                    <!-- <div>{{JNheadline[0].informationName}}</div> -->
                  </div>
                  <div><img
                      src="@/img/place2.png"
                      alt=""
                    >
                    <!-- <div>{{JNheadline[1].informationName}}</div> -->
                  </div>
                </div>
                <div><img
                    src="@/img/place.png"
                    alt=""
                  >
                  <!-- <div>{{JNheadline[2].informationName}}</div> -->
                </div>
              </div>
            </div>
            <div class="CI-lower">查看更多</div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// import { indexData, headlines } from '@/api'
export default {
  name: "home",
  data () {
    return {
      indexdata: [],
      indexTwodata: [],
      headline: [],
      SZheadline: [],
      JNheadline: []
    };
  },
  // mounted () {
  //   this.init()
  // },
  // methods: {
  //   init () {
  //     // 新闻类型 新闻报道 师资培训 技能竞赛
  //     indexData({ baseInfoId: 5, baseTypeId: 1 })
  //       .then(res => {
  //         this.indexTwodata = res.data.data
  //       })
  //     // 新闻类型 企业重大事项 学校重大事项
  //     indexData({ baseTypeId: 1 })
  //       .then(res => {
  //         this.indexdata = res.data.data
  //       })
  //     //  新闻标题
  //     headlines({ pageNum: 1, pageSize: 4, typeId: 5 })
  //       .then(res => {
  //         this.headline = res.data.data
  //       })
  //     // 师资标题
  //     headlines({ pageNum: 1, pageSize: 5, typeId: 7 })
  //       .then(res => {
  //         this.SZheadline = res.data.data
  //       })
  //     // 技能竞赛标题
  //     headlines({ pageNum: 1, pageSize: 4, typeId: 8 })
  //       .then(res => {
  //         this.JNheadline = res.data.data
  //       })
  //   }
  // },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- ZhengMing first submission and home -->
<style scoped lang="less">
nav {
  // padding-bottom: 150px;
  .nav-Top {
    height: 700px;
    background-image: url(../img/底图.png);
    .nav-nei {
      width: 1200px;
      margin: 0 auto;
      h1 {
        text-align: center;
        height: 172px;
        line-height: 172px;
        font-size: 34px;
      }
      .Journalism {
        width: 910px;
        height: 456px;
        position: relative;
        right: -300px;
        box-shadow: #84a7a2 3px -1px 20px -6px;
        padding: 28px 58px;
        padding-left: 344px;
        > div:nth-child(1) {
          width: 600px;
          height: 346px;
          position: absolute;
          left: -300px;
          top: 50px;
        }
        .content {
          font-size: 18px;
          color: #8e9097;
          border-bottom: 1px solid #b6b8bd;
          > div:nth-child(1) {
            height: 72px;
            display: flex;
            justify-content: space-between;
            line-height: 70px;
            .lft {
              height: 70px;
              a {
                display: inline-block;
                width: 116px;
                color: #8e9097;
              }
              .a-btn {
                border-bottom: 3px solid #02aaff;
              }
            }
            .rit {
              a {
                color: #8e9097;
              }
            }
          }
          > div:nth-child(2) {
            .name {
              height: 70px;
              line-height: 70px;
              border-bottom: 1px dashed #cbcbcb;
              display: flex;
              justify-content: space-between;
              > div:nth-child(1) {
                width: 372px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                a {
                  width: 100%;
                  color: #8e9097;
                }
              }
              > div:nth-child(2) {
                padding-left: 60px;
                overflow: hidden;
                width: 134px;
              }
            }
          }
        }
      }
    }
  }
  .nav-Bot {
    width: 1200px;
    margin: 70px auto;
    display: flex;
    justify-content: space-between;
    .sz-Train {
      width: 438px;
      .SZ-upper {
        width: 100%;
        height: 714px;
        background: #242532;
        > div:nth-child(1) {
          height: 150px;
          font-size: 36px;
          font-weight: 600;
          color: #fff;
          text-align: center;
          line-height: 150px;
          background-image: url(../img/shiz.png);
        }
        .SZ-list {
          padding: 40px 30px 24px;
          height: 562px;
          color: #fff;
          > div {
            height: 100px;
            display: flex;
            > div:nth-child(1) {
              width: 40px;
              > div {
                width: 20px;
                height: 20px;
                background-color: #fd4500;
                text-align: center;
                line-height: 20px;
                border-radius: 2px;
                font-size: 12px;
              }
            }
            > div:nth-child(2) {
              > div:nth-child(1) {
                height: 50px;
              }
              .time {
                color: #75777c;
              }
            }
          }
        }
      }
      .SZ-lower {
        width: 130px;
        height: 30px;
        margin: 20px auto;
        text-align: center;
        background-color: #02abf7;
        line-height: 30px;
        color: #fff;
      }
    }
    .competition {
      width: 720px;
      .CI-upper {
        width: 100%;
        height: 714px;
        > div:nth-child(1) {
          height: 150px;
          font-size: 36px;
          font-weight: 600;
          color: #fff;
          text-align: center;
          line-height: 150px;
          background-image: url(../img/jineng.png);
        }
        .CI-list {
          color: #fff;
          > div:nth-child(1) {
            display: flex;
            > div {
              width: 50%;
              height: 284px;
              position: relative;

              img {
                width: 100%;
                display: block;
                height: 100%;
              }
              div {
                padding: 0 10px;
                font-size: 24px;
                line-height: 44px;
                text-align: center;
                width: 100%;
                height: 44px;
                background: #101011;
                opacity: 0.8;
                position: absolute;
                bottom: 0px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
          > div:nth-child(2) {
            width: 100%;
            height: 284px;
            position: relative;
            img {
              width: 100%;
              display: block;
              height: 100%;
            }
            div {
              font-size: 24px;
              line-height: 44px;
              text-align: center;
              width: 100%;
              height: 44px;
              background: #101011;
              opacity: 0.8;
              position: absolute;
              bottom: 0px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
      .CI-lower {
        width: 130px;
        height: 30px;
        margin: 20px auto;
        text-align: center;
        background-color: #02abf7;
        line-height: 30px;
        color: #fff;
      }
    }
  }
}
</style>
