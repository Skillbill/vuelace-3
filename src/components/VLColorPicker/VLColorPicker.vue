<template>
  <sl-dropdown hoist @sl-show.stop="() => {}" @sl-hide.stop="() => {}">
    <div :class="props.class" slot="trigger">
      <div class="w-full">
        {{ label }}
      </div>
      <sl-button class="w-full" caret :disabled="disabled"
        ><div class="flex items-center gap-4">
          <div v-show="model" ref="colorPreview" class="w-6 h-6 rounded-full"></div>
          {{ model }}
        </div>
      </sl-button>
    </div>
    <sl-color-picker
      hoist
      inline
      noFormatToggle
      :value="model"
      :name="name"
      :defaultValue="defaultValue"
      :required="required"
      :disabled="disabled"
      @sl-change="atChange"
    >
    </sl-color-picker>
  </sl-dropdown>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { VLColorPickerProps } from './types'

//TODO - add multiple color format support

const props = withDefaults(defineProps<VLColorPickerProps>(), {
  defaultValue: '',
  label: '',
  size: 'medium',
  name: '',
  hoist: false,
  uppercase: false,
  swatches: '',
  form: '',
  required: false,
  disabled: false
})

const colorPreview = ref<HTMLElement | null>(null)
const model = defineModel<string | undefined>('modelValue', { default: '#000000' })

watch(model, () => {
  if (colorPreview.value && model.value) {
    colorPreview.value.style.backgroundColor = model.value
  }
})

watch(colorPreview, () => {
  if (colorPreview.value && model.value) {
    colorPreview.value.style.backgroundColor = model.value
  }
})

const atChange = (evt: any) => {
  model.value = evt.target.value
}
</script>
