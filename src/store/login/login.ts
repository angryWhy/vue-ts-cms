import { Module } from 'vuex'
import { IRootStore } from '../type'
import { ILoginStore } from './type'
import {
  accountLoginAction,
  requestMenuByRoleId,
  requestUserInfoById
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localeCache from '@/utils/catch'
import router from '@/router'
const loginModule: Module<ILoginStore, IRootStore> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: ''
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
      console.log(state.token)
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //登录信息
      const loginResult = await accountLoginAction(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localeCache.setCache('token', token)
      //用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localeCache.setCache('userInfo', userInfo)
      //角色菜单
      const userMenusResult = await requestMenuByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localeCache.setCache('userMenus', userMenus)
      //！！！跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localeCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localeCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localeCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('phone', payload)
    }
  }
}
export default loginModule
