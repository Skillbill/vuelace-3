<template>
  <div class="relative">
    <sl-input
      :class="[error?.length && 'error']"
      type="text"
      :value="fileName"
      :label="label"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :help-text="helpText"
      @click="openFileSelection"
      readonly
    >
      <VLIcon library="system" name="paperclip" slot="prefix"></VLIcon>
      <sl-icon-button
        v-if="fileName"
        slot="suffix"
        library="system"
        name="windowClose"
        @click.prevent="clearFile"
      ></sl-icon-button>
    </sl-input>
    <input ref="hiddenInput" type="file" accept="image/*" hidden @change="readFile" />
    <ErrorMessage v-if="error?.length">{{ error }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import type { VLInputRuleType } from '../utils/types'
import ErrorMessage from '../utils/ErrorMessage.vue'
import VLIcon from '../VLIcon/VLIcon.vue'
import type { VLImageUploadProps } from './types'

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

const model = defineModel()

const hiddenInput = ref<HTMLInputElement | null>(null)

const openFileSelection = () => {
  hiddenInput.value && hiddenInput.value.click()
}

const fileName = ref<string>('')
const fileSize = ref<string>('')

const readFile = (evt: any) => {
  const file = evt.target?.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      model.value = e.target?.result || ''
    }
    fileName.value = file.name
    fileSize.value = file.size
    reader.readAsDataURL(file)
    return
  }
}

const clearFile = (evt: any) => {
  model.value = ''
  fileName.value = ''
  fileSize.value = ''
  if (hiddenInput.value) {
    hiddenInput.value.value = ''
  }
  evt.stopPropagation()
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
