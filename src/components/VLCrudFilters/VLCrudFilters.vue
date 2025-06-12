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
          v-for="field in filters"
          :key="field.value"
          class="w-full"
          :class="field?.class"
          :input_name="field.value"
          :type="field.input_type"
          :label="field.label"
          :options="field.options"
          :initialValue="field.default_value"
          v-model="model[field.value]"
          @error="(evt) => emit('error', evt)"
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

import { VLButton } from '../VLButton'
import { VLExpansionCard } from '../VLExpansionCard'
import { VLCrudInput, VLCrudInputValueType } from '../VLCrudInput'
import type { VLCrudFiltersProps } from './types'

const emit = defineEmits(['apply', 'filtersApplied', 'hide', 'reset', 'show', 'error'])

const open = ref(false)

let currentFiltersStatus: { [key: string]: any } = {}

const model = ref<{ [key: string]: VLCrudInputValueType }>({})

const props = withDefaults(defineProps<VLCrudFiltersProps>(), {
  title: 'Filters',
  applyLabel: 'apply',
  resetLabel: 'reset'
})

const resetFields = () => {
  currentFiltersStatus =
    props.filters?.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.value]: curr.default_value
      }),
      {}
    ) ?? {}

  model.value = { ...currentFiltersStatus }
}

const setFilterModel = (newFilters: { [key: string]: VLCrudInputValueType }) => {
  currentFiltersStatus = { ...newFilters }
  model.value = { ...newFilters }
}

const setOpen = (openStatus: boolean) => {
  open.value = openStatus
}

defineExpose({ setFilterModel, setOpen })

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
