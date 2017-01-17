/**
 * author     dark
 * date       17/1/12
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views'
import panelView from '../views/panelView'
import autoView from '../views/autoView'
import paginationView from '../views/paginationView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: index
  },
  {
    path: '/button',
    component: autoView
  },
  {
    path: '/auto',
    component: autoView
  },
  {
    path: '/panel',
    component: panelView
  },
  {
    path: '/pagination',
    component: paginationView
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
