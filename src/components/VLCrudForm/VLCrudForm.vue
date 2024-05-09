<template>
  <div slot="label">{{ title }}</div>

  <form class="flex flex-col gap-8" @submit.prevent="onConfirm">
    <VLCrudInput
      v-for="field in Object.values(fields)"
      v-show="isVisible(field)"
      ref="fieldsRefs"
      :key="field.value"
      class="w-full"
      :class="field?.class"
      :input_name="field.value"
      :type="field.input_type"
      :label="field.label"
      :options="field.options"
      :rules="!field.required ? field.rules : (field.rules ?? []).concat([requiredRule])"
      :initialValue="field.default_value"
      :disabled="isDisabled(field)"
      :placeholder="field.placeholder"
      :required="field.required"
      :img_style="field.img_style"
      v-model="model[field.value]"
      @update:modelValue="() => field.side_effect?.(model, fields)"
      @error="(evt) => emit('error', evt)"
    />
    <div class="sticky bottom-0 flex justify-end w-full gap-2 pb-4 bg-white">
      <VLButton @click="onCanceled">{{ cancelLabel }}</VLButton>
      <VLButton variant="primary" type="submit"
        ><span>{{ confirmLabel }}</span></VLButton
      >
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

import { VLCrudInput, type VLCrudInputValueType } from '../VLCrudInput'
import { VLButton } from '../VLButton'

import type { VLCrudFormFieldType, VLCrudFormProps } from './types'
import type { VLInputRuleType } from '../utils/types'

const emit = defineEmits(['close', 'cancel', 'confirm', 'update:modelValue', 'error'])

const model = ref<{ [key: string]: VLCrudInputValueType }>({})

const props = withDefaults(defineProps<VLCrudFormProps>(), {
  validateAll: false
})

onMounted(() => {
  if (props.modelValue) model.value = { ...props.modelValue }
  Object.keys(fields.value).forEach((field) => {
    if (model.value[field]) {
      fields.value[field].side_effect?.(model.value, fields.value)
    }
  })
})

const fields = ref(
  props.fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.value]: { ...field, ...(field.options ? { options: [...field.options] } : {}) }
    }),
    {}
  ) as {
    [key: string]: VLCrudFormFieldType
  }
)

const fieldsRefs = ref<any>([])

const isVisible = (field: VLCrudFormFieldType) => {
  if (field.hidden) {
    return false
  }
  if (field.hidden_on_create && props.type === 'add') {
    return false
  }
  return true
}

const isDisabled = (field: VLCrudFormFieldType) => {
  if (field.disabled) {
    return true
  }
  if (props.type === 'edit' && (field.disabled_on_edit || field.value === props.primaryKey)) {
    return true
  }
  return false
}

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

const requiredRule = computed(
  () =>
    ({
      validateFn: (v: any) => !!v,
      message: props.requiredRuleMessage
    }) as VLInputRuleType
)

const onCanceled = () => {
  emit('cancel')
  closeDialog()
}

const closeDialog = () => {
  emit('close')
}
</script>
