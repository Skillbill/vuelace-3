<template>
  <div slot="label">{{ title }}</div>
  <div class="flex flex-col gap-8">
    <VLCrudInput
      v-for="field in fields"
      :ref="(el) => fieldsRefs.push(el)"
      :key="field.value"
      class="w-full"
      :class="field?.class"
      :input_name="field.value"
      :type="field.input_type"
      :label="field.label"
      :options="field.options"
      :rules="!field.required ? field.rules : (field.rules ?? []).concat([requiredRule])"
      :required="field.required"
      v-model="model[field.value]"
      @error="(evt) => emit('error', evt)"
    />
    <div class="flex justify-end w-full gap-2">
      <VLButton @click="onCanceled">{{ cancelLabel }}</VLButton>
      <VLButton @click="onConfirm"
        ><span>{{ confirmLabel }}</span></VLButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { VLCrudInput } from '../VLCrudInput'
import { VLButton } from '../VLButton'

import type { VLCrudFormProps } from './types'
import type { VLInputRuleType } from '../utils/types'

const emit = defineEmits(['close', 'cancel', 'confirm', 'update:modelValue', 'error'])

const model = ref<{ [key: string]: any }>({})

const props = withDefaults(defineProps<VLCrudFormProps>(), {
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm',
  validateAll: false,
  modelValue: () => ({})
})

watch(
  () => props.modelValue,
  (value) => {
    if (value) model.value = { ...value }
  }
)

const fieldsRefs = ref<any>([])

const onConfirm = () => {
  let valid = true

  for (const field of fieldsRefs.value) {
    if (!field?.validateInput()) {
      valid = false
      if (!props.validateAll) break
    }
  }

  if (valid) {
    emit('confirm', { ...model.value })
    closeDialog()
  }
}

const requiredRule: VLInputRuleType = { validateFn: (v: any) => !!v, message: 'Required' }

const onCanceled = () => {
  emit('cancel')
  closeDialog()
}

const closeDialog = () => {
  emit('close')
}
</script>
