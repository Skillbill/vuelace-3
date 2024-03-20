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
      :autocorrect="autocorrect"
      :autofocus="autofocus"
      :spellcheck="spellcheck"
      :inputmode="inputmode"
      @sl-change="atChange"
      @sl-blur="(evt: any) => emit('blur', evt)"
      @sl-focus="(evt: any) => emit('focus', evt)"
      @sl-invalid="(evt: any) => emit('invalid', evt)"
      @sl-clear="(evt: any) => emit('clear', evt)"
      @sl-input="(evt: any) => emit('input', evt)"
    >
      <slot></slot>
    </sl-input>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import ErrorMessage from './utils/ErrorMessage.vue'
import type { Rule } from './utils/types'

const emit = defineEmits(['focus', 'blur', 'change', 'clear', 'input', 'invalid'])

interface Props {
  type?: 'password' | 'text' | 'email'
  name?: string
  defaultValue?: string
  size?: 'small' | 'medium' | 'large'
  filled?: boolean
  pill?: boolean
  label: string
  helpText?: string
  clearable?: boolean
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  passwordToggle?: boolean
  form?: string
  required?: boolean
  autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
  autocorrect?: 'off' | 'on'
  autofocus?: boolean
  spellcheck?: boolean
  inputmode?: 'none' | 'text' | 'email'
  rules?: Rule[]
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
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
  rules: () => [] as Rule[]
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

const atChange = (evt: any) => {
  updateModel(evt.target.value)
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
