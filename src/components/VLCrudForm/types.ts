import { VLCrudInputValueType } from '../VLCrudInput'

export interface VLCrudFormProps {
  modelValue?: { [key: string]: VLCrudInputValueType }
  fields: any[]
  title: string
  cancelLabel?: string
  confirmLabel?: string
  validateAll?: boolean
}
