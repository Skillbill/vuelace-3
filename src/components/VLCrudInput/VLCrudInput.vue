<template>
  <VLInput
    v-if="type === 'text'"
    :placeholder="placeholder"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
  />
  <VLNumberInput
    v-else-if="type === 'number'"
    :placeholder="placeholder"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
  />
  <VLCheckbox
    v-else-if="type === 'checkbox'"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
  />
  <VLSelect
    v-else-if="type === 'select'"
    :name="input_name"
    :label="label"
    :options="options"
    :model-value="cheatType(initialValue)"
  />
  <VLDatePicker
    v-else-if="type === 'date'"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
  />
  <VLColorPicker
    v-else-if="type === 'color'"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
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
</script>
