<template>
  <sl-details
    :open="model"
    @sl-show="onShow"
    @sl-hide="onHide"
    @sl-after-show="(evt: SlAfterShowEvent) => emit('afterShow', evt)"
    @sl-after-hide="(evt: SlAfterHideEvent) => emit('afterHide', evt)"
  >
    <div slot="summary">
      <slot name="title"
        ><h3 class="text-xl font-semibold capitalize">{{ title }}</h3></slot
      >
    </div>
    <div slot="expand-icon">
      <slot name="expand-icon">
        <VLIcon class="text-3xl" name="chevronRight"></VLIcon>
      </slot>
    </div>
    <div slot="collapse-icon">
      <slot name="collapse-icon">
        <VLIcon class="text-3xl" name="chevronRight"></VLIcon>
      </slot>
    </div>
    <slot></slot>
  </sl-details>
</template>

<script setup lang="ts">
import { VLIcon } from '..'
import type { SlAfterShowEvent, SlHideEvent, SlShowEvent, SlAfterHideEvent } from '../utils/types'

const emit = defineEmits(['show', 'afterShow', 'hide', 'afterHide'])

interface Props {
  title?: string
}

defineProps<Props>()

const model = defineModel<boolean>()

const onShow = (evt: SlShowEvent) => {
  model.value = true
  emit('show', evt)
}

const onHide = (evt: SlHideEvent) => {
  model.value = false
  emit('hide', evt)
}
</script>

<style scoped>
.card {
  background-color: var(--sl-color-neutral-0);
  border-color: var(--sl-color-neutral-300);
  color: var(--sl-color-neutral-700);
  border-radius: var(--sl-input-border-radius-medium);
}
</style>
