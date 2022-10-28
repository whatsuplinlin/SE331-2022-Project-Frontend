<template>
  <h1>{{ GStore.doctor.name }} {{ GStore.doctor.surname }}</h1>
  <div class="box">
    <img :src="GStore.doctor.image" class="image" />
    <h4>Name: {{ GStore.doctor.name }} {{ GStore.doctor.surname }}</h4>
    <p>Gender: {{ GStore.doctor.gender }}</p>
    <p>Age: {{ GStore.doctor.age }}</p>
    <p>Home town: {{ GStore.doctor.hometown }}</p>
  </div>
</template>
<script>
//import AuthService from '@/service/AuthService'
//import GStore from '@/store'
export default {
  inject: ['GStore']
}
</script>
<style scoped>
.box {
  width: 500px;
  padding: 10px;
  margin: auto;
  margin-top: 60px;
  border-radius: 10px;
  background: #eff9fe;
}

.image {
  width: 200px;
  height: 260px;
  margin: 20px 0;
  border-radius: 15px;
}

h4 {
  padding-bottom: 10px;
}
</style>
