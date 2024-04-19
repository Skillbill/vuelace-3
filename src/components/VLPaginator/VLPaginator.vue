<template>
  <div class="flex items-center gap-4">
    <VLButton @click="prevPage" :disabled="page === 1">
      <VLIcon name="chevronLeft" />
    </VLButton>
    <slot :page="page" :totalPages="totalPages">{{ page }}/{{ totalPages }}</slot>
    <VLButton @click="nextPage" :disabled="page === totalPages">
      <VLIcon name="chevronRight" />
    </VLButton>
    <div class="w-24">
      <VLSelect
        v-model="rowsPerPageModel"
        :options="rowsPerPageOptions.map((item) => ({ value: `${item}`, text: `${item}` }))"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'

import { VLButton, VLIcon, VLSelect } from '..'
import type { VLPaginatorProps } from './types'

const emit = defineEmits(['paginationChange', 'update:rowsPerPage'])

const props = defineProps<VLPaginatorProps>()

const page = defineModel<number>('page', { required: false, default: 1 })

const rowsPerPageModel = ref<string>(`${props.rowsPerPage ?? props.rowsPerPageOptions[0]}`)

const totalPages = computed(() => Math.ceil(props.totalRows / parseInt(rowsPerPageModel.value)))

const prevPage = () => {
  if (page.value > 1) {
    page.value--
  }
}

const nextPage = () => {
  if (page.value < totalPages.value) {
    page.value++
  }
}

watch([rowsPerPageModel], () => {
  page.value = 1
  emit('update:rowsPerPage', parseInt(rowsPerPageModel.value))
})

watch([page, rowsPerPageModel], () => {
  emit('paginationChange', { page: page.value, limit: parseInt(rowsPerPageModel.value) })
})
</script>
