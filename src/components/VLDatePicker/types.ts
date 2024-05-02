import type { VLInputRuleType } from '../utils/types'
export interface VLDatePickerProps {
  name?: string
  label: string
  defaultValue?: string
  format?: string
  placeholder?: string
  clearable?: boolean
  required?: boolean
  disabled?: boolean
  selectionMode?: 'single' | 'range' | 'multiple'
  minDate?: Date
  maxDate?: Date
  withTime?: boolean
  rules?: VLInputRuleType[]
  error?: string
  modelValue?: Date | Date[]
}
