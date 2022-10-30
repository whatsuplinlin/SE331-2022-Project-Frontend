<template>
  <div class="box">
    <img :src="patient.image" class="image" />
    <h4>Name: {{ patient.name }} {{ patient.surname }}</h4>
    <p>Age: {{ patient.age }}</p>
    <p>Gender: {{ patient.gender }}</p>
    <p>Hometown: {{ patient.hometown }}</p>
    <div class="row">
      <form class="col" v-if="isAdmin">
        <BaseSelect :options="GStore.doctor" v-model="doctorSet.doctor.id" label="Select a Doctor" />
      </form>
      <button v-if="isAdmin" class="col addDoctor" @click="change">Add doctor</button>
    </div>
  </div>
</template>
<script>
import UserService from '@/service/UserService'
import GStore from '@/store'
import AuthService from '@/service/AuthService'
export default {
  props: ['patient'],
  inject: ['GStore'],
  data() {
    return {
      doctorSet: {
        id: GStore.patient.id,
        doctor: { id: '', name: '' }
      }
    }
  },
  methods: {
    change() {
      UserService.setDoctorToUser(this.doctorSet)
        .then(() => {
          this.GStore.flashMessage = 'The doctor is being added '
          setTimeout(() => {
            this.GStore.flashMessage = ''
          }, 3500)
          console.log('Pass')
        })
        .catch(() => {
          console.log('FAIL')
        })
    }
  },
  computed: {
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
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

.addDoctor {
  width: 150px;
  height: 35px;
  margin: 10px;
  background-color: #161240;
  border: none;
  color: white;
  border-radius: 10px;
}
</style>
