import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css';

import router from './router'

createApp(App).use(router).mount('#app')
