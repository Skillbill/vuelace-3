<template>
  <div v-if="typeof model === 'string'"></div>
  <VLFileInput
    v-else
    v-model="model"
    :name="props.name"
    :label="props.label"
    :placeholder="props.placeholder"
    :clearable="props.clearable"
    :required="props.required"
    :disabled="props.disabled"
    :error="errorMessage"
    :rules="props.rules"
    accept="image/*"
    :acceptedTypes="['image/jpeg']"
    @click="openFileSelection"
    @error="onError"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import VLFileInput from '../VLFileInput/VLFileInput.vue'
import type { VLInputRuleType } from '../utils/types'
import type { VLImageUploadProps } from './types'
import type { VLFileInputErrorEvent } from '../VLFileInput'

const onError = (error: VLFileInputErrorEvent) => {
  console.error('error', error)
}

const props = withDefaults(defineProps<VLImageUploadProps>(), {
  name: '',
  label: '',
  placeholder: '',
  clearable: true,
  required: false,
  disabled: false,
  error: '',
  rules: () => [] as VLInputRuleType[]
})

const model = defineModel<File | File[] | string | null>()

const hiddenInput = ref<HTMLInputElement | null>(null)

const openFileSelection = () => {
  hiddenInput.value && hiddenInput.value.click()
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
.error::part(form-control-label) {
  border-color: var(--sl-color-danger-500);
  color: var(--sl-color-danger-500);
}
</style>
