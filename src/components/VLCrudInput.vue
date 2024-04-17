<template>
  <VLInput
    v-if="type === 'text'"
    :placeholder="placeholder"
    :key="input_name"
    :name="input_name"
    :label="label"
    :model-value="initialValue"
    @update:model-value="atValueChange"
  />
</template>

<script setup lang="ts">
import VLInput from './VLInput.vue'

const atValueChange = (value: any) => {
  console.log(value)
}

interface Props {
  input_name: string
  label: string
  type: string
  initialValue?: string | boolean | Date | number
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
