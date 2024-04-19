import type {
  VLInputRuleType,
  SlChangeEvent,
  SlBlurEvent,
  SlFocusEvent,
  SlInputEvent,
  SlInvalidEvent
} from '../utils/types'

export interface VLTextAreaProps {
  name?: string
  defaultValue?: string
  size?: 'small' | 'medium' | 'large'
  filled?: boolean
  label: string
  helpText?: string
  rows?: number
  resize?: 'none' | 'vertical' | 'auto'
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  form?: string
  required?: boolean
  autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
  autocorrect?: 'off' | 'on'
  autofocus?: boolean
  spellcheck?: boolean
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
  rules?: VLInputRuleType[]
  error?: string
  onChange?: (e: SlChangeEvent) => void
  onBlur?: (e: SlBlurEvent) => void
  onFocus?: (e: SlFocusEvent) => void
  onInput?: (e: SlInputEvent) => void
  onInvalid?: (e: SlInvalidEvent) => void
}
