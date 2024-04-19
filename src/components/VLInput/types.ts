import type { VLInputRuleType } from '../utils/types'
export interface VLInputProps {
  type?: 'password' | 'text' | 'email'
  name?: string
  defaultValue?: string
  size?: 'small' | 'medium' | 'large'
  filled?: boolean
  pill?: boolean
  label: string
  helpText?: string
  clearable?: boolean
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  passwordToggle?: boolean
  form?: string
  required?: boolean
  autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
  autocorrect?: 'off' | 'on'
  autofocus?: boolean
  spellcheck?: boolean
  inputmode?: 'none' | 'text' | 'email'
  rules?: VLInputRuleType[]
  error?: string
}
