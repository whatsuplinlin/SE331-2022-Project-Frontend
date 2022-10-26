// import axios from 'axios'
import apiClient from '@/service/AxiosClient.js'
// const apiClient = axios.create({
//   baseURL: 'http://localhost:8080',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

export default {
  getPatients(page, perPage) {
    return apiClient.get('/people?_page=' + page + '&_limit=' + perPage)
  },
  getPatient(id) {
    return apiClient.get('/people/' + id)
  },
  getVaccine(id) {
    return apiClient.get('/vaccine/' + id)
  },
  getComment(id) {
    return apiClient.get('people/' + id + '/comment')
  },
  uploadFile(file) {
    let formData = new FormData()
    formData.append('file', file)
    return apiClient.post('/uploadFile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
