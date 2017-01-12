<template lang="html">
  <div id="app">
    <headers></headers>
    <navigation></navigation>
    <router-view class="view-wrap"></router-view>
  </div>
</template>

<script lang="babel">
  import navigation from './components/navigation'
  import headers from './components/headers'
  export default {
    name: 'app',
    components: {
      navigation,
      headers
    }
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
    background: #f5f5f5;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4a4a4a;
    height: 100%;
    width: 100%;
    font-size: 12px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .view-wrap {
    position: absolute;
    top: 60px;
    left: 100px;
    bottom: 0;
    right: 0;
    padding: 20px;
  }
</style>
