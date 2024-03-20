<template>
  <div class="relative">
    <sl-radio-group
      :class="[errorMessage?.length && 'error']"
      :value="model"
      :label="label"
      :helpText="helpText"
      :name="name"
      :size="size"
      :form="form"
      :required="required"
      @sl-change="atUpdate"
      @sl-invalid="(evt: any) => emit('invalid', evt)"
      @sl-input="(evt: any) => emit('input', evt)"
    >
      <sl-radio
        :class="[errorMessage?.length && 'error']"
        v-for="(radio, i) in options"
        :key="i"
        :value="radio.value"
        :disabled="radio.disabled"
      >
        {{ radio.label }}
      </sl-radio>
      <slot></slot>
    </sl-radio-group>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import type { Radio, Rule } from './utils/types'
import ErrorMessage from './utils/ErrorMessage.vue'

const emit = defineEmits(['change', 'input', 'invalid'])

interface Props {
  label?: string
  helpText?: string
  name?: string
  size?: 'small' | 'medium' | 'large'
  form?: string
  required?: boolean
  options: Radio[]
  error?: string
  rules?: Rule[]
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  helpText: '',
  name: '',
  size: 'medium',
  form: '',
  required: false,
  error: '',
  rules: () => [] as Rule[]
})

const model = defineModel<any>()

const atUpdate = (evt: any) => {
  model.value = evt.target.value
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

watch(model, () => {
  validateInput()
})

defineExpose({
  isValid: () => errorMessage.value === undefined || errorMessage.value.length === 0,
  validateInput
})
</script>

<style scoped>
.error::part(base),
.error::part(control) {
  border-color: var(--sl-color-danger-500);
}

.error::part(form-control-label) {
  color: var(--sl-color-danger-500);
}
</style>
