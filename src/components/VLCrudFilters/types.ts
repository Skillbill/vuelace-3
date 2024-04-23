import { VLFileInputErrorEvent } from '../VLFileInput'
import { VLCrudInputFieldType, VLCrudInputValueType } from '../VLCrudInput'
import { VLSelectOptionType } from '../VLSelect'

export interface VLCrudFilterType {
  value: string
  i18n_key: string
  label: string
  input_type: VLCrudInputFieldType
  options?: VLSelectOptionType[]
  default_value?: VLCrudInputValueType
  props?: any
}

export interface VLCrudFiltersProps {
  title?: string
  filters?: VLCrudFilterType[]
  applyLabel?: string
  resetLabel?: string
  onApply?: () => void
  onHide?: () => void
  onReset?: () => void
  onShow?: () => void
  onFiltersApplied?: (filters: any) => void
  onError?: (error: VLFileInputErrorEvent) => void
}
