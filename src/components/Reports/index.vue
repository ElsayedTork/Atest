<template>
  <section class="report">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 report__start">
          <div class="report__start__flex-container">
            <h3>التقويم</h3>
            <p>
              شاهدي جميع بياناتك المدخلة في طريقة واضحة من خلال تقارير التحليل
              المتكررة والتقويم, ستتمكني من استخلاص النتائج بسرعة.
            </p>
          </div>
        </div>
        <div class="col-lg-6 report__end"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.report {
  background-color: #cffaf8;
  &__start {
    background-image: url('./../../assets/ReportItemEnd.svg');
    background-repeat: no-repeat;
    background-position: 10px 39px;
    &__flex-container {
      display: flex;
      flex-flow: column;
      align-items: start;
      justify-content: center;
      height: 100%;
      padding-inline-start: 6.25rem;

      h3 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--second-color);
        margin-block-end: 0.6875rem;
      }
      p {
        font-weight: 500;
        color: var(--second-color);
        width: 22.5rem;
        line-height: 1.625rem;
      }
    }
  }

  &__end {
    background-image: url('./../../assets/Report.svg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 33rem;
  }
}

@media (max-width: 992px) {
  .report {
    background-image: url('./../../assets/Report.svg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 33rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &__start {
      background-position: 50% -30px;
      &__flex-container {
        padding-inline-start: 0.5rem !important;
        padding-block: 2rem;
        h3 {
          width: 100%;
        }
        p {
          width: 50%;
        }
      }
    }
    &__end {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .report__start__flex-container {
    p {
      width: 80%;
    }
  }
}

@media (max-width: 576px) {
  .report {
    &__start {
      background-position: 5% -30px;
      &__start__flex-container {
        p {
          width: 100% !important;
        }
      }
    }
  }
}
</style>
