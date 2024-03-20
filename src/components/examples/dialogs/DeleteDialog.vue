<template>
  <VLDialog v-model="show" label="Delete" @request-close="onCanceled">
    <Transition>
      <div v-if="selectedItem" class="flex flex-col">
        Do you want to delete the user {{ selectedItem.username }}?
        <div class="flex justify-end w-full gap-2">
          <VLButton @click="onCanceled">Cancel</VLButton>
          <VLButton @click="onConfirm">Confirm</VLButton>
        </div>
      </div>
    </Transition>
  </VLDialog>
</template>

<script setup lang="ts">
import { VLButton } from '../..'
import VLDialog from '../../VLDialog.vue'

const emit = defineEmits(['close', 'cancel', 'confirm'])

interface Props {
  selectedItem: any
}

const props = defineProps<Props>()

const show = defineModel<boolean>()

const onCanceled = () => {
  emit('cancel')
  closeDialog()
}

const onConfirm = () => {
  emit('confirm', props.selectedItem?.id)
  show.value = false
}

const closeDialog = () => {
  emit('close')
  show.value = false
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
