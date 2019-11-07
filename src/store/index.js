import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: [
      { name: "Ivan", surname: "Venediktov", email: "ivan@venediktov.co.uk", query: "" }
    ]
  },
  mutations: {
    addUserRecord(state, userRecord) {
      state.userData.push(userRecord)
    }
  },
  actions: {
  },
  getters: {
    allUserData: state => {
      return state.userData
    }
  },
  modules: {
  }
})
