<template>
<a href="javascript:void(0);" @click="backHsitory" v-if="back" class="foot-link">
  <img class="bg" :src="imgUrl" />
</a>
<router-link v-else class="foot-link" :to="url">
  <img class="bg" :src="imgUrl" />
</router-link>
</template>

<script>
export default {
  name: 'FootLink',
  props: {
    url: String,
    imgUrl: String,
    back: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backHsitory() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.foot-link {
    position: fixed;
    bottom: 2%;
    right: 2%;
    border: 1px solid #222521;
    border-radius: 50%;
    display: block;
    width: 8vh;
    height: 8vh;
    font-size: 1.2em;
    overflow: hidden;
    .bg {
        width: 100%;
        height: 100%;
    }
}
</style>
