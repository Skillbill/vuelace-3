export * from './shoelace'
export { addIcon, addIcons } from './icons'
export * from './components'

import { useIcons } from './shoelace'
import './assets/main.css'

import PrimeVue from 'primevue/config'

export const installVuelace = (app: any) => {
  useIcons('mdi')
  return app.use(PrimeVue)
}

const x
x = x + 1
x
