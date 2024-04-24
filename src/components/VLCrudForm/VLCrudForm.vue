<template>
  <div slot="label">{{ title }}</div>
  <div class="flex flex-col gap-8">
    <VLCrudInput
      v-for="field in Object.values(fields)"
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
      :initialValue="field.default_value"
      :disabled="field.disabled"
      v-model="model[field.value]"
      @update:modelValue="(value) => field.side_effect && runSideEffect(field.side_effect, value)"
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
})

const fields = ref(
  props.fields.reduce((acc, field) => ({ ...acc, [field.value]: field }), {}) as {
    [key: string]: VLCrudFormFieldType
  }
)

const runSideEffect = (sideEffectFn: any, value: any) => {
  const newModel = sideEffectFn(value, fields)

  if (newModel) {
    model.value = { ...model.value, ...newModel }
  }
}

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
