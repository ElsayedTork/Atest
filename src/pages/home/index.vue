<template>
  <about-com></about-com>
  <report-com></report-com>
  <certificate-com></certificate-com>
  <contact-com></contact-com>
</template>
<script>
import AboutCom from '../../components/About/index.vue';
import ReportCom from '../../components/Reports/index.vue';
import CertificateCom from '../../components/certificate/index.vue';
import ContactCom from '../../components/Contact/index.vue';
export default {
  components: {
    AboutCom,
    ReportCom,
    CertificateCom,
    ContactCom,
  },
};
</script>
