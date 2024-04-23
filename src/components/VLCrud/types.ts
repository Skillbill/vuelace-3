import PrimeVueColumn from 'primevue/column'
import { Component } from 'vue'
import { VLDialogProps } from '../VLDialog'
import type { VLCrudFilterType } from '../VLCrudFilters/types'
import { VLFileInputErrorEvent } from '../VLFileInput'

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
  form_fields: any[]
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
  editItem?: (id: any, item: any) => any
  translationFn?: (key: string, props?: { [key: string]: any }) => string
  onFetchError?: () => void
  onError?: (error: VLFileInputErrorEvent) => void
}
