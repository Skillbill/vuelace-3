<template>
  <div v-if="model" class="flex flex-col">
    <span>{{ label }}<span v-if="required">*</span></span>
    <div class="flex items-center justify-between">
      <div
        class="w-20 h-20 bg-center bg-no-repeat bg-contain"
        :style="{ backgroundImage: imageUrl }"
      ></div>
      <VLIcon class="text-2xl hover:opacity-40" name="delete" @click="clear"></VLIcon>
    </div>
  </div>
  <VLFileInput
    v-else
    v-model="fileModel"
    :name="props.name"
    :label="props.label"
    :placeholder="props.placeholder"
    :clearable="props.clearable"
    :required="props.required"
    :disabled="props.disabled"
    :error="props.error"
    :rules="props.rules"
    accept="image/*"
    :acceptedTypes="['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml']"
    @error="(evt) => emit('error', evt)"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import VLFileInput from '../VLFileInput/VLFileInput.vue'
import VLIcon from '../VLIcon/VLIcon.vue'

import type { VLInputRuleType } from '../utils/types'
import type { VLImageUploadProps } from './types'

const emit = defineEmits(['error'])

const props = withDefaults(defineProps<VLImageUploadProps>(), {
  name: '',
  label: '',
  placeholder: '',
  clearable: true,
  required: false,
  disabled: false,
  error: '',
  rules: () => [] as VLInputRuleType[]
})

const fileModel = ref<File | null>(null)
const model = defineModel<string | null>()

const imageUrl = computed(() => `url(${model.value})`)

watch(fileModel, () => {
  if (fileModel.value) {
    const reader = new FileReader()
    reader.onload = (e) => {
      model.value = e.target?.result as string
    }
    reader.readAsDataURL(fileModel.value)
    return
  }
})

const clear = () => {
  model.value = null
  fileModel.value = null
}
</script>
