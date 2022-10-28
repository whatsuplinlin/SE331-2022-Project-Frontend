import apiClient from '@/service/AxiosClient.js'
export default {
  addVaccine(id, vaccine) {
    return apiClient.post('/vaccine/people/' + id, vaccine)
  }
}
