<template>
  <form class="comment-form" @submit.prevent="onSubmit">
    <label for="name">Doctor Name:</label>
    <input id="name" v-model="name" />

    <label for="date">Date:</label>
    <input id="date" v-model="date" />

    <label for="comment">Comment:</label>
    <textarea id="comment" v-model="comment"></textarea>

    <input class="button" type="submit" value="Submit" />
  </form>
</template>
<script>
import GStore from '@/store'
export default {
  inject: ['GStore'],
  data() {
    return {
      patient_id: '',
      patient_name: '',
      patient_surname: '',
      name: '',
      comment: '',
      date: null
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.comment === '' || this.date === null) {
        alert('Comment incomplete. Please fill out every field.')
        return
      }
      let doctorComment = {
        patient_id: GStore.patient.id,
        patient_name: GStore.patient.name,
        patient_surname: GStore.patient.surname,
        name: this.name,
        comment: this.comment,
        date: this.date
      }
      this.$emit('comment-submited', doctorComment)
      this.patient_id = ''
      this.patient_name = ''
      this.patient_surname = ''
      this.name = ''
      this.comment = ''
      this.date = null
    }
  }
}
</script>
