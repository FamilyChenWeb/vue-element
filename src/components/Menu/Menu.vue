<template>
  <el-menu
    :class="screenWidth<767.98 ? 'el-menu-vertical-demo screen_width' : 'el-menu-vertical-demo'"
    background-color="#757575"
    text-color="#fff"
    active-text-color="#ffeb3b"
    :collapse="isCollapse"
    :default-active="currentPath"
    router
  >
    <template v-for="(item, idx) in menu">
      <el-menu-item v-if="item.hidden" style="padding-left: 0;padding-right: 0;" :index="item.componentName" :key="item.componentName">
        <el-tooltip class="item" :disabled="!isCollapse" effect="dark" :content="item.name" placement="right">
          <div>
            <i class="el-icon-menu"></i>
            <span v-text="item.name"></span>
          </div>
        </el-tooltip>
      </el-menu-item>
      <el-submenu v-else :index="item.id" :key="item.id">
        <template slot="title">
          <i :class="icon[idx]"></i>
          <span v-text="item.name"></span>
        </template>
        <el-menu-item class="navigation" v-for="sub in item.sub" :key="sub.componentName" :index="sub.componentName" v-text="sub.name">
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import menu from '@/filters/menus'
import bus from '../../libs/bus'
export default {
  name: 'Menu',
  data () {
    return {
      menu,
      isCollapse: false,
      icon: ['el-icon-menu', 'el-icon-location'],
      currentPath: this.$route.path,
      screenWidth: document.body.clientWidth
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentPath = to.path
    }
  },
  methods: {
  },
  mounted () {
    bus.$on('handleClick', function (e, res) {
      this.isCollapse = e
      this.screenWidth = res
      console.log(`789`,this.screenWidth)
    }.bind(this))
  },
  created () {
    if (this.screenWidth < 767.98) {
      this.isCollapse = true
    } else {
      this.isCollapse = e
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo {
    width: 65px;
    height: 100%;
    border: none;
    overflow: auto;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .screen_width {
    width: 0px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .navigation {
    background-color: #424242 !important;
    padding: 0 20px !important;
  }
  .navigation:hover {
    background-color: #212121 !important;
  }
  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
  .item{
    padding: 0 20px;
  }
</style>
