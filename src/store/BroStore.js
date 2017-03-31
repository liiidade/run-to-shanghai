import Vue from 'vue';

const BRO_STATUS = {
  name: '聚宝',
  money: 500,
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

const mutations = {}

export default {
  state,
  mutations
}
