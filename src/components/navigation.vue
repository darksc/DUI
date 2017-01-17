<template lang="html">
  <div class="nav-wrap">
    <h3>导航</h3>
    <ul>
      <li>
        <router-link to="/index">简介</router-link>
      </li>
      <li>
        <router-link to="/button">按钮</router-link>
      </li>
      <li>
        <router-link to="/auto">联想输入</router-link>
      </li>
      <li>
        <router-link to="/panel">面板</router-link>
      </li>
      <li>
        <router-link to="/pagination">分页</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  .nav-wrap {
    width: 150px;
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    background: #fff;
    padding: 10px 0;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
    ul, li {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    h3 {
      padding: 0 10px;
      margin: 0 0 10px 0;
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
          margin: 0 10px;
          border-radius: 2px;
          &:hover {
            background: #f5f5f5;
            color: #1b9de8;
          }
        }

        .router-link-active {
          color: #fff !important;
          background: #1b9de8 !important;
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
