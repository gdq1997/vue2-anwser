import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Item from '@/components/Item'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
