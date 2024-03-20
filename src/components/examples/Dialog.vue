<template>
  <VLButton @click="dialog = true">Click me!</VLButton>
  <TestDialog v-model="dialog" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TestDialog from './dialogs/TestDialog.vue'
import { VLButton } from '..'

const dialog = ref<boolean>(false)
</script>
