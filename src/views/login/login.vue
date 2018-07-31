<template>
    <div class="login_box">
      <div class="login_border">
        <!--头部logo-->
        <div class="login_logo">
          <img src="../../assets/logo.png" />
          <h1>后台登录</h1>
          <div class="login_translation">
            中英
          </div>
        </div>
        <div class="login_list">
          <el-input
            type="text"
            placeholder="请输入账号"
            v-model="account"
            @blur="user_name"
            clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <span style="float: left; color: #f00; padding: 5px 0 5px 10px; font-size: 14px;">{{cs}}</span>
        </div>
        <div class="login_list">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="password"
            @blur="user_password"
            clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <span style="float: left; color: #f00; padding: 5px 0 5px 10px; font-size: 14px;">{{cs1}}</span>
        </div>
        <div class="login_list">
          <el-button type="primary" @click="login_btn">登录</el-button>
        </div>
        <p class="login_flex">
          <a href="#">忘记密码</a>
          <a href="#">注册账号</a>
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      account: '',
      password: '',
      cs: '',
      cs1: ''
    }
  },
  methods: {
    login_btn () {
      console.log(this.account, this.password, `点击登录了`)
    },
    user_name () {
      if (!/^[0-9]*$/.test(this.account)) {
        this.cs = '只能输入数字'
      } else {
        this.cs = ''
      }
    },
    user_password () {
      if (!/^[A-Za-z]*$/.test(this.password)) {
        this.cs1 = '只能输入英文'
      } else {
        this.cs1 = ''
      }
    }
  },
  created () {
  }
  // mounted: {
  //   cs () {
  //     console.log('123')
  //   }
  // },
  // beforeDestroy: {
  //   cs () {
  //     console.log('123')
  //   }
  // },
  // nextTick: {
  //   cs () {
  //     console.log('123')
  //   }
  // }
}
</script>

<style scoped>
  .login_box {
    width: 100%;
    height: 100%;
    background-color: #303133;
  }
  .login_border {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .login_logo {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
  .login_logo img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  .login_logo h1 {
    font-size: 26px;
    color: #fff;
  }
  .login_translation {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
  }
  .login_list {
    margin-top: 40px;
  }
  .el-input {
    font-size: 18px;
  }
  .el-button {
    width: 100%;
  }
  .login_flex {
    display: flex;
    justify-content: space-between;
  }
</style>
