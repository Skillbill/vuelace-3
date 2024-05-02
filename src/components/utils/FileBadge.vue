<template>
  <span class="flex items-center px-2 rounded-full bg-accent max-w-96 text-on-accent" @click.stop>
    <span class="truncate"><slot></slot></span>
    <VLIcon
      class="pl-2 cursor-pointer hover:opacity-40"
      library="system"
      name="windowClose"
      @click.prevent="(evt) => emit('remove', evt)"
    />
  </span>
</template>

<script setup lang="ts">
import VLIcon from '../VLIcon/VLIcon.vue'

const emit = defineEmits(['remove'])
</script>
