import type { VLSelectOptionType } from '../VLSelect'

export interface VLDropdownProps {
  name: string
  label: string
  placeholder?: string
  options?: VLSelectOptionType[]
  disabled?: boolean
  required?: boolean
  multiple?: boolean
  manual?: boolean
  dropdown?: boolean
  error?: string
}
