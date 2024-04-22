<template>
  <VLExpansionCard
    v-model="open"
    :title="title"
    @hide="onHide"
    @show="onShow"
    @keyup.enter="onApply"
  >
    <template v-slot:title><slot name="title"></slot></template>
    <div class="flex flex-col justify-between gap-4">
      <div
        class="grid flex-wrap items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <VLCrudInput
          :class="[!field?.props?.class && 'w-full']"
          v-for="field in filters"
          :key="field.value"
          :input_name="field.value"
          :type="field.input_type"
          :label="field.label"
          :options="field.options"
          v-bind="field.props"
          v-model="model[field.value]"
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
import { ref, onMounted } from 'vue'

import { VLButton, VLExpansionCard, VLCrudInput } from '../..'
import type { VLCrudFilterType, VLCrudFiltersProps } from './types'

const emit = defineEmits(['apply', 'filtersApplied', 'hide', 'reset', 'show'])

const open = ref(false)

let currentFiltersStatus: { [key: string]: any } = {}

const model = ref<{ [key: string]: any }>({})

const props = withDefaults(defineProps<VLCrudFiltersProps>(), {
  title: 'Filters',
  applyLabel: 'apply',
  resetLabel: 'reset'
})

const parseDefaultValue = (field: VLCrudFilterType) => {
  if (field.input_type === 'date' && typeof field.default_value === 'string') {
    return new Date(field.default_value)
  }
  return field.default_value
}

const resetFields = () => {
  currentFiltersStatus =
    props.filters?.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.value]: parseDefaultValue(curr)
      }),
      {}
    ) ?? {}

  model.value = { ...currentFiltersStatus }
}

onMounted(() => {
  resetFields()
  emit('filtersApplied', currentFiltersStatus)
})

const onApply = () => {
  currentFiltersStatus = { ...model.value }
  emit('filtersApplied', currentFiltersStatus)
  emit('apply')
}

const onReset = () => {
  resetFields()
  model.value = { ...currentFiltersStatus }
  emit('filtersApplied', currentFiltersStatus)
  emit('reset')
}

const onShow = () => {
  model.value = { ...currentFiltersStatus }
  emit('show')
}

const onHide = () => {
  model.value = { ...currentFiltersStatus }
  emit('hide')
}
</script>
