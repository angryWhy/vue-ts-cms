import axRequest from '..'
import { IAccount } from './type'
import { IDataType, ILoginType } from './type'
enum LoginApi {
  account = '/login',
  userInfo = '/users/'
}
export function accountLoginAction(account: IAccount) {
  return axRequest.post<IDataType<ILoginType>>({
    url: LoginApi.account,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return axRequest.get({
    url: LoginApi.userInfo + id
  })
}
