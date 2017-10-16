import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CST338 from '@/components/concentration/CST338'
import CST205 from '@/components/core/CST205'
import CST300 from '@/components/core/CST300'
import CST311 from '@/components/core/CST311'
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
    },
    {
      path: '/CST205',
      name: 'CST205',
      component: CST205
    },
    {
      path: '/CST300',
      name: 'CST300',
      component: CST300
    },
    {
      path: '/CST311',
      name: 'CST311',
      component: CST311
    }

  ]
})
