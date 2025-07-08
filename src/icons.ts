import paperclip from '@mdi/svg/svg/paperclip.svg'
import chevronDown from '@mdi/svg/svg/chevron-down.svg'
import check from '@mdi/svg/svg/check.svg'
import chevronLeft from '@mdi/svg/svg/chevron-left.svg'
import chevronRight from '@mdi/svg/svg/chevron-right.svg'
import contentCopy from '@mdi/svg/svg/content-copy.svg'
import eyeOutline from '@mdi/svg/svg/eye-outline.svg'
import eyeOffOutline from '@mdi/svg/svg/eye-off-outline.svg'
import eyeDropper from '@mdi/svg/svg/eyedropper.svg'
import dragVertical from '@mdi/svg/svg/drag-vertical.svg'
import minus from '@mdi/svg/svg/minus.svg'
import account from '@mdi/svg/svg/account.svg'
import play from '@mdi/svg/svg/play.svg'
import pause from '@mdi/svg/svg/pause.svg'
import circleMedium from '@mdi/svg/svg/circle-medium.svg'
import star from '@mdi/svg/svg/star.svg'
import windowClose from '@mdi/svg/svg/window-close.svg'
import closeCircle from '@mdi/svg/svg/close-circle.svg'
import calendar from '@mdi/svg/svg/calendar.svg'
import cogs from '@mdi/svg/svg/cogs.svg'
import pencil from '@mdi/svg/svg/pencil.svg'
import deleteIcon from '@mdi/svg/svg/delete.svg'
import pageFirst from '@mdi/svg/svg/page-first.svg'
import pageLast from '@mdi/svg/svg/page-last.svg'
import chevronUp from '@mdi/svg/svg/chevron-up.svg'
import plusCircle from '@mdi/svg/svg/plus-circle.svg'

export const icons = {
  paperclip,
  calendar,
  cogs,
  chevronDown,
  check,
  chevronLeft,
  chevronRight,
  contentCopy,
  eyeOutline,
  eyeOffOutline,
  eyeDropper,
  dragVertical,
  minus,
  account,
  play,
  pause,
  circleMedium,
  star,
  windowClose,
  closeCircle,
  pencil,
  delete: deleteIcon,
  pageFirst,
  pageLast,
  chevronUp,
  plusCircle
}

export const addIcon = (name: string, svg: string) => {
  icons[name as keyof typeof icons] = svg
}

export const addIcons = (icons: { name: string; svg: string }[]) => {
  icons.forEach((icon) => addIcon(icon.name, icon.svg))
}
