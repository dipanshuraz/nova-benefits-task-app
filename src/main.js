import { createApp } from 'vue'
import App from './App.vue'
// import Notifications from 'vue-notification'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@morioh/v-msg/dist/msg.min.css'; 

// import Toaster from '@meforma/vue-toaster';

// import Msg from '@morioh/v-msg';



import router from './router'
import store from '@/store/index'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js' 


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

// const app = createApp()
// app.use(store)
// app.use(router)
// app.mount(App, '#app')