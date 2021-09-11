import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessKey: {},
  },

  mutations: {
    setAccessKey(state, accessKey) {
      state.accessKey = accessKey;
    },
  },

  getters: {
    getAccessKey: (state) => state.accessKey,
  },

  actions: {
    accessKeyData({ commit }) {
      axios
        .get("https://vue-study.skillbox.cc/api/users/accessKey")
        .then((response) => {
          commit("setAccessKey", response.data.accessKey);
        });
    },
  },
});
