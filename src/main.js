import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'

createApp(App)
  .use(store)
  .mount('#app')
