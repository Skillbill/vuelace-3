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
      @sl-input="atInput"
      @sl-change="(evt: SlChangeEvent) => emit('change', evt)"
      @sl-blur="(evt: SlBlurEvent) => emit('blur', evt)"
      @sl-focus="(evt: SlFocusEvent) => emit('focus', evt)"
      @sl-invalid="(evt: SlInvalidEvent) => emit('invalid', evt)"
    >
      <span v-if="label.length" :class="[errorMessage?.length && 'text-error']">{{ label }}</span>
    </sl-checkbox>
    <ErrorMessage class="left-6 top-6" v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type {
  VLInputRuleType,
  SlChangeEvent,
  SlFocusEvent,
  SlBlurEvent,
  SlInvalidEvent,
  SlInputEvent
} from '../utils/types'
import ErrorMessage from '../utils/ErrorMessage.vue'
import type { VLCheckboxProps } from './types'
import { SlCheckbox } from '@shoelace-style/shoelace'

const emit = defineEmits(['focus', 'blur', 'change', 'input', 'invalid'])

const props = withDefaults(defineProps<VLCheckboxProps>(), {
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
  rules: () => [] as VLInputRuleType[]
})

const model = defineModel<boolean>()

const updateModel = (value: boolean) => {
  model.value = value
}

const atInput = (evt: SlInputEvent) => {
  updateModel((evt.target as SlCheckbox)?.checked)
  emit('input', evt)
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
