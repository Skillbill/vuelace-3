<template>
  <div class="relative">
    <sl-input
      :class="[errorMessage?.length && 'error']"
      type="number"
      ref="input"
      :value="model"
      :name="name"
      :defaultValue="defaultValue"
      :size="size"
      :filled="filled"
      :pill="pill"
      :label="label"
      :helpText="helpText"
      :clearable="clearable"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :noSpinButtons="noSpinButtons"
      :form="form"
      :required="required"
      :min="min"
      :max="max"
      :step="step"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :title="title"
      @sl-change="atChange"
      @sl-blur="(evt: SlBlurEvent) => emit('blur', evt)"
      @sl-focus="(evt: SlFocusEvent) => emit('focus', evt)"
      @sl-invalid="(evt: SlInvalidEvent) => emit('invalid', evt)"
      @sl-clear="(evt: SlClearEvent) => emit('clear', evt)"
      @sl-input="(evt: SlInputEvent) => emit('input', evt)"
    >
      <slot></slot>
    </sl-input>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import ErrorMessage from '../utils/ErrorMessage.vue'
import type {
  VLInputRuleType,
  SlFocusEvent,
  SlBlurEvent,
  SlInputEvent,
  SlInvalidEvent,
  SlClearEvent,
  SlChangeEvent
} from '../utils/types'

import type { VLNumberInputProps } from './types'
import type { SlInput } from '@shoelace-style/shoelace'

const emit = defineEmits(['focus', 'blur', 'change', 'clear', 'input', 'invalid'])

const props = withDefaults(defineProps<VLNumberInputProps>(), {
  name: '',
  defaultValue: undefined,
  size: 'medium',
  filled: false,
  pill: false,
  label: '',
  helpText: '',
  clearable: false,
  disabled: false,
  placeholder: '',
  readonly: false,
  noSpinButtons: false,
  form: undefined,
  required: false,
  min: undefined,
  max: undefined,
  step: 1,
  autofocus: false,
  error: '',
  rules: () => [] as VLInputRuleType[]
})

const model = defineModel<number | undefined>()
const input = ref<SlInput | null>()

const updateModel = (value: string) => {
  const validValue = checkMinMax(value)
  model.value = validValue

  if (input.value) {
    input.value.value = validValue?.toString() ?? ''
  }
}

watch(model, () => {
  validateInput()
  if (input.value && model.value === undefined) {
    input.value.value = ''
  }
})

const atChange = (evt: SlChangeEvent) => {
  updateModel((evt.target as SlInput)?.value)
  emit('change', evt)
}

const checkMinMax = (value: string) => {
  const parsedValue = parseFloat(value)

  if (Number.isNaN(parsedValue)) {
    return undefined
  }

  if (props.min != undefined && parsedValue < props.min) {
    return parseFloat(`${props.min}`)
  }
  if (props.max != undefined && parsedValue > props.max) {
    return parseFloat(`${props.max}`)
  }

  return parsedValue
}

const validationError = ref<string | undefined>()

const errorMessage = computed(() => {
  if (props.error) {
    return props.error
  }
  return validationError.value
})

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

defineExpose({
  isValid: () => errorMessage.value === undefined || errorMessage.value.length === 0,
  validateInput
})
</script>

<style scoped>
.error::part(base),
.error::part(form-control-label) {
  border-color: var(--sl-color-danger-500);
  color: var(--sl-color-danger-500);
}
</style>
