import { BASE_URL } from './request/config'
import { axiosRequest } from './request/request'

const axRequest = new axiosRequest({
  baseURL: BASE_URL
})
export default axRequest
