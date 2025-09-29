import type {
  VLInputRuleType,
  SlFocusEvent,
  SlBlurEvent,
  SlAfterHideEvent,
  SlInputEvent,
  SlShowEvent,
  SlHideEvent,
  SlInvalidEvent,
  SlChangeEvent,
  SlClearEvent,
  SlAfterShowEvent
} from '../utils/types'

export interface VLSelectOptionType {
  value: string
  text: string
  icon?: string
  icon_library?: string
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
  onFocus?: (e: SlFocusEvent) => void
  onBlur?: (e: SlBlurEvent) => void
  onInput?: (e: SlInputEvent) => void
  onChange?: (e: SlChangeEvent) => void
  onClear?: (e: SlClearEvent) => void
  onInvalid?: (e: SlInvalidEvent) => void
  onShow?: (e: SlShowEvent) => void
  onHide?: (e: SlHideEvent) => void
  onAfterShow?: (e: SlAfterShowEvent) => void
  onAfterHide?: (e: SlAfterHideEvent) => void
}
