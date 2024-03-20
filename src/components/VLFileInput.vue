<template>
  <div class="relative">
    <label :for="name" class="pb-4" :class="[error?.length && 'error']">
      {{ label }} <span v-if="required">*</span>
    </label>
    <div
      class="input-like"
      tabindex="0"
      :class="[disabled && 'disabled', error?.length && 'error']"
      @keydown.enter.prevent="openFileSelection"
      @click="openFileSelection"
    >
      <slot name="prefix">
        <VLIcon
          class="pr-4 min-w-4"
          :class="[disabled && 'disabled']"
          library="system"
          name="paperclip"
          slot="prefix"
        />
      </slot>
      <div
        v-if="model"
        class="flex flex-wrap items-center gap-2 overflow-y-auto cursor-default max-h-32"
      >
        <template v-if="Array.isArray(model)">
          <FileBadge v-for="(file, i) in model" :key="i" @remove="(evt) => clearFile(evt, i)">
            {{ file.name }}
          </FileBadge>
        </template>
        <FileBadge v-else @remove="clearFile">
          {{ model.name }}
        </FileBadge>
      </div>
      <span v-else class="text-sm text-neutral-400">{{ placeholder }}</span>
      <slot name="suffix"></slot>
    </div>
    <span v-if="helpText" class="text-xs line-clamp-2 text-neutral-600">{{ helpText }}</span>
    <ErrorMessage v-if="error?.length">{{ error }}</ErrorMessage>
    <input
      ref="hiddenInput"
      type="file"
      hidden
      :accept="accept"
      :multiple="multiple"
      @change="readFile"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import type { Rule } from './utils/types'
import FileBadge from './utils/FileBadge.vue'
import ErrorMessage from './utils/ErrorMessage.vue'

import VLIcon from './VLIcon.vue'

const emit = defineEmits(['error'])

interface Props {
  name?: string
  label: string
  placeholder?: string
  error?: string
  helpText?: string
  required?: boolean
  disabled?: boolean
  accept?: string
  multiple?: boolean
  acceptedTypes?: string[] //MIME types
  maxFileSize?: number //bytes
  fileLimit?: number
  rules?: Rule[]
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  required: false,
  disabled: false,
  multiple: false,
  rules: () => [] as Rule[]
})

const hiddenInput = ref<HTMLInputElement | null>(null)
const model = defineModel<File | File[] | null>('modelValue', { default: null })

watch(
  () => props.disabled,
  () => {
    if (props.disabled) {
      model.value = null
    }
  }
)

const openFileSelection = () => {
  !props.disabled && hiddenInput.value && hiddenInput.value.click()
}

const readFile = (evt: any) => {
  const files = evt.target?.files

  if (!files.length || !checkConstraints(files)) {
    return
  }

  if (props.multiple) {
    if (Array.isArray(model.value) && model.value.length) {
      model.value = [...model.value, ...files]
    } else {
      model.value = [...files]
    }
  } else {
    model.value = files[0]
  }

  if (hiddenInput.value) {
    hiddenInput.value.value = ''
  }
}

const checkConstraints = (files: File[]) => {
  const { maxFileSize, acceptedTypes, fileLimit, multiple } = props

  if (multiple && fileLimit) {
    const filesCount = Array.isArray(model.value) ? model.value.length : 0
    if (filesCount + files.length > fileLimit) {
      emit('error', { count: filesCount + files.length, message: 'file_limit_exceeded' })
      return false
    }
  }

  for (const file of files) {
    if (maxFileSize && file.size > maxFileSize) {
      emit('error', { file: file.name, size: file.size, message: 'size_limit_exceeded' })
      return false
    }

    if (acceptedTypes && acceptedTypes.length) {
      const accepted = acceptedTypes.includes(file.type)
      if (!accepted) {
        emit('error', { file: file.name, type: file.type, message: 'invalid_file_type' })
        return false
      }
    }
  }

  return true
}

const clearFile = (evt: any, index: number) => {
  if (Array.isArray(model.value)) {
    const clearedModel = model.value.filter((_, i) => i !== index)
    model.value = clearedModel.length ? clearedModel : null
  } else {
    model.value = null
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
.input-like {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--sl-input-height-medium);
  padding: 0.25rem 1rem;
  background-color: var(--sl-input-background-color);
  border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  border-radius: 0.25rem;
}

.input-like:hover:not(.disabled) {
  cursor: pointer;
  background-color: var(--sl-input-background-color-hover);
  border-color: var(--sl-input-border-color-hover);
}
.input-like:focus:not(.disabled) {
  background-color: var(--sl-input-background-color-focus);
  border-color: var(--sl-input-border-color-focus);
  box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
}

.disabled {
  cursor: not-allowed;
  color: var(--sl-color-neutral-400);
  background-color: var(--sl-color-neutral-100);
}

.error {
  border-color: var(--sl-color-danger-500);
  color: var(--sl-color-danger-500);
}
</style>
