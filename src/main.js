import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import store from '@/store/index'

createApp(App).use(store).use(router).mount('#app')

// const app = createApp()
// app.use(store)
// app.use(router)
// app.mount(App, '#app')