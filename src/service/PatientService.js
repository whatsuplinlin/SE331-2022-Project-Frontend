import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/whatsuplinlin/covid19-vaccination',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPatients(page, perPage) {
    return apiClient.get('/people?_page=' + page + '&_limit=' + perPage)
  },
  getPatient(id) {
    return apiClient.get('/people/' + id)
  },
  getVaccine(id) {
    return apiClient.get('/vaccine/' + id)
  }
}
