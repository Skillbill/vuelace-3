<template>
  <VLInput
    v-if="type === 'text'"
    ref="inputRef"
    :placeholder="placeholder"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
  />
  <VLNumberInput
    v-else-if="type === 'number'"
    ref="inputRef"
    :placeholder="placeholder"
    :name="input_name"
    :label="label"
    :rules="rules"
    :required="required"
    :disabled="disabled"
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
    :options="options"
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
    :model-value="cheatType()"
    @update:model-value="cheatUpdateFunction"
    @error="(evt) => emit('error', evt)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { VLCrudInputProps, VLCrudInputValueType } from './types'
import { VLInput } from '../VLInput'
import { VLCheckbox } from '../VLCheckbox'
import { VLSelect } from '../VLSelect'
import { VLNumberInput } from '../VLNumberInput'
import { VLDatePicker } from '../VLDatePicker'
import { VLColorPicker } from '../VLColorPicker'
import { VLImageUpload } from '../VLImageUpload'
import { onMounted } from 'vue'

const emit = defineEmits(['error', 'update:modelValue'])

const model = defineModel<VLCrudInputValueType>()

const inputRef = ref<InstanceType<
  | typeof VLInput
  | typeof VLCheckbox
  | typeof VLSelect
  | typeof VLNumberInput
  | typeof VLDatePicker
  | typeof VLImageUpload
> | null>(null)

//TODO: gestire hidden

const props = withDefaults(defineProps<VLCrudInputProps>(), {
  disabled: false
  // autofocus: false
  // img_style: '',
  // placeholder: '',
  // hidden: false,
  // hide_details: false,
  // dense: false
})

function cheatType<T>(): T {
  if (props.type === 'date' && typeof model.value === 'string') {
    model.value = new Date(model.value)
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
  validateInput: () => inputRef.value?.validateInput()
})
</script>
