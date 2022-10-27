import apiClient from '@/service/AxiosClient.js'
export default {
  getUsers(page, perPage) {
    return apiClient.get('/user?_page=' + page + '&_limit=' + perPage)
  }
}
