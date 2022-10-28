import apiClient from '@/service/AxiosClient.js'
export default {
  getDoctors(page, perPage) {
    return apiClient.get('/doctor?_page=' + page + '&_limit=' + perPage)
  },
  getDoctor(id) {
    return apiClient.get('/doctor/' + id)
  },
  getAllDoctor() {
    return apiClient.get('/doctors')
  },
  getDoctorPatient(id) {
    return apiClient.get('/doctor/' + id + '/patient')
  }
}
