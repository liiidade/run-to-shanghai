<template>
<section class="coner-status t-shadow frame-box">
  <h4 class="title">{{broStatus.name}}老哥 当前</h4>
  <p class="attr">体力<span class="fr">{{broStatus.hp.current}}/{{broStatus.hp.total}}</span></p>
  <p class="attr">饱食<span class="fr">{{broStatus.hungry.current}}/{{broStatus.hungry.total}}</span></p>
  <p class="attr">攻击力<span class="fr">{{broStatus.ap}}</span></p>
  <p class="attr">敏捷<span class="fr">{{broStatus.sp}}</span></p>
  <p class="attr">钱<span class="fr">¥{{broStatus.money}}</span></p>
</section>
</template>

<script>
import {
  mapState
} from 'vuex';

export default {
  name: 'ConerStatus',
  computed: {
    ...mapState({
      broStatus: state => state.BroStore.broStatus,
    })
  }
}
</script>

<style lang="scss">
.coner-status {
    position: fixed;
    top: 4vh;
    left: 4vh;
    padding: 1vw;
    color: rgba(255, 255, 255,0.9);
    font-size: 10px;
    .title {
        padding: 2px 20px 2px 2px;
        color: #FFFFFF;
    }
}
</style>
