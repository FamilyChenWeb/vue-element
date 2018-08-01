<template>
    <div v-on:click="handleClick" :class="isLog ? 'open' : 'guan'">
      <i class="icon-androidgengduo icon"></i>
    </div>
</template>

<script>
import bus from '../../../../libs/bus'
export default {
  name: 'HeaderFunction',
  // 初始化
  data () {
    return {
      isLog: false,
      screenWidth: document.body.clientWidth
    }
  },
  // 监控变量变化的时候，自动执行此函数
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        const that = this
        setTimeout(function () {
          that.screenWidth = that.$store.state.canvasWidth
        }, 500)
      }
    }
  },
  // 读写函数
  methods: {
    titleFunc () {
      if (this.screenWidth < 767.98) {
        this.isLog = true
      } else {
        this.isLog = false
      }
    },
    handleClick () {
      bus.$emit('handleClick', this.isLog = !this.isLog, this.screenWidth)
    }
  },
  // 挂载元素，获取到DOM节点
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
        if (that.screenWidth < 767.98) {
          that.isLog = false
          that.handleClick()
        } else {
          that.isLog = true
          that.handleClick()
        }
      }) ()
    }
  },
  // 初始化完成时的事件写在这里
  created () {
    this.titleFunc()
  }
}
</script>

<style scoped>
  .guan {
    transform:rotate(90deg);
    transition: 0.5s;
  }
  .open {
    transform:rotate(0deg);
    transition: 0.5s;
  }
  .icon {
    display: block;
    color: #fff;
  }
</style>
