<template>
  <sl-icon class="icon" :library="library" :name="name"></sl-icon>
</template>

<script setup lang="ts">
interface Props {
  name: string
  library?: string
}

withDefaults(defineProps<Props>(), {
  library: 'default'
})
</script>
