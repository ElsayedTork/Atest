<template>
  <section class="certificate">
    <h3 class="text-center">شهادات</h3>

    <div class="container">
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 5" :key="slide">
          <div
            class="col-sm-12 col-md-6 col-lg-4 px-3"
            style="width: fit-content"
          >
            <div class="carousel__item">
              <div class="certificate__item">
                <h4>بتول محمد</h4>
                <p>
                  طهارة أكثر من مجرد تطبيق بالنسبة لي, يغطي جميع جوانب صحة
                  المرأة واستطيع معرفة الاجابات على أسئلتي من مصدر موثوق
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
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },

    breakpoints: {
      576: {
        itemsToShow: 1,
        snapAlign: 'center',
      },

      992: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
.certificate {
  padding-block: 8.5rem;
  background-color: #fcf9ef;

  h3 {
    color: var(--main-color);
    font-size: 2.5rem;
    font-weight: 700;
    margin-block-end: 3rem;
  }

  .certificate__item {
    margin-block-end: 3.5rem;
    background-color: #fff;
    border-radius: 1.5rem;
    text-align: center;
    padding: 2rem;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
    h4 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--main-color);
      margin-block-end: 0.6875rem;
    }
    p {
      font-weight: 500;
      color: var(--main-color);
      line-height: 1.5rem;
    }
    ul {
      li {
        display: inline-block;

        i {
          color: #ffee27;
        }
      }
      li.active {
        background-color: var(--main-color);
      }
    }
  }

  .carousel__prev--in-active,
  .carousel__next--in-active {
    display: none;
  }
  .container {
    max-width: 56.25rem;
  }
}

@media (max-width: 768px) {
  .certificate {
    padding-block: 4em;
    background-color: #fcf9ef;
  }
}
</style>
