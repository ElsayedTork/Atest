<template>
  <header-com></header-com>

  <router-view></router-view>

  <footer-com></footer-com>
</template>

<script>
import HeaderCom from './components/Header/index.vue';
import FooterCom from './components/Footer/index.vue';

export default {
  components: {
    HeaderCom,

    FooterCom,
  },
};
</script>

<style lang="scss">
@import url('http://fonts.cdnfonts.com/css/tajawal');

:root {
  --main-color: #06716a;
  --second-color: #3a3791;
  ----vc-pgn-background-color: red;
}

.colorIcon {
  color: #fff !important;
}
ul {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none !important;
}
ul li {
  list-style: none;
}

* {
  box-sizing: border-box;
}
body {
  font-family: 'Tajawal', sans-serif;
  box-sizing: border-box;
}

p {
  font-weight: 500;
}

/* carousel */
ol.carousel__pagination {
  li.carousel__pagination-item {
    .carousel__pagination-button {
      background-color: rgba(6, 113, 106, 0.3);
      width: 9px;
      height: 8px;
    }

    button.carousel__pagination-button--active {
      background: rgba(6, 113, 106, 1);
    }
  }
}

</style>
