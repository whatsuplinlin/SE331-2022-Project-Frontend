<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <div class="title">
    <h1>🏥 COVID-19 VACCINATION 💉</h1>
    <div id="nav">
      <nav class="navbar navbar-expand">
        <span v-if="isAdmin">
          <div class="row">
            <router-link class="col" id="col" :to="{ name: 'home' }">
              <font-awesome-icon icon="fa-hospital-user" /> PATIENT
            </router-link>
            <router-link class="col" id="col" :to="{ name: 'user' }">
              <font-awesome-icon icon="users" /> USER
            </router-link>
            <router-link class="col" id="col" :to="{ name: 'doctor' }">
              <font-awesome-icon icon="fa-user-doctor" /> DOCTOR
            </router-link>
          </div>
        </span>
        <span v-if="isDoctor">
          <div class="row">
            <router-link class="col" id="col" :to="{ name: 'home' }">
              <font-awesome-icon icon="fa-hospital-user" /> PATIENT
            </router-link>
            <router-link class="col" id="col" :to="{ name: 'DoctorPatient' }">
              <font-awesome-icon icon="fa-user-lock" /> ASSIGNED
            </router-link>
          </div>
        </span>
        <ul v-if="!GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link id="col" to="/register" class="nav-link">
              <font-awesome-icon icon="user-plus" /> Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="col" to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" /> Login
            </router-link>
          </li>
        </ul>
        <ul v-if="GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link id="col" to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ GStore.currentUser.name }}
            </router-link>
          </li>
          <li class="nav-item">
            <a id="col" class="nav-link" @click="logout">
              <font-awesome-icon icon="sign-out-alt" /> Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <router-view />
</template>

<script>
import AuthService from '@/service/AuthService.js'
export default {
  inject: ['GStore'],
  computed: {
    currentUser() {
      return localStorage.getItem('user')
    },
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    },
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    }
  },
  methods: {
    logout() {
      AuthService.logout()
      this.$router.push({
        name: 'Login',
      })
    }
  }
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@keyframes fade {
  from {
    background: #f9ffc2;
  }

  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: fade;
  animation-duration: 5s;
}

body {
  background: #7da1d4;
}

.title {
  background: #eff9fe;
}

h1 {
  padding-top: 40px;
}

.navbar {
  background: #d8f2ff;
  padding: 10px;
  margin: 40px 0 0;
}

#col {
  width: 140px;
  color: #161240;
}

#col:hover {
  text-decoration: none;
  color: white;
}

h2 {
  padding-top: 50px;
}

@import '~bootstrap/dist/css/bootstrap.css';
</style>