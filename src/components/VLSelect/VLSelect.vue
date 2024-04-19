<template>
  <div class="relative">
    <sl-select
      class="min-w-full listbox"
      :class="[errorMessage?.length && 'error']"
      hoist
      :value="model"
      :name="name"
      :defaultValue="defaultValue"
      :size="size"
      :multiple="multiple"
      :placeholder="placeholder"
      :maxOptionsVisible="maxOptionsVisible"
      :disabled="disabled"
      :clearable="clearable"
      :pill="pill"
      :filled="filled"
      :placement="placement"
      :helpText="helpText"
      :label="label"
      :required="required"
      :form="form"
      :getTag="getTag"
      @sl-change="atChange"
      @sl-clear="(evt: SlClearEvent) => emit('clear', evt)"
      @sl-blur="(evt: SlBlurEvent) => emit('blur', evt)"
      @sl-input="(evt: SlInputEvent) => emit('input', evt)"
      @sl-focus="(evt: SlFocusEvent) => emit('focus', evt)"
      @sl-show.stop="(evt: SlShowEvent) => emit('show', evt)"
      @sl-after-show.stop="(evt: SlAfterShowEvent) => emit('after-show', evt)"
      @sl-hide.stop="(evt: SlHideEvent) => emit('hide', evt)"
      @sl-after-hide.stop="(evt: SlAfterHideEvent) => emit('after-hide', evt)"
      @sl-invalid="(evt: SlInvalidEvent) => emit('invalid', evt)"
    >
      <sl-option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </sl-option>
    </sl-select>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type {
  VLInputRuleType,
  SlFocusEvent,
  SlBlurEvent,
  SlAfterHideEvent,
  SlInputEvent,
  SlShowEvent,
  SlHideEvent,
  SlInvalidEvent,
  SlClearEvent,
  SlAfterShowEvent
} from '../utils/types'

import ErrorMessage from '../utils/ErrorMessage.vue'
import type { VLSelectOptionType, VLSelectProps } from './types'

const emit = defineEmits([
  'focus',
  'blur',
  'change',
  'clear',
  'input',
  'invalid',
  'show',
  'after-show',
  'hide',
  'after-hide'
])

const props = withDefaults(defineProps<VLSelectProps>(), {
  name: '',
  defaultValue: '',
  size: 'medium',
  multiple: false,
  placeholder: '',
  maxOptionsVisible: 3,
  disabled: false,
  clearable: false,
  pill: false,
  filled: false,
  placement: 'bottom',
  helpText: '',
  label: '',
  options: () => [] as VLSelectOptionType[],
  form: undefined,
  required: false,
  getTag: (option: any) => {
    return `
      <sl-tag removable>
        ${option.getTextLabel()}
      </sl-tag>
    `
  },
  rules: () => [] as VLInputRuleType[]
})

const model = defineModel<string | string[] | undefined>()
// model.value = [] as string[]

const atChange = (evt: any) => {
  model.value = evt.target.value
  emit('change', evt)
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
.error::part(combobox),
.error::part(form-control-label) {
  border-color: var(--sl-color-danger-500);
  color: var(--sl-color-danger-500);
}

.listbox::part(listbox) {
  max-height: 250px;
  overflow-y: auto;
}
</style>
