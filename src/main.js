import { createApp } from 'vue';
 import { library } from "@fortawesome/fontawesome-svg-core";
 import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
 import { fas } from '@fortawesome/free-solid-svg-icons'
 library.add(fas);
 import { fab } from '@fortawesome/free-brands-svg-icons';
 library.add(fab);
 import { far } from '@fortawesome/free-regular-svg-icons';
 library.add(far);
 import { dom } from "@fortawesome/fontawesome-svg-core";
 dom.watch();

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";

 import App from './App.vue';
 import store from './Store/index.js';
 import router from './router/router.js' 


const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon);

 app.use(router)
 app.use(store)
 app.mount('#app');
