<template>
  <sl-dialog
    class="dialog"
    ref="dialog"
    :label="label"
    :open="model"
    :noHeader="noHeader"
    @sl-show="(evt: SlShowEvent) => emit('show', evt)"
    @sl-after-show="(evt: SlAfterShowEvent) => emit('afterShow', evt)"
    @sl-hide="(evt: SlHideEvent) => emit('hide', evt)"
    @sl-after-hide="(evt: SlAfterHideEvent) => emit('afterHide', evt)"
    @sl-initial-focus="(evt: SlInitialFocusEvent) => emit('initialFocus', evt)"
    @sl-request-close="onRequestClose"
  >
    <slot></slot>
  </sl-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SlDialog } from '@shoelace-style/shoelace'
import type { VLDialogProps } from './types'
import type {
  SlAfterShowEvent,
  SlHideEvent,
  SlShowEvent,
  SlAfterHideEvent,
  SlInitialFocusEvent,
  SlRequestCloseEvent
} from '../utils/types'

const emit = defineEmits(['show', 'afterShow', 'hide', 'afterHide', 'initialFocus', 'requestClose'])

const props = defineProps<VLDialogProps>()

const model = defineModel<boolean>()

const dialog = ref<SlDialog | null>(null)

const onRequestClose = (evt: SlRequestCloseEvent) => {
  if (props.noCloseOnOutsideClick && evt.detail.source === 'overlay') {
    evt.preventDefault()
    return
  }

  model.value = false
  emit('requestClose', evt)
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
