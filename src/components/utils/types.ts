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

// VLCrud types

export interface Header {
  i18n_key: string
  value: string
  sortable?: boolean
  type?: string
  componentProps?: any
}

export interface Filter {
  i18n_key: string
  value: string
  input_type: string //TODO: Aggiungere tipi supportati dal VLCrudInput
  default_value?: any
  props?: any
}
