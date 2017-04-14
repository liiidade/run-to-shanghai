<template>
<div class="hello">
  <img class="logo" src="../assets/img/logo.png">
  <router-link class="run t-shadow" to="/map">
    开始跑路
  </router-link>
</div>
</template>

<script>
export default {
  name: 'Hello'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/rem.scss";
.hello {
    width: 100%;
    height: 100vh;
    text-align: center;
    background: transparent url('../assets/img/hello_bg.jpg') left top no-repeat;
    background-size: 100% 100%;
    .logo {
        position: fixed;
        left: 20%;
        top: 20vh;
        width: 60%;
    }
    .run {
        width: 70%;
        display: block;
        font-size: px2rem(30);
        position: fixed;
        bottom: 21vh;
        left: 15%;
        color: rgba(233, 233, 233, 0.9);
        padding: 5px 0;
        background: linear-gradient(to right, rgba(51, 51, 51,0), rgba(51, 51, 51,0.4) 15%, rgba(51, 51, 51,0.4) 85%, rgba(51, 51, 51,0));
    }
}
</style>
