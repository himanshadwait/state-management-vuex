import { createStore } from 'vuex'

import counterModule from "./modules/counter/index"
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

//global store
const store = createStore({
  modules: {
    counter: counterModule // Namespace of the counterModule
  },
  // root state or module or authentication module
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
})

export default store
