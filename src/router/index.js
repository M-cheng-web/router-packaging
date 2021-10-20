import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Layout from '@/layout'

Vue.use(VueRouter)

// 普通路由
const constantRoutes = [
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home,
        name: 'home',
        meta: { title: 'home', icon: 'dashboard', affix: true }
      }
    ]
  }
]

// 权限路由
export const asyncRoutes = [
  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab', roles: ['admin', 'editor'] }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
