<template>
  <div class="relative">
    <label class="pb-4" :class="[errorMessage?.length && 'error']">
      {{ label }} <span v-if="required">*</span>
    </label>
    <AutoComplete
      :class="[errorMessage?.length && 'error']"
      v-model="inputModel"
      optionLabel="text"
      :suggestions="suggestions"
      :emptySearchMessage="emptySearchMessage"
      :placeholder="placeholder"
      :disabled="disabled"
      forceSelection
      dropdown
      completeOnFocus
      @item-select="onItemSelect"
      @blur="onBlur"
      @complete="onCompleteEvent"
      @change="(evt) => emit('change', evt)"
      @item-unselect="(evt) => emit('item-unselect', evt)"
      @dropdown-click="(evt) => emit('dropdown-click', evt)"
      @clear="(evt) => emit('clear', evt)"
      @before-show="(evt) => emit('before-show', evt)"
      @before-hide="(evt) => emit('before-hide', evt)"
      @show="(evt) => emit('show', evt)"
      @hide="onHide"
      ><template #option="{ option }">
        <div class="flex items-center gap-2">
          <span class="w-4">
            <VLIcon v-if="model === option.value" class="pt-1" name="check"> </VLIcon>
          </span>
          <span>{{ option.text }}</span>
        </div>
      </template></AutoComplete
    >
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import AutoComplete from 'primevue/autocomplete'
import { VLIcon } from '../VLIcon'
import { type VLAutocompleteProps } from './types'
import ErrorMessage from '../utils/ErrorMessage.vue'
import { ref } from 'vue'
import { computed, watch } from 'vue'
import type { VLInputRuleType } from '../utils/types'
import type { VLSelectOptionType } from '../VLSelect'

const emit = defineEmits([
  'change',
  'focus',
  'blur',
  'item-select',
  'item-unselect',
  'dropdown-click',
  'clear',
  'complete',
  'before-show',
  'before-hide',
  'show',
  'hide',
  'update:modelValue'
])

const props = withDefaults(defineProps<VLAutocompleteProps>(), {
  disabled: false,
  dropdown: true,
  required: false,
  forceSelection: true,
  options: () => [] as VLSelectOptionType[],
  rules: () => [] as VLInputRuleType[]
})

const suggestions = defineModel('suggestions', {
  type: Array,
  default: () => []
})

const inputModel = ref<string | object | undefined>()
const model = defineModel<string>()

watch(inputModel, () => {
  if (inputModel.value === null) {
    model.value === null
  }
})

watch(model, (value) => {
  if (!value) inputModel.value = { value: undefined, text: '' }
  inputModel.value = props.options.find((option) => value === option.value)
})

const onItemSelect = (evt: any) => {
  model.value = evt.value.value

  emit('item-select', evt)
}

const onBlur = (evt: any) => {
  if (inputModel.value === null && model.value) {
    inputModel.value = props.options.find((option) => option.value === model.value)
  }

  emit('clear', evt)
}

const defaultOnComplete = (evt: any) =>
  (suggestions.value = props.options.filter((item) =>
    item.text.toLowerCase().includes(evt.query.toLowerCase())
  ))

const onCompleteEvent = (evt: any) => {
  !props.onComplete && defaultOnComplete(evt)

  emit('complete', evt)
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
.p-autocomplete {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--sl-input-height-medium);
  padding: 0.25rem 1rem;
  background-color: var(--sl-input-background-color);
  border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  border-radius: 0.25rem;
}

.p-autocomplete:hover:not(.p-disabled, .error),
:deep(.p-autocomplete-input):hover:not(.p-disabled) {
  cursor: pointer;
  background-color: var(--sl-input-background-color-hover);
  border-color: var(--sl-input-border-color-hover);
}

:deep(.p-autocomplete-input):focus {
  border-color: none;
  background-color: var(--sl-input-background-color-focus);
  box-shadow: none;
  outline: none;
}

div.p-autocomplete.p-disabled,
.p-disabled > :deep(.p-autocomplete-input) {
  cursor: not-allowed;
  color: var(--sl-color-neutral-400);
  background-color: var(--sl-color-neutral-100);
}

.error {
  border-color: var(--sl-color-danger-500);
  color: var(--sl-color-danger-500);
}
</style>