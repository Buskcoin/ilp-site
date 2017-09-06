import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import goodbye from '@/components/goodbye'
import GoodbyeChild from '@/components/GoodbyeChild'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goodbye/:name',
      name: 'goodbye',
      component: goodbye,
      children: [
        {
          path: 'child',
          component: GoodbyeChild
        }
      ]
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
