<template>
  <div class="flex flex-col">
    Do you want to delete the user {{ data?.item?.username }}?
    <div class="flex justify-end w-full gap-2">
      <VLButton @click="onCanceled">Cancel</VLButton>
      <VLButton @click="onConfirm">Confirm</VLButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VLButton } from '../..'

const emit = defineEmits(['close', 'cancel', 'confirm'])

interface Props {
  data: any
}

defineProps<Props>()

const onCanceled = () => {
  emit('cancel')
  closeDialog()
}

const onConfirm = () => {
  emit('confirm')
  closeDialog()
}

const closeDialog = () => {
  emit('close')
}
</script>
