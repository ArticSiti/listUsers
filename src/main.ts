import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { createPinia } from 'pinia'
import router from './router'
import './assets/styles/global/index.scss'

createApp(App).use(router).use(createPinia()).mount('#app')
