import { Module } from 'vuex'
import { IRootStore } from '../type'
import { ILoginStore } from './type'
import { accountLoginAction, requestUserInfoById } from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localeCache from '@/utils/catch'
const loginModule: Module<ILoginStore, IRootStore> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: ''
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
      console.log(state.token)
    }
    // changeUserInfo(){}
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginAction(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localeCache.setCache('token', token)
      const userInfoResult = await requestUserInfoById(id)
      console.log(userInfoResult)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('phone', payload)
    }
  }
}
export default loginModule
