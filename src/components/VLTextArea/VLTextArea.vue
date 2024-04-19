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
      @sl-blur="(evt: SlBlurEvent) => emit('blur', evt)"
      @sl-focus="(evt: SlFocusEvent) => emit('focus', evt)"
      @sl-invalid="(evt: SlInvalidEvent) => emit('invalid', evt)"
      @sl-input="(evt: SlInputEvent) => emit('input', evt)"
    >
    </sl-textarea>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import ErrorMessage from '../utils/ErrorMessage.vue'
import type {
  VLInputRuleType,
  SlBlurEvent,
  SlFocusEvent,
  SlInvalidEvent,
  SlInputEvent
} from '../utils/types'
import type { VLTextAreaProps } from './types'

const emit = defineEmits(['blur', 'change', 'focus', 'input', 'invalid'])

const props = withDefaults(defineProps<VLTextAreaProps>(), {
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
