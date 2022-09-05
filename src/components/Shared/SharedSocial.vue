<template>
  <ul class="contact__social-media">
    <li>
      <a href="#">
        <i
          class="fa-brands fa-facebook-f"
          :style="{ backgroundColor: bgColor, color: colorIcon }"
        ></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i
          class="fa-brands fa-twitter"
          :style="{ backgroundColor: bgColor, color: colorIcon }"
        ></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i
          class="fa-brands fa-instagram"
          :style="{ backgroundColor: bgColor, color: colorIcon }"
        ></i>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['bgColor', 'colorIcon'],
  data() {
    return {
      bgcolor: this.bgColor,
    };
  },
};
</script>
<style lang="scss">
ul.contact__social-media li,
ul.contact__social-media li {
  display: inline-block;
  a {
    color: #fff !important;
    margin-inline-end: 0.75rem;
  }
  i,
  svg {
    width: 18px;
    height: 18px;
    background: rgba(255, 255, 255, 0.1) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: 0.75rem;
    border-radius: 50%;
    padding: 10px;
  }
}
</style>
