<template>
  <section class="About" :style="{ backgroundColor: flagbgcolor }">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 About__Start">
          <div class="About__Start_son">
            <h3>تعرفي على مراحل دورتك بالتفصيل</h3>
            <section class="About__ItemContainer">
              <div
                class="About__Item"
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
            <img src="../../assets/aboutItem1.svg" class="" alt="" srcset="" />
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
          // imgSrc: '../../assets/aboutItem1.svg',
        },
        {
          id: 2,
          title: ' مرحلة الاباضة  ',
          description: ' تتبع هذه المرحلة مهم عند التخطيط للحمل',
          isBgWhite: false,
          // imgSrc: '../../assets/aboutItem1.svg',
        },
        {
          id: 3,
          title: ' مرحلة الدورة / الحيض',
          description: 'تتبع هذه المرحلة يساعدك على تخطيط شهرك لتكوني مستعدة ',
          isBgWhite: false,
          // imgSrc: '../../assets/aboutItem1.svg',
        },
      ],
      flagbgcolor: 'rgba(139, 222, 216, 1)',
      imgSrc: '../../assets/aboutItem1.svg',
    };
  },
  methods: {
    handleClick(id) {
      if (id == 1) {
        this.flagbgcolor = 'rgba(139, 222, 216, 1)';
      } else if (id == 2) {
        this.flagbgcolor = 'rgba(91, 86, 213, 0.85)';
      } else if (id == 3) {
        this.flagbgcolor = 'rgba(173, 68, 128, 0.75)';
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

<style scoped>
.About {
  padding-block: 7.5rem;
}

.About__Start h3 {
  font-size: 40px;
  color: #fff;
  margin-block-end: 1.9375rem;
  font-weight: 700;
}
.About__Start .About__ItemContainer {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: start;
}
.About .About__Start .About__Item {
  color: var(--main-color);
  width: 33.125rem;
  padding-inline: 1.25rem;
  padding-block: 1.25rem;
  margin-block: 0.625rem;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 0.75);
}
.About .About__Start .About__Item h5 {
  font-size: 1.5rem;
  font-weight: 700;
}
.About .About__Start .About__Item p {
  font-weight: 500;
}
.About__End figure img {
  height: 31.25rem;
}
.About__Start_son {
  margin: 0 auto;
  width: fit-content;
}
@media (max-width: 576px) {
  .About .About__Start h3 {
    width: 18rem;
  }
  .About .About__Start .About__Item {
    width: 18rem;
  }
  .About__Start h3 {
    font-size: 1.6rem;
  }
}
@media (max-width: 992px) {
  .About .About__Start {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .About .About__Start {
    margin-block-end: 1.5625rem;
  }
}
</style>
