import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";

 import App from './App.vue';
 import store from './Store/index.js';

import HomeCom from './pages/Home/HomeCom.vue'
import aboutComp from './pages/About/aboutComp.vue'
import contactComp from './pages/contact/contactComp.vue'
import consultComp from './pages/Consult/consultComp.vue'
import articleComp from './pages/article/articleComp.vue'
 
const routes = [
     { path: '/', component: HomeCom },
     { path: '/about', component: aboutComp },
     {
        path:'/contact',component:contactComp
     },
     {
        path:'/consult',component:consultComp
     },
     {
        path:'/consult',component:consultComp

     },
     {
        path:'/article',component:articleComp
     }
   ]
  
   const router = createRouter({
     history:createWebHistory(),
     routes
   })

const app = createApp(App)

 app.use(router)
 app.use(store)
 app.mount('#app');
