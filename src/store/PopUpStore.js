import Vue from 'vue';

const state = {
  show: false,
  title: '',
  tips: ''
}

const mutations = {
  Show(state, data) {
    Object.assign(state, data);
  },
  Hide(state) {
    state.show = false;
    state.title = '';
    state.tips = '';
  }
}

export default {
  state,
  mutations
}
