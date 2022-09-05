import { createRouter,createWebHistory } from 'vue-router';
import HomeCom from './../pages/home/index.vue'
import aboutComp from './../pages/about/index.vue'
import contactComp from './../pages/contact/index.vue'
import consultComp from './../pages/consult/index.vue'
import articleComp from './../pages/article/index.vue'
 
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
   export default router;