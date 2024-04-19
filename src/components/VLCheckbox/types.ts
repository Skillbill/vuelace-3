import type { VLInputRuleType } from '../utils/types'
export interface VLCheckboxProps {
  name?: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  checked?: boolean
  indeterminate?: boolean
  defaultChecked?: boolean
  form?: string
  required?: boolean
  label?: string
  error?: string
  rules?: VLInputRuleType[]
}
