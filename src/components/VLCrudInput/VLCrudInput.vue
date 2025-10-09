<template>
  <VLInput
    v-if="type === 'text'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
  />
  <VLTextArea
    v-else-if="type === 'textarea'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
  />
  <VLNumberInput
    v-else-if="type === 'number'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
  />
  <VLCheckbox
    v-else-if="type === 'checkbox'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
  />
  <VLSelect
    v-else-if="type === 'select'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :options="options"
    :multiple="multiple"
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
  />
  <VLDatePicker
    v-else-if="type === 'date'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
  />
  <VLColorPicker
    v-else-if="type === 'color'"
    :name="input_name"
    :label="label"
    :disabled="disabled"
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
  />
  <VLImageUpload
    v-else-if="type === 'image'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :img-style="img_style"
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
    @error="(evt) => emit('error', evt)"
  />
  <VLAutocomplete
    v-else-if="type === 'autocomplete'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :options="options"
    :model-value="cheatType()"
    :force-selection="forceSelection"
    @update:model-value="cheatUpdateFunction"
  />
  <VLDropdown
    v-else-if="type === 'dropdown'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :options="options"
    :multiple="multiple"
    :model-value="cheatType()"
    manual
    dropdown
    @update:model-value="cheatUpdateFunction"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import type { VLCrudInputProps, VLCrudInputValueType } from './types'
import { VLInput } from '../VLInput'
import { VLCheckbox } from '../VLCheckbox'
import { VLSelect } from '../VLSelect'
import { VLNumberInput } from '../VLNumberInput'
import { VLDatePicker } from '../VLDatePicker'
import { VLColorPicker } from '../VLColorPicker'
import { VLImageUpload } from '../VLImageUpload'
import { VLAutocomplete } from '../VLAutocomplete'
import { VLDropdown } from '../VLDropdown'
import VLTextArea from '../VLTextArea/VLTextArea.vue'

const emit = defineEmits(['error', 'update:modelValue'])

const model = defineModel<VLCrudInputValueType>('modelValue', {
  default: undefined
})

const inputRef = ref<InstanceType<
  | typeof VLInput
  | typeof VLCheckbox
  | typeof VLSelect
  | typeof VLNumberInput
  | typeof VLDatePicker
  | typeof VLImageUpload
  | typeof VLAutocomplete
> | null>(null)

const props = withDefaults(defineProps<VLCrudInputProps>(), {
  disabled: false,
  required: false,
  forceSelection: true
})

function cheatType<T>(): T {
  if (props.type === 'date' && typeof model.value === 'string') {
    model.value = new Date(model.value)
  }

  if (props.type === 'select' && typeof model.value === 'number') {
    model.value = `${model.value}`
  }

  if (props.type === 'autocomplete' && typeof model.value === 'number') {
    model.value = `${model.value}`
  }

  if (props.type === 'dropdown' && typeof model.value === 'number') {
    model.value = `${model.value}`
  }

  return model.value as T
}

function cheatUpdateFunction<T>(value: T) {
  emit('update:modelValue', value as T)
}

onMounted(() => {
  if (props.initialValue !== undefined && model.value === undefined) {
    model.value = props.initialValue
  }
})

defineExpose({
  validateInput: () => (inputRef.value?.validateInput ? inputRef.value.validateInput() : true)
})
</script>
