<template>
  <VLInput
    v-if="type === 'text'"
    ref="inputRef"
    :placeholder="placeholder"
    :name="input_name"
    :label="label"
    :rules="rules"
    :model-value="cheatType(initialValue)"
  />
  <VLNumberInput
    v-else-if="type === 'number'"
    ref="inputRef"
    :placeholder="placeholder"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
  />
  <VLCheckbox
    v-else-if="type === 'checkbox'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
  />
  <VLSelect
    v-else-if="type === 'select'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :options="options"
    :model-value="cheatType(initialValue)"
  />
  <VLDatePicker
    v-else-if="type === 'date'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
  />
  <VLColorPicker
    v-else-if="type === 'color'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
  />
  <VLImageUpload
    v-else-if="type === 'image'"
    ref="inputRef"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
    @error="(evt) => emit('error', evt)"
  />
</template>

<script setup lang="ts">
import type { VLCrudInputProps, VLCrudInputValueType } from './types'
import VLInput from '../VLInput/VLInput.vue'
import VLCheckbox from '../VLCheckbox/VLCheckbox.vue'
import VLSelect from '../VLSelect/VLSelect.vue'
import VLNumberInput from '../VLNumberInput/VLNumberInput.vue'
import VLDatePicker from '../VLDatePicker/VLDatePicker.vue'
import VLColorPicker from '../VLColorPicker/VLColorPicker.vue'
import VLImageUpload from '../VLImageUpload/VLImageUpload.vue'
import { ref } from 'vue'

const emit = defineEmits(['error'])

const inputRef = ref<InstanceType<typeof VLInput> | null>(null)

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
