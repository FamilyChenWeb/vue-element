<template>
  <div class="header">
    <div class="logo">
      <div class="logo_img"></div>
      <h1>LOGO</h1>
    </div>
    <div class="header_right">
      <div class="head_portrait">
        <el-dropdown trigger="click">
          <div class="portrait el-dropdown-link">
            <div class="portrait_img"></div>
            <span class="portrait_name">Name<i class="el-icon-arrow-down el-icon--right"></i></span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginHead'
}
</script>

<style scoped>
  .header {
    margin: 0 -20px;
    display: flex;
    background-color: #616161;
  }
  .logo {
    width: 200px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .logo_img {
    width: 32px;
    height: 32px;
    background-color: #f00;
    margin-right: 10px;
  }
  h1{
    margin: 0;
    color: #fff;
  }
  .header_right, .head_portrait {
    height: 60px;
    line-height: 60px;
  }
  .header_right {
    display: flex;
    flex: 1;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
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
