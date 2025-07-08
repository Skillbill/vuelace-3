import { VLFileInputErrorEvent, VLInputRuleType } from '..'
import { VLSelectOptionType } from '../VLSelect'

export type VLCrudInputValueType = string | string[] | boolean | Date | number | null | undefined
export type VLCrudInputFieldType =
  | 'text'
  | 'checkbox'
  | 'select'
  | 'number'
  | 'date'
  | 'color'
  | 'image'
  | 'autocomplete'
  | 'dropdown'
export interface VLCrudInputProps {
  input_name: string
  label: string
  type: VLCrudInputFieldType
  initialValue?: VLCrudInputValueType
  placeholder?: string
  options?: VLSelectOptionType[]
  rules?: VLInputRuleType[]
  modelValue?: VLCrudInputValueType
  disabled?: boolean
  required?: boolean
  img_style?: string
  multiple?: boolean
  onError?: (error: VLFileInputErrorEvent) => void
  // autofocus?: boolean
}
