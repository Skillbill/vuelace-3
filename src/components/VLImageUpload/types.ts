import type { VLInputRuleType } from '../utils/types'
export interface VLImageUploadProps {
  name?: string
  label: string
  placeholder?: string
  error?: string
  helpText?: string
  clearable?: boolean
  required?: boolean
  disabled?: boolean
  rules?: VLInputRuleType[]
}
