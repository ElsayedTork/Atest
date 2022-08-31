<template>
  <header-com></header-com>

  <router-view></router-view>

  <footer-com></footer-com>
</template>

<script>
import HeaderCom from './components/Header/HeaderCom.vue';
import FooterCom from './components/Footer/FooterCom.vue';

export default {
  components: {
    HeaderCom,

    FooterCom,
  },
};
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/tajawal');
:root {
  --main-color: #06716a;
  --second-color: #3a3791;
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
</style>
