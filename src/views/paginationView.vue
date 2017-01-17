<template lang="html">
  <div>
    <pagination
            v-model="currentPage"
            :count="count"
            :limit="limit"
            :pages-length="pagesLength"
            :change="pageChange"></pagination>
  </div>
</template>
<style lang="scss">
</style>
<script lang="babel">
  import pagination from '../packages/pagination/pagination'
  export default {
    data () {
      return {
        limit: 10,
        count: 500,
        pagesLength: 8,
        currentPage: 1
      }
    },
    methods: {
      pageChange (p) {
        console.log(p)
      }
    },
    components: {
      pagination
    }
  }
</script>
