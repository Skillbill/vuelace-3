import type { VLCrudInputFieldType, VLCrudInputValueType } from '../VLCrudInput'
import type { VLSelectOptionType } from '../VLSelect'
import type { VLInputRuleType } from '../utils/types'

export interface VLCrudFormFieldType {
  i18n_key: string
  value: string
  input_type: VLCrudInputFieldType
  options?: VLSelectOptionType[]
  default_value?: VLCrudInputValueType
  class?: string
  label: string
  rules?: VLInputRuleType[]
  disabled?: boolean
  required?: boolean
  img_style?: string
  hidden_on_create?: boolean //TODO VLCrudInputProp
  hidden?: boolean //TODO VLCrudInputProp
  disabledEdit?: boolean //TODO VLCrudInputProp
  placeholder?: string //TODO VLCrudInputProp
  side_effect?: (
    model: { [key: string]: VLCrudInputValueType },
    fields: {
      [key: string]: Omit<VLCrudFormFieldType, 'side_effect'>
    }
  ) => void
}

export interface VLCrudFormProps {
  modelValue?: { [key: string]: VLCrudInputValueType }
  fields: VLCrudFormFieldType[]
  title: string
  cancelLabel: string
  confirmLabel: string
  requiredRuleMessage: string
  validateAll?: boolean
}
