export type VLCrudInputValueType = string | boolean | Date | number | undefined
export type VLCrudInputFieldType = 'text' | 'checkbox'
export interface VLCrudInputProps {
  input_name: string
  label: string
  type: VLCrudInputFieldType
  initialValue?: VLCrudInputValueType
  disabled?: boolean
  placeholder?: string
  // options: Array,
  //rules: (() => void)[],
  // autofocus: boolean,
  // img_style: string,
  // hidden: boolean,
  // hide_details: boolean
  // dense: boolean
}
