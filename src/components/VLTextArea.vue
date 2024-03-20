<template>
  <div class="relative">
    <sl-textarea
      :class="[errorMessage?.length && 'error']"
      :value="model"
      :name="name"
      :defaultValue="defaultValue"
      :size="size"
      :filled="filled"
      :label="label"
      :help-text="helpText"
      :rows="rows"
      :resize="resize"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
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
      @sl-input="(evt: any) => emit('input', evt)"
    >
    </sl-textarea>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import ErrorMessage from './utils/ErrorMessage.vue'
import type { Rule } from './utils/types'

const emit = defineEmits(['blur', 'change', 'focus', 'input', 'invalid'])

interface Props {
  name?: string
  defaultValue?: string
  size?: 'small' | 'medium' | 'large'
  filled?: boolean
  label: string
  helpText?: string
  rows?: number
  resize?: 'none' | 'vertical' | 'auto'
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  form?: string
  required?: boolean
  autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
  autocorrect?: 'off' | 'on'
  autofocus?: boolean
  spellcheck?: boolean
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
  rules?: Rule[]
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  defaultValue: '',
  size: 'medium',
  filled: false,
  label: '',
  helpText: '',
  rows: 4,
  resize: 'vertical',
  disabled: false,
  placeholder: '',
  readonly: false,
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
