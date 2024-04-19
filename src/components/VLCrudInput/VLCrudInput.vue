<template>
  <VLInput
    v-if="type === 'text'"
    :placeholder="placeholder"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
    @update:model-value="atValueChange"
  />
  <VLCheckbox
    v-else-if="type === 'checkbox'"
    :name="input_name"
    :label="label"
    :model-value="cheatType(initialValue)"
    @update:model-value="atValueChange"
  ></VLCheckbox>
</template>

<script setup lang="ts">
import VLInput from '../VLInput/VLInput.vue'
import VLCheckbox from '../VLCheckbox/VLCheckbox.vue'
import type { VLCrudInputProps, VLCrudInputValueType } from './types'

const atValueChange = (value: any) => {
  console.log(value)
}

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
