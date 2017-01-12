<template lang="html">
  <div class="page-wrap panel-view">
    <h3>{{title}}</h3>

    <div class="section-wrap">
      <panel
        headerName="面板一"
        :headerHeight="80">
        <div slot="header">
          面板头部内容
        </div>
        <div slot="body">
          面板内容
        </div>
      </panel>

      <div>

      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .panel-view {
    .section-wrap {
      position: absolute;
      top: 59px;
      left: 20px;
      right: 20px;
      bottom: 20px;
    }
  }
</style>
<script lang="babel">
  import panel from '../packages/panel/panel'
  export default {
    data () {
      return {
        title: '面板'
      }
    },
    components: {
      panel
    }
  }
</script>
