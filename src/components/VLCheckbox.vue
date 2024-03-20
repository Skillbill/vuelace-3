<template>
  <div class="relative">
    <sl-checkbox
      class="flex items-center"
      :class="[errorMessage?.length && 'error']"
      :value="model"
      :name="name"
      :size="size"
      :disabled="disabled"
      :checked="model"
      :indeterminate="indeterminate"
      :defaultChecked="defaultChecked"
      :form="form"
      :required="required"
      @sl-input="atChange"
      @sl-change="(evt: any) => emit('change', evt)"
      @sl-blur="(evt: any) => emit('blur', evt)"
      @sl-focus="(evt: any) => emit('focus', evt)"
      @sl-invalid="(evt: any) => emit('invalid', evt)"
    >
      <span v-if="label.length" :class="[errorMessage?.length && 'text-error']">{{ label }}</span>
    </sl-checkbox>
    <ErrorMessage class="left-6 top-6" v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import type { Rule } from './utils/types'
import ErrorMessage from './utils/ErrorMessage.vue'

const emit = defineEmits(['focus', 'blur', 'change', 'input', 'invalid'])

interface Props {
  name?: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  checked?: boolean
  indeterminate?: boolean
  defaultChecked?: boolean
  form?: string
  required?: boolean
  label?: string
  error?: string
  rules?: Rule[]
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  size: 'medium',
  disabled: false,
  checked: false,
  indeterminate: false,
  defaultChecked: false,
  form: '',
  required: false,
  label: '',
  error: '',
  rules: () => [] as Rule[]
})

const model = defineModel<boolean>()

const updateModel = (value: boolean) => {
  model.value = value
}

const atChange = (evt: any) => {
  updateModel(evt.target.checked)
  emit('change', evt)
}

const validateInput = () => {
  if (props.rules.length) {
    for (const rule of props.rules) {
      if (!rule.validateFn(model.value)) {
        validationError.value = rule.message
        return false
      }
    }
  }
  validationError.value = undefined
  return true
}

const validationError = ref<string | undefined>()

const errorMessage = computed(() => {
  if (props.error) {
    return props.error
  }
  return validationError.value
})

watch(model, () => {
  validateInput()
})

defineExpose({
  isValid: () => errorMessage.value === undefined || errorMessage.value.length === 0,
  validateInput
})
</script>

<style scoped>
.error::part(control) {
  border-color: var(--sl-color-danger-500);
}

.text-error {
  color: var(--sl-color-danger-500);
}
</style>
