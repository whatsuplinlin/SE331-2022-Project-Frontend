<template>
  <div v-if="GStore.patient">
    <div id="navbar">
      <div class="row">
        <div v-if="isDoctor" class="col">
          <router-link to="/home">HOME</router-link>
        </div>
        <div class="col" id="border">
          <router-link :to="{ name: 'PatientDetailView' }"
            >PERSONAL INFORMATION</router-link
          >
        </div>
        <div class="col" id="border">
          <router-link :to="{ name: 'VaccineDetail' }"
            >VACCINATION INFORMATION</router-link
          >
        </div>
        <div class="col" id="border">
          <router-link :to="{ name: 'DoctorComment' }"
            >DOCTOR COMMENT</router-link
          >
        </div>
        <div v-if="isDoctor" class="col" id="border">
          <router-link :to="{ name: 'AddDoctorComment' }"
            >ADD COMMENT</router-link
          >
        </div>
      </div>
    </div>
    <router-view :patient="GStore.patient" />
  </div>
</template>
<script>
import AuthService from '@/service/AuthService'
export default {
  inject: ['GStore'],
  computed: {
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    }
  }
}
</script>
<style scoped>
#navbar {
  background: #161240;
  padding: 10px;
}

#navbar a {
  color: #eff9fe;
}

#border {
  border-left: solid white 1px;
}
</style>
