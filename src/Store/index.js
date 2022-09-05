import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state() {
    return {
      certifications: [],
    };
  },
  mutations: {
    setCertifications(state, certifications) {
      state.certifications = certifications;
    },
  },

  actions: {
    actionCertifications({ commit }) {
      axios
        .get('https://inovola-stage.com/tahara-backend/api/reviews')
        .then((response) => {
          commit('setCertifications', response.data.data);
        });
    },
    sendDataForm(_, formData) {
      axios.post(
        'https://inovola-stage.com/tahara-backend/api/send-contact',
        formData
      );
    },
  },
});
