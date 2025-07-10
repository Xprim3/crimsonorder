import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './style.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import i18n from './plugins/i18n'

const app = createApp(App)
app.use(PrimeVue)
app.use(i18n)

app.mount('#app')

// Register service worker for offline functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing
        installingWorker?.addEventListener('statechange', () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // Show the custom update notification banner via event
              window.dispatchEvent(new Event('show-update-banner'))
            }
          }
        })
      }
    })
  })
}
