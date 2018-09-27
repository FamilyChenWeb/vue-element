<template>
  <div>
    <p>首页</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  }
}
</script>

<style scoped>

</style>
