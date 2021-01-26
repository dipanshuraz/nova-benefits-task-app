import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './router';
import store from '@/store/index';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
 
const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueSweetalert2);
app.mount('#app');
