import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/public-view/Home.vue'
import NotFound from  '../views/public-view/404.vue'
import Show from '../views/public-view/Show.vue'
import AddStorage from '../views/account-view/AddStorage.vue'
import TestPage from '../views/TestPage.vue'
import Login from '../views/account-view/Login.vue'
import VueGeolocation from 'vue-browser-geolocation'

Vue.use(VueRouter)
Vue.use(VueGeolocation)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/new',
    name: 'AddStorage',
    component: AddStorage
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound 
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
