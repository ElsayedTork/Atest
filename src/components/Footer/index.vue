<template>
  <Footer class="footer">
    <div class="container">
      <div class="footer__container Footer_GridContainer">
        <div class="mb-4">
          <div>
            <figure>
              <img
                src="../../assets/LogoFooter.svg"
                class="img-fluid"
                alt=""
                srcset=""
              />
            </figure>
            <h3 class="footer__heading my-3">احصل على التطبيق</h3>
          </div>
          <div class="footer_DownloadApp">
            <button href="#">
              <span>Google Play</span> <i class="fa-brands fa-google-play"></i>
            </button>
            <button href="#" class="me-3 my-3">
              <span>App store</span> <i class="fa-brands fa-apple"></i>
            </button>
          </div>
        </div>
        <div class="footer__container_center">
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
        <div class="footer__container_center">
          <h4>معلومات التواصل</h4>
          <ul>
            <li>البريد الالكتروني : tahara@tahara.com.sa</li>
            <li>رقم الهاتف : 56658544455</li>
            <li>موقعنا: http//tahara.com.sa/</li>
          </ul>
        </div>
      </div>
      <div class="Footer_GridContainer">
        <shared-social
          bgColor="rgba(6, 113, 106, 0.1)"
          colorIcon="#06716A"
        ></shared-social>

        <div class="footer-rights">
          جميع الحقوق محفوظة<span>Tahar</span>© 2022
        </div>
        <div class="footer__privacy">
          <a class="ms-3">سياسة الخصوصية</a><a href="#">الأحكام والشروط</a>
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

<style scoped>
footer {
  background-color: #fffcf6;
  padding-block: 3rem;
}
footer .footer__container {
  display: flex;
}

footer .footer__container h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--main-color);
}

footer .footer__container .footer_DownloadApp button {
  color: #fff;
  font-weight: 700;
  padding-inline: 1.625rem;
  padding-block: 0.9375rem;
  background-color: var(--main-color);
  border-color: transparent;
  border-radius: 0.625rem;
}

footer .footer__container_center h4 {
  margin-block-end: 1.5rem;
  font-weight: 700;
  color: var(--main-color);
}

footer .footer__container_center ul li {
  margin-block-end: 1.5rem;
  font-weight: 500;
}

footer .footer__container_center ul li a {
  color: #1d1d26 !important;
}

footer .Footer_GridContainer {
  display: flex;
  justify-content: space-between;
}

footer .footer-rights {
  color: #1d1d26 !important;
}
footer .footer__privacy {
  font-weight: 500;
}

footer .footer__privacy a {
  color: #1d1d26 !important;
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
}
</style>
