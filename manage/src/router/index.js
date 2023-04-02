import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from "@/views/PageOne.vue";
import pageTwo from "@/views/PageTwo.vue";
import Login from "@/views/Login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },

  {
    path:'/mall',
    name:'mall',
    component: Mall
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path: '*',
    redirect: 'home'
  }
]

const router = new VueRouter({
  routes
})

export default router
