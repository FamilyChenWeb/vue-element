<template>
  <div>
    <el-dropdown trigger="click">
      <div class="portrait el-dropdown-link">
        <div class="portrait_img"></div>
        <!--<span class="portrait_name">Name<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i></span>-->
        <span class="portrait_name">{{$t('message.hello')}}</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'HeadPortrait'
}
</script>

<style scoped>
  .portrait {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 20px;
    cursor: pointer;
  }
  .portrait_img {
    width: 32px;
    height: 32px;
    background-color: #f00;
    margin-right: 10px;
  }
  .portrait_name {
    color: #fff;
  }
</style>
