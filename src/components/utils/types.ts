export type {
  SlChangeEvent,
  SlInputEvent,
  SlInvalidEvent,
  SlShowEvent,
  SlBlurEvent,
  SlFocusEvent,
  SlHideEvent,
  SlClearEvent,
  SlAfterHideEvent,
  SlAfterShowEvent,
  SlInitialFocusEvent,
  SlRequestCloseEvent
} from '@shoelace-style/shoelace'

export interface VLInputRuleType {
  validateFn: Function
  message: string
}
