import Vue from 'vue';

const BRO_STATUS = {
  name: '聚宝',
  money: 1500,
  hp: {
    total: 120,
    current: 40
  },
  hungry: {
    total: 80,
    current: 60
  },
  ap: 100,
  sp: 100
}

const state = {
  broStatus: BRO_STATUS
}

const mutations = {
  UpdateBro(state, data) {
    Object.assign(state.broStatus, data);
  }
}

export default {
  state,
  mutations
}
