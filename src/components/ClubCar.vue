<template>
<div class="fixCar t-shadow">
  <ConerStatus/>
  <transition name="fade" mode="out-in">
    <img class="car-p" :src="currentCarDetails.img" />
  </transition>
  <section class="info frame-box">
    <h1 class="name">{{currentCarDetails.name}}</h1>
    <p class="intro">{{currentCarDetails.intro}}</p>
    <P class="effect">生命最大值+{{currentCarDetails.effect.hp}}，饱食度{{currentCarDetails.effect.hungry}}</p>
    <div class="cut-car">
      <button @click="cutCar(-1)" class="left"><</button>
      <p class="fee">¥ {{currentCarDetails.fee}}</p>
      <button @click="cutCar(1)" class="right">></button>
    </div>
    <div class="actions">
      <button @click="fixIt" class="left t-shadow">修</button>
      <button @click="cancel" class="right t-shadow">算了</button>
    </div>
  </section>
  <MapFootLink/>
  <PopUp/>
</div>
</template>


<script>
import {
  mapState
} from 'vuex';

import Vue from 'vue';

import MapFootLink from './MapFootLink'
import ConerStatus from './common/ConerStatus'
import PopUp from './common/PopUp'

export default {
  name: 'ClubCar',
  data() {
    return {
      currentCar: 0
    }
  },
  computed: {
    ...mapState({
      cars: state => state.ClubStore.cars,
      broStatus: state => state.BroStore.broStatus,
    }),
    currentCarDetails() {
      return this.cars[this.currentCar]
    },
    totalCar() {
      return this.cars.length - 1
    }
  },
  methods: {
    cutCar(dir) {
      const currentCar = this.currentCar + dir
      this.currentCar = currentCar < 0 ? this.totalCar : currentCar > this.totalCar ? 0 : currentCar
    },
    cancel() {
      this.$router.back()
    },
    fixIt() {
      const {
        money,
        hp,
        hungry
      } = this.broStatus;
      const {
        fee,
        effect
      } = this.currentCarDetails;
      const leaveMoney = money - fee;
      if (leaveMoney < 0) {
        const popUpInfo = {
          show: true,
          title: '老哥，还差' + (~leaveMoney + 1) + '，总不能修霸王车吧～',
          tips: '老哥可以进场打工，过三关搞点路子'
        }
        this.$store.commit('Show', popUpInfo)
      } else {
        const newBroSta = {
          money: leaveMoney,
          hp: Object.assign({}, hp, {
            total: hp.total + effect.hp
          }),
          hungry: Object.assign({}, hungry, {
            current: hungry.current - effect.hungry
          })
        }
        this.$store.commit('UpdateBro', newBroSta);
        Vue.nextTick(() => {
          const popUpInfo = {
            show: true,
            title: '鸡儿梆硬！',
            tips: '修了一发，hp增加' + effect.hp + '，饱食度减少' + effect.hungry+'。具体信息可以参照左上角～'
          };
          this.$store.commit('Show', popUpInfo)
        });
      }
    }
  },
  components: {
    MapFootLink,
    ConerStatus,
    PopUp
  }
}
</script>

<style lang="scss">
.fixCar {
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: rgba(51, 51, 51,0.6);
    .info {
        color: rgba(255, 255, 255,0.9);
        text-align: center;
        padding: 1vh 0;
        position: fixed;
        top: 40vh;
        left: 15vw;
        width: 70vw;
    }
    .car-p {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .name {
        color: #FFFFFF;
    }
    .effect,
    .fee,
    .intro {
        margin: 2vh 0;
        font-size: 0.8em;
        padding: 0 4%;
    }
    .fee {
        font-size: 1.2em;
        color: rgba(255, 255, 255,0.9);
    }
    .left,
    .right {
        font-size: 1.3em;
        background-color: rgba(48, 109, 173, 0.6);
        border: 1px solid #21476f;
        color: #FFFFFF;
        border: 1px solid rgba(48, 109, 173, 0.6);
        border-radius: 4px;
    }
    .cut-car {
        margin: 0 auto;
        width: 60vw;
        > * {
            display: inline-block;
        }
        .fee {
            width: 52%;
        }
    }
    .actions {
        margin: 3vh auto;
        width: 50vw;
        .left,
        .right {
            font-size: 1.2em;
            width: 40%;
        }
        .left {
            margin-right: 5%;
        }
    }
}
</style>
