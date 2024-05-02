<template>
  <sl-tooltip
    :content="content"
    :placement="placement"
    :disabled="disabled"
    :distance="distance"
    :open="open"
    :skidding="skidding"
    :trigger="trigger"
    :hoist="hoist"
  >
    <slot></slot>
  </sl-tooltip>
</template>

<script setup lang="ts">
import type { VLTooltipProps } from './types'

withDefaults(defineProps<VLTooltipProps>(), {
  content: '',
  placement: 'top',
  disabled: false,
  distance: 10,
  open: false,
  skidding: 0,
  trigger: 'hover focus',
  hoist: false
})
</script>
