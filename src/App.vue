<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import login from './views/login/login.vue'
export default defineComponent({
  components: {},
  setup() {
    return {}
  }
})
</script>
<style lang="less">
.app {
  height: 100%;
}
</style>
