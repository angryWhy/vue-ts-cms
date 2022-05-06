<template>
  <div>
    <el-tabs class="demo-tabs">
      <el-tabs type="border-card" class="demo-tabs">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><avatar /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          Route
        </el-tab-pane>
        <el-tab-pane label="Config">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><iphone /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          phone
        </el-tab-pane>
      </el-tabs>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const activeName = ref(0)
    return {}
  }
})
</script>

<style scoped></style>
