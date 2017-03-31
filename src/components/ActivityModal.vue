<template>
<div class="a-modal">
  <AMask @hide="$emit('hide')" />
  <div class="modal t-shadow frame-box">
    <p class="title">{{activity.name}}</p>
    <img class="bg" :src="activity.imgUrl" />
    <p class="tips">{{activity.tips}}</p>
    <div class="action">
      <router-link class="ok" :to="activity.url">
        Go
      </router-link>
      <a class="cancel" href="javascript:void(0);" @click="$emit('hide')">算了</a>
    </div>
  </div>
</div>
</template>
<script>
import AMask from './common/AMask'
export default {
  props: ['activity'],
  components: {
    AMask
  }

}
</script>

<style lang="scss" scoped>
.a-modal {
    position: fixed;
    z-index: 997;
    .modal {
        position: absolute;
        top: 15vh;
        left: 19vw;
        width: 56vw;
        padding: 3vw;
        z-index: 999;
        text-align: center;
        color: #FFFFFF;
        .title {
            font-size: 2em;
        }
        .tips {
            font-size: 1em;
        }
        .bg {
            width: 100%;
            height: 30vh;
            margin: 2vh 0;
        }
        .action {
            font-size: 1.4em;
            margin: 18px auto 0;
            display: block;
            width: 75%;
            text-align: center;
            .cancel,
            .ok {
                background-color: rgba(48, 109, 173,0.6);
                border: 1px solid #21476f;
                border-radius: 8px;
                width: calc(46% - 4px);
                display: inline-block;
            }
            .ok {
                color: #FFFFFF;
                margin-right: 2%;
            }
            .cancel {
                color: #c0c0c0;
            }
        }
    }
}
</style>
