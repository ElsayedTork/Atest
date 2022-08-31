<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <section class="header-FlexContainer">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand" href="#"
              ><img src="../../assets/logo.svg" alt="" srcset=""
            /></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                  to="/"
                  class="nav-link"
                  aria-current="page"
                  href="#"
                  >الرئيسية</router-link
                >
              </li>
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
          <div class="header-btn-downloadApp">
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

<style>
.header-FlexContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
header .bg-light {
  background: #cffaf8 !important;
  padding-block: 2rem;
}

header nav .nav-item {
  margin-inline-start: 50px;
}

header nav .nav-item .nav-link {
  color: var(--main-color);
  font-weight: 700;
}

header nav .header-btn-downloadApp .btn-success {
  background-color: var(--main-color);
}
</style>
