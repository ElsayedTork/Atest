<template>
  <section class="contact">
    <div class="container">
      <div class="row">
        <div class="contact__data col-lg-5">
          <header class="contact__data__heading">
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
          <SharedSocial></SharedSocial>
        </div>
        <div class="contact__form col-lg-7">
          <div class="d-flex justify-content-center align-items-end">
            <form @submit.prevent="submitContact">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="exampleInputName" class="form-label"
                      >الإسم</label
                    >
                    <input
                      type="text"
                      class="form-control shadow-none"
                      id="exampleInputName"
                      placeholder="اسم المستخدم"
                      aria-describedby="emailHelp"
                      v-model="formData.name"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="exampleInputName" class="form-label"
                      >البريد الالكتروني</label
                    >
                    <input
                      type="email"
                      class="form-control shadow-none text-end"
                      id="exampleInputName"
                      placeholder="example@gmail.com"
                      aria-describedby="emailHelp"
                      v-model="formData.email"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="mb-3">
                    <label for="exampleInputName" class="form-label"
                      >رقم الهاتف</label
                    >
                    <input
                      type="text"
                      class="form-control shadow-none"
                      id="exampleInputName"
                      placeholder="رقم الهاتف"
                      aria-describedby="emailHelp"
                      v-model="formData.phone"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label"
                    >الموضوع</label
                  >
                  <input
                    type="text"
                    class="form-control shadow-none"
                    id="exampleInputName"
                    placeholder="عنوان الموضوع"
                    aria-describedby="emailHelp"
                    v-model="formData.subject"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    v-model="formData.reason"
                  >
                    <option selected></option>
                    <option value="1">complaint</option>
                    <option value="2">suggest</option>
                    <option value="3">review</option>
                    <option value="3">question</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >الرسالة</label
                  >
                  <textarea
                    class="form-control shadow-none"
                    placeholder="أكتب رسالتك..."
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="formData.body"
                  ></textarea>
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

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        reason: '',
        body: '',
      },
    };
  },
  components: {
    SharedSocial,
  },
  methods: {
    submitContact() {
      console.log(this.formData);

      this.$store.dispatch('sendDataForm', this.formData);
      this.formData = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  background-color: var(--second-color);
  padding-block-start: 5.0625rem;
  padding-block-end: 3.5rem;
  &__data {
    &__heading {
      h3 {
        color: #fff;
        font-weight: 700;
      }
      p {
        color: rgba(255, 255, 255, 1);
        font-size: 1.125rem;
        font-weight: 500;
      }
    }
    ul {
      margin-block-end: 1.5rem;
      li {
        font-size: 1.125rem;
        font-weight: 500;
        margin-block-end: 0.5rem;
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  &__form {
    form {
      background-color: #fff;
      /*  max-width: 39.25rem;*/
      width: 100%;
      border-radius: 1rem;
      padding-block-start: 2rem;
      padding-block-end: 1.5rem;
      padding-inline: 2rem;
      label {
        color: var(--second-color);
        font-size: 1rem;
        font-weight: 500;
      }
      input,
      textarea,
      select {
        background-color: rgba(241, 232, 248, 0.5) !important;
        border-color: transparent;
        padding: 1rem;
      }
      button.btn-primary {
        background-color: var(--second-color) !important;
        color: #fff;
        border-radius: 10px;
        padding-inline: 2rem;
        padding-block: 0.75rem;
      }
    }
  }
}
</style>
