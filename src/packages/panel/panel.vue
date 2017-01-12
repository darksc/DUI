<template>
  <div class="panel-wrap">
    <header class="panel-header">
      <span :title="headerName">{{headerName}}</span>
      <span class="iconfont icon-guanbi" @click="onClose()"></span>
    </header>
    <div class="sub-header" :style="{height: headerHeight + 'px'}">
      <slot name="header"></slot>
    </div>
    <div class="body-wrap" :style="{top: headerHeight + 70 + 'px'}">
      <div class="body-scroll">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .panel-wrap {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    width: 390px;
    overflow: hidden;
    border-radius: 3px;
    box-shadow: 0 1px 0 0 rgba(0,0,0,.12),
    0 5px 10px -3px rgba(0,0,0,.3);
    .panel-header {
      height: 70px;
      line-height: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: #1b9de8;
      color: #fff;
      font-size: 16px;
      font-family: "SimSun", Helvetica, Arial, sans-serif;
      font-weight: bold;
      padding: 0 20px;
      .icon-guanbi {
        position: absolute;
        right: 20px;
        top: 16px;
        line-height: 14px;
        height: 14px;
        font-size: 14px;
        &:hover {
          cursor: pointer;
          color: #07C8C7;
          transform: rotate(180deg);
        }
      }
    }

    .sub-header {
      color: #fff;
      background: #1b9de8;
      overflow: hidden;
    }

    .body-wrap {
      position: absolute;
      bottom: 0;
      width: 420px;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: #fff;
      .body-scroll {
        width: 390px;
      }
    }
  }
</style>
<script lang="babel">
  export default {
    props: {
      headerHeight: Number,
      headerName: [String, Object]
    },
    data () {
      return {
      }
    },
    methods: {
      onClose () {
        this.$store.dispatch('changePanel', '')
      }
    }
  }
</script>
