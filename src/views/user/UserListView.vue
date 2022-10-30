<template>
  <div class="row" id="home">
    <div class="col-3" id="pagination">
      <router-link
        :to="{
          name: 'user',
          query: { page: page - 1 }
        }"
        rel="prev"
        v-if="page != 1"
      >
        ←
      </router-link>
    </div>
    <div class="col-6">
      <h2>USER LIST</h2>
      <table>
        <tr>
          <th></th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
        </tr>
        <tr
          @click="details(user.id)"
          v-for="user in users"
          :key="user.id"
          :user="user"
          class="clicking"
        >
          <td><img :src="user.image" class="image" /></td>
          <td>{{ user.firstname }} {{ user.lastname }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <!-- <td>{{ user.authorities }}</td> -->
        </tr>
      </table>
    </div>
    <div class="col-3" id="pagination">
      <router-link
        :to="{
          name: 'user',
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
import UserService from '@/service/UserService.js'
export default {
  name: 'UserView',
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
      console.log(id)
      this.$router.push({
        name: 'ChangeRole',
        params: { id: id }
      })
    }
  },
  data() {
    return {
      users: null,
      totalUsers: 0
    }
  },
  /* eslint-disable-next-line no-unused-vars */
  beforeRouteEnter(routeTo, routeFrom, next) {
    UserService.getUsers(
      parseInt(routeTo.query.page) || 1,
      parseInt(routeTo.query.perPage) || 4
    )
      .then((response) => {
        next((comp) => {
          comp.users = response.data
          comp.totalUsers = response.headers['x-total-count']
        })
      })

      .catch(() => {
        next({ name: 'NetWorkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    UserService.getUsers(
      parseInt(routeTo.query.page) || 1,
      parseInt(routeTo.query.perPage) || 4
    )
      .then((response) => {
        this.users = response.data
        this.totalUsers = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetWorkError' })
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalUsers / this.perPage)
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
