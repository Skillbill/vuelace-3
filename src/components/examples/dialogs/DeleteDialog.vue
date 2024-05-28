<template>
  <div slot="label">Delete - {{ data?.item?.username }}</div>
  <div class="flex flex-col">
    Do you want to delete the user?
    <div class="flex justify-end w-full gap-2">
      <VLButton @click="onCanceled">Cancel</VLButton>
      <VLButton @click="onConfirm">Confirm</VLButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VLButton } from '../..'
import { useUsersStore } from '../../../stores/users'

const emit = defineEmits(['close', 'cancel', 'confirm'])
const usersStore = useUsersStore()

interface Props {
  data: any
}

const props = defineProps<Props>()

const onCanceled = () => {
  emit('cancel')
  closeDialog()
}

const onConfirm = async () => {
  await usersStore.deleteUser(props.data.item[props.data.primary_key])
  emit('confirm')
  closeDialog()
}

const closeDialog = () => {
  emit('close')
}
</script>
