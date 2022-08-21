<template>
  <div class="comment-container">
    <h4>Doctor Comment</h4>
    <div
      id="comment"
      v-for="commentHistory in commentsHistory.comment"
      :key="commentHistory"
    >
      <p>-----------------------------------</p>
      <p>
        Patient: {{ commentHistory.patient_name }}
        {{ commentHistory.patient_surname }}
      </p>
      <p>Doctor: {{ commentHistory.name }}</p>
      <p>Date: {{ commentHistory.date }}</p>
      <p>Comment: {{ commentHistory.comment }}</p>
    </div>
    <div id="comment" v-for="(comment, index) in comments" :key="index">
      <p>-----------------------------------</p>
      <p>Patient: {{ comment.patient_name }} {{ comment.patient_surname }}</p>
      <p>Doctor: {{ comment.name }}</p>
      <p>Date: {{ comment.date }}</p>
      <p>Comment: {{ comment.comment }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['comments', 'commentsHistory']
}
</script>
