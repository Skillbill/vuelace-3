import PrimeVueColumn from 'primevue/column'
import { DataTablePageEvent } from 'primevue/datatable'

export interface Column {
  name: string
  value: string
  sortable?: boolean
  component?: any
  columnProps?: Omit<
    InstanceType<typeof PrimeVueColumn>['$props'],
    'key' | 'field' | 'sortable' | 'header'
  >
  componentProps?: any
}

export interface Action {
  name?: string
  component: any
  props?: any
  onClick?: (data: any) => void
}
export interface VLDataTableCrudProps {
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
  rowClass?: (data: any) => object | (string | object)[] | undefined
  rowStyle?: (data: any) => object | (string | object)[] | undefined
  totalRecords?: number
  paginator?: boolean
  paginatorPosition?: 'both' | 'top' | 'bottom'
  paginatorTemplate?: string
  currentPageReportTemplate?: string
  actionHeaderLabel?: string
  selectionMode?: 'single' | 'multiple'
  selectionColumnProps?: object
  onPage?: (event: DataTablePageEvent) => void
}
