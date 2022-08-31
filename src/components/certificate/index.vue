<template>
  <section class="certificate">
    <!-- Start Slider -->

    <!-- End Slider -->
    <h3 class="text-center">شهادات</h3>
    <div class="container">
      <section class="certificate__Container">
        <div class="row gx-5">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="certificate__Container__Item">
              <h4>بتول محمد</h4>
              <p>
                طهارة أكثر من مجرد تطبيق بالنسبة لي, يغطي جميع جوانب صحة المرأة
                واستطيع معرفة الاجابات على أسئلتي من مصدر موثوق
              </p>
              <ul>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="certificate__Container__Item">
              <h4>بتول محمد</h4>
              <p>
                طهارة أكثر من مجرد تطبيق بالنسبة لي, يغطي جميع جوانب صحة المرأة
                واستطيع معرفة الاجابات على أسئلتي من مصدر موثوق
              </p>
              <ul>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="certificate__Container__Item">
              <h4>بتول محمد</h4>
              <p>
                طهارة أكثر من مجرد تطبيق بالنسبة لي, يغطي جميع جوانب صحة المرأة
                واستطيع معرفة الاجابات على أسئلتي من مصدر موثوق
              </p>
              <ul>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="certificate_bolitsSlider">
          <ul>
            <li class="active"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>

      <div></div>
      <!-- End Slider -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.certificate {
  padding-block: 8.5rem;
  background-color: #fcf9ef;
  /*background-color: blue;*/
}
.certificate h3 {
  color: var(--main-color);
  font-size: 2.5rem;
  font-weight: 700;
  margin-block-end: 2.125rem;
}

.certificate .certificate__Container__Item {
  background-color: #fff;
  border-radius: 1.5rem;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
}
.certificate .certificate__Container__Item h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--main-color);
  margin-block-end: 0.6875rem;
}
.certificate .certificate__Container__Item p {
  font-weight: 500;
  color: var(--main-color);
  line-height: 1.5rem;
}
.certificate .certificate__Container__Item ul {
}
.certificate .certificate__Container__Item ul li {
  display: inline-block;
}
.certificate .certificate__Container__Item ul li i {
  color: #ffee27;
}

.certificate_bolitsSlider {
  text-align: center;
  display: flex;
  justify-content: center;
  margin-block-start: 3.5rem;
}
.certificate_bolitsSlider ul {
  width: fit-content;
}
.certificate_bolitsSlider ul li {
  width: 9px;
  height: 9px;
  background-color: rgba(6, 113, 106, 0.3);
  border-radius: 50%;
  display: inline-block;
  margin-inline: 4px;
}

.certificate_bolitsSlider ul li.active {
  background-color: var(--main-color);
}
</style>
