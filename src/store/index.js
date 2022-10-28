import { reactive } from 'vue'

export default reactive({
  flashMessage: '',
  comments: [],
  patient: null,
  currentUser: JSON.parse(localStorage.getItem('user')),
  doctor: null,
  user: null
})
