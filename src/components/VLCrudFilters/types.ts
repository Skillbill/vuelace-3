import { VLCrudInputFieldType, VLCrudInputValueType } from '../VLCrudInput'

export interface VLCrudFilterType {
  value: string
  i18n_key: string
  label: string
  input_type: VLCrudInputFieldType
  default_value?: VLCrudInputValueType
  props?: any
}

export interface VLCrudFiltersProps {
  title?: string
  filters?: VLCrudFilterType[]
  applyLabel?: string
  resetLabel?: string
}
