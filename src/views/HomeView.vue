<template>
  <div class="row" id="home">
    <div class="col-3" id="pagination">
      <router-link
        :to="{
          name: 'home',
          query: { page: page - 1 }
        }"
        rel="prev"
        v-if="page != 1"
      >
        ←
      </router-link>
    </div>
    <div class="col-6">
      <table>
        <tr>
          <th></th>
          <th>NAME</th>
          <th>VACCINATION STATUS</th>
        </tr>
        <tr
          @click="details(patient.id)"
          v-for="patient in patients"
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
    <div class="col-3" id="pagination">
      <router-link
        :to="{
          name: 'home',
          query: { page: page + 1 }
        }"
        rel="next"
        v-if="hasNextPage"
      >
        →</router-link
      >
    </div>
  </div>
</template>

<script>
import PatientService from '../service/PatientService.js'
export default {
  name: 'PatientView',
  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  },
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
      patients: null,
      totalPatients: 0
    }
  },
  /* eslint-disable-next-line no-unused-vars */
  beforeRouteEnter(routeTo, routeFrom, next) {
    PatientService.getPatients(
      parseInt(routeTo.query.page) || 1,
      parseInt(routeTo.query.perPage) || 4
    )
      .then((response) => {
        next((comp) => {
          comp.patients = response.data
          comp.totalPatients = response.headers['x-total-count']
        })
      })

      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    PatientService.getPatients(
      parseInt(routeTo.query.page) || 1,
      parseInt(routeTo.query.perPage) || 4
    )
      .then((response) => {
        this.patients = response.data
        this.totalPatients = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalPatients / this.perPage)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.image {
  width: 90px;
  height: 120px;
}
</style>
