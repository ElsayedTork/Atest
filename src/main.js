import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";

 import App from './App.vue';
 import store from './Store/index.js';
 
import HomeCom from './pages/home/index.vue'
import aboutComp from './pages/about/index.vue'
import contactComp from './pages/contact/index.vue'
import consultComp from './pages/consult/index.vue'
import articleComp from './pages/article/index.vue'
 
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
