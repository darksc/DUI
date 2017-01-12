<template lang="html">
  <div id="app">
    <div class="nav">
      导航
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="babel">
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .nav {
    width: 200px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

</style>
