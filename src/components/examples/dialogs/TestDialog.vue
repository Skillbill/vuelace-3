<template>
  <VLDialog v-model="show" label="Hello">
    <div class="flex flex-col">from Skillbill!</div>
  </VLDialog>
</template>

<script setup lang="ts">
import VLDialog from '../../VLDialog.vue'

const show = defineModel<boolean>()
</script>
