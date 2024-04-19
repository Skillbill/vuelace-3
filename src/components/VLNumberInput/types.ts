import type {
  VLInputRuleType,
  SlFocusEvent,
  SlBlurEvent,
  SlInputEvent,
  SlChangeEvent,
  SlInvalidEvent,
  SlClearEvent
} from '../utils/types'

export interface VLNumberInputProps {
  name?: string
  defaultValue?: string
  size?: 'small' | 'medium' | 'large'
  filled?: boolean
  pill?: boolean
  label?: string
  helpText?: string
  clearable?: boolean
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  noSpinButtons?: boolean
  form?: string
  required?: boolean
  min?: number
  max?: number
  step?: number | 'any'
  autofocus?: boolean
  error?: string
  rules?: VLInputRuleType[]
  onFocus?: (e: SlFocusEvent) => void
  onBlur?: (e: SlBlurEvent) => void
  onInput?: (e: SlInputEvent) => void
  onChange?: (e: SlChangeEvent) => void
  onClear?: (e: SlClearEvent) => void
  onInvalid?: (e: SlInvalidEvent) => void
}
