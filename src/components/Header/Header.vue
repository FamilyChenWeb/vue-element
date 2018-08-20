<template>
  <div class="header">
    <div class="logo">
      <div class="logo_img"></div>
      <h1>LOGO</h1>
    </div>
    <div class="header_right">
      <div class="header_function">
        <HeaderFunction />
      </div>
      <div class="head_portrait">
        <HeadPortrait />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderFunction from './components/HeaderFunction/HeaderFunction'
import HeadPortrait from './components/HeadPortrait/HeadPortrait'
export default {
  name: 'Header',
  components: {
    HeaderFunction,
    HeadPortrait
  }
}
</script>

<style scoped>
  .header {
    margin: 0 -20px;
    display: flex;
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
  }
  .header_right {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>
