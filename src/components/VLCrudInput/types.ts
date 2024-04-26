import { VLFileInputErrorEvent, VLInputRuleType } from '..'
import { VLSelectOptionType } from '../VLSelect'

export type VLCrudInputValueType = string | boolean | Date | number | undefined
export type VLCrudInputFieldType =
  | 'text'
  | 'checkbox'
  | 'select'
  | 'number'
  | 'date'
  | 'color'
  | 'image'
export interface VLCrudInputProps {
  input_name: string
  label: string
  type: VLCrudInputFieldType
  initialValue?: VLCrudInputValueType
  placeholder?: string
  options?: VLSelectOptionType[]
  rules?: VLInputRuleType[]
  modelValue: VLCrudInputValueType
  disabled?: boolean
  required?: boolean
  img_style?: string
  onError?: (error: VLFileInputErrorEvent) => void
  // autofocus?: boolean
}
