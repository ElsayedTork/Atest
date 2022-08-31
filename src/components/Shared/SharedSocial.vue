<template>
    <ul class="contact__socialMedia">
        <li>
            <a href="#">
                <i class="fa-brands fa-facebook-f"
                 :style="{backgroundColor:bgColor,color:colorIcon}"></i>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa-brands fa-twitter" :style="{backgroundColor:bgColor,color:colorIcon}"></i>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa-brands fa-instagram" :style="{backgroundColor:bgColor,color:colorIcon}"></i>
            </a>
        </li>
    </ul>
</template>
<script>
export default {
props:['bgColor','colorIcon'],
data(){
    return{
        bgcolor:this.bgColor,
    }
}
}
</script>
<style>
  section ul.contact__socialMedia li,footer ul.contact__socialMedia li{
        display: inline-block;
        
       }
      
section ul.contact__socialMedia li a,footer ul.contact__socialMedia li{
          color: #fff !important;
          margin-inline-end:0.75rem;
       }
      
section ul.contact__socialMedia li i,footer ul.contact__socialMedia li i{
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-inline: 0.75rem;
          border-radius: 50%;
      
        
       }
</style>