import apiClient from '@/service/AxiosClient.js'
export default {
  getUsers(page, perPage) {
    return apiClient.get('/user?_page=' + page + '&_limit=' + perPage)
  },
  getUser(id) {
    return apiClient.get('/user/' + id)
  },
  setDoctorToUser(doctor) {
    return apiClient.post('/setDoctorToUser', doctor)
  }
}
