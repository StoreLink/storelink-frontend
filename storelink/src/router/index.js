import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/public-view/Home.vue'
import NotFound from  '../views/public-view/404.vue'
import Show from '../views/public-view/Show.vue'
import AddStorage from '../views/account-view/AddStorage.vue'
import TestPage from '../views/TestPage.vue'
import Login from '../views/account-view/Login.vue'
import SignUp from '../views/public-view/SignUp.vue'
import UserPosts from '../views/account-view/UserPosts.vue'
import EditProfile from '../views/account-view/EditProfile.vue'
import Profile from '../views/account-view/Profile.vue'
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
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/userPosts',
    name: 'UserPosts',
    component: UserPosts
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
