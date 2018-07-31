<template>
  <div class="error">
    <div class="error_nav">
      <div class="error_center">
        <img src="../../assets/error.jpg" />
        <div class="error_content">
          <h2>oops!</h2>
          <p>页面找不到...</p>
          <span>请检查您的输入的网址是否正确，请点击以下按钮返回主页。</span>
          <el-button type="primary" round>主要按钮</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error'
}
</script>

<style scoped>
  .error {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .error_nav {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .error_center {
    position: relative;
    width: 1200px;
    padding: 0 50px;
    overflow: hidden;
  }
  .error_nav img {
    max-width: 600px;
    float: left;
  }
  .error_content {
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>
