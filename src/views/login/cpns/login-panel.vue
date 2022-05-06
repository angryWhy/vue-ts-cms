<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><iphone /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepWord">记住密码</el-checkbox>
      <el-link type="primary">主要链接</el-link>
    </div>
    <el-button type="primary" class="loginButton" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account-.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  name: 'LoginPanel',
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const isKeepWord = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const handleLoginClick = () => {
      console.log('click', accountRef.value?.loginAction())
    }
    return {
      isKeepWord,
      accountRef,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
}
.account-control {
  display: flex;
  justify-content: space-between;
}
.loginButton {
  width: 100%;
  margin-top: 5px;
}
</style>
