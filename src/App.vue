<template lang="html">
  <div id="app">
    <router-view class="view-wrap"></router-view>
    <navigation></navigation>
    <headers></headers>
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
    overflow: hidden;
    background: #f5f5f5;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4a4a4a;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-size: 12px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /*@font-face {*/
    /*font-family: 'Material Icons';*/
    /*font-style: normal;*/
    /*font-weight: 400;*/
    /*src: url(https://fonts.googleapis.com/icon/MaterialIcons-Regular.eot); !* For IE6-8 *!*/
    /*src: local('Material Icons'),*/
    /*local('MaterialIcons-Regular'),*/
    /*url(https://fonts.googleapis.com/icon/MaterialIcons-Regular.woff2) format('woff2'),*/
    /*url(https://fonts.googleapis.com/icon/MaterialIcons-Regular.woff) format('woff'),*/
    /*url(https://fonts.googleapis.com/icon/MaterialIcons-Regular.ttf) format('truetype');*/
  /*}*/

  .d-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }

  .view-wrap {
    position: absolute;
    top: 60px;
    left: 150px;
    bottom: 0;
    right: 0;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .page-wrap {
    .section-wrap {
      box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
      border-radius: 3px;
      background: #fff;
      padding: 10px;
    }
    h3 {
      margin: 0 0 20px;
    }
  }


</style>
