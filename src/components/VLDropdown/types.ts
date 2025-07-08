import type { VLSelectOptionType } from '../VLSelect'

export interface VLDropdownProps {
  name: string
  label: string
  placeholder?: string
  options?: VLSelectOptionType[]
  modelValue?: string | string[] | VLSelectOptionType | VLSelectOptionType[] | null
  disabled?: boolean
  required?: boolean
  multiple?: boolean
  manual?: boolean
  dropdown?: boolean
  error?: string
}
