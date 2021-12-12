import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

export default createStore({
    plugins: [createPersistedState()], // Guarda los estados al refrescar o cerrar la ventana
    state: {
      isAuthenticated: false,
      token: '',
    },
    mutations: {
      initializeStore(state) {
        if (localStorage.getItem("token")) {
            state.token = localStorage.getItem("token")
            state.isAuthenticated = true
        }
      },
      // establecer un token
      setToken(state, token) {
        state.token = token
        state.isAuthenticated = true
      },
      // eliminar token
      removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
      }
    }
})