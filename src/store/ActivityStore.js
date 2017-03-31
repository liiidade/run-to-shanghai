import Vue from 'vue';
import {v4} from 'uuid';

const GAMBLING = {
  id: 'ZHVibw==',
  name: '过三关',
  tips: '搏一搏，单车变摩托',
  url: '/passthree',
  signImg: require('../assets/img/card_game.jpg'),
  imgUrl: require('../assets/img/gambling.jpg'),
  positions: [
    {
      left: '12%',
      top: '45%'
    }
  ]
}

const CLUB = {
  id: 'eGl1Y2hl',
  name: '会所修车',
  url: '/club',
  tips: '逛个会所修个车，还不是美滋滋～',
  failText: '老哥没这么多钱还想修霸王车不成～',
  signImg: require('../assets/img/fix_car.jpg'),
  imgUrl: require('../assets/img/car_club.jpg'),
  positions: [
    {
      left: '27%',
      top: '82%'
    }
  ]
}

const ACTIVITIES = [GAMBLING, CLUB];

function _spreadActivies() {
  return this.positions.map((position) => {
    return {position, activityId: this.id, id: v4(), imgUrl: this.signImg}
  })
}

const state = {
  allActivities: [
    ..._spreadActivies.call(GAMBLING),
    ..._spreadActivies.call(CLUB)
  ],
  chosenActivity: {}
}

const mutations = {
  ChooseActivity(state, id) {
    state.chosenActivity = ACTIVITIES.find(activity => activity.id === id)
  }
}

export default {
  state,
  mutations
}
