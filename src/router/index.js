import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login';
import Register from '../views/Register'
import ForgotPwd from '../views/ForgotPwd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/register',
    name: "Register",
    component: Register
  },
  {
    path: '/forgot-pwd',
    name: "ForgotPwd",
    component: ForgotPwd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
