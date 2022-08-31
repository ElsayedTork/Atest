 import { createStore } from "vuex";
// import axios from 'axios'

 export default createStore({
     state(){
         return{
             formData: {}
         }
     },
//     getters: {
//       getUsers: (state) => state.formData
//     },

//     actions:{
//          sendDataForm({commit}, formData){
//             axios.post('https://about-vue-call-default-rtdb.firebaseio.com/formData.json',this.formData)
//             commit('sendDataForm', formData.data)
//     },
//     mutations: {
//         sendDataForm(state, formData) {
//               state.dataForm = formData
//           }
//         }
// }
 })