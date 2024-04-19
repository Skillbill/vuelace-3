import type {
  SlChangeEvent,
  SlBlurEvent,
  SlFocusEvent,
  SlInputEvent,
  SlInvalidEvent
} from '../utils/types'

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
  onChange?: (e: SlChangeEvent) => void
  onBlur?: (e: SlBlurEvent) => void
  onFocus?: (e: SlFocusEvent) => void
  onInput?: (e: SlInputEvent) => void
  onInvalid?: (e: SlInvalidEvent) => void
}
