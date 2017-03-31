<template>
<div @click="$emit('hide')" class="mask">
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(51, 51, 51, 0.3);
  z-index: 998;
}
</style>
