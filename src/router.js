import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'//登录注册
import xsmessage from './components/xsmessage.vue'//学生资料
import sy from './components/sy.vue' //首页
import luru from './components/student.vue' //学生老师录入
import bj from './components/bj.vue' //班级
import kc from './components/kc.vue' //课程
import js from './components/js.vue' //教室
import PaiKe from './components/PaiKe.vue' //排课管理
import sushe from './components/sushe.vue' //宿舍
import jf from './components/jf.vue' //信誉积分




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sy',
      component: sy
    },
    {
      path: '/luru',
      name: 'luru',
      component: luru
    },
    {
      path: '/bj',
      name: 'bj',
      component: bj
    },
    {
      path: '/kc',
      name: 'kc',
      component: kc
    },
    {
      path: '/js',
      name: 'js',
      component: js
    },
    {
      path: '/xsmessage',
      name: 'xsmessage',
      component: xsmessage
    },
    {
      path: '/PaiKe',
      name: 'PaiKe',
      component: PaiKe
    },
    {
      path: '/sushe',
      name: 'sushe',
      component: sushe
    },
    {
      path: '/jf',
      name: 'jf',
      component: jf
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
