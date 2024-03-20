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
interface Props {
  content?: string
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
  disabled?: boolean
  distance?: number
  open?: boolean
  skidding?: number
  trigger?: string
  hoist?: boolean
}

withDefaults(defineProps<Props>(), {
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
