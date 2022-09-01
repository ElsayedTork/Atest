<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <section class="header__flex-container">
          <div class="header__flex-container__innerflex">
            <router-link to="/" class="navbar-brand" href="#"
              ><img src="../../assets/logo.svg" alt="" srcset=""
            /></router-link>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                  to="/about"
                  class="nav-link"
                  aria-current="page"
                  href="#"
                  >عن طهارة</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/consult" class="nav-link" href="#"
                  >إستشارات طبية</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/article" class="nav-link" href="#"
                  >مقالات</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link" href="#"
                  >تواصل معنا</router-link
                >
              </li>
            </ul>
          </div>
          <div class="header__flex-container__download-App">
            <a href="#" class="btn btn-success">حملي التطبيق الأن</a>
          </div>
        </section>
      </div>
    </nav>
  </header>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  &__flex-container {
    display: flex;
    justify-content: space-between;
    width: 100%;

    &__innerflex {
      display: flex;
      justify-content: space-between;
      ul.navbar-nav {
        li.nav-item {
          margin-inline-start: 50px;
          .nav-link {
            color: var(--main-color);
            font-weight: 700;
          }
        }
      }
    }
    &__download-App {
      .btn-success {
        background-color: var(--main-color);
      }
    }
  }
  .bg-light {
    background: #cffaf8 !important;
    padding-block: 2rem;
  }
}

@media (max-width: 992px) {
  .header__flex-container__innerflex {
    display: block;
  }
}
@media (max-width: 576px) {
  .header__flex-container {
    display: block;
  }
}
</style>
