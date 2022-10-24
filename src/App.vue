<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <div class="title">
    <h1>🏥 COVID-19 VACCINATION 💉</h1>
    <div id="nav">
      <nav class="navbar navbar-expand">
        <ul v-if="!GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
              <font-awesome-icon icon="user-plus" /> Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" /> Login
            </router-link>
          </li>
        </ul>
        <ul v-if="GStore.currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ GStore.currentUser.name }}
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout">
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
  padding: 40px;
  background: #eff9fe;
}

@import '~bootstrap/dist/css/bootstrap.css';
</style>
