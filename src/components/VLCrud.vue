<template>
  <div>
    <VLCrudFilters class="w-full" :filters="filters" @filtersApplied="() => {}" />
    <VLDataTableCrud
      class="w-full my-4"
      removableSort
      :items="items"
      :columns="columns"
      :actions="[]"
      :paginator="false"
      :actionHeaderLabel="translationFn(actionHeaderI18nKey)"
    >
      <!-- template for empty table state -->
      <template #empty>
        <div class="flex justify-center p-4">Empty</div>
      </template>

      <!-- template for actions to show some default actions -->
      <template #actions="{ data }">
        <VLCrudAction v-if="editable" :tooltip="translationFn('tooltip.edit')" icon="pencil" />
        <slot name="actions" v-bind="{ data }">
          <VLCrudAction
            v-for="action in actions"
            :key="action.name"
            :tooltip="translationFn(action.i18n_key)"
            :icon="action.icon_name"
            @click="() => onClickAction(action)(data)"
          />
        </slot>
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
      <slot name="dialogs" v-bind="{ selectedItem, closeDialog }">
        <template v-for="action in actions.filter((action) => action.component)" :key="action.name">
          <component
            v-if="action.name === dialog"
            :is="action.component"
            :data="{ ...(action.properties ?? {}), item: selectedItem }"
            @close="closeDialog"
          ></component>
        </template>
      </slot>
    </VLDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, type Component, computed } from 'vue'
import { VLDataTableCrud, VLPaginator, VLDialog, VLCrudFilters } from '.'

import VLCrudAction from './VLCrudAction.vue'

import type { Header, Filter, CrudAction } from './utils/types'

interface Props {
  primary_key: string
  singular_label: string
  headers: Header[]
  filters: Omit<Filter, 'label'>[]
  form_fields: any[]
  actions: CrudAction[]
  editable?: boolean
  components?: { [key: string]: Component }
  actionHeaderI18nKey?: string
  getItems: (page: number, rowsPerPage: number, filters: any) => any
  editItem?: (id: any, item: any) => any
  translationFn?: (key: string, props?: { [key: string]: any }) => string
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
  translationFn: (key: string) => key,
  actionHeaderI18nKey: 'header.actions'
})

const filters = computed(() =>
  props.filters.map((filter) => ({
    ...filter,
    label: props.translationFn(filter.i18n_key)
  }))
)

const columns = computed(() =>
  props.headers.map((header) => ({
    name: props.translationFn(header.i18n_key),
    value: header.value,
    sortable: header.sortable,
    ...(header.type
      ? { component: props.components?.[header.type], componentProps: header.componentProps }
      : {}) //TODO: componente per errore nel caso in cui non ci sia il componente per type
  }))
)

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

const onClickAction = (action: CrudAction) => (data: any) => {
  if (action.onClick) {
    action.onClick(data)
  }
  if (action.component) {
    selectedItem.value = data
    dialog.value = action.name
    showDialog.value = true
  }
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
