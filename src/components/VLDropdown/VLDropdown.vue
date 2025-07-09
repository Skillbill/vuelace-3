<template>
  <div class="relative">
    <label v-if="label" :for="name" class="pb-4" :class="[errorMessage?.length && 'error']">
      {{ label }} <span v-if="required">*</span>
    </label>
    <div
      class="relative w-full rounded input-like"
      :class="[disabled && 'disabled', errorMessage?.length && 'error']"
    >
      <template v-if="!props.multiple && selectedOptions.length">
        <div class="flex grow">
          <div class="flex items-center gap-2 px-2 py-1 bg-gray-200 rounded">
            <span class="truncate">
              {{ optionsMap.get(selectedOptions[0]) || selectedOptions[0] }}
            </span>
            <VLIcon
              class="text-[--sl-color-danger-600] cursor-pointer bg-none"
              name="closeCircle"
              @click.prevent="removeOption(0)"
            />
          </div>
        </div>
      </template>
      <template v-else>
        <input
          :name="name"
          :placeholder="placeholder"
          :disabled="disabled"
          class="flex-1 bg-transparent border-none outline-none"
          v-model="inputValue"
          @input="onInput"
          @keydown.enter.prevent="onEnter"
          @keydown.esc.prevent="closeDropdown"
          @keydown.tab="closeDropdown"
          @keydown.arrow-down.prevent="onArrowDown"
          @keydown.arrow-up.prevent="onArrowUp"
          @click="() => dropdown && openDropdown()"
          @blur="() => dropdownVisible && closeDropdown()"
        />
      </template>
      <VLIcon
        v-if="
          props.manual &&
          inputValue &&
          !filteredOptions.some((option) => option.text === inputValue)
        "
        class="mr-2 text-lg text-[--sl-color-primary-700] cursor-pointer hover:opacity-70"
        name="plusCircle"
        @click.prevent="onEnter"
      />
      <VLIcon
        v-if="dropdown"
        class="text-lg text-gray-500 cursor-pointer hover:opacity-70"
        :name="dropdownVisible ? 'chevronUp' : 'chevronDown'"
        @click.prevent="toggleDropdown"
      />
      <ul
        v-if="filteredOptions.length && dropdownVisible"
        class="absolute left-0 right-0 z-10 overflow-y-auto bg-white border border-gray-300 rounded top-full max-h-48"
        @keydown.arrow-down.prevent="onArrowDown"
        @keydown.arrow-up.prevent="onArrowUp"
      >
        <li
          v-for="(option, index) in filteredOptions"
          :key="option.value"
          :class="[
            'p-2 cursor-pointer',
            index === highlightedIndex &&
              'bg-[--sl-color-primary-700] text-[--sl-color-neutral-0] font-bold'
          ]"
          @mousedown.prevent
          @click="selectOption(option)"
          @mouseover="() => (highlightedIndex = index)"
        >
          {{ option.text }}
        </li>
      </ul>
    </div>
    <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
    <div
      v-if="props.multiple && selectedOptions.length"
      class="flex flex-wrap max-w-full gap-2 mt-2 overflow-hidden"
      :class="[errorMessage?.length && 'pt-4']"
    >
      <div
        v-for="(value, index) in selectedOptions"
        :key="index"
        class="flex items-center px-2 py-1 bg-gray-200 rounded"
      >
        {{ optionsMap.get(value) || value }}
        <VLIcon
          class="ml-2 text-[--sl-color-danger-600] cursor-pointer bg-none"
          name="closeCircle"
          library="system"
          @click.prevent="removeOption(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import VLIcon from '../VLIcon/VLIcon.vue'
import type { VLSelectOptionType } from '../VLSelect'
import type { VLDropdownProps } from './types'
import type { VLInputRuleType } from '../utils/types'
import ErrorMessage from '../utils/ErrorMessage.vue'

const props = withDefaults(defineProps<VLDropdownProps>(), {
  placeholder: '',
  options: () => [],
  disabled: false,
  required: false,
  multiple: false,
  manual: false,
  dropdown: false,
  rules: () => [] as VLInputRuleType[]
})

const model = defineModel<string | string[] | null | undefined>()

const inputValue = ref('')
const dropdownVisible = ref(false)
const selectedOptions = ref<string[]>([])
const highlightedIndex = ref(-1)
const validationError = ref<string | undefined>()

const errorMessage = computed(() => {
  if (props.error) {
    return props.error
  }
  return validationError.value
})

const optionsMap = computed(() => {
  const map = new Map<string, string>()
  for (const option of props.options) {
    map.set(option.value, option.text)
  }

  return map
})

const filteredOptions = computed(() => {
  if (!inputValue.value) return props.options
  return props.options.filter((option) =>
    option.text.toLowerCase().includes(inputValue.value.toLowerCase())
  )
})

const selectOption = (option: VLSelectOptionType) => {
  if (props.multiple) {
    if (!selectedOptions.value.includes(option.value)) {
      selectedOptions.value.push(option.value)
    }
    model.value = selectedOptions.value
  } else {
    selectedOptions.value = [option.value]
    model.value = option.value
  }
  inputValue.value = ''
  closeDropdown()
}

const removeOption = (index: number) => {
  selectedOptions.value.splice(index, 1)
  model.value = props.multiple ? selectedOptions.value : null
}

const onInput = () => {
  openDropdown()
  highlightedIndex.value = -1
}

const onEnter = () => {
  if (highlightedIndex.value >= 0 && highlightedIndex.value < filteredOptions.value.length) {
    selectOption(filteredOptions.value[highlightedIndex.value])
  } else if (props.manual && inputValue.value) {
    const newOption = { value: inputValue.value, text: inputValue.value }
    selectOption(newOption)
  }
  closeDropdown()
}

const onArrowDown = () => {
  if (!dropdownVisible.value) return
  highlightedIndex.value = (highlightedIndex.value + 1) % filteredOptions.value.length
}

const onArrowUp = () => {
  if (!dropdownVisible.value) return
  highlightedIndex.value =
    (highlightedIndex.value - 1 + filteredOptions.value.length) % filteredOptions.value.length
}

const closeDropdown = () => {
  dropdownVisible.value = false
}

const openDropdown = () => {
  dropdownVisible.value = true
  highlightedIndex.value = -1
}

const toggleDropdown = () => {
  if (!props.disabled) {
    dropdownVisible.value = !dropdownVisible.value
  }
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

watch(
  model,
  (newValue) => {
    validateInput()
    if (Array.isArray(newValue)) {
      selectedOptions.value = newValue
    } else if (newValue) {
      selectedOptions.value = [newValue]
    } else {
      selectedOptions.value = []
    }
  },
  { immediate: true }
)

defineExpose({
  isValid: () => errorMessage.value === undefined || errorMessage.value.length === 0,
  validateInput
})
</script>

<style scoped>
.input-like {
  display: flex;
  align-items: center;
  min-height: var(--sl-input-height-medium);
  padding: 0.25rem 1rem;
  background-color: var(--sl-input-background-color);
  border: solid var(--sl-input-border-width) var(--sl-input-border-color);
}

.input-like:hover:not(.disabled) {
  cursor: pointer;
  background-color: var(--sl-input-background-color-hover);
  border-color: var(--sl-input-border-color-hover);
}

.input-like:focus-within {
  box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  border: solid var(--sl-input-border-width) var(--sl-input-border-color-focus);
}

.input-like:focus:not(.disabled) {
  background-color: var(--sl-input-background-color-focus);
  border-color: var(--sl-input-border-color-focus);
  box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
}

.input-like:focus-visible:not(.disabled) {
  outline: none;
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
