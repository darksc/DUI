<template>
  <ul class="pagination">
    <!--首页-->
    <li class="pagination-first">
      <span @click="first()" class="d-icon" :class="{'pagination-disabled': selfCurrentPage === 1}">&#xE87C;</span>
    </li>
    <!--上一页-->
    <li class="pagination-prev">
      <span @click="prev()" class="d-icon" :class="{'pagination-disabled': selfCurrentPage === 1}">&#xE87C;</span>
    </li>
    <!--分页页码-->
    <li v-for="p in pagesLength" v-if="index * pagesLength + p <= pages">
      <span @click="click(index * pagesLength + p)" :class="{'pagination-selected': selfCurrentPage === index * pagesLength + p}">{{index * pagesLength + p}}</span>
    </li>
    <!--分页下拉框-->
    <li class="pagination-select" v-if="selectShow">
      <select v-model="selfCurrentPage" @change="selectChange($event)">
        <option v-for="p in pages">{{p}}</option>
      </select>
    </li>
    <!--尾页-->
    <li class="pagination-last">
      <span @click="last()" class="d-icon" :class="{'pagination-disabled': selfCurrentPage === pages}">&#xE87C;</span>
    </li>
    <!--下一页-->
    <li class="pagination-next">
      <span @click="next()" class="d-icon" :class="{'pagination-disabled': selfCurrentPage === pages}">&#xE87C;</span>
    </li>
  </ul>
</template>
<style lang="scss">
  .pagination {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #f2f2f2;
    font-size: 0;
    text-align: center;
    user-select: none;

    li {
      display: inline-block;
      height: 40px;
      font-size: 0;
      span {
        display: inline-block;
        font-size: 14px;
        height: 40px;
        padding: 0 5px;
        transition-property: color, background-color;
        transition-duration: .3s;
        transition-timing-function: ease;
        &:hover {
          cursor: pointer;
          background-color: #f3f3f3;
        }
      }
    }
    .pagination-first {
      float: left;
      color: #1b9de8;
    }
    .pagination-prev {
      float: left;
      color: #1b9de8;
    }
    .pagination-last {
      float: right;
      color: #1b9de8;
    }
    .pagination-next {
      float: right;
      color: #1b9de8;
    }
    .pagination-select {
      float: right;
      select {
        border: 1px solid #f3f3f3;
        height: 40px;
        line-height: 40px;
        border-radius: 0;
      }
    }
    .pagination-selected {
      color: #1b9de8;
    }
    .pagination-disabled {
      color: #c8c8c8;
      &:hover {
        cursor: pointer;
        background-color: #fff;
      }
    }
  }
</style>
<script lang="babel">
  export default {
    props: {
      limit: {
        type: Number,
        default: 1
      },
      count: {
        type: Number,
        default: 1
      },
      value: {
        type: Number,
        default: 1
      },
      change: {
        type: Function
      },
      pagesLength: {
        type: Number,
        default: 5
      },
      selectShow: {
        type: Boolean,
        default: true
      }
    },
    mounted () {
      this.change(this.selfCurrentPage)
    },
    data () {
      return {
        selfCurrentPage: this.value
      }
    },
    computed: {
      pages: function () {
        return Math.ceil(this.count / this.limit)
      },
      index: function () {
        return Math.floor((this.selfCurrentPage - 1) / this.pagesLength)
      }
    },
    watch: {
      selfCurrentPage: function (value, oldValue) {
        this.$emit('input', value)
        this.change(value)
      },
      value: function (value, oldValue) {
        this.selfCurrentPage = value
      }
    },
    methods: {
      click: function (_current) {
        this.selfCurrentPage = _current
      },
      selectChange: function (e) {
        this.selfCurrentPage = e.target.value - 0
      },
      next: function () {
        if (this.selfCurrentPage < this.pages) {
          this.selfCurrentPage++
        }
      },
      prev: function () {
        if (this.selfCurrentPage > 1) {
          this.selfCurrentPage--
        }
      },
      first: function () {
        this.selfCurrentPage = 1
      },
      last: function () {
        this.selfCurrentPage = this.pages
      }
    },
    components: {
    }
  }
</script>
