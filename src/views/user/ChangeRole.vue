<template>
  <h1>Change role to patient</h1>
  <div class="box">
    <img :src="GStore.user.image" class="image" />
    <h4>Name: {{ GStore.user.firstname }} {{ GStore.user.lastname }}</h4>
    <p>Age: {{ GStore.user.age }}</p>
    <p>Gender: {{ GStore.user.gender }}</p>
    <p>Hometown: {{ GStore.user.hometown }}</p>
    <button @click="change">Change</button>
  </div>
</template>
<script>
import AuthService from '@/service/AuthService'
import GStore from '@/store'
export default {
  inject: ['GStore'],
  data() {
    return {
      userData: {
        id: GStore.user.id,
        name: GStore.user.firstname,
        surname: GStore.user.lastname,
        image: GStore.user.image,
        age: GStore.user.age,
        hometown: GStore.user.hometown
      }
    }
  },
  methods: {
    change() {
      console.log(this.userData)
      AuthService.changeRole(this.userData)
        .then(() => {
          this.$router.push({ path: '/home' })
        })
        .catch(() => {
          console.log('FAIL')
        })
    }
  }
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
