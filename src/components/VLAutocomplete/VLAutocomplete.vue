<template>
  <div class="relative">
    <label class="pb-4" :class="[errorMessage?.length && 'error']">
      {{ label }} <span v-if="required">*</span>
    </label>
    <AutoComplete
      v-model="inputModel"
      :class="[errorMessage?.length && 'error']"
      :suggestions="suggestions"
      :dropdown="dropdown"
      :forceSelection="forceSelection"
      :emptySearchMessage="emptySearchMessage"
      :loading="loading"
      :disabled="disabled"
      :placeholder="placeholder"
      :optionLabel="optionLabel"
      @change="(evt) => emit('change', evt)"
      @blur="(evt) => emit('blur', evt)"
      @focus="(evt) => emit('focus', evt)"
      @item-select="atItemSelect"
      @item-unselect="(evt) => emit('item-unselect', evt)"
      @dropdown-click="(evt) => emit('dropdown-click', evt)"
      @clear="atClear"
      @complete="onCompleteEvent"
      @before-show="(evt) => emit('before-show', evt)"
      @before-hide="(evt) => emit('before-hide', evt)"
      @show="(evt) => emit('show', evt)"
      @hide="(evt) => emit('hide', evt)"
      ><template v-slot:option="{ option }">
        {{ option.text }}
      </template>
    </AutoComplete>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import AutoComplete from 'primevue/autocomplete'
import { type VLAutocompleteProps } from './types'
import ErrorMessage from '../utils/ErrorMessage.vue'
import { watch } from 'vue'
import { ref } from 'vue'
import { computed } from 'vue'
import type { VLInputRuleType } from '../utils/types'
import { onMounted } from 'vue'

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
  itemValue: 'value',
  optionLabel: 'text',
  rules: () => [] as VLInputRuleType[]
})

const model = defineModel<string | object | undefined>()
const inputModel = ref<string | object | undefined>()

onMounted(() => {
  if (model.value) {
    inputModel.value = model.value
  }
})

const suggestions = defineModel('suggestions', {
  type: Array,
  default: () => []
})

const defaultOnComplete = (evt: any) =>
  (suggestions.value = props.options.filter((item: { value: string; text: string }) =>
    item.text.toLowerCase().includes(evt.query.toLowerCase())
  ))

const onCompleteEvent = (evt: any) => {
  !props.onComplete && defaultOnComplete(evt)

  emit('complete', evt)
}

const atItemSelect = (evt: any) => {
  if (props.optionValue) {
    model.value = evt.value?.[props.optionValue]
  } else {
    model.value = evt.value
  }
  emit('item-select', evt)
}

const atClear = (evt: any) => {
  model.value = undefined

  emit('clear', evt)
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
