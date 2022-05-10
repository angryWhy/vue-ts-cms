<template>
  <div>
    <span @click="handleFoldClick" v-if="isFold"
      ><el-icon><fold /></el-icon
    ></span>
    <span @click="handleFoldClick" v-else
      ><el-icon><expand /></el-icon
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      handleFoldClick,
      isFold
    }
  }
})
</script>

<style scoped></style>
