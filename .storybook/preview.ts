import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import { useIcons } from '../src/shoelace'

import '../src/assets/main.css'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import PrimeVue from 'primevue/config'

import { createPinia } from 'pinia'

setup((app) => {
  useIcons('mdi')
  app.use(createPinia())
  app.use(PrimeVue)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
