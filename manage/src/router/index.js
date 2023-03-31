import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from "@/views/PageOne.vue";
import pageTwo from "@/views/PageTwo.vue";

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
    path:'/user',
    name:'user',
    component: User
  },
  {
    path:'/user',
    name:'user',
    component: User
  },
  {
    path:'/mall',
    name:'mall',
    component: Mall
  },
  {
    path:'/page1',
    name:'pageOne',
    component: PageOne
  },
  {
    path:'/page2',
    name:'pageTwo',
    component: pageTwo
  },
]

const router = new VueRouter({
  routes
})

export default router
