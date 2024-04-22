<template>
  <VLInput
    v-if="type === 'text'"
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
</template>

<script setup lang="ts">
import VLInput from '../VLInput/VLInput.vue'
import VLCheckbox from '../VLCheckbox/VLCheckbox.vue'
import VLSelect from '../VLSelect/VLSelect.vue'
import type { VLCrudInputProps, VLCrudInputValueType } from './types'

function cheatType<T>(value: VLCrudInputValueType): T {
  return value as T
}

withDefaults(defineProps<VLCrudInputProps>(), {
  disabled: false
  // autofocus: false,
  // img_style: '',
  // placeholder: '',
  // hidden: false,
  // hide_details: false,
  // dense: false
})
</script>
