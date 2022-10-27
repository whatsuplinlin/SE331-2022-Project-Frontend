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
      <h1>Doctor List</h1>
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Lastname</th>
        </tr>
        <tr
          v-for="doctor in doctors"
          :key="doctor.id"
          :doctor="doctor"
          class="clicking"
        >
          <td><img :src="doctor.image" class="image" /></td>
          <td>{{ doctor.name }}</td>
          <td>{{ doctor.surname }}</td>
          <!-- <td>{{ user.email }}</td> -->
          <!-- <td>{{ user.authorities }}</td> -->
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
        →
      </router-link>
    </div>
  </div>
</template>

<script>
import DoctorService from '../service/DoctorService.js'
export default {
  name: 'DoctorView',
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
      doctors: null,
      totalDoctors: 0
    }
  },
  /* eslint-disable-next-line no-unused-vars */
  beforeRouteEnter(routeTo, routeFrom, next) {
    DoctorService.getDoctors(
      parseInt(routeTo.query.page) || 1,
      parseInt(routeTo.query.perPage) || 4
    )
      .then((response) => {
        next((comp) => {
          comp.doctors = response.data
          comp.totalDoctors = response.headers['x-total-count']
        })
      })

      .catch(() => {
        next({ name: 'NetWorkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    DoctorService.getDoctors(
      parseInt(routeTo.query.page) || 1,
      parseInt(routeTo.query.perPage) || 4
    )
      .then((response) => {
        this.doctors = response.data
        this.totalDoctors = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetWorkError' })
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalDoctors / this.perPage)
      return this.page < totalPages
    }
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
