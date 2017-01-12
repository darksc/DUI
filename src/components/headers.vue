<template lang="html">
  <div class="title-wrap">
    {{title}} <small>v0.0.1</small>
  </div>
</template>
<style lang="scss">
  .title-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    line-height: 60px;
    background: #fff;
    text-align: center;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
  }
</style>
<script lang="babel">
  export default {
    data () {
      return {
        title: 'DUI'
      }
    }
  }
</script>
