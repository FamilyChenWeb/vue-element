<template>
    <div v-on:click="handleClick" :class="isLog ? 'open' : 'guan'">
      <!--<i :class="isLog ? 'icon-gengduo' : 'icon-androidgengduo'"></i>-->
      <i class="icon-androidgengduo icon"></i>
    </div>
</template>

<script>
import bus from '../../../../libs/bus'
export default {
  name: 'HeaderFunction',
  data () {
    return {
      isLog: false
    }
  },
  methods: {
    handleClick () {
      bus.$emit('abc', this.isLog = !this.isLog)
    }
  },
  computed: {
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
