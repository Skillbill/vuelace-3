import type { VLInputRuleType } from '../utils/types'
export interface Radio {
  label: string
  value: any
  disabled?: boolean
}

export interface VLRadioGroup {
  label?: string
  helpText?: string
  name?: string
  size?: 'small' | 'medium' | 'large'
  form?: string
  required?: boolean
  options: Radio[]
  error?: string
  rules?: VLInputRuleType[]
}
