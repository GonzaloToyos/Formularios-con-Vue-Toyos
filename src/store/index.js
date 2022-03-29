import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: []
  },
  getters: {
  },
  mutations: {
    llenarUsers(state, userActions) {
      state.usuarios = userActions
    }
  },
  actions: {
    async obtenerUsers({ commit }) {
      let url = "https://6242550cb6734894c14f948b.mockapi.io/users";

      const response = await fetch(url);
      const usuarios = await response.json();

      commit('llenarUsers', usuarios)
    }
  },
  modules: {
  }
})
