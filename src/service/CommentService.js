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
  addComment(id, comment) {
    return apiClient.post('/comment/people/' + id, comment)
  }
}
