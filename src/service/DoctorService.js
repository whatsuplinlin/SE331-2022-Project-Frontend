import apiClient from '@/service/AxiosClient.js'
export default {
  getDoctors(page, perPage) {
    return apiClient.get('/doctor?_page=' + page + '&_limit=' + perPage)
  }
}
