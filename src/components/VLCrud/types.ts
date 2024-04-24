import PrimeVueColumn from 'primevue/column'
import type { Component } from 'vue'
import type { VLDialogProps } from '../VLDialog'
import type { VLCrudFilterType } from '../VLCrudFilters'
import type { VLFileInputErrorEvent } from '../VLFileInput'
import type { VLCrudFormFieldType } from '../VLCrudForm'

export interface VLCrudHeaderType {
  i18n_key: string
  value: string
  sortable?: boolean
  type?: string
  componentProps?: Object
  columnProps?: Omit<
    InstanceType<typeof PrimeVueColumn>['$props'],
    'key' | 'field' | 'sortable' | 'header'
  >
}

export interface VLCrudActionType {
  name: string
  i18n_key: string
  icon_name: string
  component?: Component
  onClick?: (data: any) => void
  properties?: Object
  dialogProperties?: Omit<VLDialogProps, 'modelValue' | 'onRequestClose'>
}

export interface VLCrudProps {
  id: string
  primary_key: string
  singular_label: string
  headers: VLCrudHeaderType[]
  filters: Omit<VLCrudFilterType, 'label'>[]
  filters_title?: string
  form_fields: Omit<VLCrudFormFieldType, 'label'>[]
  actions: VLCrudActionType[]
  editable?: boolean
  components?: { [key: string]: Component }
  actionHeaderI18nKey?: string
  rowsPerPage?: number
  rowsPerPageOptions?: number[]
  getItems: (
    page: number,
    rowsPerPage: number,
    filters: any
  ) => Promise<
    | {
        result: any[]
        page: {
          currentPage: number
          pageRows: number
          totalRows: number
        }
      }
    | undefined
  >
  addItem?: (item: any) => any
  editItem?: (id: any, item: any) => any
  translationFn?: (key: string, props?: { [key: string]: any }) => string
  onFetchError?: () => void
  onError?: (error: VLFileInputErrorEvent) => void
}
