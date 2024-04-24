<template>
  <VLInput
    v-if="type === 'text'"
    ref="inputRef"
    :placeholder="placeholder"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :model-value="cheatType(initialValue)"
  />
  <VLNumberInput
    v-else-if="type === 'number'"
    ref="inputRef"
    :placeholder="placeholder"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :model-value="cheatType(initialValue)"
  />
  <VLCheckbox
    v-else-if="type === 'checkbox'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :model-value="cheatType(initialValue)"
  />
  <VLSelect
    v-else-if="type === 'select'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :options="options"
    :model-value="cheatType(initialValue)"
  />
  <VLDatePicker
    v-else-if="type === 'date'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :model-value="cheatType(initialValue)"
  />
  <VLColorPicker
    v-else-if="type === 'color'"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
  />
  <VLImageUpload
    v-else-if="type === 'image'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :model-value="cheatType(initialValue)"
    @error="(evt) => emit('error', evt)"
  />
</template>

<script setup lang="ts">
import type { VLCrudInputProps, VLCrudInputValueType } from './types'
import { VLInput } from '../VLInput'
import { VLCheckbox } from '../VLCheckbox'
import { VLSelect } from '../VLSelect'
import { VLNumberInput } from '../VLNumberInput'
import { VLDatePicker } from '../VLDatePicker'
import { VLColorPicker } from '../VLColorPicker'
import { VLImageUpload } from '../VLImageUpload'
import { ref } from 'vue'

const emit = defineEmits(['error'])

const inputRef = ref<InstanceType<
  | typeof VLInput
  | typeof VLCheckbox
  | typeof VLSelect
  | typeof VLNumberInput
  | typeof VLDatePicker
  | typeof VLImageUpload
> | null>(null)

function cheatType<T>(value: VLCrudInputValueType): T {
  return value as T
}

//TODO: gestire hidden

withDefaults(defineProps<VLCrudInputProps>(), {
  disabled: false
  // autofocus: false
  // img_style: '',
  // placeholder: '',
  // hidden: false,
  // hide_details: false,
  // dense: false
})

defineExpose({
  validateInput: () => inputRef.value?.validateInput()
})
</script>
