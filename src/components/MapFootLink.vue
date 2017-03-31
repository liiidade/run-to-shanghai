<template>
<FootLink :back=true url="/map" :imgUrl="require('../assets/img/map_icon.jpg')" />
</template>

<script>
import FootLink from './common/FootLink'
export default {
  name: 'MapFootLink',
  components: {
    FootLink
  }
}
</script>
