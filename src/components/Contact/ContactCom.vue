<template>
<section class="contact">
    {{ $store.state.count }}
    <font-awesome-icon icon="fa-brands fa-facebook" />
    <font-awesome-icon icon="fa-brands fa-facebook" />
    <font-awesome-icon icon="fa-brands fa-facebook" />
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <header>
                    <h3>نحب أن نسمع منك</h3>
                    <p>اذا كان لديك أي استفسارات تواصلي معنا</p>    
                </header>
                
                    <ul>
                        <li>البريد الالكتروني:</li>
                        <li>tahara@tahara.com.sa</li>
                    </ul>
                    <ul>
                        <li>رقم الهاتف:</li>
                        <li>56658544455</li>
                    </ul>
                    <ul>
                        <li>موقعنا:</li> 
                        <li>http//tahara.com.sa/</li>
                    </ul> 
     <!-- Social Icons  -->
     <SharedSocial></SharedSocial>
            </div>
            <div class="col-sm-8">
                <div class="d-flex justify-content-center align-items-end">
                    <form @submit.prevent="submitContact">
                        <div class="row">
                          <div class="col-6">
                            <div class="mb-3">
                                <label for="exampleInputName" class="form-label">الإسم</label>
                                <input type="text" class="form-control" id="exampleInputName" 
                                placeholder="اسم المستخدم" aria-describedby="emailHelp"
                                 v-model="formData.nameForm"/> 
                              </div>
                          </div>
                          <div class="col-6">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">البريد الإلكتروني</label>
                                <input type="email" dir="rtl" class="form-control"
                                 placeholder="البريد الالكتروني"
                                  id="exampleInputEmail1" aria-describedby="emailHelp"
                                  v-model="formData.email"/>
                                
                              </div>
                          </div>                     
                        </div>
                       <div class="row">
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label">الموضوع</label>
                            <input type="text" class="form-control" id="exampleInputName" 
                            placeholder="عنوان الموضوع" aria-describedby="emailHelp"
                            v-model="formData.title"
                            />
                          </div>
                       </div>
                       <div class="row">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">الرسالة</label>
                            <textarea class="form-control" placeholder="أكتب رسالتك..." id="exampleFormControlTextarea1" rows="3" 
                            v-model="formData.message"></textarea>
                          </div>
                       </div>              
                        <button type="submit" class="btn btn-primary">إرسال</button>
                      </form> 
                </div>

            </div>
        </div>
    </div>
</section>

</template>

<script>
   import SharedSocial from './../Shared/SharedSocial.vue';
   import axios from 'axios' 
   // import { mapActions } from 'vuex' 
   export default {
        
    data(){
            return{
          formData:{
          nameForm:'',
          email:'',
          title:'',
          message:''
          },
            }
        },
     components:{
        SharedSocial
     },
     methods:{
        //  ...mapActions(['sendDataForm']),
    //     sendDataForm() {
    //     this.sendDataForm(this.formData)
        // this.$store.dispatch("sendDataForm", this.formData)
        submitContact(){
         axios.post('https://about-vue-call-default-rtdb.firebaseio.com/formData.json',this.formData)
    }
     },



    
    
    }
</script>

<style scoped>
 section.contact{
   background-color: var(--second-color);
   padding-block-start: 5.0625rem;
   padding-block-end: 3.5rem;
 }

 section.contact header h3{
  color: #fff;
  font-weight: 700;
 }

 section.contact header p{
    color: rgba(255, 255, 255, 1);
    font-size: 1.125rem;
    font-weight: 500;
 }

 section.contact form{
   background-color: #fff;
   max-width: 39.25rem;
   border-radius: 1rem;
   padding-block-start: 2rem;
   padding-block-end: 1.5rem;
   padding-inline: 2rem;
 }
 section.contact form label{
  color: var(--second-color);
  font-size: 1rem;
  font-weight: 500;
 }
 section.contact form input,section.contact form textarea{
    background-color: rgba(241, 232, 248, 0.5) !important;
    border-color: transparent;
    padding: 1rem;
}
 section.contact form button.btn-primary{
    background-color: var(--second-color) !important;
    color: #fff;
    border-radius: 10px;
    padding-inline: 2rem;
    padding-block: 0.75rem;
 }
 section.contact ul{
    margin-block-end: 1.5rem;
 }
 section.contact ul li{
    color: rgba(255, 255, 255, 1);
    font-size: 1.125rem;
    font-weight: 500;
    margin-block-end: 0.5rem;
 }

form input[type="text"]:-moz-placeholder,
form input[type="email"]:-moz-placeholder,
form textarea:-moz-placeholder {
    text-align: start;
    color: rgba(58, 55, 145, 0.4);
    font-size: 1.125rem;
    font-weight: 500;
}

form input[type="text"]:-ms-input-placeholder,
form input[type="email"]:-ms-input-placeholder,
form textarea:-ms-input-placeholder {
    text-align: start;
    
    color: rgba(58, 55, 145, 0.4);
    font-size: 1.125rem;
    font-weight: 500;}

form input[type="text"]::-webkit-input-placeholder ,
form input[type="email"]::-ms-input-placeholder,
form textarea:-ms-input-placeholder{
    text-align: start;
    
    color: rgba(58, 55, 145, 0.4);
    font-size: 1.125rem;
    font-weight: 500;}
</style>

