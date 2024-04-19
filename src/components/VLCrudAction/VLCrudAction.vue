<template>
  <VLTooltip :placement="placement" :content="tooltip" :distance="distance">
    <VLButton class="w-10 hover:opacity-40" variant="text">
      <div class="flex items-center h-full">
        <VLIcon class="text-2xl text-black cursor-pointer" :name="icon" />
      </div>
    </VLButton>
  </VLTooltip>
</template>

<script setup lang="ts">
import { VLTooltip, VLButton, VLIcon } from '..'
import type { VLCrudActionProps } from './types'

withDefaults(defineProps<VLCrudActionProps>(), {
  tooltip: '',
  placement: 'top',
  distance: 4
})
</script>
