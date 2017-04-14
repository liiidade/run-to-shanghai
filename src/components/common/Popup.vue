<template>
<section v-if="show" class="pop-up frame-box">
  <h2 class="title">{{title}}</h2>
  <p class="tips">{{tips}}</p>
  <button @click="hide" class="hide-action frame-box">知道了</button>
</section>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'PopUp',
  props: ['title', 'text'],
  computed: {
    ...mapState({
      show: state => state.PopUpStore.show,
      title: state => state.PopUpStore.title,
      tips: state => state.PopUpStore.tips
    })
  },
  methods: {
    hide() {
      this.$store.commit('Hide');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/rem.scss";
.pop-up {
    position: fixed;
    width: 60vw;
    left: 17vw;
    top: 30vh;
    background-color: #c0c0c0;
    text-align: center;
    text-shadow: none;
    padding: 4vh 3vw;
    .title {
        font-size: px2rem(19);
    }
    .tips {
        margin: px2rem(10);
        font-size: px2rem(16);
    }
    .hide-action {
        margin-top: px2rem(20);
        font-size: px2rem(21);
        border-radius: 0;
    }
}
</style>
