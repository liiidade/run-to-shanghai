import Vue from 'vue';

const CLUB_CAR = [
  {
    id: '6ZmI5LmD6L6+',
    name: '陈乃达',
    fee: 899,
    intro: '有容乃大，老哥体验一下乃得滋润，茁壮成长',
    effect: {
      hp: 10,
      hungry: -20
    },
    img: require('../assets/img/naida.jpeg')
  }, {
    id: '546L5qKF5b+S',
    name: '王梅忒',
    fee: 599,
    intro: '一双美腿令老哥神魂颠倒',
    effect: {
      hp: 7,
      hungry: -20
    },
    img: require('../assets/img/changtui.jpeg')
  }, {
    id: '572X6I6J',
    name: '罗莉',
    fee: 799,
    intro: '萝莉身材萝莉腿，有的老哥就好这口儿',
    effect: {
      hp: 4,
      hungry: -20
    },
    img: require('../assets/img/luoli.jpeg')
  }, {
    id: '572X6I6J',
    name: '童鞠茹',
    fee: 1299,
    intro: '童颜巨乳，还要啥自行车',
    effect: {
      hp: 12,
      hungry: -20
    },
    img: require('../assets/img/tongju.jpeg')
  }
]

const state = {
  cars: CLUB_CAR
}

const mutations = {
  DriveUpBFee(state, bData) {
    const {id, newFee} = bData;
    state.cars = state.car.reduce((tempCars, car) => {
      if (car.id === id && newFee > car.fee) 
        car.fee = newFee;
      return tempCars.cancat(car)
    }, state.cars)
  }
}

export default {
  state,
  mutations
}
