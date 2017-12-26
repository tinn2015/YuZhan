import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Decoration from '@/views/decoration'
import Design from '@/views/design'
import Test from '@/views/test'
import SubPage from '@/views/test/subPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/decoration',
      name: 'Decoration',
      component: Decoration
    },
    {
      path: '/design',
      name: 'Design',
      component: Design
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/subPage',
      name: 'SubPage',
      component: SubPage
    }
  ]
})
