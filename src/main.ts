import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './style.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'
import 'primeicons/primeicons.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue)

// Register service worker for offline functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing
        installingWorker?.addEventListener('statechange', () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              alert('A new version is available! Please refresh the page.')
            }
          }
        })
      }
    })
  })
}

app.mount('#app')
