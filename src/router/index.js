import Vue from 'vue'
import Router from 'vue-router'
import Framework from '@/views/framework/framework'
import Home from '@/views/home/home'
import Login from '@/views/login/login'
import error from '@/views/404/404'

import index2 from '@/views/index2'
import index3 from '@/views/index3'
import index4 from '@/views/index4'

Vue.use(Router)

let routes = [
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/404',
    component: error,
    name: 'error'
  },
  {
    path: '/',
    component: Framework,
    redirect: '/home',
    name: 'home',
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/index2',
        component: index2
      },
      {
        path: '/index3',
        component: index3
      },
      {
        path: '/index4',
        component: index4
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    name: '404'
  }
]

export default new Router({mode: 'history', routes})
