<template>
  <VLExpansionCard
    v-model="open"
    :title="title"
    @hide="onHide"
    @show="() => emit('show')"
    @keyup.enter="onApply"
  >
    <template v-slot:title><slot name="title"></slot></template>
    <div class="flex flex-col justify-between gap-4">
      <div class="flex flex-wrap gap-4">
        <component
          :class="[!field?.props?.class && 'min-w-fit']"
          v-for="field in fields"
          ref="refs"
          :key="field.name"
          :is="field.component"
          :name="field.name"
          v-bind="field.props"
          :modelValue="model[field.name]"
          @update:modelValue="(value: any) => onModelUpdate(field.name, value)"
        />
      </div>
      <div class="flex justify-end gap-2">
        <VLButton @click="onReset">
          <slot name="reset">{{ resetLabel }}</slot>
        </VLButton>
        <VLButton @click="onApply" variant="primary">
          <slot name="apply">{{ applyLabel }}</slot>
        </VLButton>
      </div>
    </div>
  </VLExpansionCard>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { VLButton } from '.'
import VLExpansionCard from './VLExpansionCard.vue'

const emit = defineEmits(['reset', 'apply', 'hide', 'show', 'update:modelValue'])

interface Props {
  fields: any[]
  title?: string
  closeAfter?: boolean
  modelValue?: { [key: string]: any }
  defaultValues?: { [key: string]: any }
  resetLabel?: string
  applyLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
  closeAfter: false,
  title: 'Filters',
  resetLabel: 'Reset',
  applyLabel: 'Apply'
})

const open = ref(false)
const refs = ref<any>({})

let filtersApplied = { ...props.defaultValues }
const model = ref<{ [key: string]: any }>(props.modelValue)

if (props.defaultValues) {
  model.value = { ...props.defaultValues }
}

const onModelUpdate = (name: string, value: any) => {
  model.value = { ...model.value, [name]: value }
}

watch(model, () => {
  emit('update:modelValue', model.value)
})

const onApply = () => {
  let valid = true

  for (const field in refs.value) {
    const input = refs.value[field]
    if (input.validateInput && !input.validateInput()) {
      valid = false
      break
    }
  }

  if (valid) {
    filtersApplied = { ...model.value }
    //to ensure sync with model in parent component
    emit('update:modelValue', model.value)
    emit('apply', filtersApplied)
    if (props.closeAfter) open.value = false
  }
}

const onReset = () => {
  filtersApplied = { ...props.defaultValues }
  model.value = { ...filtersApplied }
  emit('reset', filtersApplied)
}

const onHide = () => {
  model.value = { ...filtersApplied }
  emit('hide')
}
</script>
