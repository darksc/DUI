/**
 * author     dark
 * date       17/1/12
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: index
  },
  {
    path: '*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  routes
})

export default router
