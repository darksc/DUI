<template lang="html">
  <div class="nav-wrap">
    <ul>
      <li>
        <router-link to="/index">首页</router-link>
      </li>
      <li>
        <router-link to="/panel">面板</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  .nav-wrap {
    width: 100px;
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
    ul, li {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    a {
      text-decoration: none;
      color: #4a4a4a;
      transition: .3s;
    }
    ul {
      li {
        a {
          line-height: 30px;
          display: block;
          padding: 0 10px;
        }
        &:hover {
          background: #f5f5f5;
          color: #1b9de8;
          a {
            color: #1b9de8;
          }
        }
        .router-link-active {
          color: #fff !important;
          background: #1b9de8;
          border-radius: 2px;
        }
      }
    }
  }
</style>
<script lang="babel">
  export default {
    data () {
      return {
        title: 'hello vue'
      }
    }
  }
</script>
