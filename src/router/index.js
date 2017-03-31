import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MianMap from '@/components/MianMap'
import BroStatus from '@/components/BroStatus'
import ClubCar from '@/components/ClubCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/map',
      name: 'map',
      component: MianMap
    }, {
      path: '/status',
      name: 'status',
      component: BroStatus
    },{
      path: '/club',
      name: 'club',
      component: ClubCar
    }
  ]
})
