<template>
  <h1>Patient List</h1>
  <div class="col-12">
    <table>
      <tr>
        <th></th>
        <th>Name</th>
        <th>VACCINATION STATUS</th>
      </tr>
      <tr
        @click="details(patient.id)"
        v-for="patient in doctorPatient"
        :key="patient.id"
        :patient="patient"
        class="clicking"
      >
        <td><img :src="patient.image" class="image" /></td>
        <td>{{ patient.name }} {{ patient.surname }}</td>
        <td>{{ patient.status }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import DoctorService from '@/service/DoctorService'
import GStore from '@/store'
export default {
  inject: ['GStore'],
  name: 'PatientView',
  methods: {
    details(id) {
      this.$router.push({
        name: 'PatientDetailView',
        params: { id: id }
      })
    }
  },
  data() {
    return {
      doctorPatient: null
    }
  },
  /* eslint-disable-next-line no-unused-vars */
  beforeRouteEnter(routeTo, routeFrom, next) {
    DoctorService.getDoctorPatient(GStore.currentUser.id)
      .then((response) => {
        next((comp) => {
          comp.doctorPatient = response.data
        })
      })

      .catch(() => {
        next({ name: 'NetWorkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    DoctorService.getDoctorPatient(GStore.currentUser.id)
      .then((response) => {
        this.doctorPatient = response.data
        next()
      })
      .catch(() => {
        next({ name: 'NetWorkError' })
      })
  }
}
</script>
<style scoped>
.image {
  width: 90px;
  height: 120px;
  border-radius: 4px;
}

#pagination {
  margin: auto;
  font-size: 70px;
}

#pagination a {
  text-decoration: none;
  color: #2c3e50;
}

.clicking:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

table {
  margin: auto;
  margin-top: 50px;
}

th {
  background: #161240;
  color: #eff9fe;
  font-weight: 100;
  text-align: center;
}

table,
th,
td {
  padding: 10px;
}

tr {
  border-top: 1px solid #161240;
  background: #eff9fe;
}
</style>
