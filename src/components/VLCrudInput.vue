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
import VLInput from './VLInput.vue'
import VLCheckbox from './VLCheckbox.vue'

const atValueChange = (value: any) => {
  console.log(value)
}

type ValueType = string | boolean | Date | number | undefined
type InputType = 'text' | 'checkbox'

function cheatType<T>(value: ValueType): T {
  return value as T
}

interface Props {
  input_name: string
  label: string
  type: InputType
  initialValue?: ValueType
  disabled?: boolean
  placeholder?: string
  // options: Array,
  //rules: (() => void)[],
  // autofocus: boolean,
  // img_style: string,
  // hidden: boolean,
  // hide_details: boolean
  // dense: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false
  // autofocus: false,
  // img_style: '',
  // placeholder: '',
  // hidden: false,
  // hide_details: false,
  // dense: false
})
</script>
