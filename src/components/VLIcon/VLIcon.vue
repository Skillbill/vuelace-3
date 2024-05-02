<template>
  <sl-icon class="icon" :library="library" :name="name"></sl-icon>
</template>

<script setup lang="ts">
import type { VLIconProps } from './types'

withDefaults(defineProps<VLIconProps>(), {
  library: 'default'
})
</script>
