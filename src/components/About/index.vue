<template>
  <section class="About" :style="{ backgroundColor: flagbgcolor }">
    <div class="container">
      <div class="row">
        <div class="col-8 About__Start">
          <h3 class="text-center">تعرفي على مراحل دورتك بالتفصيل</h3>
          <section class="About__ItemContainer">
            <div
              class="About__Item"
              v-for="stage in Stages"
              :key="stage.id"
              @click="handleClick(stage.id)"
            >
              <h5>{{ stage.title }}</h5>
              <p>
                {{ stage.description }}
              </p>
            </div>
          </section>
        </div>
        <div class="col-4 About__End">
          <figure class="text-center">
            <img src="../../assets/About.png" alt="" srcset="" />
          </figure>
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
          title: '11مرحبلة ما قبل الاباضة',
          description:
            '11تتبع هذه المرحلة يشجعك على القيام بفعاليات مختلفة مثل الرياضة',
        },
        {
          id: 2,
          title: '22مرحبلة ما قبل الاباضة',
          description:
            '22تتبع هذه المرحلة يشجعك على القيام بفعاليات مختلفة مثل الرياضة',
        },
        {
          id: 3,
          title: '33مرحبلة ما قبل الاباضة',
          description:
            '33تتبع هذه المرحلة يشجعك على القيام بفعاليات مختلفة مثل الرياضة',
        },
      ],
      flagbgcolor: 'rgba(139, 222, 216, 1)',
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
      console.log(this.flagbgcolor);
    },
  },
};
</script>

<style scoped>
.About {
  /*  background: rgba(173, 68, 128, 0.75);  */
  padding-block: 7.5rem;
}

.About__Start h3 {
  font-size: 40px;
  color: #fff;
  margin-block-end: 1.25rem;
}
.About__Start .About__ItemContainer {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.About .About__Start .About__Item {
  color: var(--main-color);
  background-color: #fff;
  width: fit-content;
  padding-inline: 1.25rem;
  padding-block: 1.25rem;
  margin-block: 0.625rem;
  border-radius: 1.5rem;
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
</style>
