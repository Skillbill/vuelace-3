import { VLFileInputErrorEvent } from '../VLFileInput'
import type { VLInputRuleType } from '../utils/types'
export interface VLImageUploadProps {
  class?: string
  name?: string
  label: string
  placeholder?: string
  error?: string
  helpText?: string
  clearable?: boolean
  required?: boolean
  disabled?: boolean
  imgStyle?: string
  rules?: VLInputRuleType[]
  onError?: (error: VLFileInputErrorEvent) => void
}
