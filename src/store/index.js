import Vue from 'vue';
import Vuex from 'vuex';

import BroStore from './BroStore';
import RuleStore from './RuleStore';
import ActivityStore from './ActivityStore';
import ClubStore from './ClubStore';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    RuleStore,
    BroStore,
    ActivityStore,
    ClubStore
  }
})

export default store;
