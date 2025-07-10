import { VLSelectOptionType } from '../VLSelect'

import type {
  VLInputRuleType,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
  AutoCompleteDropdownClickEvent,
  AutoCompleteItemSelectEvent,
  AutoCompleteItemUnselectEvent
} from '../utils/types'

export interface VLAutocompleteProps {
  options?: VLSelectOptionType[]
  placeholder?: string
  disabled?: boolean
  forceSelection?: boolean
  emptySearchMessage?: string
  optionLabel?: string
  error?: string
  label?: string
  required?: boolean
  labelClass?: string
  rules?: VLInputRuleType[]
  onClick?: (evt: Event) => void
  onBlur?: (evt: Event) => void
  onFocus?: (evt: Event) => void
  onChange?: (evt: AutoCompleteChangeEvent) => void
  onItemSelect?: (evt: AutoCompleteItemSelectEvent) => void
  onItemUnselect?: (evt: AutoCompleteItemUnselectEvent) => void
  onDropdownClick?: (evt: AutoCompleteDropdownClickEvent) => void
  onComplete?: (evt: AutoCompleteCompleteEvent) => void
  onClear?: () => void
  onBeforeShow?: () => void
  onBeforeHide?: () => void
  onShow?: () => void
  onHide?: () => void
}
