import type { VLInputRuleType } from '../utils/types'
export interface VLSelectOptionType {
  value: string
  text: string
}

export interface VLSelectProps {
  name?: string
  defaultValue?: string | string[]
  size?: 'small' | 'medium' | 'large'
  multiple?: boolean
  placeholder?: string
  maxOptionsVisible?: number
  disabled?: boolean
  clearable?: boolean
  pill?: boolean
  filled?: boolean
  placement?: 'top' | 'bottom'
  helpText?: string
  label?: string
  options: VLSelectOptionType[]
  error?: string
  form?: string
  required?: boolean
  getTag?: Function
  rules?: VLInputRuleType[]
}
