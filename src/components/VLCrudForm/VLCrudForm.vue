<template>
  <VLDialog v-model="show" :label="title" @request-close="closeDialog" @keyup.enter="onConfirm">
    <Transition>
      <div v-if="form && show" class="flex flex-col gap-8">
        <component
          v-for="field in fields"
          ref="fieldsRefs"
          :key="field.name"
          :is="field.component"
          :name="field.name"
          :modelValue="form[field.name]"
          @update:modelValue="(value: any) => onModelUpdate(field.name, value)"
          v-bind="field.props"
        />

        <div class="flex justify-end w-full gap-2">
          <VLButton @click="onCancel">{{ cancelLabel }}</VLButton>
          <VLButton @click="onConfirm"
            ><span>{{ confirmLabel }}</span></VLButton
          >
        </div>
      </div>
    </Transition>
  </VLDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { VLDialog, VLButton } from '..'
import type { VLCrudFormProps } from './types'

const emit = defineEmits(['close', 'cancel', 'confirm', 'update:modelValue'])

const props = withDefaults(defineProps<VLCrudFormProps>(), {
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm',
  validateAll: false,
  modelValue: () => ({})
})

const form = ref<{ [key: string]: any }>({})

watch(
  () => props.modelValue,
  (value) => {
    if (value) form.value = { ...value }
  }
)

const onModelUpdate = (name: any, value: any) => {
  // for local form
  form.value[name] = value
  // emitted to parent component to mantain compatibility with v-model
  emit('update:modelValue', form.value)
}

const onCancel = () => {
  emit('cancel')
  closeDialog()
}

const fieldsRefs = ref<any[]>([])

const onConfirm = () => {
  let valid = true

  for (const field of fieldsRefs.value) {
    if (field.validateInput && !field.validateInput()) {
      valid = false
      if (!props.validateAll) break
    }
  }

  if (valid) {
    emit('confirm', form.value)
    closeDialog()
  }
}

const show = defineModel<boolean>('showDialog')

const closeDialog = () => {
  form.value = {}
  show.value = false
  emit('close')
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
