<template>
  <VLTooltip :placement="placement" :content="tooltip" :distance="distance">
    <VLIcon class="text-2xl cursor-pointer hover:opacity-40" :name="icon" />
  </VLTooltip>
</template>

<script setup lang="ts">
import { VLTooltip } from '../VLTooltip'
import { VLIcon } from '../VLIcon'
import type { VLCrudActionProps } from './types'

withDefaults(defineProps<VLCrudActionProps>(), {
  tooltip: '',
  placement: 'top',
  distance: 4
})
</script>
