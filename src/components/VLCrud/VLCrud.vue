<template>
  <div>
    <VLCrudFilters
      class="w-full"
      :title="filters_title && translationFn(filters_title)"
      :filters="filters"
      @filtersApplied="onFiltersApplied"
      @error="(evt) => emit('error', evt)"
    />
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

      <!-- template for actions -->
      <template #actions="{ data }">
        <!-- base actions -->
        <VLCrudAction
          v-if="editable"
          icon="pencil"
          :tooltip="translationFn('tooltip.edit')"
          @click="() => onClickAction(editAction)(data)"
        />
        <!-- custom actions -->
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
    <div class="flex justify-between w-full">
      <VLButton @click="addItem">{{ translationFn(`button.add_${singular_label}`) }}</VLButton>
      <VLPaginator
        v-model:page="pagination.currentPage"
        v-model:rowsPerPage="pagination.rowsPerPage"
        :totalRows="pagination.totalRows"
        :rowsPerPageOptions="pagination.rowsPerPageOptions"
      />
    </div>
    <VLDialog v-bind="dialogProps" v-model="showDialog" @request-close="closeDialog">
      <VLCrudForm
        v-if="dialog === 'add'"
        :fields="formFields"
        :title="translationFn(`message.add_${singular_label}`)"
        :requiredRuleMessage="translationFn(requiredI18nKey)"
        :cancelLabel="translationFn(cancelI18nKey)"
        :confirmLabel="translationFn(addI18nKey)"
        @close="closeDialog"
        @cancel="closeDialog"
        @confirm="onAdd"
        @error="(evt) => emit('error', evt)"
      />
      <VLCrudForm
        v-if="dialog === 'edit'"
        :fields="formFields"
        :title="translationFn(`message.edit_${singular_label}`)"
        :requiredRuleMessage="translationFn(requiredI18nKey)"
        :cancelLabel="translationFn(cancelI18nKey)"
        :confirmLabel="translationFn(editI18nKey)"
        :model-value="selectedItem"
        @close="closeDialog"
        @cancel="closeDialog"
        @confirm="onEdit"
        @error="(evt) => emit('error', evt)"
      />
      <template v-for="action in actions.filter((action) => action.component)" :key="action.name">
        <component
          v-if="action.name === dialog"
          :is="action.component"
          :data="{
            id,
            item: selectedItem,
            ...(action.properties ?? {})
          }"
          @close="closeDialog"
          @cancel="() => {}"
          @confirm="() => onConfirm(action, selectedItem)"
        />
        <!-- TODO: gestire cancel in base all'action -->
        <!-- TODO: gestire confirm in base all'action -->
      </template>
    </VLDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'

import { VLCrudAction } from '../VLCrudAction'
import { VLPaginator } from '../VLPaginator'
import { VLDialog } from '../VLDialog'
import { VLDataTableCrud } from '../VLDataTableCrud'
import { VLCrudFilters } from '../VLCrudFilters'
import { VLCrudForm, type VLCrudFormFieldType } from '../VLCrudForm'
import { VLButton } from '../VLButton'
import type { VLCrudActionType, VLCrudProps } from './types'

const emit = defineEmits(['fetchError', 'error'])

const props = withDefaults(defineProps<VLCrudProps>(), {
  editable: true,
  actionHeaderI18nKey: 'header.actions',
  rowsPerPage: 10,
  cancelI18nKey: 'button.cancel',
  addI18nKey: 'button.add',
  editI18nKey: 'button.edit',
  requiredI18nKey: 'error.required',
  rowsPerPageOptions: () => [5, 10, 25, 50],
  translationFn: (key: string) => key
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
    ...(header.columnProps ? { columnProps: header.columnProps } : {}),
    ...(header.type
      ? { component: props.components?.[header.type], componentProps: header.componentProps }
      : {}) //TODO: componente per errore nel caso in cui non ci sia il componente per type
  }))
)

const formFields = computed(
  () =>
    props.form_fields.map((field) => ({
      ...field,
      label: props.translationFn(field.i18n_key)
    })) as VLCrudFormFieldType[]
)

const pagination = reactive({
  totalRows: 0,
  currentPage: 0,
  rowsPerPage: props.rowsPerPageOptions.includes(props.rowsPerPage)
    ? props.rowsPerPage
    : props.rowsPerPageOptions[0],
  rowsPerPageOptions: props.rowsPerPageOptions
})

const items = ref<any[]>([])

const fetchData = async () => {
  const response = await props
    .getItems(pagination.currentPage, pagination.rowsPerPage, { ...filtersApplied.value })
    .catch((e) => {
      console.error(e)
      emit('fetchError')
    })

  if (!response) {
    emit('fetchError')
    return
  }

  items.value = response.result

  const { currentPage, totalRows } = response.page

  pagination.currentPage = currentPage
  pagination.totalRows = totalRows
}

const onClickAction = (action: VLCrudActionType) => (data: any) => {
  if (action.onClick) {
    action.onClick(data)
  }
  if (action.component) {
    selectedItem.value = data
    dialog.value = action.name
    dialogProps.value = action.dialogProperties ?? {}
    showDialog.value = true
  }
}

const addItem = () => {
  selectedItem.value = {}
  dialog.value = 'add'
  dialogProps.value = {}
  showDialog.value = true
}

const filtersApplied = ref({})

const onFiltersApplied = (filters: any) => {
  filtersApplied.value = filters
  pagination.currentPage = 1
}

const onConfirm = (action: VLCrudActionType, data: any) => {
  console.log(action, { ...data })
  fetchData()
  //TODO: aggiungere highlight riga
  //OPZIONALE: aggiungere side effect al conferma dell'azione
}

const onAdd = async (data: any) => {
  await props.addItem?.(data)

  await fetchData()
}

const editAction = {
  name: 'edit',
  onClick: (data: any) => {
    selectedItem.value = data
    dialog.value = 'edit'
    dialogProps.value = {}
    showDialog.value = true
  }
} as VLCrudActionType

const onEdit = async (id: any, data: any) => {
  await props.editItem?.(id, data)

  await fetchData()
}

watch(() => [pagination.currentPage, pagination.rowsPerPage, filtersApplied.value], fetchData)

const selectedItem = ref<any>(null)

const dialog = ref<string | null>(null)
const dialogProps = ref({})
const showDialog = ref(false)

const closeDialog = () => {
  showDialog.value = false
  dialogProps.value = {}

  setTimeout(() => {
    dialog.value = null
    selectedItem.value = null
  }, 300)
}
</script>
