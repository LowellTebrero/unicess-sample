import './assets/main.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { clerkPlugin } from 'vue-clerk'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

app.use(VCalendar, {})
app.use(createPinia())
app.use(router)

app.use(clerkPlugin, {
    publishableKey: PUBLISHABLE_KEY
})

app.mount('#app')
