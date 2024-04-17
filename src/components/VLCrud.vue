<template>
  <div>
    <VLFiltersCrud class="w-full" :filters="filters" @filtersApplied="() => {}" />
    <VLDataTableCrud
      class="w-full"
      removableSort
      :items="items"
      :columns="headers"
      :actions="actions"
      :paginator="false"
      actionHeaderLabel="actions"
    >
      <!-- template for empty table state -->
      <template #empty>
        <div class="flex justify-center p-4">Empty</div>
      </template>
      <!-- template for actions to show some default actions -->
      <template #actions="{ data }">
        <VLButton v-if="editable" @click="() => {}">Edit</VLButton>
        <slot name="actions" v-bind="{ data }"></slot>
      </template>
    </VLDataTableCrud>
    <div class="flex justify-end w-full">
      <VLPaginator
        v-model:page="pagination.currentPage"
        v-model:rowsPerPage="pagination.rowsPerPage"
        :totalRows="pagination.totalRows"
        :rowsPerPageOptions="pagination.rowsPerPageOptions"
      />
    </div>

    <VLDialog v-model="showDialog" v-bind="dialogProps" @request-close="closeDialog">
      <div slot="label"><slot name="dialogName"></slot></div>
      <slot name="dialogs" v-bind="{ selectedItem, closeDialog }"></slot>
    </VLDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { VLDataTableCrud, VLPaginator, VLDialog, VLButton } from '.'
import VLFiltersCrud from './VLFiltersCrud.vue'

import type { Filter } from './VLFiltersCrud.vue'

interface Props {
  primary_key: string
  singular_label: string
  headers: any[]
  filters: Filter[]
  form_fields: any[]
  actions: any[]
  editable: boolean
  getItems: (page: number, rowsPerPage: number, filters: any) => any
  editItem?: (id: any, item: any) => any
}

const props = withDefaults(defineProps<Props>(), {
  editable: true
})

const pagination = reactive({
  totalRows: 0,
  currentPage: 1,
  rowsPerPage: 10,
  rowsPerPageOptions: [5, 10, 25, 50]
})
const items = ref<any[]>([])

const getItems = async (page: number, rowsPerPage: number, filters: any) => {
  const response = await props.getItems(page, rowsPerPage, filters)

  if (!response) return

  items.value = response.result
  pagination.totalRows = response.page.totalRows
}

onMounted(() => {
  getItems(pagination.currentPage, pagination.rowsPerPage, {})
})

watch(
  () => [pagination.currentPage, pagination.rowsPerPage],
  () => {
    getItems(pagination.currentPage, pagination.rowsPerPage, {})
  }
)

// watch(filters, () => {
//   getItems(pagination.currentPage, pagination.rowsPerPage, filters.value)
// })

const dialog = ref<string | null>(null)

const showDialog = ref(false)

const dialogProps = ref({})

const selectedItem = ref<any>(null)

const emit = defineEmits(['actionClose'])

const closeDialog = () => {
  showDialog.value = false
  dialogProps.value = {}

  setTimeout(() => {
    dialog.value = null
    selectedItem.value = null

    emit('actionClose', null)
  }, 300)
}
</script>
