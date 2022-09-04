import { createApp } from 'vue';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";

 import App from './App.vue';
 import store from './Store/index.js';
 import router from './router/router.js' 


const app = createApp(App)

 app.use(router)
 app.use(store)
 app.mount('#app');
