import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootStore, IStoreType } from './type'
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
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
