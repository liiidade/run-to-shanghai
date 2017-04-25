<template>
<div class="pass-three">
  <ConerStatus/>
  <div class="select-tiger frame-box">
    <button class="left btn"><img src="../assets/img/left.png"></button>
    <button class="right btn"><img src="../assets/img/right.png"></button>
    <button class="up btn"><img src="../assets/img/fold.png"></button>
    <button class="down btn"><img src="../assets/img/unfold.png"></button>
    <div class="imgs"></div>
    <div class="actions">
      <button class="left b-block t-shadow">上</button>
      <button class="b-block t-shadow">撤</button>
    </div>
  </div>
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

<style lang="scss" scoped>
@import "../assets/scss/rem.scss";
.pass-three {
    width: 100vw;
    height: 100vh;
    background: url('../assets/img/pass_bg.png') left top no-repeat;
    background-size: 100% 100%;
    .select-tiger {
        position: fixed;
        width: px2rem(300);
        // height: px2rem(180);
        left: px2rem(38);
        top: 50vh;
        .btn {
            position: absolute;
            background-color: rgba(255, 255, 255, 0);
            padding: 0;
            &.left {
                top: px2rem(70);
                left: px2rem(-10);
            }
            &.right {
                top: px2rem(70);
                right: px2rem(-10);
            }
            &.up {
                top: px2rem(-10);
                left: px2rem(130);
            }
            &.down {
                top: px2rem(150);
                left: px2rem(130);
            }
            img {
                width: px2rem(40);
            }
        }
        .imgs {
            padding: px2rem(20);
            width: px2rem(260);
            height: px2rem(140);
        }
        .actions {
            margin: px2rem(15) 0;
            text-align: center;
            .left {
                margin-right: px2rem(40);
            }
            .b-block {
                font-size: px2rem(20);
            }
        }
    }
}
</style>
