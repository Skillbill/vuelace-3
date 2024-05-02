<template>
  <sl-button
    :variant="variant"
    :size="size"
    :caret="caret"
    :disabled="disabled"
    :loading="loading"
    :outline="outline"
    :pill="pill"
    :circle="circle"
    :type="type"
    :name="name"
    :value="value"
    :href="href"
    :target="target"
    ><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot>
  </sl-button>
</template>

<script setup lang="ts">
import type { VLButtonProps } from './types'

withDefaults(defineProps<VLButtonProps>(), {
  variant: 'default',
  size: 'medium',
  caret: false,
  disabled: false,
  loading: false,
  outline: false,
  pill: false,
  circle: false,
  type: 'button',
  name: '',
  href: '',
  target: undefined
})
</script>
