import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/whatsuplinlin/covid19-doctor-comment-history',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCommentHistory(id) {
    return apiClient.get('/comHistory/' + id)
  }
}
