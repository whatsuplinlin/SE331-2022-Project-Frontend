import apiClient from '@/service/AxiosClient.js'
export default {
  addComment(id, comment) {
    return apiClient.post('/comment/people/' + id, comment)
  }
}
