<template>
  <Footer class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="mb-4">
          <div class="footer__container__up">
            <figure>
              <img
                src="../../assets/LogoFooter.svg"
                class="img-fluid"
                alt=""
                srcset=""
              />
            </figure>
            <h3 class="my-3">احصل على التطبيق</h3>
          </div>
          <div class="footer__container__download-app">
            <button href="#">
              <span>Google Play</span> <i class="fa-brands fa-google-play"></i>
            </button>
            <button href="#" class="me-3 my-3">
              <span>App store</span> <i class="fa-brands fa-apple"></i>
            </button>
          </div>
        </div>
        <div class="footer__container__fast-links">
          <h4>روابط سريعة</h4>
          <ul>
            <li>
              <a href="#">عن طهارة</a>
            </li>
            <li>
              <a href="#">استشارات طبية</a>
            </li>
            <li>
              <a href="#">مقالات</a>
            </li>
            <li>
              <a href="#">تواصلى معنا</a>
            </li>
          </ul>
        </div>
        <div class="footer__container__info">
          <h4>معلومات التواصل</h4>
          <ul>
            <li>البريد الالكتروني : tahara@tahara.com.sa</li>
            <li>رقم الهاتف : 56658544455</li>
            <li>موقعنا: http//tahara.com.sa/</li>
          </ul>
        </div>
      </div>
      <div class="footer__down">
        <shared-social
          bgColor="rgba(6, 113, 106, 0.1)"
          colorIcon="#06716A"
        ></shared-social>

        <div class="footer__down__rights">
          جميع الحقوق محفوظه2022<span class="mx-1">tahara</span> &#169;
        </div>
        <div class="footer__down__privacy mt-md-2 mt-1">
          <a class="#">سياسة الخصوصية</a
          ><a href="#" class="ms-3">الأحكام والشروط</a>
        </div>
      </div>
    </div>
  </Footer>
</template>
<script scoped>
import SharedSocial from '../Shared/SharedSocial.vue';

export default {
  components: {
    SharedSocial,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fffcf6;
  padding-block: 3rem;
  &__container {
    display: flex;
    justify-content: space-between;

    &__up {
      h3 {
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--main-color);
      }
    }

    &__download-app {
      button {
        color: #fff;
        font-weight: 700;
        padding-inline: 1.625rem;
        padding-block: 0.9375rem;
        background-color: var(--main-color);
        border-color: transparent;
        border-radius: 0.625rem;
        width: 10rem;
      }
    }
    &__fast-links,
    &__info {
      h4 {
        margin-block-end: 1.5rem;
        font-weight: 700;
        color: var(--main-color);
      }
      ul {
        li {
          margin-block-end: 1.5rem;
          font-weight: 500;
          a {
            color: #1d1d26 !important;
          }
        }
      }
    }
  }

  &__down {
    display: flex;
    justify-content: space-between;
    &__rights {
      color: #1d1d26 !important;
      span {
        color: var(--main-color);
      }
    }
    &__privacy {
      font-weight: 500;
      a {
        color: #1d1d26 !important;
      }
    }
  }
}

@media (max-width: 992px) {
  footer .footer__container {
    display: block;
  }
  footer .Footer_GridContainer {
    text-align: center;
    display: block;
  }
  footer .Footer_GridContainer div {
    padding-block-start: 1.25rem;
  }
  .footer__down {
    display: block;
  }
}

@media (max-width: 768px) {
  footer {
    padding-block: 1rem;
  }
}

footer .footer__container_center ul li {
  margin-block-end: 0.5rem;
}
</style>
