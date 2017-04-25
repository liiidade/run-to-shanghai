<template>
<div class="pass-three">
  <ConerStatus/>
  <MapFootLink/>
</div>
</template>

<script>
import MapFootLink from './MapFootLink'
import ConerStatus from './common/ConerStatus';

export default {
  name: 'PassThree',
  components: {
    MapFootLink,
    ConerStatus
  }
}
</script>

<style lang="scss">
.pass-three {
    width: 100vw;
    height: 100vh;
    background: url('../assets/img/pass_bg.png') left top no-repeat;
    background-size: 100% 100%;
}
</style>
