import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CST336 from '@/components/concentration/CST336'
import CST338 from '@/components/concentration/CST338'
import CST370 from '@/components/concentration/CST370'
import CST436 from '@/components/concentration/CST436'
import CST205 from '@/components/core/CST205'
import CST300 from '@/components/core/CST300'
import CST311 from '@/components/core/CST311'
import CST325 from '@/components/final/CST325'
import CST361S from '@/components/final/CST361S'
import CST363 from '@/components/final/CST363'
import CST373 from '@/components/final/CST373'
import CST499 from '@/components/final/CST499'
import goodbye from '@/components/goodbye'
import core from '@/components/Core'
import Concentration from '@/components/Concentration'
import Final from '@/components/Final'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/core/:name',
      name: 'core',
      component: core
    },
    {
      path: '/concentration/:name',
      name: 'concentration',
      component: Concentration
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
      path: '/final/:name',
      name: 'final',
      component: Final
    },
    {
      path: '/CST205/:name',
      name: 'CST205',
      component: CST205
    },
    {
      path: '/CST300/:name',
      name: 'CST300',
      component: CST300
    },
    {
      path: '/CST311/:name',
      name: 'CST311',
      component: CST311
    },
    {
      path: '/CST336/:name',
      name: 'CST336',
      component: CST336
    },
    {
      path: '/CST338/:name',
      name: 'CST338',
      component: CST338
    },
    {
      path: '/CST370/:name',
      name: 'CST370',
      component: CST370
    },
    {
      path: '/CST436/:name',
      name: 'CST436',
      component: CST436
    },
    {
      path: '/CST325/:name',
      name: 'CST325',
      component: CST325
    },
    {
      path: '/CST361S/:name',
      name: 'CST361S',
      component: CST361S
    },
    {
      path: '/CST363/:name',
      name: 'CST363',
      component: CST363
    },
    {
      path: '/CST373/:name',
      name: 'CST373',
      component: CST373
    },
    {
      path: '/CST499/:name',
      name: 'CST499',
      component: CST499
    }
  ]
})
