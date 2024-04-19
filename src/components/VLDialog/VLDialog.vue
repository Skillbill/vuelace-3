<template>
  <sl-dialog
    class="dialog"
    ref="dialog"
    :label="label"
    :open="model"
    :noHeader="noHeader"
    @sl-show="() => emit('show')"
    @sl-after-show="() => emit('afterShow')"
    @sl-hide="() => emit('hide')"
    @sl-after-hide="() => emit('afterHide')"
    @sl-initial-focus="() => emit('initialFocus')"
    @sl-request-close="onRequestClose"
  >
    <slot></slot>
  </sl-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SlDialog } from '@shoelace-style/shoelace'
import type { VLDialogProps } from './types'

const emit = defineEmits(['show', 'afterShow', 'hide', 'afterHide', 'initialFocus', 'requestClose'])

const props = defineProps<VLDialogProps>()

const model = defineModel<boolean>()

const dialog = ref<SlDialog | null>(null)

const onRequestClose = (evt: any) => {
  if (props.noCloseOnOutsideClick && evt.detail.source === 'overlay') {
    evt.preventDefault()
    return
  }

  model.value = false
  emit('requestClose')
}

defineExpose({
  open: dialog.value?.open,
  show: () => dialog.value?.show(),
  hide: () => dialog.value?.hide()
})
</script>

<style scoped>
.dialog::part(panel) {
  display: flex;
  min-width: fit-content;
}
</style>
