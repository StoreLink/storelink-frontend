import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/public-view/Home.vue'
import NotFound from  '../views/public-view/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show',
    name: 'Show',
    
    component: () => import(/* webpackChunkName: "show" */ '../views/public-view/Show.vue')
  },
  {
    path: '/new',
    name: 'AddStorage',

    component: () => import(/* webpackChunkName: "new" */ '../views/account-view/AddStorage.vue')
  },

  {
    path: '/new2',
    name: 'Dobavit',

    component: () => import(/* webpackChunkName: "new" */ '../views/account-view/Dobavit.vue')
  },
  
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
