import Vue from 'vue'
import Router from 'vue-router'
import welcome from '../page/welcome'
import content from '../page/content'
import login from '../page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: welcome
    },
    {
      path: '/content',
      component: content
    },
    {
      path: '/login',
      component: login
    }
  ]
})
