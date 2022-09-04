 import { createStore } from "vuex";
 import axios from 'axios'

 export default createStore({
     state(){
         return{
           
         }
     },
//     getters: {
//       getUsers: (state) => state.formData
//     },

   actions:{
         sendDataForm(_, formData){
             axios.post('https://inovola-stage.com/tahara-backend/api/send-contact',this.formData)
             console.log('from Action',formData)
     }
    
    }
 })