import { useIcons } from './shoelace'

import './assets/main.css'

import 'primevue/resources/themes/saga-blue/theme.css'
import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

useIcons('mdi')

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())

app.mount('#app')
