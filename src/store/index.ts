import { createStore } from "vuex";

export default createStore({
  state: { count: 1 },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
  modules: {},
});
