<template>
  <div>
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import localeCache from '@/utils/catch'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const store = useStore()
    const account = reactive({
      //先取一下看看有没有
      name: localeCache.getCache('name') ?? '',
      password: localeCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepWord: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepWord) {
            localeCache.setCache('name', account.name)
            localeCache.setCache('password', account.password)
          } else {
            localeCache.deleteCache('name')
            localeCache.deleteCache('password')
          }
          store.dispatch('loginModule/accountLoginAction', { ...account })
        }
      })
    }
    const rules = {
      name: [
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
      password: [
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
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
