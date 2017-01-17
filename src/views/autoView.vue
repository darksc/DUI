<template lang="html">
  <div>
    <auto placeholder="请输入"
          name="test"
          v-model="value"
          :auto-change="textChange"
          @click="textClick"></auto>
  </div>
</template>
<style lang="scss">
</style>
<script lang="babel">
  import auto from '../packages/autotemplate/auto'
  import axios from 'axios'
  export default {
    data () {
      return {
        value: '测试'
      }
    },
    methods: {
      textChange (val) {
        let obj = []
        console.log(val)
        for (let i = 0; i < 5; i++) {
          obj.push({
            name: val + (i + 1)
          })
        }
        console.log(obj)
        return axios.post('http://jsonplaceholder.typicode.com/posts', obj)
      },
      textClick (v) {
        console.log(v)
      }
    },
    components: {
      auto
    }
  }
</script>
