<template>
<div class="map">
  <FootLink url="/status" :imgUrl="require('../assets/img/status_icon.jpg')" />
  <ActiveSign v-for="activity in allActivities" :key="activity.id" :imgUrl="activity.imgUrl" :position="activity.position" @click.native="selectAction(activity.activityId)" />
  <ActivityModal v-if="showModal" action="Go" @hide="toggleAction" :activity="chosenActivity" />
</div>
</template>

<script>
import FootLink from './common/FootLink'
import ActiveSign from './ActiveSign'
import ActivityModal from './ActivityModal'

import {
  mapState
} from 'vuex'

export default {
  name: 'MianMap',
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapState({
      money: state => state.BroStore.money,
      fixCarR: state => state.RuleStore.fixCarR,
      allActivities: state => state.ActivityStore.allActivities,
      chosenActivity: state => state.ActivityStore.chosenActivity,
    })
  },
  methods: {
    selectAction(id) {
      this.$store.commit('ChooseActivity', id)
      this.showModal = true;
    },
    toggleAction() {
      this.showModal = !this.showModal
    }
  },
  components: {
    FootLink,
    ActiveSign,
    ActivityModal
  }
}
</script>

<style lang="scss">
.map {
    width: 100vw;
    height: 100vh;
    background: transparent url('../assets/img/map.jpg') left top no-repeat;
    background-size: 100% 100%;
}
</style>
