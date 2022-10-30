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
            <div class="col" id="col">
              <router-link id="list" :to="{ name: 'home' }">PATIENT LIST</router-link>
            </div>
            <div class="col" id="col">
              <router-link id="list" :to="{ name: 'user' }">USER LIST</router-link>
            </div>
            <div class="col" id="col">
              <router-link id="list" :to="{ name: 'doctor' }">DOCTOR LIST</router-link>
            </div>
          </div>
        </span>
        <span v-if="isDoctor">
          <div class="row">
            <div class="col" id="col">
              <router-link id="list" :to="{ name: 'home' }">PATIENT LIST</router-link>
            </div>
            <div class="col" id="col">
              <router-link id="list" :to="{ name: 'DoctorPatient' }">YOUR PATIENT</router-link>
            </div>
          </div>
        </span>
        <ul v-if="!GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link id="list" to="/register" class="nav-link">
              <font-awesome-icon icon="user-plus" /> Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="list" to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" /> Login
            </router-link>
          </li>
        </ul>
        <ul v-if="GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link id="list" to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ GStore.currentUser.name }}
            </router-link>
          </li>
          <li class="nav-item">
            <a id="list" class="nav-link" @click="logout">
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
      this.$router.go()
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

#list {
  color: #161240;
}

#col {
  width: 150px;
  border-right: 1px solid white;
}

h2 {
  padding-top: 50px;
}

@import '~bootstrap/dist/css/bootstrap.css';
</style>