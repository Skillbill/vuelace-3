export interface Radio {
  label: string
  value: any
  disabled?: boolean
}

export interface Rule {
  validateFn: Function
  message: string
}

export interface Option {
  value: string
  text: string
}

// VLDataTableCrud types

export interface Column {
  name: string
  value: string
  sortable?: boolean
  component?: any
  columnProps?: any
  componentProps?: any
}

export interface Action {
  name?: string
  component: any
  props?: any
  onClick?: (data: any) => void
}
