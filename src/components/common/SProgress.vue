<template>
<div class="progress">
  <p class="ptitle">{{title}}</p>
  <div class="total">
    <div class="current" :style="progressWidth"></div>
  </div>
  <p class="data fr">{{current}}/{{count}}</p>
</div>
</template>

<script>
export default {
  name: 'SProgress',
  props: ['title', 'count', 'current'],
  computed: {
    progressWidth() {
      return {
        width: this.current / this.count * 100 + '%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
    width: 100%;
    position: relative;
    * {
        font-size: 10px;
        height: 10px;
        line-height: 10px;
        display: inline-block;
        color: #e9e9e9;
    }
    .ptitle {
        width: 35px;
    }
    .total {
        width: calc(100% - 90px);
        background-color: rgba(49, 181, 133,0.4);
        .current {
            width: 30%;
            background-color: #24ac7b;
        }
    }
    .data {
        text-align: right;
        margin-top: 4px;
        width: 45px;

    }
}
</style>
