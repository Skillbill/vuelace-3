<template>
  <DataTable
    v-model:selection="selection"
    :value="items"
    :size="size"
    :stripedRows="stripedRows"
    :removableSort="removableSort"
    :loading="loading"
    :lazy="lazy"
    :rows="defaultRows"
    :rowsPerPageOptions="rowsPerPageOptions"
    :rowClass="rowClass"
    :rowStyle="rowStyle"
    :totalRecords="totalRecords ?? items.length"
    :paginator="paginator"
    :paginatorPosition="paginatorPosition"
    :paginatorTemplate="paginatorTemplate"
    :currentPageReportTemplate="currentPageReportTemplate"
    @page="(evt) => emit('page', evt)"
  >
    <PrimeVueColumn
      v-if="selectionMode"
      :selectionMode="selectionMode"
      v-bind="selectionColumnProps"
    />
    <PrimeVueColumn
      v-for="column in columns"
      :key="column.value"
      :field="column.value"
      :sortable="column.sortable ?? false"
      :header="column.name"
      v-bind="column.columnProps"
    >
      <template v-if="column.component" #body="{ data, field }">
        <component :is="column.component" :data="data" :field="field" v-bind="column.componentProps"
          ><template v-if="column.value">{{ data[column.value] }}</template></component
        >
      </template>
    </PrimeVueColumn>
    <PrimeVueColumn v-if="actions.length || $slots.actions" :header="actionHeaderLabel">
      <template #body="{ data }">
        <div class="flex gap-2">
          <slot name="actions" v-bind="{ data }"></slot>
          <component
            v-for="(action, index) in actions"
            :key="action.name ?? index"
            :is="action.component"
            :data="data"
            v-bind="action.props"
            @click="() => action.onClick && action.onClick(data)"
          />
        </div>
      </template>
    </PrimeVueColumn>
    <template #empty><slot name="empty"></slot></template>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable'
import PrimeVueColumn from 'primevue/column'

import type { Column, Action } from './utils/types'

const emit = defineEmits(['page'])

interface Props {
  columns: Column[]
  actions: Action[]
  items: any[]
  size?: 'small' | 'large'
  stripedRows?: boolean
  removableSort?: boolean
  loading?: boolean
  lazy?: boolean
  defaultRows?: number
  rowsPerPageOptions?: number[]
  rowClass?: (data: any) => object | undefined
  rowStyle?: (data: any) => object | undefined
  totalRecords?: number
  paginator?: boolean
  paginatorPosition?: 'both' | 'top' | 'bottom'
  paginatorTemplate?: string
  currentPageReportTemplate?: string
  actionHeaderLabel?: string
  selectionMode?: 'single' | 'multiple'
  selectionColumnProps?: object
}

withDefaults(defineProps<Props>(), {
  size: undefined,
  stripedRows: false,
  removableSort: false,
  loading: false,
  lazy: false,
  defaultRows: 10,
  rowsPerPageOptions: () => [5, 10, 20],
  totalRecords: undefined,
  paginator: true,
  actionHeaderLabel: 'Actions'
})

const selection = defineModel('selection', {
  type: Array,
  default: () => []
})
</script>

<style scoped>
:deep(.p-datatable-wrapper) {
  border: solid 1px var(--sl-color-neutral-200);
  border-radius: var(--sl-border-radius-medium);
  border-bottom: 0;
  background-color: var(--sl-color-neutral-0);
  overflow-anchor: none;
}

:deep(.p-datatable-thead > tr > th) {
  background-color: var(--sl-color-neutral-100);
}

:deep(.p-datatable-tbody > tr > td) {
  border: 1px solid var(--sl-color-neutral-200);
  border-width: 0 0 1px 0;
}

/* Current page on paginator */
:deep(.p-paginator-page.p-highlight) {
  color: var(--sl-color-primary-600);
  background: var(--sl-color-primary-100);
}

/* Column title when highlighted(sorted) */
:deep(.p-highlight .p-column-header-content .p-column-title) {
  color: var(--sl-color-primary-600);
}

/* Sort icon color */
:deep(.p-highlight .p-sortable-column-icon) {
  color: var(--sl-color-primary-600);
}

/* Paginator ring color when focused */
:deep(.p-paginator .p-dropdown:not(.p-dropdown-disabled).p-focus) {
  box-shadow: 0 0 0 0.2rem var(--sl-input-focus-ring-color);
}

/* Selection column style*/
:deep(.p-radiobutton-box),
:deep(.p-checkbox-box) {
  border: 1px solid var(--sl-color-neutral-300);
}

:deep(.p-highlight > .p-radiobutton-box),
:deep(.p-highlight > .p-checkbox-box) {
  border: none;
  background-color: var(--sl-color-primary-600);
}
</style>
