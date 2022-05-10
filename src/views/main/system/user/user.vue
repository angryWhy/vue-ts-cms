<template>
  <div class="user">
    <hy-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
