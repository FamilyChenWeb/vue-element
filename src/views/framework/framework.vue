<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside>
        <Menu />
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
          <!--<el-footer>-->
            <!--<Footer />-->
          <!--</el-footer>-->
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
import Footer from '@/components/Footer/Footer'
export default {
  name: 'Framework',
  components: {
    Header,
    Menu,
    Footer
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #616161;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    width: auto !important;
    background-color: #D3DCE6;
    color: #fff0;
    text-align: left;
    line-height: 200px;
  }
  .el-main {
    background-color: #f5f5f5;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0;
  }
  .el-footer {
    line-height: 30px;
    height: 30px !important;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container {
    height: 100%;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
