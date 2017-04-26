<template>
<div class="pass-three">
  <ConerStatus/>
  <div class="select-tiger frame-box">
    <button class="left btn"><img src="../assets/img/left.png"></button>
    <button class="right btn"><img src="../assets/img/right.png"></button>
    <div class="choose-block">
      <img class="expect" />
      <div class="bet t-shadow">
        <button class="up btn"><img src="../assets/img/fold.png"></button>
        <p class="num">0.0</p>
        <p class="tips">加倍</p>
        <button class="down btn"><img src="../assets/img/unfold.png"></button>
      </div>
    </div>
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
            background-color: rgba(255, 255, 255, 0);
            padding: 0;
            &.left {
                position: absolute;
                top: px2rem(50);
                left: px2rem(-10);
            }
            &.right {
                position: absolute;
                top: px2rem(50);
                right: px2rem(-10);
            }
            img {
                width: px2rem(40);
            }
        }
        .choose-block {
            padding: 0 px2rem(20);
            width: px2rem(260);
            height: px2rem(140);
            > * {
                vertical-align: middle;
                display: inline-block;
            }
            .expect {
                margin-left: px2rem(10);
                padding: px2rem(10);
                height: px2rem(120);
                width: px2rem(120);
            }
            .bet {
                position: relative;
                height: px2rem(140);
                width: px2rem(100);
                text-align: center;
                color: #FFFFFF;
                .num {
                    font-size: px2rem(40);
                }
                .tips {
                    font-size: px2rem(16);
                    margin-top: px2rem(6);
                }
                .up {
                    margin-top: px2rem(-10);
                }
                .down {
                    margin-bottom: px2rem(-10);
                }
            }
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
