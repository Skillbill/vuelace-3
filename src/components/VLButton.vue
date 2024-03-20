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
interface Props {
  variant?: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text'
  size?: string
  caret?: boolean
  disabled?: boolean
  loading?: boolean
  outline?: boolean
  pill?: boolean
  circle?: boolean
  type?: 'button' | 'submit' | 'reset'
  name?: string
  value?: string
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  form?: string
}

withDefaults(defineProps<Props>(), {
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
