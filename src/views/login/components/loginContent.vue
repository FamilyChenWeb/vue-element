<template>
  <div class="box">
    <el-row>
      <el-col :sm="24">
        <div class="grid-content box_bj">
          <span class="head_text">Lucky Seven 总奖池：123.0000 eth</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :sm="10" :xs="24">
        <div class="grid-content">
          <el-row class="box_bj box_bottom">
            <div class="situation_list">
              <span>你参与了吗？</span>
            </div>
            <div class="situation_list">
              <span>Lucky Seven 等着你！</span>
            </div>
            <div class="situation_list">
              <div>
                <el-button class="top_up top_up_width" @click="dialogFormVisible = true">登录</el-button>
              </div>
            </div>
            <div class="situation_list">
              <div>
                <el-button class="top_up top_up_width" @click="dialogFormVisible1 = true">注册</el-button>
              </div>
            </div>
            <!--登录弹窗-->
            <el-dialog title="登录" :visible.sync="dialogFormVisible">
              <div class="prompt">
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
              <div class="prompt">
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
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">登 录</el-button>
              </div>
            </el-dialog>
            <!--注册弹窗-->
            <el-dialog title="注册" :visible.sync="dialogFormVisible1">
              <div class="prompt">
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
              <div class="prompt">
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
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible1 = false">注 册</el-button>
              </div>
            </el-dialog>
          </el-row>

          <el-row>
            <el-col :sm="24" :xs="24">
              <div class="grid-content box_bj">
                <span class="text_left text_padding">最后一名id：las**ef</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="24" :xs="24">
              <div class="grid-content box_bj">
                <span class="text_left text_padding">总人数：123</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="24" :xs="24">
              <div class="grid-content box_bj">
                <span class="text_left text_padding">本轮进盘人数：123</span>
              </div>
            </el-col>
          </el-row>
        </div>

      </el-col>
      <el-col :sm="14" :xs="24" class="right_height">
        <div class="grid-content box_bj">
          <div>
            <span style="background-color: #d6d6d6; padding: 5px;">游戏参与倒计时：12：00</span>
          </div>
          <div class="button">
            <div class="button_position">
              <span>参与游戏</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'loginContent',
  data () {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      account: '',
      password: '',
      cs: '',
      cs1: '',
      formLabelWidth: '120px'
    }
  },
  methods: {
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
  }
}
</script>

<style scoped>
  .box {
    padding: 15px;
  }
  .box_bj {
    background-color: #fff;
  }
  .head_text {
    color: #f00;
    font-size: 24px;
  }
  .text_left {
    float: left;
  }
  .text_right {
    float: right;
  }
  .text_padding {
    padding: 0 15px;
  }
  .el-row {
    margin-bottom: 15px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    border: 1px solid #ccc;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 50px;
    line-height: 50px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .ovh {
    overflow: hidden;
  }
  .left_title {
    border-bottom: 1px solid #ccc;
  }
  .always, .gold {
    float: left;
    width: 50%;
  }
  .gold {
    border-left: 1px solid #ccc;
    box-sizing: border-box;
  }
  .rotary {
    border-top: none;
    padding: 15px;
  }
  .rotary_border {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 100%;
    margin: 0 auto;
  }
  .portrait {
    width: 50px;
    height: 50px;
    background-color: #f00;
    margin-right: 10px;
  }
  .flex {
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: center;
    padding: 30px;
  }
  .flex_column {
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: left;
    text-align: left;
  }
  .flex_column span {
    line-height: 25px;
  }
  .flex_column .boss {
    height: 25px;
    line-height: 25px;
    background-color: #f00;
    border-radius: 100px;
    padding: 0 15px;
    color: #fff;
    font-size: 12px;
  }
  .situation_list {
    overflow: hidden;
    padding: 0 15px;
  }
  .top_up {
    padding: 10px 60px;
  }
  .top_up_width {
    width: 100%;
  }
  .box_bottom {
    padding-bottom: 10px;
  }
  .line {
    height: 2px;
    background-color: #999;
    margin: 15px;
  }
  .portrait_bj {
    background-color: #ffffcc;
  }
  .button_position {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: #ffffcc;
    margin: auto;
    border-radius: 100%;
    line-height: 100px;
    text-align: center;
  }
  .right_height {
    height: 100%;
  }
  .el-table {
    text-align: left;
  }
  .prompt {
    margin-bottom: 14px;
  }
  .prompt span{
    height: 14px;
    line-height: 14px;
    float: left;
  }
</style>
