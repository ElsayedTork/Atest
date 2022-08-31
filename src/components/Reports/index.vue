<template>
  <section class="Report">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 Report__start">
          <div class="Report__start__flexContainer">
            <h3>التقويم</h3>
            <p>
              شاهدي جميع بياناتك المدخلة في طريقة واضحة من خلال تقارير التحليل
              المتكررة والتقويم, ستتمكني من استخلاص النتائج بسرعة.
            </p>
          </div>
        </div>
        <div class="col-sm-6 Report__end"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
.Report {
  background-color: #cffaf8;
}
.Report .Report__end {
  background-image: url('./../../assets/Report.svg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 33rem;
}
.Report .Report__start {
  background-image: url('./../../assets/ReportItemEnd.svg');
  background-repeat: no-repeat;
  background-position: 10px 39px;
}

.Report .Report__start h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--second-color);
}
.Report .Report__start p {
  font-weight: 500;
  color: var(--second-color);
  width: 23.75rem;
}

.Report .Report__start .Report__start__flexContainer {
  display: flex;
  flex-flow: column;
  align-items: start;
  justify-content: center;
  height: 100%;
  padding-inline-start: 6.25rem;
}
</style>
