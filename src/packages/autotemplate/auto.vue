<template>
  <div class="s-autocomplete">
    <input type="text" v-model="inputs" @focus="getData(inputs)" @blur="onBlur()" :placeholder="placeholder">
    <transition name="fade-top">
    <div v-show="show && autoData.length > 0" class="ipt_think">
      <div class="ipt_scroll">
        <ul>
          <li v-for="d in autoData" @click="selectName(d)" v-html="filterText(d.name, inputs)"></li>
        </ul>
      </div>
    </div>
    </transition>
  </div>
</template>
<style lang="scss">
    .ipt_think {
      position: absolute;
      width: 260px;
      max-height: 120px;
      overflow: hidden;
      border-radius: 3px;
      box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.12), 0 5px 10px -3px rgba(0, 0, 0, 0.3);
      z-index: 1;
      .ipt_scroll {
        width:280px;
        max-height:120px;
        overflow-y:auto;
        overflow-x:hidden;
        background: #fff;
      }
      ul {
        width: 260px;
        padding: 5px;
        li {
          line-height: 36px;
          height: 36px;
          text-indent: 18px;
          color: #2a2a2a;
          background: #fff;
          b {
            color: #1b9de8;
          }
          &:hover{
            height:36px;
            line-height: 36px;
            cursor: pointer;
            background: #d1ebfa;
          }
        }
      }
    }
</style>
<script lang="babel">
  export default{
    props: {
      autoChange: Function, // 输入框 change 事件
      name: [String, Object],
      placeholder: [String, Object],
      value: [String, Object] // 输入框 显示值
    },
    data () {
      return {
        show: false,
        clickValue: '',
        timer: '', // 定时器
        inputs: '',
        autoData: [],
        clearTimer: ''
      }
    },
    mounted () {
    },
    watch: {
      inputs: function (val, oldVal) {
        clearTimeout(this.clearTimer)
        if (val === '') return
        this.$emit('input', val)
        if (this.clickValue === val) {
          this.show = false
          return
        }
        this.clearTimer = setTimeout(() => {
          this.getData(val)
        }, 300)
      },
      value: function (val, oldVal) {
        this.inputs = val
      }
    },
    methods: {
      selectName (d) {
        this.inputs = d.name
        this.clickValue = d.name
        this.show = false
        this.$emit('click', d, this.name)
      },
      getData (val) {
        if (val === '') return
        this.autoChange(val).then(res => {
          this.autoData = res.data
          this.inputVal()
        })
      },
      onBlur () {
        setTimeout(() => {
          this.show = false
        }, 200)
      },
      filterText (value, _input) {
        if (value === undefined) return
        return value.replace(new RegExp(_input, 'gm'), '<b>' + _input + '</b>')
      },
      inputVal () {
        if (this.inputs !== '') {
          this.show = true
        } else {
          this.show = false
        }
      }
    }
  }
</script>
