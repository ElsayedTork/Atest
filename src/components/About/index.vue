<template>
  <section class="About" :style="{ backgroundColor: flagbgcolor }">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 About__Start">
          <div class="About__Start__StartSon">
            <h3>تعرفي على مراحل دورتك بالتفصيل</h3>
            <section class="About__Start__StartSon__ItemContainer">
              <div
                class="About__Start__StartSon__ItemContainer__Item"
                v-for="stage in Stages"
                :key="stage.id"
                @click="handleClick(stage.id)"
                @dblclick="handledblClick(stage.id)"
                :style="{
                  backgroundColor: stage.isBgWhite
                    ? '#fff'
                    : 'rgba(255, 255, 255, .75)',
                }"
              >
                <h5>{{ stage.title }}</h5>
                <p>
                  {{ stage.description }}
                </p>
              </div>
            </section>
          </div>
        </div>
        <div class="col-lg-4 About__End">
          <div class="text-lg-start text-center">
            <img
              class="img-fluid"
              :src="require(`../../assets/${Stages[imgIdNum].imgSrc}.png`)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      Stages: [
        {
          id: 1,
          title: 'مرحبلة ما قبل الاباضة',
          description:
            'تتبع هذه المرحلة يشجعك على القيام بفعاليات مختلفة مثل الرياضة',
          isBgWhite: true,
          imgSrc: 'aboutItemimg1',
        },
        {
          id: 2,
          title: ' مرحلة الاباضة  ',
          description: ' تتبع هذه المرحلة مهم عند التخطيط للحمل',
          isBgWhite: false,
          imgSrc: 'aboutItemimg2',
        },
        {
          id: 3,
          title: ' مرحلة الدورة / الحيض',
          description: 'تتبع هذه المرحلة يساعدك على تخطيط شهرك لتكوني مستعدة ',
          isBgWhite: false,
          imgSrc: 'aboutItemimg3',
        },
      ],
      flagbgcolor: 'rgba(139, 222, 216, 1)',
      imgIdNum: 0,
    };
  },
  methods: {
    handleClick(id) {
      if (id == 1) {
        this.flagbgcolor = 'rgba(139, 222, 216, 1)';
        this.imgIdNum = 0;
      } else if (id == 2) {
        this.flagbgcolor = 'rgba(91, 86, 213, 0.85)';
        this.imgIdNum = 1;
      } else if (id == 3) {
        this.flagbgcolor = 'rgba(173, 68, 128, 0.75)';
        this.imgIdNum = 2;
      }

      this.Stages = this.Stages.map((stage) => {
        if (id !== stage.id) {
          return { ...stage, isBgWhite: false };
        } else {
          return { ...stage, isBgWhite: true };
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.About {
  padding-block: 7.5rem;
  &__Start {
    &__StartSon {
      margin: 0 auto;
      width: fit-content;
      h3 {
        font-size: 40px;
        color: #fff;
        margin-block-end: 1.9375rem;
        font-weight: 700;
      }

      &__ItemContainer {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        &__Item {
          color: var(--main-color);
          width: 33.125rem;
          padding-inline: 1.25rem;
          padding-block: 1.25rem;
          margin-block: 0.625rem;
          border-radius: 1.5rem;
          background-color: rgba(255, 255, 255, 0.75);

          h5 {
            font-size: 1.5rem;
            font-weight: 700;
          }
          p {
            font-weight: 500;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .About {
    &__Start {
      h3 {
        font-size: 1.5rem !important;
      }
      &__StartSon__ItemContainer__Item {
        width: 18rem !important;
      }
    }
  }
}

@media (max-width: 992px) {
  .About {
    &__Start {
      display: flex;
      justify-content: center;
      align-content: center;
      margin-block-end: 1.5625rem;
    }
  }
}
</style>
