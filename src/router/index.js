import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/index' //登录页
import Home from '@/components/home/index' //首页
import Company from '@/components/company/index' // 企业
import School from '@/components/school/index' //院校
import News from '@/components/news/index' //新闻
import NewsInfo from '@/components/newsinfo/index' //新闻内容
import Identification from '@/components/identification/index' // 认证
Vue.use(Router)
let router = new Router({
        routes: [{
                path: '/',
                redirect: 'Home'
            },
            {
                path: '/login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/home',
                name: 'Home',
                component: Home,
                meta: {
                    auth: true
                }
            },
            {
                path: '/home/news',
                name: 'News',
                component: News,
                meta: {
                    auth: true
                }
            },
            {
                path: '/home/news/newsinfo',
                name: 'NewsInfo',
                component: NewsInfo,
                meta: {
                    auth: true
                }
            },
            {
                path: '/company',
                name: 'Company',
                component: Company,
                meta: {
                    auth: true
                }
            },
            {
                path: '/school',
                name: 'School',
                component: School,
                meta: {
                    auth: true
                }
            },

            {
                path: '/identification',
                name: 'Identification',
                component: Identification,
                meta: {
                    auth: true
                }
            }
        ]
    })
    /*router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.auth)){  // 判断该路由是否需要登录权限
        if (localStorage.getItem("token")) {  // 判断当前的token是否存在
          next();
        }
        else {
          next({
            path: '/login',
          })
        }
      }
      else {
        next();
      }
    });*/
export default router