import router from '@/router'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
apiClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (401 === error.response.status) {
      router.push('/login')
      return Promise.resolve(error.response)
    } else {
      return Promise.reject(error)
    }
  }
)
export default apiClient
