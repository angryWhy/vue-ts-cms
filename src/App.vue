<template>
  <div class="app">
    <login />
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import login from './views/login/login.vue'
export default defineComponent({
  components: {
    login: login
  },
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
