<template>
  <div class="row">
    <div class="col-12">
      <CommentForm @comment-submited="addComment" />
    </div>
  </div>
</template>
<script>
import CommentForm from '@/components/CommentForm.vue'
//import AuthService from '@/service/AuthService'
import GStore from '@/store'
import CommentService from '@/service/CommentService.js'
export default {
  inject: ['GStore'],
  components: {
    CommentForm
  },
  data() {
    return {
      newComment: null
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
    }
  }
}
</script>
