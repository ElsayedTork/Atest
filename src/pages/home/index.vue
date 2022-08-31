<template>
  <about-com></about-com>
  <report-com></report-com>
  <certificate-com></certificate-com>
  <contact-com></contact-com>
</template>
<script>
import AboutCom from '../../components/About/AboutCom.vue';
import ReportCom from '../../components/Reports/ReportsCom.vue';
import CertificateCom from '../../components/certificate/CertificateCom.vue';
import ContactCom from '../../components/Contact/ContactCom.vue';

export default {
  components: {
    AboutCom,
    ReportCom,
    CertificateCom,
    ContactCom,
  },
};
</script>
