<template>
  <div class="row">
    <div v-if="isDoctor" class="col">
      <CommentForm @comment-submited="addComment" />
    </div>
    <div v-if="isAdmin" class="col">
      <VaccineForm @comment-submited="addVaccine" />
    </div>
  </div>
</template>
<script>
import CommentForm from '@/components/CommentForm.vue'
import VaccineForm from '@/components/VaccineForm.vue'
import AuthService from '@/service/AuthService'
import VaccineService from '@/service/VaccineService.js'
import GStore from '@/store'
import CommentService from '@/service/CommentService.js'
export default {
  inject: ['GStore'],
  components: {
    CommentForm,
    VaccineForm
  },
  data() {
    return {
      newComment: null,
      nweVaccine: null
    }
  },
  methods: {
    addComment(comment) {
      console.log(comment)
      GStore.comments.push(comment)
      // GStore.patient.doctorRec = GStore.comments.filter(
      //   (patient) => GStore.patient.id == patient.patient_id
      // )
      CommentService.addComment(GStore.patient.id, comment)
    },
    addVaccine(vaccine) {
      VaccineService.addVaccine(GStore.patient.id, vaccine)
    }
  },
  computed: {
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    },
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    }
  }
}
</script>
