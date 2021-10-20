<template>
  <div class="login">
    <div class="center">
      <div class="row">
        <div>用户名:</div>
        <input v-model="name" type="text" placeholder="请输入" />
      </div>
      <div class="row">
        <div>密码:</div>
        <input v-model="passWord" type="text" placeholder="请输入" />
      </div>
      <div class="tips">
        <div v-for="(item, index) in userList" :key="index">
          {{ `账号: ${item.name}, 密码: 0,  权限: ${item.type}` }}
        </div>
      </div>
    </div>

    <div class="login" @click="login">登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      passWord: '',
      userList: [ // 用户权限表
        { name: '111', type: 'admin' },
        { name: '222', type: 'editor' },
        { name: '333', type: 'read' }
      ]
    }
  },
  methods: {
    login() {
      console.log('name', this.name)
      console.log('passWord', this.passWord)
      this.$store.dispatch('user/login', { username: this.name, password: this.passWord })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .center {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    margin-top: 200px;
    border: 1px solid #666;
    border-radius: 10px;
    padding: 20px;
    .row {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
    .tips {
      color: red;
    }
  }
  .login {
    width: 60px;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid red;
    border-radius: 5px;
    padding: 10px 5px;
    cursor: pointer;
  }
}
</style>
