import {
  VLInputRuleType,
  SlBlurEvent,
  SlChangeEvent,
  SlClearEvent,
  SlFocusEvent,
  SlInputEvent,
  SlInvalidEvent
} from '../utils/types'

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
  autocomplete?: string
  autocorrect?: 'off' | 'on'
  autofocus?: boolean
  spellcheck?: boolean
  inputmode?: 'none' | 'text' | 'email'
  rules?: VLInputRuleType[]
  error?: string
  title?: string
  onFocus?: (e: SlFocusEvent) => void
  onBlur?: (e: SlBlurEvent) => void
  onInput?: (e: SlInputEvent) => void
  onChange?: (e: SlChangeEvent) => void
  onClear?: (e: SlClearEvent) => void
  onInvalid?: (e: SlInvalidEvent) => void
}
