<template>
  <span class="absolute text-xs left-2 line-clamp-2 error"><slot></slot></span>
</template>

<script lang="ts">
export default {
  name: 'ErrorMessage'
}
</script>

<style scoped>
.error {
  color: var(--sl-color-danger-500);
}
</style>
