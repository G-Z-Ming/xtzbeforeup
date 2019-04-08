import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/index' //登录页
import Home from '@/components/home/index' //首页
import Company from '@/components/company/index' // 企业
import School from '@/components/school/index' //院校
import News from '@/components/news/index' //新闻
import NewsInfo from '@/components/newsinfo/index' //新闻内容
import Identification from '@/components/identification/index' // 认证
import Introduce from '@/components/introduce/index' //企业公司
import Detailed from '@/components/detailed/index' //企业介绍
import Recruit from '@/components/recruit/index' //招聘需求
import Master from '@/components/master/index' //企业师傅库
import TutorDetails from '@/components/tutorDetails/index'//企业师傅库详情
import Position from '@/components/position/index'//职位
import Description from '@/components/description/index'//职位描述
import System from '@/components/system/index'//课程体系
import CourseDetails from '@/components/courseDetails/index'//课程体系详情
import Promotion from '@/components/promotion/index'//学徒晋升
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
    component: Company
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: Introduce,
    redirect: '/detailed',
    children: [
      {
        path: '/detailed',
        name: 'Detailed',
        component: Detailed
      },
      {
        path: '/recruit',
        name: 'Recruit',
        component: Recruit
      },
      {
        path: '/master',
        name: 'Master',
        component: Master
      },
      {
        path: '/tutorDetails',
        name: 'TutorDetails',
        component: TutorDetails
      }
    ]
  },
  {
    path: '/position',
    name: 'Position',
    component: Position,
    redirect: '/description',
    meta: {
      auth: true
    },
    children: [
      {
        path: '/description',
        name: 'Description',
        component: Description
      },
      {
        path: '/system',
        name: 'System',
        component: System
      },
      {
        path: '/promotion',
        name: 'Promotion',
        component: Promotion
      }
    ]
  },
  {
    path: '/courseDetails',
    name: 'CourseDetails',
    component: CourseDetails,
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