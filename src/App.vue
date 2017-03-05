<template>
  <div id="app">
    <router-view class="view" keep-alive transition transition="out-in" ></router-view>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang='less'>
@import "./style/less/base";
html{
  width: 100%;
  height: 100%;
  body {
      width: 100%;
      height: 100%;
      #app {
        width: 100%;
        height: 100%;
      }
  }
}
</style>
