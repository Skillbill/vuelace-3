<template>
  <div class="relative">
    <label class="block mb-[2px]" :class="[errorMessage?.length && 'error', labelClass]">
      {{ label }} <span v-if="required">*</span>
    </label>
    <AutoComplete
      ref="autocompleteInput"
      :class="[errorMessage?.length && 'error']"
      v-model="inputModel"
      optionLabel="text"
      :suggestions="suggestions"
      :emptySearchMessage="emptySearchMessage"
      :placeholder="placeholder"
      :disabled="disabled"
      forceSelection
      input-class="px-4 py-1"
      panel-class="py-2"
      dropdown
      @item-select="onItemSelect"
      @blur="onBlur"
      @complete="onCompleteEvent"
      @click="onClick"
      @focus="onFocus"
      @change="(evt) => emit('change', evt)"
      @item-unselect="(evt) => emit('item-unselect', evt)"
      @dropdown-click="(evt) => emit('dropdown-click', evt)"
      @clear="() => emit('clear')"
      @before-show="() => emit('before-show')"
      @before-hide="() => emit('before-hide')"
      @show="() => emit('show')"
      @hide="() => emit('hide')"
    >
      <template #option="{ option }">
        <div class="flex items-center gap-2">
          <span class="w-4">
            <VLIcon v-if="model === option.value" class="pt-1" name="check"> </VLIcon>
          </span>
          <span>{{ option.text }}</span>
        </div>
      </template>
      <template #dropdownicon>
        <VLIcon class="dropdown" name="caret" library="system" />
      </template>
    </AutoComplete>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import AutoComplete from 'primevue/autocomplete'
import { ref, onMounted, computed, watch } from 'vue'

import ErrorMessage from '../utils/ErrorMessage.vue'
import { VLIcon } from '../VLIcon'
import type { VLAutocompleteProps } from './types'
import type { VLInputRuleType } from '../utils/types'
import type { VLSelectOptionType } from '../VLSelect'

const emit = defineEmits([
  'click',
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
  required: false,
  options: () => [] as VLSelectOptionType[],
  rules: () => [] as VLInputRuleType[]
})

const suggestions = defineModel('suggestions', {
  type: Array,
  default: () => []
})

const autocompleteInput = ref<any>(null)

const inputModel = ref<string | object | undefined>()
const model = defineModel<string>()

watch(inputModel, () => {
  if (inputModel.value === null) {
    model.value === null
  }
})

onMounted(() => {
  if (!model.value?.length) inputModel.value = { value: undefined, text: '' }
  else {
    inputModel.value = props.options.find((option) => model.value === option.value)
  }
})

watch(model, (value) => {
  if (!value?.length) inputModel.value = { value: undefined, text: '' }
  else {
    inputModel.value = props.options.find((option) => model.value === option.value)
  }
})

const onItemSelect = (evt: any) => {
  model.value = evt.value.value
  suggestions.value = []

  emit('item-select', evt)
}

const onClick = (evt: any) => {
  suggestions.value = props.options
  autocompleteInput.value.show()

  emit('click', evt)
}

const onFocus = (evt: any) => {
  suggestions.value = props.options
  autocompleteInput.value.show()

  emit('focus', evt)
}

const onBlur = (evt: any) => {
  if (inputModel.value === null && model.value) {
    inputModel.value = props.options.find((option) => option.value === model.value)
  }

  emit('blur', evt)
}

const defaultOnComplete = (evt: any) =>
  (suggestions.value = props.options.filter((item) =>
    item.text.toLowerCase().includes(evt.query.toLowerCase())
  ))

const onCompleteEvent = (evt: any) => {
  if (props.onComplete) {
    props.onComplete(evt)
  } else {
    defaultOnComplete(evt)
  }

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
  background-color: var(--sl-input-background-color);
  border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  border-radius: 0.25rem;
  color: var(--sl-input-color);
}

.p-autocomplete:hover:not(.p-disabled, .error),
:deep(.p-autocomplete-input):hover:not(.p-disabled) {
  cursor: pointer;
  background-color: var(--sl-input-background-color-hover);
  border-color: var(--sl-input-border-color-hover);
}

:deep(.p-autocomplete):focus-within {
  box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  border: solid var(--sl-input-border-width) var(--sl-input-border-color-focus);
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

.dropdown {
  color: var(--sl-color-neutral-1000);
  transition: transform 0.1s linear;
}

.p-overlay-open .dropdown {
  transform: rotate(-180deg);
}
</style>
