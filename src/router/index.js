import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CST338 from '@/components/concentration/CST338'
import goodbye from '@/components/goodbye'
import core from '@/components/Core'
import Concentration from '@/components/Concentration'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/core/:name',
      name: 'core',
      component: core
    },
    {
      path: '/goodbye/:name',
      name: 'goodbye',
      component: goodbye,
      children: [
        {
          path: 'child',
          component: Concentration
        }
      ]
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/CST338',
      name: 'CST338',
      component: CST338
    }
  ]
})
