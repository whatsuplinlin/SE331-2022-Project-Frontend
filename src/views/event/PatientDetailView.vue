<template>
  <div class="box">
    <img :src="patient.image" class="image" />
    <h4>Name: {{ patient.name }} {{ patient.surname }}</h4>
    <p>Age: {{ patient.age }}</p>
    <p>Gender: {{ patient.gender }}</p>
    <p>Hometown: {{ patient.hometown }}</p>
  </div>
</template>
<script>
export default {
  props: ['patient']
}
</script>
