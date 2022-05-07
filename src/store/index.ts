import { createStore } from 'vuex'
import { IRootStore } from './type'
import loginModule from './login/login'
const store = createStore<IRootStore>({
  state: {
    name: '111'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}
export default store
