<template>
  <div v-if="model" class="flex flex-col">
    <span>{{ label }}<span v-if="required">*</span></span>
    <div
      class="flex items-center justify-between"
      :class="[disabled && 'hover:cursor-not-allowed']"
    >
      <div
        class="w-20 h-20 bg-center bg-no-repeat bg-contain"
        :style="{ backgroundImage: imageUrl }"
      ></div>
      <VLIcon
        class="text-2xl hover:opacity-40"
        :class="[disabled && 'opacity-40']"
        name="delete"
        @click="clear"
      ></VLIcon>
    </div>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
  <VLFileInput
    v-else
    v-model="fileModel"
    :name="props.name"
    :label="props.label"
    :placeholder="props.placeholder"
    :clearable="props.clearable"
    :required="props.required"
    :disabled="props.disabled"
    :error="props.error"
    :rules="props.rules"
    accept="image/*"
    :acceptedTypes="['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml']"
    @error="(evt) => emit('error', evt)"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import ErrorMessage from '../utils/ErrorMessage.vue'
import VLFileInput from '../VLFileInput/VLFileInput.vue'
import VLIcon from '../VLIcon/VLIcon.vue'

import type { VLInputRuleType } from '../utils/types'
import type { VLImageUploadProps } from './types'

const emit = defineEmits(['error'])

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

const fileModel = ref<File | null>(null)
const model = defineModel<string | null>()

const imageUrl = computed(() => `url(${model.value})`)

watch(fileModel, () => {
  if (fileModel.value) {
    const reader = new FileReader()
    reader.onload = (e) => {
      model.value = e.target?.result as string
    }
    reader.readAsDataURL(fileModel.value)
    return
  }
})

defineExpose({
  isValid: () => errorMessage.value === undefined || errorMessage.value.length === 0,
  validateInput
})

const clear = () => {
  if (props.disabled) return

  model.value = null
  fileModel.value = null
}
</script>
