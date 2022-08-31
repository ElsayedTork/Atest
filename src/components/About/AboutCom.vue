<template>
 <section class="About">
  <div class="container">
  <div class="row">
   <div class="col-8 About__Start">
       <h3 class="text-center">
        تعرفي على مراحل دورتك بالتفصيل
       </h3>
       <section class="About__ItemContainer">
          <div class="About__Item">
            <h5>مرحبلة ما قبل الاباضة</h5>
            <p>تتبع هذه المرحلة يشجعك على القيام بفعاليات مختلفة مثل الرياضة</p>
          </div>
          <div class="About__Item">
            <h5>مرحبلة ما قبل الاباضة</h5>
            <p>تتبع هذه المرحلة يشجعك على القيام بفعاليات مختلفة مثل الرياضة</p>
          </div>
          <div class="About__Item">
            <h5>مرحبلة ما قبل الاباضة</h5>
            <p>تتبع هذه المرحلة يشجعك على القيام بفعاليات مختلفة مثل الرياضة</p>
          </div>


       </section>
   </div>
   <div class="col-4 About__End">
 <figure class="text-center">
    <img src="../../assets/About.png" alt="" srcset="">
 </figure>
   </div>

  </div>
</div>
 </section>    
</template>
  <script>
   export default{
  
   }
  
  </script>
  
  <style scoped>
    .About__ItemContainer{
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    .About{
        background: rgba(173, 68, 128, 0.75);
        padding-block: 7.5rem;
    }
    .About .About__Start h3{
      font-size: 40px;
      color: #fff;
      margin-block-end: 1.25rem;
    }
    .About .About__Start .About__Item{
      color: var(--main-color);
      background-color: #fff;
      width: fit-content;
      padding-inline: 1.25rem;
      padding-block: 1.25rem;
      margin-block: 0.625rem;
      border-radius: 1.5rem;
    }
    .About .About__Start .About__Item h5{
     font-size: 1.5rem;
     font-weight: 700;
    }
    .About .About__Start .About__Item p{
      font-weight: 500;
    }
    .About__End figure img{
      height: 31.25rem;
    }
  </style>