<template>
  <div>
    <el-form :rules="rules" :model="phone">
      <el-form-item label="账号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="密码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })
    const rules = {
      number: [
        {
          required: true,
          message: '用户名必要内容',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '用户名必须5-10数字或者字母',
          trigger: 'blur'
        }
      ],
      code: [
        {
          required: true,
          message: '密码名必要内容',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '密码必须5-10数字或者字母',
          trigger: 'blur'
        }
      ]
    }
    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
