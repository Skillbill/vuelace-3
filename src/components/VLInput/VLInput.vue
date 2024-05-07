<template>
  <!-- name crudinput input_name -->
  <div class="relative">
    <sl-input
      :class="[errorMessage?.length && 'error']"
      :value="model"
      :type="type"
      :name="name"
      :defaultValue="defaultValue"
      :size="size"
      :filled="filled"
      :pill="pill"
      :label="label"
      :help-text="helpText"
      :clearable="clearable"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :passwordToggle="passwordToggle"
      :form="form"
      :required="required"
      :autocapitalize="autocapitalize"
      :autocomplete="autocomplete"
      :autocorrect="autocorrect"
      :autofocus="autofocus"
      :spellcheck="spellcheck"
      :inputmode="inputmode"
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
import type { VLInputProps } from './types'
import { SlInput } from '@shoelace-style/shoelace'

const emit = defineEmits(['focus', 'blur', 'change', 'clear', 'input', 'invalid'])

const props = withDefaults(defineProps<VLInputProps>(), {
  type: 'text',
  name: '',
  defaultValue: '',
  size: 'medium',
  filled: false,
  pill: false,
  label: '',
  helpText: '',
  clearable: false,
  disabled: false,
  placeholder: '',
  readonly: false,
  passwordToggle: false,
  form: undefined,
  required: false,
  autocapitalize: 'off',
  autofocus: false,
  spellcheck: true,
  inputmode: 'text',
  rules: () => [] as VLInputRuleType[]
})

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

const model = defineModel()

const updateModel = (value: string) => {
  model.value = value
}

watch(model, () => {
  validateInput()
})

const atChange = (evt: SlChangeEvent) => {
  updateModel((evt.target as SlInput)?.value)
  emit('change', evt)
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
