export interface VLTooltipProps {
  content?: string
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
  disabled?: boolean
  distance?: number
  open?: boolean
  skidding?: number
  trigger?: string
  hoist?: boolean
}
