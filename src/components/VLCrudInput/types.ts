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
  disabled?: boolean
  placeholder?: string
  options?: VLSelectOptionType[]
  rules?: VLInputRuleType[]
  required?: boolean
  onError?: (error: VLFileInputErrorEvent) => void
  // autofocus?: boolean
  //rules: (() => void)[],
  // img_style: string,
  // hidden: boolean,
  // hide_details: boolean
  // dense: boolean
}
